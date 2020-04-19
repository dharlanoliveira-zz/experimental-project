import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {postsActions} from "../actions/postsActions";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {ItemsList} from "./ItemsList"
import _ from "lodash"


function PostsList() {

    const [description,setDescription] = useState("")
    const dispatch = useDispatch()
    const posts = useSelector(state => {
        console.log("printing state")
        console.log(state)
        return state.posts.posts
    })

    useEffect(() => {
        dispatch(postsActions.getPosts())
    }, [])

    function renderNoPostsContent() {
        return (
            <>
                Don't exist any post
            </>
        )
    }

    function renderPostContent(post) {
        return (
            <>
                {post.description} - {post.language}
            </>
        )
    }

    function handleAddPost() {
        dispatch(postsActions.newPost(description))
        setDescription("")
    }

    function handleClearPost() {
        dispatch(postsActions.clearPosts())
        setDescription("")
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={12}>
                    <ItemsList items={posts} emptyListRender={renderNoPostsContent}
                               listItemRender={renderPostContent}/>
            </Grid>

            <Grid item xs={12} md={12} lg={12}>
                <TextField type="text" name="description"
                           datatest-id="novoPost" aria-labelledby="novoPost"
                           label="Novo Post" value={description}
                           onChange={(event) => {
                                let { target: { value } } = event
                                setDescription(value)
                           }}/>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
                <Button id="adicionarPost" onClick={() => handleAddPost()} variant="contained" color="primary" aria-label="">
                    Add Post
                </Button>
                <Button id="adicionarPost"
                        onClick={() => handleClearPost()} variant="contained" color="primary"
                        disabled={_.isEmpty(posts)}>
                    Clear posts
                </Button>
            </Grid>
        </Grid>
    )
}

export {PostsList}