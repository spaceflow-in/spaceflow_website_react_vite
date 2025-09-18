// File: src/components/Sustainability.tsx (Corrected)

import React from 'react';
import { BatteryCharging, Recycle, Trash } from 'lucide-react';

type Feature = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const sustainabilityData: Feature[] = [
  {
    icon: Recycle,
    title: 'Eco-Friendly Materials',
    description: 'Use materials with certifications like LEED and GRIHA.',
  },
  {
    icon: BatteryCharging,
    title: 'Energy-Efficient Systems',
    description: 'Reduce carbon footprint and operating costs with efficient lighting and HVAC.',
  },
  {
    icon: Trash,
    title: 'Waste Management',
    description: 'Minimize construction waste and promote recycling.',
  },
];

const Sustainability: React.FC = () => {
  return (
    <section id="sustainability" className="py-20 bg-[#121212]">
      {/* 
        Define the SVG gradient for this component.
        This makes the component self-contained and ensures the gradient is available.
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
        <h2 className="text-5xl mb-8">Designing for a Greener Future</h2>

        <div className="flex flex-col md:flex-row justify-between gap-8 mt-12">
          {sustainabilityData.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex-1 flex items-start text-left gap-4">
              <Icon
                className="w-12 h-12 flex-shrink-0 stroke-[1.5] fill-none mt-1"
                style={{ stroke: 'url(#iconStrokeGradient)' }}
              />
              <div>
                <h3 className="text-2xl mb-4 text-[#d4af37] bg-none">
                  {title}
                </h3>
                <p className="text-base">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sustainability;