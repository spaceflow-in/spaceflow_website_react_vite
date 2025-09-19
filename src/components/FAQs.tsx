// File: src/components/FAQs.tsx (New File)

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Accordion from './Accordion';

// --- Data for FAQs ---
const faqsData = [
    {
        question: "How long does a typical project take?",
        answer: "Project timelines vary based on scope and complexity, but a typical office design and build project can take anywhere from 8 to 16 weeks from conception to completion."
    },
    {
        question: "Do you offer free quotes?",
        answer: "Yes, we provide a comprehensive, no-obligation quote after our initial consultation where we discuss your needs, budget, and vision for the new workspace."
    },
    {
        question: "Do you provide post-handover Support?",
        answer: "Absolutely. We offer post-handover support to ensure you are completely satisfied with your new office. We address any issues promptly and efficiently."
    },
    {
        question: "How do I get started with a project?",
        answer: "Getting started is easy! Simply use the 'Get in touch' button to send us an enquiry, and our team will contact you to schedule an initial consultation."
    },
    {
        question: "Where are you based in?",
        answer: "Our headquarters are located in Bengaluru, but we have successfully completed projects for clients all across India, managing everything remotely and on-site."
    }
];

const FAQs: React.FC = () => {
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
                    <div className="lg:w-1/3">
                        <div className="bg-yellow-400 text-black font-sans font-semibold text-sm inline-block px-4 py-1 rounded-full mb-4">
                            FAQs
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-medium text-black mb-6">
                            Answering your questions
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Got more questions? Send us your enquiry below
                        </p>
                        <button
                            className="group inline-flex items-center justify-center gap-4 bg-transparent border border-gray-300 text-black font-body px-4 py-3 rounded-full
                         hover:border-black transition-colors duration-300"
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