import React, { Component } from 'react'
import {connect} from "react-redux";

class CreatePost extends Component {
    handleSubmit = e => {
        e.preventDefault()
        const title = this.getTitle.value
        const data = {
            title,
            editing: false
        }
        this.props.dispatch({
            type: 'ADD_POST',
            data
        })

        this.getTitle.value = ''

        console.log(data)
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

export default connect()(CreatePost)