import React from 'react';
import './wedding.css';
import weddingScene from '../../img/wedding.jpg';

const WeddingExperience = () => {
  return (
    <div className="wedding-container">
      <div className="wedding-experience">
        <div className="image-section">
          <img src={weddingScene} alt="Wedding Celebration" />
        </div>
        <div className="text-section">
          <h2>
            THE COMPLETE EXPERIENCE—
            <br />
            WHERE EVERY MOMENT SHINES!
          </h2>
          <p>
            Experience a seamless, one-stop wedding service at Heritage Village Resorts & Spa, Manesar—one of the premier wedding resorts . Our hand-picked network of leading photographers, wedding planners, salon experts, decorators, and more work together to bring your vision to life.
          </p>
          <p>
            From intimate Roka and Haldi ceremonies to elaborate Mehendi, cocktail receptions, Sangeet parties, and grand wedding receptions, our dedicated team delivers customised packages and meticulously crafted menus for every function. Relax and enjoy a stress-free wedding journey, knowing every detail is handled with utmost care.
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default WeddingExperience;
