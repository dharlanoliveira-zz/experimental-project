import axios from "axios";

function getPosts(){
    return axios.get('http://localhost:4000/posts')
}

function getPostLanguage(description){
    return axios.post('http://localhost:4000/posts/language', {
        description: description
    })
}

function clearPosts(){
    return axios.post('http://localhost:4000/posts/clear')
}

function newPost(description, language){
    return axios.post('http://localhost:4000/posts', {
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