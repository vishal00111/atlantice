import React from 'react';

import bannerImg from '../img/a.png'; // <-- Import your image
import './about.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer/footer';

const About = () => {
    return (
        <div>


            <div
                className="gallery-banner-containers"
                style={{ backgroundImage: `url(${bannerImg})` }}
            >
                <Navbar />
                <div className="gallery-banner-contents">
                    <h1>about</h1>
                    <p>Explore our stunning event moments and memories</p>
                </div>
            </div>
                <Footer />
        </div>
    );
};

export default About;
