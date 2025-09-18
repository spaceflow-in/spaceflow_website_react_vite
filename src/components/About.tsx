// File: src/components/About.tsx

import React from 'react';
import meetingRoomImage from '../images/meeting-room.jpg';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#1a1a1a]">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Text Content */}
          <div className="flex-1 text-left">
            <h2 className="text-5xl mb-6">Crafting Workspaces That Inspire</h2>
            <p className="mb-6">
              Spaceflow transforms offices into productive and inspiring
              environments. Founded in 2021 in Bangalore, Spaceflow
              blends functionality with aesthetics, reflecting your brand
              identity with innovation, collaboration, and client-centricity.
            </p>
            <ul className="space-y-3 list-disc list-inside">
              <li>
                <strong className="font-semibold text-gray-300">Mission:</strong> Transform offices into productive and inspiring
                environments.
              </li>
              <li>
                <strong className="font-semibold text-gray-300">Design philosophy:</strong> Blend functionality with aesthetics,
                reflecting brand identity.
              </li>
              <li>
                <strong className="font-semibold text-gray-300">Core values:</strong> Innovation, collaboration, client-centricity,
                and sustainability.
              </li>
            </ul>
          </div>

          {/* Image container */}
          <div className="flex-1 w-full">
            <img
              src={meetingRoomImage}
              alt="Modern meeting room"
              className="w-full rounded-lg shadow-lg shadow-black/30 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;