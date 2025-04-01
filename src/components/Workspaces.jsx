import React from 'react';
import './Workspaces.css';
import collaborativeZone from '../images/collaborative-zone.jpg';
import ergonomicWorkstation from '../images/ergonomic-workstation.jpg';
import meetingRoom from '../images/meeting-room-2.jpg';

function Workspaces() {
  return (
    <section className="workspaces-section">
      <div className="workspaces-content">
        <h2>Modern Workspace Designs</h2>
        <div className="workspace-types">
          <div className="workspace-type">
            <div className="workspace-image">
              <img src={collaborativeZone} alt="Collaborative zone with yellow furniture" />
            </div>
            <h3>Collaborative Zone</h3>
            <p>Foster teamwork and creativity.</p>
          </div>
          
          <div className="workspace-type">
            <div className="workspace-image">
              <img src={ergonomicWorkstation} alt="Person working at ergonomic desk" />
            </div>
            <h3>Ergonomic Workstation</h3>
            <p>Promote comfort and productivity.</p>
          </div>
          
          <div className="workspace-type">
            <div className="workspace-image">
              <img src={meetingRoom} alt="Modern meeting room" />
            </div>
            <h3>Meeting Room</h3>
            <p>Facilitate effective communication.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Workspaces;