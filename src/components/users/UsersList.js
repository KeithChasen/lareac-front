import React, { Component } from 'react'
import UserItem from './UserItem'
import { Link } from 'react-router-dom'
import { API_BASE_URL } from "../../config/config";

class UsersList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: null,
            isLoading: null
        }
    }

    componentDidMount() {
        this.getUsers()
    }

    async getUsers() {
        if (! this.state.users) {
            try {
                this.setState({ isLoading: true })
                const response = await fetch(API_BASE_URL + '/users')
                const users = await response.json()
                this.setState({ users: users, isLoading: false })
            } catch (err) {
                this.setState({ isLoading: false })
                console.log(err)
            }
        }
    }

    render() {
        const usersList = this.state.users && this.state.users.map(user => {
            return (
                <Link to={`/users/${user.id}`} key={user.user_id}>
                    <UserItem user={user} />
                </Link>
            )
        })

        return (
            <div className='section'>
                { usersList }
            </div>
        )
    }
}


export default UsersList