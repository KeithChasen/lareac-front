import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = props => {
    return (
        <nav className="nav-wrapper grey darken-1">
            <div className="container">
                <Link to='/' className='brand-logo'>Lareac</Link>




                <ul className="right">
                    <li>
                        <NavLink to='/create'>Create Posts</NavLink>
                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default Navbar