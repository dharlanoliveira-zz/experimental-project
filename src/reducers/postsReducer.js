import {handleActions} from "redux-actions";
import _ from 'lodash'

const INITIAL_STATE = []

function new_post(posts, {description}) {
    const biggestId = _.maxBy(posts, (p) => p.id)
    return posts.concat({id: biggestId + 1, description: description})
}

const reducer = handleActions(
    { new_post },
    INITIAL_STATE
)

export default reducer