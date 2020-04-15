import {handleActions} from "redux-actions";
import reducer from "./postsReducer";

describe('posts redux', () => {
    it('should get_post_success return posts', () => {
        const payload = { data: [
                { description: "Hello World", language: "en" }
            ]}
        const getPostsAction = {
            type: "get_post_success",
            payload
        };


        expect(reducer({},getPostsAction)).toEqual({
            posts: [
                { description: "Hello World", language: "en" }
            ]
        })
    })

    it('should clear_post_success return empty posts', () => {
        const getPostsAction = {
            type: "clear_post_success"
        };


        expect(reducer({},getPostsAction)).toEqual({
            posts: []
        })
    })
})
