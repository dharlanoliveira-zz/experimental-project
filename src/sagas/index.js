import {takeEvery, put} from "redux-saga/effects";
import {postsServices} from "../service/PostsService";

export function* getPostsSaga() {
    yield take('GET_POSTS');
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

export default function* rootSaga() {
    yield takeEvery('new_post', newPostSaga)
    yield takeEvery('get_posts', getPostsSaga)
}