import React from 'react';
import './About.css';
import meetingRoomImage from '../images/meeting-room.jpg';

function About() {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2>Crafting Workspaces That Inspire</h2>
        <div className="about-container">
          <div className="about-text">
            <h3>About Spaceflow</h3>
            <p>
              Spaceflow transforms offices into productive and inspiring
              environments. Founded in 2021 in Bangalore, Spaceflow
              blends functionality with aesthetics, reflecting your brand
              identity with innovation, collaboration, and client-centricity.
            </p>
            <ul>
              <li>
                <strong>Mission:</strong> Transform offices into productive and inspiring
                environments.
              </li>
              <li>
                <strong>Design philosophy:</strong> Blend functionality with aesthetics,
                reflecting brand identity.
              </li>
              <li>
                <strong>Core values:</strong> Innovation, collaboration, client-centricity,
                and sustainability.
              </li>
            </ul>
          </div>
          <div className="about-image">
            <img src={meetingRoomImage} alt="Modern meeting room" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;