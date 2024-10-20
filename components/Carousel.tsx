"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable"; // Importing the swipeable hook

interface Slide {
  imageMobile: string;
  imageDesktop: string;
}

const slides: Slide[] = [
  {
    imageMobile: "/assets/banner1.jpg", // Mobile version
    imageDesktop: "/assets/banner1.jpg", // Desktop version
  },
  {
    imageMobile: "/assets/banner2.jpg",
    imageDesktop: "/assets/banner2.jpg",
  },
  {
    imageMobile: "/assets/banner3.jpg",
    imageDesktop: "/assets/banner3.jpg",
  },
  {
    imageMobile: "/assets/banner4.jpg", // Mobile version
    imageDesktop: "/assets/banner4.jpg", // Desktop version
  },
  {
    imageMobile: "/assets/banner5.jpg",
    imageDesktop: "/assets/banner5.jpg",
  },
  {
    imageMobile: "/assets/working.jpg", // Mobile version
    imageDesktop: "/assets/working.jpg", // Desktop version
  },
];

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // To track screen size
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  // Function to handle screen resize and detect if it's mobile
  const handleResize = () => {
    setIsMobile(window.innerWidth < 640); // Tailwind's sm breakpoint is 640px
  };

  useEffect(() => {
    handleResize(); // Check on component mount
    window.addEventListener("resize", handleResize); // Add event listener

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on unmount
    };
  }, []);

  useEffect(() => {
    if (!hovering) {
      slideInterval.current = setInterval(() => {
        goToNextSlide();
      }, 5000);
    }

    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [currentSlide, hovering]);

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleMouseEnter = () => {
    setHovering(true);
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  // Swipe Handlers using react-swipeable
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => goToNextSlide(),
    onSwipedRight: () => goToPrevSlide(),
    trackMouse: true,
  });

  const current = slides[currentSlide];

  return (
    <section
      {...swipeHandlers} // Applying swipe handlers
      className="relative w-full h-full sm:h-[450px] md:h-[550px] bg-cover bg-center flex justify-center items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a href="/products">
        {/* Displaying the image using the img tag */}
        <Image
          src={isMobile ? current.imageMobile : current.imageDesktop}
          alt={`Slide ${currentSlide}`}
          width={1920} // Specify the image's width
          height={1080} // Specify the image's height
          className="w-full h-full object-cover"
        />
      </a>
      {/* Arrow Buttons for large screens */}
      <div className="hidden sm:block absolute left-4 top-1/2 transform -translate-y-1/2">
        <button
          onClick={goToPrevSlide}
          className="bg-blue-600 text-white h-12 w-12 rounded-full"
        >
          &larr;
        </button>
      </div>
      <div className="hidden sm:block absolute right-4 top-1/2 transform -translate-y-1/2">
        <button
          onClick={goToNextSlide}
          className="bg-blue-600 text-white h-12 w-12 rounded-full"
        >
          &rarr;
        </button>
      </div>
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`sm:w-4 sm:h-4 h-2 w-2 rounded-full cursor-pointer ${
              index === currentSlide ? "bg-blue-600" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};
