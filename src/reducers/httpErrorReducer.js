import {handleActions} from "redux-actions";

const INITIAL_STATE = { current: null }

function http_error(_, {payload}) {
    return { error : payload}
}

const reducer = handleActions(
    { http_error },
    INITIAL_STATE
)

export default reducer
