import {handleActions} from "redux-actions";

const INITIAL_STATE = { posts: [] }

function get_post_success(action) {
    return { posts : action.posts}
}

const reducer = handleActions(
    { get_post_success },
    INITIAL_STATE
)

export default reducer