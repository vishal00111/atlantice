import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import HomePage from './home'; // HomePage me BanquetIntro + BanquetHeroSection etc. honge


import { FaWhatsapp } from 'react-icons/fa';
import GalleryBanner from './gallary/gallary';
import About from './about/about';
import ContactUs from './contact/contact';

function App() {
  return (
    <Router>
  
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryBanner/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<ContactUs/>} />
        
      </Routes>

      {/* WhatsApp icon har jagah rahega */}
      <a
        href="https://wa.me/your-number"
        className="whatsapp-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={50} color="white" />
      </a>
    </Router>
  );
}

export default App;
