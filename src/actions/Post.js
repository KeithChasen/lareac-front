import { getPosts, addPost, deletePost, changePost} from '../api'
import { ADD_POST, DELETE_POST, FETCH_POST } from './types';
import {API_BASE_URL} from "../config/config";


export const fetchPosts = (posts) => {
    return {
        type: FETCH_POST,
        posts: posts
    }
};

export const fetchAllPosts =  () => {
    return (dispatch) => {

        fetch(API_BASE_URL + '/posts')
            .then(response => {
                return response

            }).then(res => {
                return res.json()
            })
            .then(r => {
                return dispatch(fetchPosts(r))
            })
            .catch(error => {
                throw(error);
            });
    };

};











