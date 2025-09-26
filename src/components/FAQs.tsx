// File: src/components/FAQs.tsx (New File)

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Accordion from './Accordion';

// --- Data for FAQs ---
const faqsData = [
    {
        question: "Where are you based in?",
        answer: "We primarily serve Bangalore and Mumbai, but depending on the project, we may be able to travel further. Get in touch to discuss your location and project needs."
    },
    {
        question: "How long does a typical project take?",
        answer: "At SpaceFlow, the duration of a project depends on the size and complexity of the office design. On average, smaller redesigns can take 2–4 weeks, while full office fit-outs typically range from 6–12 weeks. We’ll provide a detailed timeline once we’ve assessed your space and requirements."
    },
    {
        question: "Do you offer free quotes?",
        answer: "Yes! SpaceFlow offers free, no-obligation quotes. After an initial consultation and understanding your design goals, we’ll provide a detailed estimate covering design, materials, and execution costs."
    },
    {
        question: "Do you provide post-handover Support?",
        answer: "Yes, we provide a comprehensive 6 moths of post-handover support. Any warranties are covered during this period. This is part of our service agreement signed before starting any project"
    },
    {
        question: "How do I get started with a project?",
        answer: "Getting started with SpaceFlow is simple. Just reach out through our website or give us a call to schedule your initial consultation. We’ll discuss your goals, assess your space, and take care of everything from concept to completion."
    },

];

const FAQs: React.FC = () => {
    // Function to handle smooth scrolling to the contact section
    const handleScrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    // State to track the currently open accordion index. `null` means all are closed.
    const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(0);

    const handleAccordionClick = (index: number) => {
        // If the clicked accordion is already open, close it. Otherwise, open it.
        setOpenAccordionIndex(openAccordionIndex === index ? null : index);
    };

    return (
        <section id="faqs" className="py-24 bg-white">
            <div className="max-w-screen-xl mx-auto px-8">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Left Column: Title and CTA */}
                    <div className="lg:w-1/3 text-left">
                        <div className="bg-[#FFEA00] text-black font-sans font-semibold text-sm inline-block px-4 py-1 rounded-full mb-4">
                            FAQs
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-medium text-black mb-6">
                            Everything you need to know
                        </h2>
                        <p className="text-lg lg:text-2xl font-extralight text-gray-600 mb-8">
                            Got more questions? Send us your enquiry below
                        </p>
                        <button
                            className="group inline-flex items-center justify-center gap-4 bg-transparent border border-gray-300 text-black font-body px-4 py-3 rounded-full
                         hover:border-black transition-colors duration-300"
                            onClick={handleScrollToContact}
                        >
                            <span>Get in touch</span>
                            <span className="bg-primary text-background w-10 h-10 rounded-full flex items-center justify-center
                               group-hover:scale-110 transition-transform duration-300">
                                <ArrowUpRight size={24} />
                            </span>
                        </button>
                    </div>

                    {/* Right Column: Accordion List */}
                    <div className="lg:w-2/3 flex flex-col gap-4">
                        {faqsData.map((faq, index) => (
                            <Accordion
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openAccordionIndex === index}
                                onClick={() => handleAccordionClick(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQs;