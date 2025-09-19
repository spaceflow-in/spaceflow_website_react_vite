// File: src/components/ImageCarousel.tsx (New File)

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// Import your project images (ensure these paths are correct)
import projectImage1 from '../images/portfolio1.jpg';
import projectImage2 from '../images/portfolio2.jpg';
import projectImage3 from '../images/portfolio3.jpg';
import projectImage4 from '../images/portfolio4.jpg';
// Add more images as needed

const projectImages = [
    projectImage1,
    projectImage2,
    projectImage3,
    projectImage4,
];

const ImageCarousel: React.FC = () => {
    return (
        <div className="w-full max-w-3xl mx-auto lg:max-w-none lg:mx-0">
            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                spaceBetween={30} // Space between slides
                slidesPerView={1} // Show one slide at a time
                loop={true} // Infinite loop
                autoplay={{
                    delay: 5000, // Delay between transitions in ms
                    disableOnInteraction: false, // Autoplay continues even after user interaction
                }}
                pagination={{
                    clickable: true, // Allows clicking on dots to change slide
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                className="mySwiper" // Custom class for styling
            >
                {projectImages.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={img}
                            alt={`Office space design ${index + 1}`}
                            className="w-full rounded-xl shadow-lg shadow-black/30 object-cover"
                            style={{ aspectRatio: '16 / 9' }} // Maintain aspect ratio for consistency
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Elements (Optional, Swiper provides defaults too) */}
            {/* Swiper default navigation elements are often sufficient, 
          but you can add custom ones if needed. For this design, 
          the dots (pagination) are more prominent. */}

            {/* Styling for the Swiper container and elements will be done via CSS or Tailwind */}
            <style>{`
        .mySwiper .swiper-pagination-bullet {
          background-color: #E4B400; /* Gold color for pagination dots */
          width: 12px;
          height: 12px;
          opacity: 0.7;
        }
        .mySwiper .swiper-pagination-bullet-active {
          opacity: 1;
        }
        .mySwiper .swiper-button-next,
        .mySwiper .swiper-button-prev {
            color: #E4B400; /* Gold color for navigation arrows */
            opacity: 0.7;
            transition: opacity 0.3s ease;
        }
        .mySwiper .swiper-button-next:hover,
        .mySwiper .swiper-button-prev:hover {
            opacity: 1;
        }
        /* Ensure images don't overflow container if aspect ratio differs */
        .mySwiper .swiper-slide img {
            display: block;
        }
      `}</style>
        </div>
    );
};

export default ImageCarousel;