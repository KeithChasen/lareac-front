import React from 'react'

const UsersItem = ({user}) => {
    return (
        <div className='card z-depth-1'>
            <div className="card-content grey-text text-darken-2">
                <span className='card-title'>{user.username}</span>
            </div>
        </div>
    )
}

export default UsersItem