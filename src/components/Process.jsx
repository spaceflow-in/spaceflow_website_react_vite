import React from 'react';
import './Process.css';
import conferenceRoomImage from '../images/conference-room.jpg';
import { Construction, Handshake, Notebook, Ruler } from 'lucide-react';

function Process() {
  return (
    <section className="process-section">
      <div className="process-content">
        <h2>A Collaborative Journey</h2>
        <div className="process-container">
          <div className="process-steps">
            <div className="process-step">
            <div className="arrow-container">
              <Handshake className="step-icon" />
            </div>

              <div className="step-content">
                <h3>Initial Consultation</h3>
                <p>Understand client needs, goals, and budget.</p>
              </div>
            </div>
            
            <div className="process-step">
            <div className="arrow-container">
              <Ruler className="step-icon" />
            </div>
              <div className="step-content">
                <h3>Design Development</h3>
                <p>Create detailed design plans, 3D renderings, and material selections.</p>
              </div>
            </div>
            
            <div className="process-step">
            <div className="arrow-container">
              <Construction className="step-icon" />
            </div>
              <div className="step-content">
                <h3>Implementation</h3>
                <p>Manage construction, installation, and furniture procurement.</p>
              </div>
            </div>
            
            <div className="process-step">
            <div className="arrow-container">
              <Notebook className="step-icon" />
            </div>
              <div className="step-content">
                <h3>Post-Occupancy Evaluation</h3>
                <p>Gather feedback and ensure client satisfaction.</p>
              </div>
            </div>
          </div>
          <div className="process-image">
            <img src={conferenceRoomImage} alt="Elegant conference room" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;