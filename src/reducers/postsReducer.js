import {handleActions} from "redux-actions";


const INITIAL_STATE = {posts: []}

function get_post_success(_, {payload: {data}}) {
    console.log("Reducing")
    return { posts : data}
}

function clear_post_success(){
    return { posts: []}
}

const reducer = handleActions(
    {get_post_success, clear_post_success},
    INITIAL_STATE
)

export default reducer