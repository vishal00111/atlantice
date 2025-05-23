import React from 'react';
import './contact.css';
import contactBanner from '../img/a.png';
import Navbar from '../components/navbar';
import Footer from '../components/footer/footer';

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div
        className="contact-container"
        style={{ backgroundImage: `url(${contactBanner})` }}
      >
        <div className="contact-form-wrapper">
          <h1>Contact Us</h1>
          <form className="contact-form">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="text" placeholder="Enter your phone" />
            </div>
            <div className="form-group">
              <label>Event Type</label>
              <select>
                <option>Wedding</option>
                <option>Birthday</option>
                <option>Corporate</option>
              </select>
            </div>
            <div className="form-group full-width">
              <label>Date</label>
              <input type="date" />
            </div>
            <div className="form-group checkbox full-width">
              <input type="checkbox" id="contactAgree" />
              <label htmlFor="contactAgree">I agree to be contacted back</label>
            </div>
            <div className="form-group full-width buttons-wrapper">
              <button type="submit">Submit</button>
              <button type="button" className="close-btn">Close</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
