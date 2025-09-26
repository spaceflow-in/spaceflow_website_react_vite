// File: src/components/Process.tsx

import React from 'react';
import conferenceRoomImage from '../images/conference-room.jpg';
import { Construction, Handshake, Notebook, Ruler } from 'lucide-react';

// Define the structure for a process step
type ProcessStep = {
  icon: React.ElementType;
  title: string;
  description: string;
};

// Data array for the process steps
const processStepsData: ProcessStep[] = [
  { icon: Handshake, title: 'Initial Consultation', description: 'Understand client needs, goals, and budget.' },
  { icon: Ruler, title: 'Design Development', description: 'Create detailed design plans, 3D renderings, and material selections.' },
  { icon: Construction, title: 'Implementation', description: 'Manage construction, installation, and furniture procurement.' },
  { icon: Notebook, title: 'Post-Occupancy Evaluation', description: 'Gather feedback and ensure client satisfaction.' },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-[#1a1a1a]">
      {/* 
        Define the SVG gradient for this component's icons.
      */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="iconStrokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="5%" stopColor="#D2AC47" />
            <stop offset="45%" stopColor="#F7EF8A" />
            <stop offset="85%" stopColor="#AC8625" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-screen-xl mx-auto px-8">
        <h2 className="text-5xl mb-8">A Collaborative Journey</h2>

        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Process steps list */}
          <div className="flex-1 space-y-4">
            {processStepsData.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex items-start text-left">
                {/* 
                  The custom arrow shape is created with Tailwind's arbitrary property syntax.
                  Note: Spaces in clip-path values must be replaced with underscores for Tailwind's JIT compiler.
                */}
                <div className="flex-shrink-0 flex items-center justify-center min-w-24 h-28 bg-[#3A3B3C] mr-4
                               [clip-path:polygon(0%_0%,_50%_20%,_100%_0%,_100%_70%,_50%_100%,_0%_70%)]">
                  <Icon
                    className="w-8 h-8 stroke-1 fill-none"
                    style={{ stroke: 'url(#iconStrokeGradient)' }}
                  />
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl mb-3 text-[#d4af37] bg-none">
                    {title}
                  </h3>
                  <p className="text-base">{description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image container */}
          <div className="flex-1 w-full">
            <img
              src={conferenceRoomImage}
              alt="Elegant conference room"
              className="w-full rounded-lg shadow-lg shadow-black/30 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;