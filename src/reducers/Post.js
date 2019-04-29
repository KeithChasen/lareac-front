const initialState = {
    posts: [],
    post: ''
}

export const postReducer = (state = initialState, action) => {
    console.log(action)

    switch (action.type) {
        case 'GET_POSTS':
            const getState = Object.assign({}, state)
            getState.posts = action.posts
            return getState
        case 'ADD_POST':
            const addState = Object.assign({}, state)
            addState.posts = action.posts
            return addState
        case 'DELETE_POST':
            const deleteState = Object.assign({}, state)
            deleteState.posts = action.posts
            return deleteState
        case 'CHANGE_POST':
            const changeState = Object.assign({}, state)
            changeState.post = action.post
            return changeState
        default:
            return state
    }
}