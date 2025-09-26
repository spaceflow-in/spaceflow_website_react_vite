// File: src/components/ui/InfiniteMarquee.tsx (Create this new file)

"use client";
import { cn } from "../../lib/utils"; // Assuming you have this utility
import React, { useEffect, useState, useRef } from "react";

export const InfiniteMarquee = ({
    children,
    direction = "left",
    speed = "normal",
    pauseOnHover = true,
    className,
}: {
    children: React.ReactNode;
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
        addAnimation();
    }, []);

    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty("--animation-direction", "forwards");
            } else {
                containerRef.current.style.setProperty("--animation-direction", "reverse");
            }
        }
    };

    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller w-full overflow-hidden", //[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {/* Render children directly instead of mapping over items */}
                {children}
            </ul>
        </div>
    );
};