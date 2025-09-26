// // File: src/components/About.tsx

// import React from 'react';
// import meetingRoomImage from '../images/meeting-room.jpg';

// const About: React.FC = () => {
//   return (
//     <section id="about" className="py-20 bg-[#1a1a1a]">
//       <div className="max-w-screen-xl mx-auto px-8">
//         <div className="flex flex-col lg:flex-row items-center gap-16">

//           {/* Text Content */}
//           <div className="flex-1 text-left">
//             <h2 className="text-5xl mb-6">Crafting Workspaces That Inspire</h2>
//             <p className="mb-6">
//               Spaceflow transforms offices into productive and inspiring
//               environments. Founded in 2021 in Bangalore, Spaceflow
//               blends functionality with aesthetics, reflecting your brand
//               identity with innovation, collaboration, and client-centricity.
//             </p>
//             <ul className="space-y-3 list-disc list-inside">
//               <li>
//                 <strong className="font-semibold text-gray-300">Mission:</strong> Transform offices into productive and inspiring
//                 environments.
//               </li>
//               <li>
//                 <strong className="font-semibold text-gray-300">Design philosophy:</strong> Blend functionality with aesthetics,
//                 reflecting brand identity.
//               </li>
//               <li>
//                 <strong className="font-semibold text-gray-300">Core values:</strong> Innovation, collaboration, client-centricity,
//                 and sustainability.
//               </li>
//             </ul>
//           </div>

//           {/* Image container */}
//           <div className="flex-1 w-full">
//             <img
//               src={meetingRoomImage}
//               alt="Modern meeting room"
//               className="w-full rounded-lg shadow-lg shadow-black/30 object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

// File: src/components/About.tsx (Refactored)

// import React from 'react';
// import { motion } from 'framer-motion'; // Import framer motion
// import ImageCarousel from './ImageCarousel'; // Import the new carousel component

// const About: React.FC = () => {
//   // Animation variants for text and carousel
//   const textVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
//   };

//   const carouselVariants = {
//     hidden: { opacity: 0, scale: 0.95 },
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } }, // Slight delay for carousel
//   };

//   return (
//     <section id="about" className="py-20 bg-background overflow-hidden">
//       <div className="max-w-screen-xl mx-auto px-8">
//         <div className="flex flex-col lg:flex-row items-center gap-16">

//           {/* Text Content */}
//           <motion.div
//             className="flex-1 text-left"
//             initial="hidden"
//             whileInView="visible"
//             variants={textVariants}
//             viewport={{ once: true, amount: 0.3 }} // Trigger animation once when 30% is in view
//           >
//             <div className="inline-flex items-center gap-2 bg-white/10 text-text-primary px-3 py-1.5 rounded-full text-sm mb-4">
//               <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//               About us
//             </div>
//             <h2 className="text-4xl lg:text-5xl font-bold mb-6">
//               Designing Workplaces that Drive Performance and Innovation
//             </h2>
//             <p className="text-lg text-text-secondary mb-6">
//               At Spaceflow, we blend smart planning with smart design to create bespoke office spaces that reflect each client's unique identity.
//             </p>
//             {/* The list of mission/philosophy/values is removed as per the new design */}
//           </motion.div>

//           {/* Image Carousel */}
//           <motion.div
//             className="flex-1 w-full"
//             initial="hidden"
//             whileInView="visible"
//             variants={carouselVariants}
//             viewport={{ once: true, amount: 0.3 }}
//           >
//             <ImageCarousel />
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

// File: src/components/About.tsx (Rebuilt)

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { InfiniteMarquee } from './ui/infinite-marquee';


// Import your project images
import aboutUs1 from '../images/about_us_1.png';
// import aboutUs2 from '../images/about_us_2.png';
import aboutUs3 from '../images/about_us_3.png';
import aboutUs4 from '../images/about_us_4.png';
import aboutUs5 from '../images/about_us_5.png';
// import aboutUs6 from '../images/about_us_6.png';
// import aboutUs7 from '../images/about_us_7.png';
import aboutUs8 from '../images/about_us_8.png';
import aboutUs9 from '../images/about_us_9.jpeg';
import aboutUs10 from '../images/about_us_10.jpeg';
import aboutUs11 from '../images/about_us_11.jpeg';
import aboutUs12 from '../images/about_us_12.jpeg';


// Array of images for the marquee

const images = [
  aboutUs1,
  // aboutUs2,
  aboutUs8,
  aboutUs3,
  aboutUs9,
  aboutUs4,
  aboutUs10,
  aboutUs5,
  aboutUs11,
  // aboutUs6,
  // aboutUs7,
  aboutUs12,
];

const About: React.FC = () => {
  // --- Start of Infinite Marquee Logic ---
  // const containerRef = useRef<HTMLDivElement>(null);
  // const scrollerRef = useRef<HTMLDivElement>(null);
  // const [start, setStart] = useState(false);

  // useEffect(() => {
  //   // This function duplicates the items and sets up the animation
  //   function addAnimation() {
  //     if (containerRef.current && scrollerRef.current) {
  //       const scrollerContent = Array.from(scrollerRef.current.children);

  //       // Duplicate each image and append it to the scroller
  //       scrollerContent.forEach((item) => {
  //         const duplicatedItem = item.cloneNode(true);
  //         scrollerRef.current?.appendChild(duplicatedItem);
  //       });

  //       // Set CSS variables for animation properties
  //       containerRef.current.style.setProperty("--animation-duration", "40s");
  //       containerRef.current.style.setProperty("--animation-direction", "forwards"); // 'forwards' for left-to-right scroll

  //       // Start the animation
  //       setStart(true);
  //     }
  //   }

  //   // Only run the setup if it hasn't started yet
  //   if (!start) {
  //     addAnimation();
  //   }
  // }, [start]);
  // // --- End of Infinite Marquee Logic ---

  // Animation variant for the text content
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section id="about" className="py-24 bg-background overflow-hidden">
      <div className="max-w-screen-xl text-left mx-auto px-8">
        {/* Top Section: Text Content */}
        <motion.div
          className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-16"
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="lg:w-1/2">
            <div className="bg-[#FFEA00] text-black font-sans font-semibold text-sm inline-block px-4 py-1 rounded-full mb-4">
              About us
            </div>
            <h2 className="text-4xl lg:text-6xl font-medium leading-tight">
              Designing workplaces that drive performance and innovation
            </h2>
          </div>
          <div className="lg:w-1/2 lg:pt-16 lg:mt-45">
            <p className="text-lg font-extralight lg:text-2xl text-text-secondary">
              At Spaceflow, we blend smart planning with smart design to create bespoke office spaces that reflect each client's unique identity.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Section: Infinite Image Marquee */}
      {/* <div
        ref={containerRef}
        className="scroller w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"
      >
        <div
          ref={scrollerRef}
          className={`flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4 ${start ? 'animate-scroll' : ''} hover:[animation-play-state:paused]`}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Office interior ${index + 1}`}
              className="bg-center w-100 h-130 rounded-xl shadow-lg object-cover"
            />
          ))}
        </div>
      </div> */}
      {/* Bottom Section: Now uses the InfiniteMarquee component */}
      <InfiniteMarquee speed="slow" pauseOnHover={true}>
        {images.map((img, index) => (
          <li key={index} className="flex-shrink-0">
            <img
              src={img}
              alt={`Office interior ${index + 1}`}
              className="w-100 h-130 rounded-xl shadow-lg object-cover"
            />
          </li>
        ))}
      </InfiniteMarquee>
    </section>
  );
};

export default About;