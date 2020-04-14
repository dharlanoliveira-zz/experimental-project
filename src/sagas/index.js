import {all, put} from "redux-saga/effects";
import {posts} from "../actions/postsActions";

/*export function* newPostSaga(description) {
    yield put(posts.newPost(description))
}*/

export default function* rootSaga() {
    yield all([]);
}