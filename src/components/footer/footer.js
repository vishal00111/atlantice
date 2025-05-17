import React from 'react';
import './footer.css';
import { FaFacebook, FaLinkedin, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';
import logoImg from '../../img/atlantis-logo.png';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-logo"><img src={logoImg} alt="Banquet Logo" className="logo-img" /></div>
                <div className="footer-sections">
                    <div className="footer-section">
                        <h4>Legal Pages</h4>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms and Conditions</li>
                            <li>Refund & Cancellation Policy</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Important Links</h4>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Gallery</li>
                            <li>Packages</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Follow Us</h4>
                        <div className="social-icons">
                            <FaFacebook />
                            <FaLinkedin />
                            <FaYoutube />
                            <FaTwitter />
                            <FaInstagram />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 Banquet Name. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;