import {call, put} from "redux-saga/effects";
import {postsServices} from "../service/postsService";
import {clearPostsSaga, getPostsSaga} from "./postsSagaActions";
import * as assert from "assert";

describe('posts saga actions', () => {


    it('should clear posts saga return clear_post_success when sucess', () => {
        const postsGenerator = clearPostsSaga()
        assert.deepEqual(postsGenerator.next().value, call(postsServices.clearPosts))
        assert.deepEqual(postsGenerator.next().value, put({type: 'clear_post_success'}))
    })

    it('should clear posts saga return http_error when error', () => {
        const postsGenerator = clearPostsSaga()
        assert.deepEqual(postsGenerator.next().value, call(postsServices.clearPosts))
        assert.deepEqual(postsGenerator.throw('error').value, put({type: 'http_error', payload: 'error'}))
    })


    it('should get posts saga return clear_post_success when sucess', () => {
        const postsGenerator = getPostsSaga()
        assert.deepEqual(postsGenerator.next().value, call(postsServices.getPosts))
        assert.deepEqual(postsGenerator.next().value, put({type: 'get_post_success', payload: undefined}))
    })

    it('should get posts saga return http_error when sucess', () => {
        const postsGenerator = getPostsSaga()
        assert.deepEqual(postsGenerator.next().value, call(postsServices.getPosts))
        assert.deepEqual(postsGenerator.throw('error').value, put({type: 'http_error', payload: 'error'}))
    })

})
