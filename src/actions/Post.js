import {API_BASE_URL} from "../config/config";

export const addPost = post => async dispatch => {
    const response = await fetch(API_BASE_URL + '/post', {
        method: 'POST',
        body: JSON.stringify({title: post.title, content: post.content})
    })

    dispatch({
        type: 'ADD_POST',
        posts: response.data
    })

}

export const getPosts = () => async dispatch => {

    console.log(123)

    const response = await fetch(API_BASE_URL + '/posts')

    dispatch({
        type: 'GET_POST',
        posts: response.data
    })
}

export const deletePost = post => async dispatch => {
    const response = await fetch(API_BASE_URL + '/post/delete/' + post.id)

    dispatch({
        type: 'DELETE_POST',
        posts: response.data
    })
}

export const changePost = post => {
    return {
        type: 'CHANGE_POST',
        post: post
    }
}