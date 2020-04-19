import axios from "axios";

const SERVER_URL = 'http://localhost:4000'
export const POSTS_URL = `${SERVER_URL}/posts`
export const CLEAR_POST_URL = `${SERVER_URL}/posts/clear`
export const POST_LANGUAGUE_URL = `${SERVER_URL}/posts/language`
export const NEW_POST_URL = `${SERVER_URL}/posts`

function getPosts(){
    return axios.get(POSTS_URL)
}

function getPostLanguage(description){
    return axios.post(POST_LANGUAGUE_URL, {
        description: description
    })
}

function clearPosts(){
    return axios.post(CLEAR_POST_URL)
}

function newPost(description, language){
    return axios.post(NEW_POST_URL, {
        description: description,
        language: language
    })
}

export const postsServices = {
    getPosts: getPosts,
    newPost: newPost,
    getPostLanguage: getPostLanguage,
    clearPosts: clearPosts
}