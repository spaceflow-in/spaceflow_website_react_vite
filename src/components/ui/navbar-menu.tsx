// File: src/components/ui/navbar-menu.tsx (Create this new folder and file)

"use client";
import React from "react";
import { motion } from "framer-motion"; // Note: I'm using framer-motion as it's already in the project
import { cn } from "../../lib/utils";

const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
};

export const MenuItem = ({
    setActive,
    active,
    item,
    children,
    href
}: {
    setActive: (item: string) => void;
    active: string | null;
    item: string;
    children?: React.ReactNode;
    href?: string;
}) => {
    return (
        <div onMouseEnter={() => setActive(item)} className="relative p-2">
            <motion.a
                href={href || "#"}
                transition={{ duration: 0.3 }}
                className="cursor-pointer text-text-secondary hover:text-text-primary"
            >
                {item}
            </motion.a>
            {active !== null && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={transition}
                >
                    {active === item && (
                        <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
                            <motion.div
                                transition={transition}
                                layoutId="active" // layoutId ensures smooth animation
                                className="bg-background/80 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 shadow-xl"
                            >
                                <motion.div
                                    layout // layout ensures smooth animation
                                    className="w-max h-full p-4"
                                >
                                    {children}
                                </motion.div>
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            )}
        </div>
    );
};

export const Menu = ({
    setActive,
    children,
}: {
    setActive: (item: string | null) => void;
    children: React.ReactNode;
}) => {
    return (
        <nav
            onMouseLeave={() => setActive(null)} // resets the state
            className="relative rounded-full border border-white/10 bg-background/50 shadow-lg flex justify-center space-x-4 px-8 py-4 "
        >
            {children}
        </nav>
    );
};

export const ProductItem = ({
    title,
    description,
    href,
    src,
}: {
    title: string;
    description: string;
    href: string;
    src: string;
}) => {
    return (
        <a href={href} className="flex space-x-4">
            <img src={src} width={140} height={70} alt={title} className="flex-shrink-0 rounded-md shadow-2xl" />
            <div>
                <h4 className="text-xl font-bold mb-1 text-white">{title}</h4>
                <p className="text-text-secondary text-sm max-w-[12rem]">{description}</p>
            </div>
        </a>
    );
};

export const HoveredLink = ({ children, ...rest }: any) => {
    return (
        <a {...rest} className="text-text-secondary hover:text-white">
            {children}
        </a>
    );
};