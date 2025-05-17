import React from 'react';
import './gallaryhome.css';
import img1 from '../../img/c.jpg';
import img2 from '../../img/d.jpg';
import img3 from '../../img/e.jpg';
import img4 from '../../img/f.jpg';
import img5 from '../../img/g.jpg';

const GalleryComponent = () => {
    const images = [img1, img2, img3, img4, img5];

    return (
        <div className="gallery-container">
            <h2 className="gallery-title">Gallery</h2>
            <div className="gallery-grid">
                {images.map((image, index) => (
                    <div key={index} className="gallery-item">
                        <img src={image} alt={`Gallery ${index + 1}`} className="gallery-image" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryComponent;