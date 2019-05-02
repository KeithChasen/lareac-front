import { getPosts, addPost, deletePost, changePost} from '../api'
import { ADD_POST, DELETE_POST, POST_CREATED, POST_FETCHED } from './types';
import {API_BASE_URL} from "../config/config";
import history from '../history'

export const postsFetched = (posts) => {
    return {
        type: POST_FETCHED,
        posts: posts
    }
};

export const postCreated = (post) => {
    return {
        type: POST_CREATED,
        post: post
    }
}

export const createPost = (post) => {
    let headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    return fetch(API_BASE_URL + '/post', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            title: post.title,
        })
    })
        .then(response => {
            return response
        })
        .then(res => {
            return res.json()
        })
        .then(r => {
            history.push('/')
        })
        .catch(err => {
            console.log(err)
        })
}

export const fetchAllPosts =  () => {
    return (dispatch) => {

        fetch(API_BASE_URL + '/posts')
            .then(response => {
                return response

            }).then(res => {
                return res.json()
            })
            .then(r => {
                return dispatch(postsFetched(r))
            })
            .catch(error => {
                throw(error);
            });
    };

};











