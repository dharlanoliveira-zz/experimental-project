import {takeEvery} from "redux-saga/effects";
import {clearPostsSaga, getPostsSaga, newPostSaga} from "./postsSagaActions";

export default function* rootSaga() {
    yield takeEvery('new_post', newPostSaga)
    yield takeEvery('get_posts', getPostsSaga)
    yield takeEvery('clear_posts', clearPostsSaga)
}