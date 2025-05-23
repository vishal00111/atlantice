import React, { useState, useEffect } from 'react';

import BanquetIntro from './BanquetIntro';

import BanquetHeroSection from './components/header';
import WhyChooseUs from './components/choose/choose';
import GalleryComponent from './components/gallaryhome/gallaryhome';
import TestimonialsAndPricing from './components/price/price';
import EventSpaces from './components/event/event';
import WeddingExperience from './components/wedding/wedding';
import WeddingStats from './components/weddingstates/weddingstates';
import Footer from './components/footer/footer';



function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [startReveal, setStartReveal] = useState(false);

  useEffect(() => {
    // Start revealing homepage slightly before the intro fully exits
    const timer = setTimeout(() => setStartReveal(true), 2300); // adjust as per animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <div className={`main-content ${startReveal ? 'reveal' : ''}`}>
       
        <BanquetHeroSection />
        <WhyChooseUs />
        <GalleryComponent />
        <TestimonialsAndPricing />
        <EventSpaces />
        <WeddingExperience />
        <WeddingStats />
        <Footer />
     
      </div>

      {showIntro && <BanquetIntro onFinish={() => setShowIntro(false)} />}
    </div>
  );
}

export default Home;
