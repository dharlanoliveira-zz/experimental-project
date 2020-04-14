import {AxiosInstance as axios} from "axios";

function getPosts(){
    return axios.get('http://localhost:4000/posts')
}

function newPost(description){
    // noinspection JSUnresolvedFunction
    return axios.post('http://localhost:4000/posts', {
        description: description
    })
}

export const postsServices = {
    getPosts: getPosts,
    newPost: newPost
}