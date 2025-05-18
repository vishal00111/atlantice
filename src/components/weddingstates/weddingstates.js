import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './weddingStats.css';

const stats = [
  { number: '1,200+', label: 'Happy Couples' },
  { number: '1,445+', label: 'Parties Organised' },
  { number: '650+', label: 'Theme Decorations' },
  { number: '4.9', label: 'Customer Rating' },
];

const WeddingStats = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="wedding-stats">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div
            className="stat-card"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 150}
          >
            <h2>{stat.number}</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeddingStats;
