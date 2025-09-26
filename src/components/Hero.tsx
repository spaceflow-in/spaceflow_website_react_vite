// File: src/components/Hero.tsx (Rebuilt)

import React from 'react';
import heroImage from '../images/hero_image.png'; // NOTE: You should replace this with the new image
import { ArrowUpRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    // Function to handle smooth scrolling to the contact section
    const handleScrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (<motion.div
        // className="bg-[#1C1C1E] rounded-3xl p-8 md:p-12 lg:p-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
    >
        <section
            id="home"
            // Mobile: Full-bleed background image. Desktop: Standard background color.
            className="relative h-200 flex bg-white"
        // style={{ backgroundImage: `url(${heroImage})` }}
        >
            {/* Mobile-only Dark Overlay */}
            <div className="absolute inset-0 bg-cover bg-center lg:hidden" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroImage})` }}></div>

            <div className="relative z-10 max-w-screen-xl mx-auto px-8 w-full flex items-center">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 w-full">

                    {/* Left Column: Text Content */}
                    <div className="flex-1 text-left">
                        <div className="inline-flex items-center gap-2 text-white bg-white/10 px-3 py-1.5 rounded-full text-sm mb-4 lg:bg-gray-100 lg:text-gray-800 lg:border lg:border-gray-200">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            Available for work
                        </div>
                        <h1 className="text-5xl md:text-6xl font-medium text-white lg:text-black mb-6">
                            Crafting Tomorrow's Workspaces, Today
                        </h1>
                        <p className="text-lg md:text-2xl text-gray-400 font-extralight lg:text-black mb-10">
                            Where creativity meets functionality to shape inspiring office environments.
                        </p>
                        <button
                            className="group inline-flex items-center justify-center gap-4 bg-transparent border border-white/50 text-white font-body px-4 py-3 rounded-full lg:text-gray-800 lg:border-gray-300 hover:border-white lg:hover:border-black transition-colors duration-300"
                            onClick={handleScrollToContact}
                        >
                            <span>Contact Us</span>
                            <span className="bg-primary text-background w-10 h-10 rounded-full flex items-center justify-center
                               group-hover:scale-110 transition-transform duration-300">
                                <ArrowUpRight size={24} />
                            </span>
                        </button>
                    </div>

                    {/* Right Column: Image and Testimonial (Desktop Only) */}
                    <div className="hidden lg:flex flex-1 justify-center relative">
                        <img
                            src={heroImage}
                            alt="Modern office interior with stylish lighting"
                            className="rounded-3xl w-150 h-200 max-w-md object-cover shadow-2xl shadow-black/40"
                        />

                        {/* Testimonial Card Overlay */}
                        <div className="absolute -bottom-8 -right-1 w-80 bg-black/50 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                            <div className="flex gap-1 mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                            <p className="text-white text-sm leading-relaxed">
                                "Space flow has been a game-changer for our office. Their ability to blend functionality with exquisite design is unparalleled."
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </motion.div>
    );
};

export default Hero;