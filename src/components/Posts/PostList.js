import React, { Component } from 'react'
import { connect } from 'react-redux'
// import * as actions from '../../actions/Post'

import { API_BASE_URL } from "../../config/config";


import { postsFetchData } from "../../actions/posts";

class PostList extends Component {
    // constructor() {
    //     super()
    //     this.deletePost = this.deletePost.bind(this)
    // }
    //
    // deletePost(post) {
    //     this.props.deletePost(post)
    // }

    componentDidMount() {
        this.props.fetchData(API_BASE_URL + '/posts')
    }

    render() {

        const postList = this.props.posts.map(post => {
            return (
                <tr key={post.id}>
                    <td>{post.title}</td>
                    <td>
                        <button
                            className="btn btn-block"
                            onClick={() => this.deletePost(post)}
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            )
        })

        return (postList)

    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => dispatch(postsFetchData(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)