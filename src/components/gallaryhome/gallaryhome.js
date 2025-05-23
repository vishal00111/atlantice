import React from 'react';
import './gallaryhome.css';
import { motion } from 'framer-motion';
import img1 from '../../img/c.jpg';
import img2 from '../../img/d.jpg';
import img3 from '../../img/e.jpg';
import img4 from '../../img/f.jpg';
import img5 from '../../img/g.jpg';

const images = [img1, img2, img3, img4, img5];

// Animation Variants for container and items
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const GalleryComponent = () => {
  return (
    <motion.div 
      className="gallery-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2 
        className="gallery-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Gallery
      </motion.h2>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="gallery-item"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="gallery-image"
              loading="lazy"
              initial={{ filter: 'blur(10px) grayscale(80%)', scale: 0.9, opacity: 0 }}
              animate={{ filter: 'blur(0px) grayscale(0%)', scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default GalleryComponent;
