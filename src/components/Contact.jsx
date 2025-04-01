import React from 'react';
import './Contact.css';
import receptionImage from '../images/reception.jpg';

function Contact() {
  return (
    <section className="contact-section">
      
      <div className="contact-content">
      <form action="https://formsubmit.co/divyansh@nirmaan.app" method="POST">
  <div className="contact-info">
    <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
    <p className="mb-1">Ready to transform your workspace?</p>
    <p className="mb-4">Contact us today for a consultation.</p>

    <div className="contact-form space-y-4">
      <div className="form-row flex gap-4">
        <div className="form-group flex-1">
          <label className="block mb-1">Address</label>
          <input
            type="text"
            name="address"
            placeholder="Address"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="form-group flex-1">
          <label className="block mb-1">Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            required
            className="w-full border p-2 rounded"
          />
        </div>
      </div>

      <div className="form-group">
        <label className="block mb-1">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full border p-2 rounded"
        />
      </div>
      <div className="text-right pt-4 pr-2">
        <button type="submit" className="golden-button">
          Send
        </button>
      </div>
    </div>
  </div>
</form>
        
        <div className="contact-image">
          <img src={receptionImage} alt="Modern reception area" />
        </div>
      </div>
      
    </section>
  );
}

export default Contact;