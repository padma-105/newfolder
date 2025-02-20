import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './navbar.css';
import myimage from '../../images/mern_Logo.jpeg'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
       
    };

    return (
        <header className="header-section">
            <img src={myimage} alt="logo" id="logo" />
            <button className="hamburger" onClick={toggleMenu}>
                ☰
            </button>
            <ul className={`nav-items ${menuOpen ? 'show-menu' : ''}`}>
                <li><Link to="/for-you">For You</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/dining">Dining</Link></li>
            </ul>
            <ul className={`registered-items ${menuOpen ? 'show-menu' : ''}`}>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register"></Link></li>
            </ul>
        </header>
    );
};

export default Navbar;
