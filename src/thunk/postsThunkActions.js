import {postsServices} from "../service/postsService";

export const loadPosts = () => dispatch => {
    postsServices.getPosts()
        .then(
            resp => {
                let allData = resp.data
                let payload = {data: allData}
                dispatch({ type: 'get_post_success', payload})
            },
            error => {
                let data = error.message
                dispatch({ type: 'http_error', data })
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
                let data = error.message
                dispatch({ type: 'http_error', data })
            }
        )
};