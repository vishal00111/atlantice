import React from 'react';
import './price.css';

const TestimonialsAndPricing = () => {
  return (
    <div className="testimonial-pricing-container">
      {/* Testimonials */}
      <div className="testimonial-section">
        <h2 className="section-title">Testimonials</h2>
        <div className="stars">★★★★★</div>
        <div className="testimonial-box">
          <p className="testimonial-text">
            “Wonderful experience! The venue was beautiful and the staff was extremely helpful.”
          </p>
          <p className="testimonial-author">Jessica K.</p>
        </div>
      </div>

      {/* Packages & Pricing */}
      <div className="pricing-section">
        <h2 className="section-title">Packages & Pricing</h2>
        <div className="pricing-cards">
          <div className="pricing-card">
            <div className="card-header">
              <h3>Standard</h3>
              <p>$3,000</p>
            </div>
            <div className="card-body standard">
              <ul>
                <li>✓ Inclusion</li>
                <li>✓ Inclusion</li>
                <li>✓ Inclusion</li>
                <li>✓ Inclusion</li>
              </ul>
            </div>
          </div>
          <div className="pricing-card">
            <div className="card-header">
              <h3>Premium</h3>
              <p>$5,000</p>
            </div>
            <div className="card-body premium">
              <ul>
                <li>✓ Inclusion</li>
                <li>✓ Inclusion</li>
                <li>✓ Inclusion</li>
                <li>✓ Inclusion</li>
              </ul>
            </div>
          </div>
          <div className="pricing-card">
            <div className="card-header">
              <h3>Luxury</h3>
              <p>$8,000</p>
            </div>
            <div className="card-body luxury">
              <ul>
                <li>✓ Inclusion</li>
                <li>✓ Inclusion</li>
                <li>✓ Inclusion</li>
                <li>✓ Inclusion</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsAndPricing;
