// Navbar.js
import React from 'react';
import './header.css';  // Wo hi css jisme navbar styling hai
import logoImg from '../img/atlantis-logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo fade-in">
        <img src={logoImg} alt="Banquet Logo" className="logo-img rotate-in" />
      </div>
      <ul className="nav-links slide-in">
        <li><a href="/">Home</a></li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="/about">about</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
