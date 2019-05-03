import { POST_DELETED, POST_FETCHED, POST_CREATED } from '../actions/types';

const postReducer = (state = [], action) => {

    switch(action.type) {
        case POST_FETCHED:
            return {
                posts: action.posts
            }
        case POST_CREATED:
            return action.post
        case POST_DELETED:
            let newState = state.posts.filter((post)=>post.id !== action.id);
            return { posts: newState }
        case 'EDIT_POST':
            return state.map((post)=>post.id === action.id ? {...post,editing:!post.editing}:post)
        case 'UPDATE':
            return state.map((post)=>{
                if(post.id === action.id) {
                    return {
                        ...post,
                        title:action.data.newTitle,
                        editing: !post.editing
                    }
                } else return post;
            })
        default:
            return state;
    }
}
export default postReducer;