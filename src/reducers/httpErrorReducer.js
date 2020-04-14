import {handleActions} from "redux-actions";

const INITIAL_STATE = { current: null }

function http_error(_, action) {
    console.log(action)
    return { current: action}
}

const reducer = handleActions(
    { http_error },
    INITIAL_STATE
)

export default reducer
