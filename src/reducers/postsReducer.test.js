import {handleActions} from "redux-actions";
import reducer from "./postsReducer";

describe('posts reducer', () => {
    it('should get_post_success return posts', () => {
        const payload = { data: [
                { description: "Hello World", language: "en" }
            ]}
        const get_post_success = {
            type: "get_post_success",
            payload
        };


        expect(reducer({},get_post_success)).toEqual({
            posts: [
                { description: "Hello World", language: "en" }
            ]
        })
    })

    it('should clear_post_success return empty posts', () => {
        const clear_post_success = {
            type: "clear_post_success"
        };


        expect(reducer({},clear_post_success)).toEqual({
            posts: []
        })
    })
})
