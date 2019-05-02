import React, { Component } from 'react'
import {connect} from "react-redux";
import { deletePost } from '../../actions/Post'

class Post extends Component {

    deletePostFunc(e) {
        e.preventDefault()
        const id = parseInt(e.target.parentElement.getAttribute('id'))
        this.props.deletePost(id)
    }

    render() {
        return (
            <div id={this.props.post.id}>
                <h2>
                    {this.props.post.title}
                    {this.props.post.id}
                </h2>

                <button
                    onClick={()=>this.props.dispatch({type:'EDIT_POST',id:this.props.post.id})}
                    >
                    Edit
                </button>

                <button
                    onClick={ (e) => this.deletePostFunc(e) }
                >
                    Delete
                </button>

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
    { deletePost }
)(Post)