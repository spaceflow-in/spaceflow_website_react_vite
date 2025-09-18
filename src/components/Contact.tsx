// File: src/components/Contact.tsx

import React from 'react';
import receptionImage from '../images/reception.jpg';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-[#1a1a1a]">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Contact Info & Form */}
          <div className="flex-1 text-left">
            <h2 className="text-5xl mb-4">Contact Us</h2>
            <p className="mb-2">Ready to transform your workspace?</p>
            <p className="mb-8">Contact us today for a consultation.</p>
            
            <form action="https://formsubmit.co/divyansh@nirmaan.app" method="POST" className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  required
                  className="flex-1 w-full p-4 bg-[#333] border-none rounded text-white text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  required
                  className="flex-1 w-full p-4 bg-[#333] border-none rounded text-white text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full p-4 bg-[#333] border-none rounded text-white text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              
              <div className="text-right pt-6 pr-1">
                <button 
                  type="submit" 
                  className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white 
                             px-6 py-3 border-none rounded font-semibold shadow-md shadow-black/20
                             cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-black/30"
                >
                  Send
                </button>
              </div>
            </form>
          </div>

          {/* Image container */}
          <div className="flex-1 w-full">
            <img 
              src={receptionImage} 
              alt="Modern reception area"
              className="w-full rounded-lg shadow-lg shadow-black/30 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;