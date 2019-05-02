import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from "./Post";
import EditPost from "./EditPost";

import { fetchAllPosts, deletePost } from '../../actions/Post'

class PostList extends Component {

    componentDidMount() {
        this.props.fetchAllPosts()
    }

    render() {
        const { posts } = this.props

        let postList = (posts) ? posts.map(post => (
                    <div key={post.id}>
                        {
                            post.editing ?
                                <EditPost post={post} key={post.id} /> :
                                <Post key={post.id} post={post} deletePost={deletePost} />
                        }
                    </div>
                )
            )
         : 'No posts'

        return (
            <div>
                <h1>Posts</h1>
                {postList}
            </div>
        )

    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

export default connect(
    mapStateToProps,
    { fetchAllPosts }
)(PostList)