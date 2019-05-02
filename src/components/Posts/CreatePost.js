import React, { Component } from 'react'
import {connect} from "react-redux";
import { createPost } from '../../actions/Post'


class CreatePost extends Component {
    handleSubmit = e => {
        e.preventDefault()
        const title = this.getTitle.value
        const data = {
            title,
            editing: false
        }
        createPost(data)

        this.getTitle.value = ''
    }

    render() {
        return (
            <div>
                <h1>Create post</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" required ref={(input) => this.getTitle = input} placeholder="Title"/>
                    <button>Create</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        post: state.post
    }
}

export default connect(
    null,
    { createPost }
)(CreatePost)