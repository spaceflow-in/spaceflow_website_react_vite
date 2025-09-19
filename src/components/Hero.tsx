// File: src/components/Hero.tsx (Rebuilt)

import React from 'react';
import heroImage from '../images/header-bg.jpg'; // NOTE: You should replace this with the new image
import { ArrowUpRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section
            id="home"
            // Mobile: Full-bleed background image. Desktop: Standard background color.
            className="relative min-h-screen flex items-center bg-cover bg-center lg:bg-none"
        // style={{ backgroundImage: `url(${heroImage})` }}
        >
            {/* Mobile-only Dark Overlay */}
            <div className="absolute inset-0 bg-background/70 lg:hidden"></div>

            <div className="relative z-10 max-w-screen-xl mx-auto px-8 w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

                    {/* Left Column: Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 bg-white/10 text-text-primary px-3 py-1.5 rounded-full text-sm mb-4">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            Available for work
                        </div>
                        <h1 className="text-4xl md:text-6xl font-medium mb-6">
                            Crafting Tomorrow's Workspaces, Today
                        </h1>
                        <p className="text-lg md:text-xl text-text-secondary mb-10">
                            Where creativity meets functionality to shape inspiring office environments.
                        </p>
                        <button
                            className="group inline-flex items-center justify-center gap-4 bg-transparent border border-white/50 text-text-primary font-body px-4 py-3 rounded-full
                         hover:border-white transition-colors duration-300"
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
                            className="rounded-3xl w-full max-w-md object-cover shadow-2xl shadow-black/40"
                        />

                        {/* Testimonial Card Overlay */}
                        <div className="absolute -bottom-12 -right-12 w-80 bg-black/50 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                            <div className="flex gap-1 mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} className="text-primary fill-primary" />
                                ))}
                            </div>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                "Space flow has been a game-changer for our office. Their ability to blend functionality with exquisite design is unparalleled."
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;