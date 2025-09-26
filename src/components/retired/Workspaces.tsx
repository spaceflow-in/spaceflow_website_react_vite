// File: src/components/Workspaces.tsx

import React from 'react';

// Import workspace images
import collaborativeZone from '../images/collaborative-zone.jpg';
import ergonomicWorkstation from '../images/ergonomic-workstation.jpg';
import meetingRoom from '../images/meeting-room-2.jpg';

// Define the structure for a workspace type
type WorkspaceType = {
  image: string;
  alt: string;
  title: string;
  description: string;
};

// Data array for the different workspace types
const workspaceData: WorkspaceType[] = [
  {
    image: collaborativeZone,
    alt: 'Collaborative zone with yellow furniture',
    title: 'Collaborative Zone',
    description: 'Foster teamwork and creativity.',
  },
  {
    image: ergonomicWorkstation,
    alt: 'Person working at ergonomic desk',
    title: 'Ergonomic Workstation',
    description: 'Promote comfort and productivity.',
  },
  {
    image: meetingRoom,
    alt: 'Modern meeting room',
    title: 'Meeting Room',
    description: 'Facilitate effective communication.',
  },
];

const Workspaces: React.FC = () => {
  return (
    <section id="workspaces" className="py-20 bg-[#121212]">
      <div className="max-w-screen-xl mx-auto px-8">
        <h2 className="text-5xl mb-8">Modern Workspace Designs</h2>

        <div className="flex flex-col md:flex-row justify-between gap-8 mt-12">
          {workspaceData.map((workspace) => (
            <div key={workspace.title} className="flex-1 text-left">
              <div className="mb-6">
                <img
                  src={workspace.image}
                  alt={workspace.alt}
                  className="w-full h-[250px] object-cover rounded-lg shadow-lg shadow-black/30"
                />
              </div>

              {/* 
                Override the global h3 gradient with a solid gold color 
                to match the original design.
              */}
              <h3 className="text-2xl mb-3 text-[#d4af37] bg-none">
                {workspace.title}
              </h3>
              <p className="text-base">{workspace.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workspaces;