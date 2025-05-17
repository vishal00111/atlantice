import React from 'react';
import './choose.css';
import { motion } from 'framer-motion';
import {
  FaGlassCheers, FaUtensils, FaCrown, FaHotel, FaCar,
  FaGuitar, FaHeart, FaUserTie, FaDoorOpen, FaPalette
} from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    { icon: <FaGlassCheers className="feature-icon" />, title: 'Elegant Banquet Halls' },
    { icon: <FaUtensils className="feature-icon" />, title: 'Exquisite Catering' },
    { icon: <FaCrown className="feature-icon" />, title: 'Royal Event Experience' },
    { icon: <FaHotel className="feature-icon" />, title: 'Custom Decorations' },
    { icon: <FaCar className="feature-icon" />, title: 'Valet Parking' },
    { icon: <FaGuitar className="feature-icon" />, title: 'Live Entertainment' },
    { icon: <FaHeart className="feature-icon" />, title: 'Wedding Planning' },
    { icon: <FaUserTie className="feature-icon" />, title: 'Hospitality Team' },
    { icon: <FaDoorOpen className="feature-icon" />, title: 'VIP Lounge Access' },
    { icon: <FaPalette className="feature-icon" />, title: 'Theme-Based Setup' },
  ];

  return (
    <section className="why-choose-section">
      <div className="container-small">
        <h2 className="section-title">Why Choose Our Banquets</h2>
        <div className="features">
          {features.map((feature, index) => (
            <motion.div
              className="feature-item"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="icon-wrapper">{feature.icon}</div>
              <p className="feature-title">{feature.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
