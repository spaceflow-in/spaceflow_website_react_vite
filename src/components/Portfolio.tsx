// File: src/components/Portfolio.tsx

import React from 'react';

// Import portfolio images
import portfolio1 from '../images/portfolio1.jpg';
import portfolio2 from '../images/portfolio2.jpg';
import portfolio3 from '../images/portfolio3.jpg';
import portfolio4 from '../images/portfolio4.jpg';

// Define the structure for a portfolio item
type PortfolioItem = {
  src: string;
  alt: string;
};

// Data array for portfolio images
const portfolioData: PortfolioItem[] = [
  { src: portfolio1, alt: 'Colorful office space with orange accents' },
  { src: portfolio2, alt: 'Minimalist office design' },
  { src: portfolio3, alt: 'Blue themed office space' },
  { src: portfolio4, alt: 'Modern conference room' },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-[#121212]">
      <div className="max-w-screen-xl mx-auto px-8">
        <h2 className="text-5xl mb-8">See Our Vision Come to Life</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.map((item, index) => (
            <div key={index} className="portfolio-item">
              <img 
                src={item.src} 
                alt={item.alt}
                className="w-full h-[250px] object-cover rounded-lg 
                           transition-transform duration-300 ease-in-out hover:scale-105" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;