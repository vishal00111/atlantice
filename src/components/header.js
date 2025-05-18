import React from 'react';
import './header.css';
import backgroundImg from '../img/a.png';
import logoImg from '../img/atlantis-logo.png';

const BanquetHeroSection = () => {
  return (
    <div
      className="hero-container"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <nav className="navbar">
        <div className="logo">
          <img src={logoImg} alt="Banquet Logo" className="logo-img" />
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#packages">Packages</a></li>
          <li><a href="#contact">Contact</a></li>
      
        </ul>
      </nav>

      <div className="hero-text">
        <h1>Celebrate in Style at<br />Attlantice</h1>
        <p>Premium Event Venue for Weddings, Parties, and Corporate Events.</p>
        <div className="hero-buttons">
          <button className="enquiry-btn">Enquiry Now</button>
        </div>
      </div>
    </div>
  );
};

export default BanquetHeroSection;
