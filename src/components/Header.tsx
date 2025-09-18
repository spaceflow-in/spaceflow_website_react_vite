// File: src/components/Header.tsx

import React from 'react';

// Import images directly to be used in the component
import logo from '../images/Spaceflow Golden With caption.png';
import headerBg from '../images/header-bg.jpg';

const Header: React.FC = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Bar Section */}
      <header className="absolute top-0 left-0 right-0 z-20 px-5 py-4">
        <div className="flex items-center justify-end max-w-screen-xl mx-auto">
          <button
            onClick={handleContactClick}
            className="border-2 border-[#e4cb80] px-6 py-2.5 text-[#e4cb80] bg-transparent cursor-pointer 
                       transition-colors duration-300 rounded font-semibold hover:bg-[#e4cb80]/10"
          >
            Contact Us
          </button>
        </div>
      </header>

      {/* Main Header/Hero Section */}
      <div
        className="h-screen bg-cover bg-center flex items-center justify-center text-center relative"
        style={{ backgroundImage: `url(${headerBg})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        <img
          src={logo}
          alt="Spaceflow Logo"
          className="absolute top-4 left-10 w-[120px] h-[120px] max-[450px]:w-[100px] max-[450px]:h-[100px] object-contain z-10"
        />

        <div className="relative z-10 max-w-screen-lg px-5">
          <h1 className="text-6xl mb-5">Spaceflow - Office Design Experts</h1>
          <p className="text-xl">
            Transforming workplaces into inspiring environments across India.
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;