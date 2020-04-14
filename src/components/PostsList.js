import React, {useRef} from "react";
import { useDispatch, useSelector } from 'react-redux';
import _ from "lodash"
import {posts as postsActions} from "../actions/postsActions";

function PostsList() {

    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts);

    const postDescriptionInput = useRef();

    function renderNoPosts(){
        return (
            <h3>Don't exist any post</h3>
        )
    }

    function renderAllPosts(posts){
        return (
            <div>
                <ul>
                    {posts.map(renderPost)}
                </ul>
            </div>
        )
    }

    function renderPost(post){
        return (
            <li key={post.id}>{post.description}</li>
        )
    }

    function handleAddPost() {
        const postDescription = postDescriptionInput.current.value
        dispatch(postsActions.newPost(postDescription))
        postDescriptionInput.current.value = ""
    }
    
    return (
        <div style={{width: "200px"}}>
            { posts.length > 0 && renderAllPosts(posts)}
            { _.isEmpty(posts) > 0 && renderNoPosts()}

            <input ref={postDescriptionInput} type="text" name="description"/>
            <button id="adicionarPost" onClick={() => handleAddPost()}>Add post</button>
        </div>
    )
}

export {PostsList}