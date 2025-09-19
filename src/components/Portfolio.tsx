import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// Import your portfolio images
import decathlonImg from '../images/portfolio1.jpg';
import atticSpaceImg from '../images/portfolio2.jpg';
import grantThorntonImg from '../images/portfolio3.jpg';
import cholamandalamImg from '../images/portfolio4.jpg';

type Project = {
  images: string;
  name: string;
  location: string;
};

// const projectsData: Project[] = [
//   { image: decathlonImg, name: 'Decathlon', location: 'Bengaluru' },
//   { image: atticSpaceImg, name: 'Attic Space', location: 'Bengaluru' },
//   { image: grantThorntonImg, name: 'Grant Thornton', location: 'Kolkata' },
//   { image: cholamandalamImg, name: 'Cholamandalam MS', location: 'New Delhi' },
// ];

const projectsData: Project[] = [
  { images: [decathlonImg], name: 'DECATHLON', location: 'BENGALURU' },
  { images: [atticSpaceImg], name: 'ATTIC SPACE', location: 'BENGALURU' },
  { images: [grantThorntonImg], name: 'GRANT THORNTON', location: 'KOLKATA' },
  { images: [cholamandalamImg], name: 'CHOLAMANDALAM MS', location: 'NEW DELHI' },
];

// Animation variants for the container to stagger children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Each child will animate 0.3s after the previous one
    },
  },
};

// Animation variants for each card
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};


// const Portfolio: React.FC = () => {
//   return (
//     <section id="work" className="py-24">
//       <div className="max-w-screen-xl mx-auto px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <div className="bg-yellow-400 text-black font-sans font-semibold text-sm inline-block px-4 py-1 rounded-full mb-4">
//             Our Work
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-medium mb-4 text-black">Designed by Spaceflow</h2>
//           <p className="text-lg text-black max-w-2xl mx-auto">
//             Discover the workplaces we've brought to life.
//           </p>
//         </div>

//         {/* Projects List */}
//         <div className="flex flex-col gap-12 lg:gap-16">
//           {projectsData.map((project, index) => (
//             <div key={project.name} className="group">
//               <a href="#" className="block relative">
//                 {/* Image Container */}
//                 <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-black/30">
//                   <img
//                     src={project.image}
//                     alt={`Project at ${project.name}, ${project.location}`}
//                     className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
//                   />

//                   {/* Desktop-only: White circular cutout with text */}
//                   <div className="hidden lg:block">
//                     {/* White circle background */}
//                     <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full transform translate-x-1/2 translate-y-1/2 transition-transform duration-500 ease-in-out group-hover:scale-[1.1]" />

//                     {/* Text content positioned over the circle */}
//                     <div className="absolute bottom-8 right-8 text-right z-10">
//                       <h3 className="font-sans font-semibold text-2xl text-white leading-tight mr-20">{project.name}</h3>
//                       <p className="text-white text-base mr-20">-{project.location}</p>
//                     </div>

//                     {/* Arrow icon in the center of the circle */}
//                     <div className="absolute bottom-6 right-6 w-12 h-12 bg-black rounded-full flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       <ArrowUpRight size={24} className="text-white" />
//                     </div>
//                   </div>

//                   {/* Mobile-only: Text at bottom-left, yellow arrow at bottom-right */}
//                   <div className="lg:hidden">
//                     {/* Text content at bottom-left */}
//                     <div className="absolute bottom-6 left-6 z-10">
//                       <h3 className="font-sans font-semibold text-2xl text-white leading-tight">{project.name}</h3>
//                       <p className="text-gray-300 text-base">-{project.location}</p>
//                     </div>

//                     {/* Yellow arrow button at bottom-right */}
//                     <div className="absolute bottom-6 right-6 bg-yellow-400 text-black w-14 h-14 rounded-full flex items-center justify-center z-10">
//                       <ArrowUpRight size={28} />
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Portfolio;

// --- Reusable ProjectCard Component with Infinite Marquee ---
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    function addAnimation() {
      if (containerRef.current && scrollerRef.current) {
        const scrollerContent = Array.from(scrollerRef.current.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          scrollerRef.current?.appendChild(duplicatedItem);
        });
        containerRef.current.style.setProperty("--animation-duration", "30s");
        containerRef.current.style.setProperty("--animation-direction", "forwards");
        setStart(true);
      }
    }
    if (!start) {
      addAnimation();
    }
  }, [start]);

  return (
    <a href="#" className="block relative group">
      {/* --- Marquee Image Background --- */}
      <div
        ref={containerRef}
        className="relative h-[450px] overflow-hidden rounded-2xl shadow-2xl shadow-black/30 [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]"
      >
        <div
          ref={scrollerRef}
          className={`absolute top-0 left-0 flex w-max min-w-full shrink-0 flex-nowrap gap-4 ${start ? 'animate-scroll' : ''} group-hover:[animation-play-state:paused]`}
        >
          {project.images.map((img, index) => (
            <img key={index} src={img} alt={`${project.name} image ${index + 1}`} className="h-[450px] w-auto object-cover" />
          ))}
          {/* Duplicated content is added by useEffect */}
        </div>
      </div>

      {/* --- UI Overlays --- */}
      {/* Desktop-only: White circular cutout with text */}
      <div className="hidden lg:block">
        <div className="absolute -bottom-4 -right-4 w-100 h-26  bg-black/20 backdrop-blur-sm rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-[1.2]" />
        <div className="absolute bottom-4 right-8 mr-20 text-right z-10 text-white">
          <h3 className="font-sans font-semibold text-2xl leading-tight">{project.name}</h3>
          <p className="text-white font-extralight">-{project.location}</p>
        </div>
        <div className="absolute bottom-4 right-8 w-14 h-14 bg-black rounded-full flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowUpRight size={28} className="text-white" />
        </div>
      </div>

      {/* Mobile-only: Text and Arrow */}
      <div className="lg:hidden absolute bottom-4 left-0 right-0 px-4 flex justify-between items-end">
        <div className="z-10 text-white p-2 bg-black/20 backdrop-blur-sm rounded-lg">
          <h3 className="font-sans font-semibold text-2xl leading-tight">{project.name}</h3>
          <p className="text-gray-300 text-base">-{project.location}</p>
        </div>
        <div className="bg-white text-background w-14 h-14 rounded-full flex items-center justify-center z-10">
          <ArrowUpRight size={28} />
        </div>
      </div>
    </a>
  );
};

// --- Main Portfolio Component ---
const Portfolio: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-white">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="bg-yellow-400 text-black font-sans font-semibold text-sm inline-block px-4 py-1 rounded-full mb-4">
            Our Work
          </div>
          <h2 className="text-4xl lg:text-5xl font-medium mb-4 text-black">Designed by Spaceflow</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the workplaces we've brought to life.
          </p>
        </div>

        <div className="flex flex-col gap-12 lg:gap-24">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.name + index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;