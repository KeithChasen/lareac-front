import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Provider, connect } from 'react-redux'
import createStore from '../../createStore'
import * as actions from '../../actions/Post'
import PostList from './PostList'

class Posts extends Component {
    constructor() {
        super()
        this.inputChange = this.inputChange.bind(this)
        this.addPost = this.addPost.bind(this)
    }

    inputChange(event) {
        switch (event.target.name) {
            case 'post':
                this.props.changePost(event.target.value)
                break
            default:
                break
        }
    }

    addPost() {
        if (this.props.state.post == '') {
            return
        }

        this.props.addPost(this.props.state.post)
        this.props.changePost('')
    }

    render() {
        return (
            <React.Fragment>
                <div className=" m4">
                    <label htmlFor="post">Post</label>
                    <input
                        type="text"
                        className=""
                        id="post"
                        name="post"
                        value={this.props.state.post}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-block"
                    onClick={this.addPost()}
                >
                    Add
                </button>

                <table className="responsive-table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <PostList />
                    </tbody>
                </table>
            </React.Fragment>
        )
    }

    componentDidMount() {
        this.props.getPosts()
    }


}

const mapStateToProps = state => {
    return {
        state: state.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPosts: () => dispatch(actions.getPosts()),
        addPost: (post) => dispatch(actions.addPost(post)),
        changePost: (post) => dispatch(actions.changePost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)