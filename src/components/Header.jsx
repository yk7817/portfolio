import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="inner">
                <div className="logo">
                    <h1><Link to="/">YK <span>Web Engineer Portfolio</span></Link></h1>
                </div>
                <div className="nav">
                    <ul>
                        <li><Link to="/About">ABOUT</ Link></li>
                        <li><Link to="/Work">WORK</ Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
