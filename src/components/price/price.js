import React, { useEffect, useState } from 'react';
import './price.css';

const testimonials = [
  {
    text: "“Wonderful experience! The venue was beautiful and the staff was extremely helpful.”",
    author: "Jessica K.",
  },
  {
    text: "“Best service ever. Everything was managed professionally and on time.”",
    author: "Michael B.",
  },
  {
    text: "“It was a dream come true! Highly recommended.”",
    author: "Sophia W.",
  },
  {
    text: "“Amazing staff and perfect arrangements. 10/10 experience.”",
    author: "Amit R.",
  },
  {
    text: "“Loved every moment of the event. The team did a fantastic job.”",
    author: "Neha S.",
  },
];

const TestimonialsAndPricing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Slide every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-pricing-container">
      {/* Testimonials */}
      <div className="testimonial-section">
        <h2 className="section-title">Testimonials</h2>
        <div className="stars">★★★★★</div>
        <div className="testimonial-box">
          <p className="testimonial-text">{testimonials[currentIndex].text}</p>
          <p className="testimonial-author">{testimonials[currentIndex].author}</p>
        </div>
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="pricing-section">
        <h2 className="section-title">Banquet Packages</h2>
        <div className="pricing-cards">
          <div className="pricing-card">
            <div className="card-header">
              <h3>Standard Package</h3>
            </div>
            <div className="card-body standard">
              <ul>
                <li>✓ Stunning Venue Setup</li>
                <li>✓ Unforgettable Ambiance</li>
                <li>✓ Professional Event Coordination</li>
                <li>✓ Premium Services, Tailored Just for You</li>
              </ul>
            </div>
          </div>
          <div className="pricing-card">
            <div className="card-header">
              <h3>Premium Package</h3>
            </div>
            <div className="card-body premium">
              <ul>
                <li>✓ Exclusive Venue Styling</li>
                <li>✓ Bespoke Event Design</li>
                <li>✓ Seamless Event Management</li>
                <li>✓ Exquisite Attention to Detail</li>
                <li>✓ VIP Experience</li>
              </ul>
            </div>
          </div>
          <div className="pricing-card">
            <div className="card-header">
              <h3>Luxury Package</h3>
            </div>
            <div className="card-body luxury">
              <ul>
                <li>✓ Immaculate Event Concept</li>
                <li>✓ Designer Event Curation</li>
                <li>✓ Full-Spectrum Event Coordination</li>
                <li>✓ Luxurious Touches & Special Additions</li>
                <li>✓ Exquisite Customization for Your Perfect Day</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsAndPricing;
