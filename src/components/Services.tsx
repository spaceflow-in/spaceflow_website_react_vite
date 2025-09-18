// File: src/components/Services.tsx

import React from 'react';
import officeSpaceImage from '../images/office-space.jpg';
import { Clipboard, Leaf, Lightbulb, PaintRoller, Plane, Sofa } from 'lucide-react';

// Define the structure for a service item
type Service = {
  icon: React.ElementType;
  title: string;
  description: string;
};

// Data array for all services
const servicesData: Service[] = [
  { icon: Plane, title: 'Space Planning', description: 'Maximize space utilization and workflow efficiency, reduce wasted space.' },
  { icon: PaintRoller, title: 'Interior Design', description: 'Create visually appealing and brand-aligned environments. Increase employee satisfaction.' },
  { icon: Sofa, title: 'Furniture Selection', description: 'Curate ergonomic and stylish furniture solutions. Reduce employee absenteeism.' },
  { icon: Clipboard, title: 'Project Management', description: 'Seamless execution from concept to completion. Ensure on-time and within-budget project delivery.' },
  { icon: Leaf, title: 'Sustainable Design', description: 'Incorporate eco-friendly materials and practices. Achieve LEED certification.' },
  { icon: Lightbulb, title: 'Workplace Strategy', description: 'Align design with organizational goals and culture.' },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-[#1a1a1a]">
      {/* 
        Define the SVG gradient once in a hidden SVG.
        Icons can then reference it by its ID 'iconStrokeGradient'.
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
        <h2 className="text-5xl mb-8">Tailored Solutions for Every Business</h2>

        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Service items grid */}
          <div className="flex-[2] grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-4 text-left">
            {servicesData.map(({ icon: Icon, title, description }) => (
              <div key={title} className="p-4">
                <Icon
                  className="w-12 h-12 mb-2 stroke-[1.5] fill-none"
                  style={{ stroke: 'url(#iconStrokeGradient)' }}
                />
                {/* 
                  Override the global h3 gradient with a solid color by using 
                  a text color utility and removing the background image.
                */}
                <h3 className="text-2xl mb-3 font-normal text-[#CFCBBF] bg-none">
                  {title}
                </h3>
                <p className="text-base">{description}</p>
              </div>
            ))}
          </div>

          {/* Image container */}
          <div className="flex-1 w-full">
            <img
              src={officeSpaceImage}
              alt="Modern office space"
              className="w-full h-[35rem] rounded-lg shadow-lg shadow-black/30 object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;