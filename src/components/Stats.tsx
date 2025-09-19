// File: src/components/Stats.tsx (New File)

import React from 'react';
import AnimatedCounter from './AnimatedCounter';

const statsData = [
    { value: 5, label: 'Years of expertise' },
    { value: 50, label: 'Happy Customers' },
    { value: 3, suffix: 'L+', label: 'Sqft Delivered Successfully' },
    { value: 15, label: 'Cities all over India' },
];

const Stats: React.FC = () => {
    return (
        <section className="bg-background">
            <div className="max-w-screen-xl mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-left">
                    {statsData.map((stat) => (
                        <div key={stat.label}>
                            <h3 className="text-7xl  font-light text-primary">
                                {/* Use the animated counter for the number */}
                                <AnimatedCounter to={stat.value} />
                                {stat.suffix || '+'}
                            </h3>
                            <p className="text-lg  mt-2">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;