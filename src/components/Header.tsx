// // File: src/components/Header.tsx

// import React from 'react';

// // Import images directly to be used in the component
// import logo from '../images/Spaceflow Golden With caption.png';
// import headerBg from '../images/header-bg.jpg';

// const Header: React.FC = () => {
//   const handleContactClick = () => {
//     const contactSection = document.getElementById('contact');
//     if (contactSection) {
//       contactSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <>
//       {/* Top Bar Section */}
//       <header className="absolute top-0 left-0 right-0 z-20 px-5 py-4">
//         <div className="flex items-center justify-end max-w-screen-xl mx-auto">
//           <button
//             onClick={handleContactClick}
//             className="border-2 border-[#e4cb80] px-6 py-2.5 text-[#e4cb80] bg-transparent cursor-pointer 
//                        transition-colors duration-300 rounded font-semibold hover:bg-[#e4cb80]/10"
//           >
//             Contact Us
//           </button>
//         </div>
//       </header>

//       {/* Main Header/Hero Section */}
//       <div
//         className="h-screen bg-cover bg-center flex items-center justify-center text-center relative"
//         style={{ backgroundImage: `url(${headerBg})` }}
//       >
//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-black/70"></div>

//         <img
//           src={logo}
//           alt="Spaceflow Logo"
//           className="absolute top-4 left-10 w-[120px] h-[120px] max-[450px]:w-[100px] max-[450px]:h-[100px] object-contain z-10"
//         />

//         <div className="relative z-10 max-w-screen-lg px-5">
//           <h1 className="text-6xl mb-5">Spaceflow - Office Design Experts</h1>
//           <p className="text-xl">
//             Transforming workplaces into inspiring environments across India.
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;


// File: src/components/Header.tsx (Refactored)

// import React, { useState, useEffect } from 'react';
// import logo from '../images/spaceflow.avif'; // Reusing the logo for now
// import { Menu } from 'lucide-react';

// const navLinks = [
//   { href: '#about', label: 'About' },
//   { href: '#work', label: 'Our work' },
//   { href: '#services', label: 'Services' },
//   { href: '#faqs', label: 'FAQs' },
//   { href: '#contact', label: 'Contact' },
// ];

// const Header: React.FC = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       // Set state to true if user has scrolled more than 50px, false otherwise
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);

//     // Cleanup function to remove the event listener
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const handleContactClick = () => {
//     const contactSection = document.getElementById('contact'); // This will point to a future component
//     if (contactSection) {
//       contactSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <header
//       className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
//         ? 'bg-background/80 backdrop-blur-lg border-b border-white/10'
//         : 'bg-transparent'
//         }`}
//     >
//       <div className="max-w-screen-xl mx-auto px-8 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <a href="#" className="flex items-center">
//           <img src={logo} alt="Spaceflow Logo" className="h-14 w-auto object-contain" />
//         </a>

//         {/* Contact Button */}
//         {/* <button
//           onClick={handleContactClick}
//           className="bg-primary text-background font-sans font-semibold px-6 py-2.5 rounded-full
//                      hover:bg-yellow-400 transition-colors duration-300"
//         >
//           Contact Us
//         </button> */}
//         {/* Desktop Navigation */}
//         <nav
//           className="hidden lg:flex"// items-center bg-white/10 backdrop-blur-md rounded-full border border-white/20 px-3 py-1.5"
//         >
//           {navLinks.map((link) => (
//             <a
//               key={link.label}
//               href={link.href}
//               // className="text-text-secondary hover:text-text-primary px-4 py-1.5 rounded-full 
//               //             transition-colors duration-300 text-sm font-medium"
//               className='bg-primary text-background font-sans font-semibold px-6 py-2.5 rounded-full
//                      hover:bg-yellow-400 transition-colors duration-300'
//             >
//               {link.label}
//             </a>
//           ))}
//         </nav>

//         {/* Mobile Menu Button */}
//         <div className="lg:hidden">
//           <button className="p-2 rounded-full text-white bg-white/10 border border-white/20 backdrop-blur-md">
//             <Menu size={20} />
//           </button>
//         </div>


//       </div>
//     </header>
//   );
// };

// export default Header;

// File: src/components/Header.tsx (Updated) (IN-USE)

// import React, { useState, useEffect } from 'react';
// import logo from '../images/spaceflow.avif'; // Your current logo path
// import { Menu, X } from 'lucide-react'; // Import the 'X' icon for closing

// const navLinks = [
//   { href: '#about', label: 'About' },
//   { href: '#work', label: 'Our work' },
//   { href: '#services', label: 'Services' },
//   { href: '#faqs', label: 'FAQs' },
//   { href: '#contact', label: 'Contact' },
// ];

// const Header: React.FC = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <header
//       className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
//         ? 'bg-background/80 backdrop-blur-lg border-b border-white/10'
//         : 'bg-transparent'
//         }`}
//     >
//       <div className="max-w-screen-xl mx-auto px-8 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <a href="#" className="flex items-center">
//           <img src={logo} alt="Spaceflow Logo" className="h-14 w-auto object-contain" />
//         </a>

//         {/* Desktop Navigation */}
//         <nav className="hidden lg:flex items-center space-x-2">
//           {navLinks.map((link) => (
//             <a
//               key={link.label}
//               href={link.href}
//               className='bg-primary text-background font-sans font-semibold px-6 py-2.5 rounded-full
//                          hover:bg-yellow-400 transition-colors duration-300'
//             >
//               {link.label}
//             </a>
//           ))}
//         </nav>

//         {/* Mobile Menu Button */}
//         <div className="lg:hidden">
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Toggle state on click
//             className="p-2 rounded-full bg-white text-black" // White background, black icon
//           >
//             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Overlay */}
//       {isMobileMenuOpen && (
//         <nav className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg shadow-lg">
//           <div className="flex flex-col items-center space-y-6 py-8">
//             {navLinks.map((link) => (
//               <a
//                 key={link.label}
//                 href={link.href}
//                 className="text-text-primary text-xl font-sans"
//                 onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
//               >
//                 {link.label}
//               </a>
//             ))}
//           </div>
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Header;

// File: src/components/Header.tsx (Final Rebuilt Version)

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as MenuIcon, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { Menu, MenuItem, ProductItem, HoveredLink } from './ui/navbar-menu';
import logo from '../images/spaceflow.avif';


const mobileNavLinks = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Our Work' },
  { href: '#services', label: 'Services' },
  { href: '#faqs', label: 'FAQs' },
  { href: '#contact', label: 'Contact' },
];

// --- Floating Navbar for Desktop ---
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-6 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        {mobileNavLinks.map((link) => (
          <MenuItem href={link.href} item={link.label} key={link.label}>

          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

// --- Main Header Component (Orchestrator) ---
const Header: React.FC = () => {
  const [active, setActive] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);



  return (
    <>
      {/* --- Desktop Header with Two Floating Pills --- */}
      <header className="hidden lg:block fixed top-4 inset-x-4 z-50">
        {/* This container is transparent and only positions the two pills */}
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">

          {/* Pill 1: The Logo */}
          <a href="#" className="flex-shrink-0 p-2 rounded-full bg-background/80 backdrop-blur-lg border border-white/10">
            <img src={logo} alt="Spaceflow Logo" className="h-20 w-auto object-contain" />
          </a>

          {/* Pill 2: The Navigation Menu */}
          <div className="flex-shrink-0 rounded-full bg-background/80 backdrop-blur-lg border border-white/10">
            <Menu setActive={setActive}>
              {mobileNavLinks.map((link) => (
                <MenuItem
                  key={link.label}
                  setActive={setActive}
                  active={active}
                  item={link.label}
                  href={link.href}
                >
                  {link.dropdownContent}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </div>
      </header>

      {/* --- Mobile Header Bar --- */}
      <header className="lg:hidden fixed top-4 inset-x-4 z-50 flex justify-between items-center p-2 rounded-full bg-background/80 backdrop-blur-lg border border-white/10">
        <a href="#" className="flex items-center">
          <img src={logo} alt="Spaceflow Logo" className="h-12 w-auto object-contain" />
        </a>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-full bg-white text-black"
        >
          {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </header>

      {/* --- Mobile Menu Overlay with Background Blur --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-40 bg-background/80 backdrop-blur-lg"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {mobileNavLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-text-primary text-3xl font-sans"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;