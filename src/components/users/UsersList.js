import React, { Component } from 'react'
import UserItem from './UserItem'
import { Link } from 'react-router-dom'

class UsersList extends Component {
    render() {

        const { users } = this.props

        const usersList = users && users.map(user => {
            return (
                <Link to={`/users/${user.id}`} key={user.id}>
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

const mapStateToProps = state => {
    return {
        users: state.users
    }
}


export default UsersList