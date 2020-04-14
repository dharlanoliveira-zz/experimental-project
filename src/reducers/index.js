import {combineReducers} from "redux";
import posts from "./postsReducer"
import httpError from "./httpErrorReducer"

export default combineReducers({
    posts,
    httpError
})