// File: src/components/Contact.tsx (New File)

import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

// Import the image for the contact section
import contactImage from '../images/intouch.png'; // Make sure to add an appropriate image

// --- Data for Contact Details and Social Links ---
const contactDetails = [
    { label: "Office", value: "234, 9th Main, 16th Cross, HSR Layout, Sec 6, Bengaluru" },
    { label: "Email", value: "hello@spaceflow.in", href: "mailto:hello@spaceflow.in" },
    { label: "Telephone", value: "9599596773", href: "tel:+919599596773" },
];

const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/spaceflow-in" },
];

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-24 bg-white">
            <div className="max-w-screen-xl mx-auto px-8">
                {/* Main contact card */}
                <motion.div
                    className="bg-[#1C1C1E] rounded-3xl p-8 md:p-12 lg:p-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">

                        {/* Left Column: Text Content */}
                        <div className="text-white">
                            <div className="bg-[#FFEA00] text-black font-sans font-semibold text-sm inline-block px-4 py-1.5 rounded-full mb-4">
                                Contact
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-medium mb-6">
                                Get in touch
                            </h2>
                            <p className="text-lg text-text-secondary max-w-md mb-8">
                                For any inquiries or to explore your vision further, we invite you to contact our professional team using the details provided below.
                            </p>

                            {/* Contact Details */}
                            <div className="space-y-6 border-t border-gray-700 pt-8">
                                {contactDetails.map((detail) => (
                                    <div key={detail.label} className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                                        <p className="text-text-secondary">{detail.label}</p>
                                        <a href={detail.href || '#'} className="font-medium text-white text-left sm:text-right hover:text-primary transition-colors">
                                            {detail.value}
                                        </a>
                                    </div>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div className="flex items-center gap-6 mt-12 border-t border-gray-700 pt-8">
                                <p className="text-text-secondary">Follow us</p>
                                <div className="flex gap-4">
                                    {socialLinks.map(({ icon: Icon, href }, index) => (
                                        <a key={index} href={href} className="text-white hover:text-primary transition-colors">
                                            <Icon size={24} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Image */}
                        <div className="w-full h-full">
                            <img
                                src={contactImage}
                                alt="Modern office hallway"
                                className="w-full h-full bg-center rounded-2xl"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Copyright Notice */}
                <div className="text-center mt-12">
                    <p className="text-gray-500 text-sm">
                        Copyright © Spaceflow 2025
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;