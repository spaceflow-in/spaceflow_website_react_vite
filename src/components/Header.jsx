import React from 'react';
import './Header.css';
import logo from '../images/Spaceflow Golden With caption.png'

function Header() {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="top-bar">
        <div className="top-bar-content">
          {/* <input
            type="text"
            placeholder="Search something..."
            className="search-input"
          /> */}
          <button className="contact-us-button" onClick={handleContactClick}>Contact Us</button>
        </div>
      </header>

    <div className="header">
      <img src={logo} alt="Spaceflow Logo" className="logo" />
      <div className="header-content">
        <h1>Spaceflow - Office Design Experts</h1>
        <p>Transforming workplaces into inspiring environments across India.</p>
      </div>
    </div>
      
    </>
  );
}

export default Header;