import {handleActions} from "redux-actions";

const INITIAL_STATE = { posts: [] }

function get_post_success(action, {payload: {data}}) {
    return { posts : data}
}

const reducer = handleActions(
    { get_post_success },
    INITIAL_STATE
)

export default reducer