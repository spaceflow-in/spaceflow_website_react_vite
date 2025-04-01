import React from 'react';
import './Contact.css';
import receptionImage from '../images/reception.jpg';

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>Ready to transform your workspace?</p>
          <p>Contact us today for a consultation.</p>
          
          <div className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>Address</label>
                <input type="text" placeholder="Address" />
              </div>
              
              <div className="form-group">
                <label>Phone</label>
                <input type="text" placeholder="Phone" />
              </div>
            </div>
            
            <div className="form-group full-width">
              <label>Email</label>
              <input type="email" placeholder="Email" />
            </div>
          </div>
        </div>
        
        <div className="contact-image">
          <img src={receptionImage} alt="Modern reception area" />
        </div>
      </div>
    </section>
  );
}

export default Contact;