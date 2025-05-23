import React from 'react';
import './header.css';
import backgroundImg from '../img/a.png';
import logoImg from '../img/atlantis-logo.png';

const BanquetHeroSection = () => {
  return (
    <div
      className="hero-container animate-bg"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <nav className="navbar">
        <div className="logo fade-in">
          <img src={logoImg} alt="Banquet Logo" className="logo-img rotate-in" />
        </div>
        <ul className="nav-links slide-in">
          <li><a href="/">Home</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      <div className="hero-text zoom-in">
        <h1 className="typewriter">Celebrate in Style at<br />Attlantice</h1>
        <p className="fade-in">Premium Event Venue for Weddings, Parties, and Corporate Events.</p>
        <div className="hero-buttons">
          <button className="enquiry-btn pulse">Enquiry Now</button>
        </div>
      </div>
    </div>
  );
};

export default BanquetHeroSection;