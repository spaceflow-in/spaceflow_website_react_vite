// File: src/components/Testimonials.tsx (New File)

import React, { useEffect, useRef, useState } from 'react';
// import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

// Import Swiper for mobile
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Import our custom hook
import { useMediaQuery } from '../hooks/useMediaQuery';

import avatar1 from '../images/avatar_1.jpg';
import avatar2 from '../images/avatar_2.jpeg';
import avatar3 from '../images/avatar_3.jpeg';
import avatar4 from '../images/avatar_4.png';
import avatar5 from '../images/avatar_5.jpeg';
import avatar6 from '../images/avatar_6.jpeg';
import { InfiniteTestimonials } from './ui/infinite-testimonials';

// --- Data for Testimonials ---
type Testimonial = {
    quote: string;
    name: string;
    title: string;
    avatar: any;
};

const testimonialsData: Testimonial[] = [
    {
        quote: "Brilliant service from start to finish. The team was professional, communicative, and delivered an office space that exceeded expectations.",
        name: "Rangaswamy SK",
        title: "CFO - Cholamandalam MS",
        avatar: avatar3  // Placeholder avatar
    },
    {
        quote: "Space Flow completely reimagined our office. The design is modern, functional, and perfectly suited to our team's needs. Highly recommend!",
        name: "Chandrashekar Rao",
        title: "CEO - Attic Space",
        avatar: avatar2
    },
    {
        quote: "I couldn't be happier with our new workplace. The attention to detail and quality of work were outstanding. Space Flow made the process stress-free!",
        name: "Saniel Goleccha",
        title: "CEO - Work Square",
        avatar: avatar1
    },
    {
        quote: "Our experience with Space Flow exceeded expectations. Their precision, craftsmanship, and seamless process gave us a workspace we truly love.",
        name: "Sarthak Agarwal",
        title: "Founder - Material Depot",
        avatar: avatar4
    },
    {
        quote: "After working together on 30+ projects, Space Flow feels less like a service provider and more like a trusted partner. Their dedication and seamless execution keep us coming back.",
        name: "Prathiroop M",
        title: "Head of Projects - Wakefit",
        avatar: avatar6
    },
    {
        quote: "From the very first meeting, Space Flow made us feel confident. Every detail was carefully considered, and the final result speaks for itself a workplace we love showing off!",
        name: "Amritanshu Anand",
        title: "Founder - Recruiter Flow",
        avatar: avatar5
    },

];

// --- Reusable Testimonial Card Component ---
const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-white text-black p-8 border-1 border-[#E6E6E6] rounded-2xl h-full flex flex-col mb-10">
        <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />)}
        </div>
        <p className="text-gray-600 leading-relaxed flex-grow">{testimonial.quote}</p>
        <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-200">
            <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
            <div>
                <h4 className="font-sans font-semibold text-black">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm">{testimonial.title}</p>
            </div>
        </div>
    </div>
);

// --- Main Testimonials Component ---
const Testimonials: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<HTMLUListElement>(null);
    const [start, setStart] = useState(false);
    const isDesktop = useMediaQuery('(min-width: 1024px)');

    useEffect(() => {
        // Only run marquee setup on desktop
        if (isDesktop && !start) {
            const addAnimation = () => {
                if (containerRef.current && scrollerRef.current) {
                    const scrollerContent = Array.from(scrollerRef.current.children);
                    scrollerContent.forEach((item) => {
                        const duplicatedItem = item.cloneNode(true);
                        scrollerRef.current?.appendChild(duplicatedItem);
                    });
                    containerRef.current.style.setProperty("--animation-duration", "80s"); // Slower scroll for testimonials
                    containerRef.current.style.setProperty("--animation-direction", "forwards");
                    setStart(true);
                }
            };
            addAnimation();
        }
    }, [isDesktop, start]);

    return (
        <section id="testimonials" className="py-24 bg-white">
            <div className="max-w-screen-xl mx-auto px-2">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="bg-[#FFEA00] text-black font-sans font-semibold text-sm inline-block px-4 py-1 rounded-full mb-4" faq_mobile>
                        Testimonials
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-medium mb-4 text-black">Hear from our clients</h2>
                    <p className="text-lg lg:text-2xl font-extralight text-gray-600 max-w-3xl mx-auto">
                        Hear from our happy clients about their experience working with Spaceflow and the quality of our craftsmanship.
                    </p>
                </div>
            </div>

            {/* Conditional Rendering: Marquee for Desktop, Slider for Mobile */}
            {isDesktop ? (
                <InfiniteTestimonials items={testimonialsData} pauseOnHover={false} />
            ) : (
                <div className="max-w-screen-xl mx-auto px-8">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        className="pb-12" // Add padding-bottom for pagination dots
                    >
                        {testimonialsData.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <TestimonialCard testimonial={testimonial} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )
            }
            <style>{`
        .swiper-pagination-bullet {
          background-color: #6b7280; /* Gray for inactive */
          width: 10px;
          height: 10px;
        }
        .swiper-pagination-bullet-active {
          background-color: #000000; /* Black for active */
        }
      `}</style>
        </section >
    );
};

export default Testimonials;