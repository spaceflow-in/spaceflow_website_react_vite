// File: src/components/Stats.tsx (New File)

import React from 'react';
import AnimatedCounter from './AnimatedCounter';

const statsData = [
    { value: 100, label: 'Projects Done' },
    { value: 50, label: 'Happy Clients' },
    { value: 10, label: 'Years of Experience' },
    { value: 99, label: 'Success Rate', suffix: '%' },
];

const Stats: React.FC = () => {
    return (
        <section className="bg-background py-16 sm:py-24">
            <div className="max-w-screen-xl mx-auto px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {statsData.map((stat) => (
                        <div key={stat.label}>
                            <h3 className="text-4xl sm:text-5xl font-bold text-primary">
                                {/* Use the animated counter for the number */}
                                <AnimatedCounter to={stat.value} />
                                {stat.suffix || '+'}
                            </h3>
                            <p className="text-sm sm:text-base text-text-secondary mt-2">
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