import {postsServices} from "../service/postsService";

export const loadPosts = () => dispatch => {
    postsServices.getPosts()
        .then(
            resp => {
                dispatch({ type: 'get_post_success', payload: {data: resp.data}})
            },
            error => {
                dispatch({ type: 'http_error', data: error.message })
            }
        )
};

export const newPost = (description) => dispatch => {
    postsServices.newPost(description)
        .then(
            resp => {
                dispatch({ type: 'new_post_success'})
                dispatch(loadPosts())
            },
            error => {
                dispatch({ type: 'http_error', data: error.message })
            }
        )
};