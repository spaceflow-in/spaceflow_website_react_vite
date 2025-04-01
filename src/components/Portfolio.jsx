import React from 'react';
import './Portfolio.css';
import portfolio1 from '../images/portfolio1.jpg';
import portfolio2 from '../images/portfolio2.jpg';
import portfolio3 from '../images/portfolio3.jpg';
import portfolio4 from '../images/portfolio4.jpg';

function Portfolio() {
  return (
    <section className="portfolio-section">
      <div className="portfolio-content">
        <h2>See Our Vision Come to Life</h2>
        <div className="portfolio-gallery">
          <div className="portfolio-item">
            <img src={portfolio1} alt="Colorful office space with orange accents" />
          </div>
          <div className="portfolio-item">
            <img src={portfolio2} alt="Minimalist office design" />
          </div>
          <div className="portfolio-item">
            <img src={portfolio3} alt="Blue themed office space" />
          </div>
          <div className="portfolio-item">
            <img src={portfolio4} alt="Modern conference room" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;