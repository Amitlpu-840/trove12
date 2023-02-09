import React from 'react'
import '../App.css'
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <nav className="navigation-bar">
                <h1 className="logo" src="logo.png">Trove12</h1>
                <div className="other" id="other">

                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Team">Team</Link>
                    <Link to="/Resources">Resources</Link>

                </div>
            </nav>
        </>
    )
}

export default Header