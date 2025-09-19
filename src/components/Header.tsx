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

// File: src/components/Header.tsx (Updated)

import React, { useState, useEffect } from 'react';
import logo from '../images/spaceflow.avif'; // Your current logo path
import { Menu, X } from 'lucide-react'; // Import the 'X' icon for closing

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Our work' },
  { href: '#services', label: 'Services' },
  { href: '#faqs', label: 'FAQs' },
  { href: '#contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-background/80 backdrop-blur-lg border-b border-white/10'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-screen-xl mx-auto px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src={logo} alt="Spaceflow Logo" className="h-14 w-auto object-contain" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className='bg-primary text-background font-sans font-semibold px-6 py-2.5 rounded-full
                         hover:bg-yellow-400 transition-colors duration-300'
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Toggle state on click
            className="p-2 rounded-full bg-white text-black" // White background, black icon
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg shadow-lg">
          <div className="flex flex-col items-center space-y-6 py-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-text-primary text-xl font-sans"
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;