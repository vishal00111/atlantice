import React from 'react';
import './App.css';
import BanquetHeroSection from './components/header';
import WhyChooseUs from './components/choose/choose';
import GalleryComponent from './components/gallaryhome/gallaryhome';
import Footer from './components/footer/footer';
import TestimonialsAndPricing from './components/price/price';
import EventSpaces from './components/event/event';
import WeddingExperience from './components/wedding/wedding';
import WeddingStats from './components/weddingstates/weddingstates';

import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon from react-icons

function App() {
  return (
    <div className="App">
      <BanquetHeroSection />
      <WhyChooseUs />
      <GalleryComponent />
      <TestimonialsAndPricing />
      <EventSpaces />
      <WeddingExperience />
      <WeddingStats />
      <Footer />

      {/* WhatsApp Icon */}
      <a href="https://wa.me/your-number" className="whatsapp-icon" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={50} color="white" />
      </a>
    </div>
  );
}

export default App;
