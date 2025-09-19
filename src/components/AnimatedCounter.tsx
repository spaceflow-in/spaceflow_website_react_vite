// File: src/components/AnimatedCounter.tsx (New File)

import React, { useEffect, useRef } from 'react';
import { useInView, animate, motion } from 'framer-motion';

type AnimatedCounterProps = {
    from?: number;
    to: number;
    animationOptions?: object;
};

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ from = 0, to, animationOptions }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (inView && ref.current) {
            const controls = animate(from, to, {
                duration: 2, // Animation duration
                ease: "easeOut",
                ...animationOptions,
                onUpdate(value) {
                    // Ensure the ref is still mounted before updating
                    if (ref.current) {
                        ref.current.textContent = Math.round(value).toString();
                    }
                },
            });
            // Cleanup function to stop the animation if the component unmounts
            return () => controls.stop();
        }
    }, [inView, from, to, animationOptions]);

    // Render the component as a motion.span for framer-motion to use
    return <motion.span ref={ref} />;
};

export default AnimatedCounter;