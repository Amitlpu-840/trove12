import React from 'react'
import Aboutpng from "../assets/Icons/About.png"
import Team from "../assets/Icons/Team.png"
import Resources from "../assets/Icons/Resources.png"
import Homepng from "../assets/Icons/Home.png"
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <div>
            <footer>
                <div className="Title">
                    <h2>Trove12</h2>
                </div>
                <div className="icon">
                    <div>
                        <Link to="/">
                            <img src={Homepng} alt="HOME Icon" />
                        </Link>
                    </div>
                    <div>
                        <a href="#">
                            <img src={Aboutpng} alt="About Icon" /></a>
                    </div>
                    <div>
                        <a href="#">
                            <img src={Team} alt="Lab Icon" />
                        </a>
                    </div>
                    <div>
                        <Link to="/Resources">
                            <img src={Resources} alt="Resource Icon" />

                        </Link>
                    </div>

                </div>
                <ul className="menu_type">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a className="lil-right" href="#">Team</a></li>
                    <li><a href="#">Resources</a></li>
                </ul>
                <p>© 2023 Trove12 | All Rights Reserved</p>
            </footer>
        </div>
    )
}

export default Footer