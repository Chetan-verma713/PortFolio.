import React, {useState} from 'react'
// import moduleName from ''
import './Header.css';
import ham from'./images/hambug.png'
import Achievement from '../PortFolio/Achievement';
import Contact from '../PortFolio/Contact';
import Page1  from '../PortFolio/Page1';
import Page2  from '../PortFolio/Page2';
import Progress from '../PortFolio/Progress';
import {Link} from 'react-scroll'

                             
function Header() {

    return (

        <nav className="navbar navbar-expand-lg ">
            <div className="container">
            <a className="navbar-brand" href="#">PORTFOLIO.</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"  >
                <span className="navbar-toggler-icon"><img src={ham} alt="" /></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link" to="Home" smooth={true} duration={1000}>Home </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="About" smooth={true} duration={1000}>About </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="Progress" smooth={true} duration={1000}>Progress </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="Achievement" smooth={true} duration={1000}>Achievement </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="Contact" smooth={true} duration={1000}>Contact </Link>
                        
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default Header
