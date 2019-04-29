
export function postsFetchDataSuccess(posts) {
    return {
        type: 'POSTS_FETCH_DATA_SUCCESS',
        posts
    }
}

export function postsFetchData(url) {
    return (dispatch) => {
        fetch(url)
            .then(res => {
                if (!res.ok)
                    throw new Error(res.statusText)

                return res
            })
            .then(res => res.json())
            .then(posts => dispatch(postsFetchDataSuccess(posts)))
    }
}