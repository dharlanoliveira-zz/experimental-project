import {takeEvery, call, put} from "redux-saga/effects";
import {postsServices} from "../service/postsService";
import {getPostsSaga, newPostSaga} from "./postsSagaActions";

export default function* rootSaga() {
    yield takeEvery('new_post', newPostSaga)
    yield takeEvery('get_posts', getPostsSaga)
}