// File: src/components/ui/InfiniteTestimonials.tsx (Create this new file)

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../../lib/utils';
import { Star } from 'lucide-react';

// --- Reusable Testimonial Card Component (Internal to this file) ---
type Testimonial = {
    quote: string;
    name: string;
    title: string;
    avatar: string;
};

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-white text-black p-8 rounded-2xl border-1 border-[#E6E6E6] h-full flex flex-col">
        <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />)}
        </div>
        <p className="text-gray-600 leading-relaxed flex-grow text-left">{testimonial.quote}</p>
        <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-200">
            <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
            <div>
                <h4 className="font-sans font-semibold text-black text-left">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm text-left">{testimonial.title}</p>
            </div>
        </div>
    </div>
);


// --- The Main InfiniteTestimonials Marquee Component ---
export const InfiniteTestimonials = ({
    items,
    direction = "left",
    speed = "slow",
    pauseOnHover = true,
    className,
}: {
    items: Testimonial[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<HTMLUListElement>(null);
    const [start, setStart] = useState(false);

    useEffect(() => {
        function addAnimation() {
            if (containerRef.current && scrollerRef.current) {
                const scrollerContent = Array.from(scrollerRef.current.children);
                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true);
                    (duplicatedItem as HTMLElement).setAttribute('aria-hidden', 'true');
                    scrollerRef.current?.appendChild(duplicatedItem);
                });
                getDirection();
                getSpeed();
                setStart(true);
            }
        }
        if (!start) {
            addAnimation();
        }
    }, [start]);

    const getDirection = () => {
        if (containerRef.current) {
            containerRef.current.style.setProperty("--animation-direction", direction === "left" ? "forwards" : "reverse");
        }
    };

    const getSpeed = () => {
        if (containerRef.current) {
            let duration;
            if (speed === "fast") duration = "20s";
            else if (speed === "normal") duration = "40s";
            else duration = "80s";
            containerRef.current.style.setProperty("--animation-duration", duration);
        }
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex w-max min-w-full shrink-0 flex-nowrap gap-8 py-4",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, idx) => (
                    <li key={idx} className="w-[400px] flex-shrink-0">
                        <TestimonialCard testimonial={item} />
                    </li>
                ))}
            </ul>
        </div>
    );
};