// File: src/components/Accordion.tsx (Create this new file)

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

type AccordionProps = {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
};

const Accordion: React.FC<AccordionProps> = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border border-gray-200 rounded-xl overflow-hidden">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center p-6 text-left"
            >
                <h3 className="text-lg font-medium text-black">{question}</h3>
                <div className="flex-shrink-0">
                    {isOpen ? <Minus size={24} className="text-gray-500" /> : <Plus size={24} className="text-gray-500" />}
                </div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: 'auto' },
                            collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                    >
                        <p className="p-6 pt-0 text-gray-600">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Accordion;