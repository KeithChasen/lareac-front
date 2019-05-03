import { POST_DELETED, POST_CREATED, POST_FETCHED } from './types';
import {API_BASE_URL} from "../config/config";
import history from '../history'

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
    let headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    fetch(API_BASE_URL + '/post/' + id, {
            method: 'DELETE',
            headers: headers,
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

    let headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    fetch(API_BASE_URL + '/post', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            title: post.title,
        })
    })
        .then(response => response.json())
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











