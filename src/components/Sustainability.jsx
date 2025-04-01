import React from 'react';
import './Sustainability.css';
import { BatteryCharging, Power, Recycle, Trash } from 'lucide-react';

function Sustainability() {
  return (
    <section className="sustainability-section">
      <div className="sustainability-content">
        <h2>Designing for a Greener Future</h2>
        <div className="sustainability-features">
          <div className="sustainability-feature">
            <Recycle className="feature-icon" />
            <div className="feature-content">
              <h3>Eco-Friendly Materials</h3>
              <p>Use materials with certifications like LEED and GRIHA.</p>
            </div>
          </div>
          
          <div className="sustainability-feature">
            <BatteryCharging style={{heigh: "4rem", width: "4rem"}} className="feature-icon">
            <defs>
                  <linearGradient id="iconStrokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="5%" stopColor="#D2AC47" />
                    <stop offset="45%" stopColor="#F7EF8A" />
                    <stop offset="85%" stopColor="#AC8625" />
                  </linearGradient>
                </defs>
            </BatteryCharging>
            <div className="feature-content">
              <h3>Energy-Efficient Systems</h3>
              <p>Reduce carbon footprint and operating costs with efficient lighting and HVAC.</p>
            </div>
          </div>
          
          <div className="sustainability-feature">
            <Trash className="feature-icon">
            <defs>
                  <linearGradient id="iconStrokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="5%" stopColor="#D2AC47" />
                    <stop offset="45%" stopColor="#F7EF8A" />
                    <stop offset="85%" stopColor="#AC8625" />
                  </linearGradient>
                </defs>
            </Trash>
            <div className="feature-content">
              <h3>Waste Management</h3>
              <p>Minimize construction waste and promote recycling.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sustainability;