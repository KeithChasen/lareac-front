import { POST_DELETED, POST_CREATED, POST_FETCHED } from './types';
import {API_BASE_URL} from "../config/config";
import history from '../history'

import axios from 'axios'

export const postsFetched = (posts) => {
    return {
        type: POST_FETCHED,
        posts: posts
    }
};

export const postDeleted = (id) => {
    return {
        type: POST_DELETED,
        id
    }
}

export const postCreated = (post) => {
    return {
        type: POST_CREATED,
        post: post
    }
}

export const deletePost = id => dispatch => {

    fetch(API_BASE_URL + '/post/' + id, {
            method: 'DELETE',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            })
        })
            .then(response => response.json())
            .then(() => {
                dispatch(postDeleted(id))
            })
            .catch(err => {
                console.log(err)
            })
}

export const createPost = post => dispatch => {

    axios.post(API_BASE_URL + '/post/', {
        title: post.title,
        body: post.body,
    })
        .then(r => {
            post.id = r.data.id
            dispatch(postCreated(post))
            history.push('/')
        })

        .catch(err => {
            console.log(err)
        })
}

export const fetchAllPosts =  () => {
    return (dispatch) => {

        axios.get(API_BASE_URL + '/posts')
            .then(r => {
                return dispatch(postsFetched(r.data))
            })
            .catch(error => {
                throw(error);
            });
    };

};
