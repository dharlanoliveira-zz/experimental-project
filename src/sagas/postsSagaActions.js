import {call, put} from "redux-saga/effects";
import {postsServices} from "../service/postsService";

export function* getPostsSaga() {
    try {
        let posts = yield call(postsServices.getPosts)
        yield put({type: 'get_post_success', payload: posts});
    } catch (error) {
        yield put({type: 'http_error', payload: error});
    }
}

export function* newPostSaga(action) {
    try {
        yield call(postsServices.newPost, action.description)
        yield put({type: 'new_post_success'});
        yield put({type: 'get_posts'});
    } catch (error) {
        yield put({type: 'http_error', payload: error});
    }
}