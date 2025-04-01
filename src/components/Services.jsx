import React from 'react';
import './Services.css';
import officeSpaceImage from '../images/office-space.jpg';
import { Clipboard, Leaf, Lightbulb, PaintRoller, Plane, Sofa } from 'lucide-react';

function Services() {
  return (
    <section className="services-section">
      <div className="services-content">
        <h2>Tailored Solutions for Every Business</h2>
        <div className="services-container">
          <div className="services-list">
            <div className="service-item">
                <Plane className="service-icon">
                <defs>
                  <linearGradient id="iconStrokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="5%" stopColor="#D2AC47" />
                    <stop offset="45%" stopColor="#F7EF8A" />
                    <stop offset="85%" stopColor="#AC8625" />
                  </linearGradient>
                </defs>
                </Plane>
              {/* </div> */}
              <h3>Space Planning</h3>
              <p>Maximize space utilization and workflow efficiency, reduce wasted space.</p>
            </div>
            
            <div className="service-item">
              <PaintRoller className="service-icon" />
              <h3>Interior Design</h3>
              <p>Create visually appealing and brand-aligned environments. Increase employee satisfaction.</p>
            </div>
            
            <div className="service-item">
              <Sofa className="service-icon" />
              <h3>Furniture Selection</h3>
              <p>Curate ergonomic and stylish furniture solutions. Reduce employee absenteeism.</p>
            </div>
            
            <div className="service-item">
              <Clipboard className="service-icon" />
              <h3>Project Management</h3>
              <p>Seamless execution from concept to completion. Ensure on-time and within-budget project delivery.</p>
            </div>
            
            <div className="service-item">
              <Leaf className="service-icon" />
              <h3>Sustainable Design</h3>
              <p>Incorporate eco-friendly materials and practices. Achieve LEED certification.</p>
            </div>
            
            <div className="service-item">
              <Lightbulb className="service-icon" />
              <h3>Workplace Strategy</h3>
              <p>Align design with organizational goals and culture.</p>
            </div>
          </div>
          <div className="services-image">
            <img src={officeSpaceImage} alt="Modern office space" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;