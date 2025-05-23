import React from 'react';

import bannerImg from '../img/a.png'; // <-- Import your image
import './gallary.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer/footer';

const GalleryBanner = () => {
  return (
    <div>

   
    <div
      className="gallery-banner-container"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <Navbar/>
      <div className="gallery-banner-content">
        <h1>Gallery</h1>
        <p>Explore our stunning event moments and memories</p>
      </div>
    
       </div>
         <div>

      <Footer/>
      </div>
    </div>
  );
};

export default GalleryBanner;
