import React from 'react'
import './Navbar.css'
import logo from '../Images/logo.png'

export const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="menu">
                <ul>
                    <li>Home</li>
                    <li>Categories</li>
                    <li>Featured</li>
                    <li>About Us</li>
                    <li style={{ color: '#FB2576' }}>Contact</li>
                </ul>
            </div>
            <div className="accounts">
                <ul>
                    <li>
                        <button>Login</button>
                    </li>
                    <li>
                        <button>Signup</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
