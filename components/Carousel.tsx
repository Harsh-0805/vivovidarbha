"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  imageMobile: string;
  imageDesktop: string;
  objectFit?: "cover" | "contain" | "fill";
  objectPosition?: string;
  alt: string; // Add alt text property
  title?: string; // Optional title for SEO
}

const slides: Slide[] = [
  {
    imageMobile: "/assets/banner1.jpg",
    imageDesktop: "/assets/banner1.jpg",
    objectFit: "contain",
    objectPosition: "center",
    alt: "Latest Vivo Smartphones in Nagpur - Premium Models at Best Prices",
    title: "Vivo Premium Smartphones Collection",
  },
  {
    imageMobile: "/assets/banner2.jpg",
    imageDesktop: "/assets/banner2.jpg",
    objectFit: "contain",
    objectPosition: "center",
    alt: "Vivo X Series - Professional Photography Smartphones in Nagpur",
    title: "Vivo X Series Smartphones",
  },
  {
    imageMobile: "/assets/banner3.jpg",
    imageDesktop: "/assets/banner3.jpg",
    objectFit: "contain",
    objectPosition: "center",
    alt: "Vivo V Series - Sleek Design Smartphones Available in Vidarbha Region",
    title: "Vivo V Series Collection",
  },
  {
    imageMobile: "/assets/banner4.jpg",
    imageDesktop: "/assets/banner4.jpg",
    objectFit: "contain",
    objectPosition: "center",
    alt: "Vivo Y Series - Budget Friendly Smartphones with Great Features",
    title: "Affordable Vivo Y Series",
  },
  {
    imageMobile: "/assets/banner5.jpg",
    imageDesktop: "/assets/banner5.jpg",
    objectFit: "contain",
    objectPosition: "center",
    alt: "Vivo Special Offers - Exclusive Deals on Smartphones in Nagpur",
    title: "Exclusive Vivo Deals and Offers",
  },
  {
    imageMobile: "/assets/banner6.jpg",
    imageDesktop: "/assets/banner6.jpg",
    objectFit: "contain",
    objectPosition: "center",
    alt: "Vivo Accessories - Original Vivo Products Available in Nagpur",
    title: "Genuine Vivo Accessories",
  },
];

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [direction, setDirection] = useState(1);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  const handleResize = () => setIsMobile(window.innerWidth < 768); // Tablet breakpoint

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!hovering) {
      slideInterval.current = setInterval(goToNextSlide, 3000);
    }

    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [currentSlide, hovering]);

  const goToPrevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const handleMouseEnter = () => {
    setHovering(true);
    slideInterval.current && clearInterval(slideInterval.current);
  };

  const handleMouseLeave = () => setHovering(false);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: goToNextSlide,
    onSwipedRight: goToPrevSlide,
    trackMouse: true,
  });

  const current = slides[currentSlide];

  return (
    <section
      {...swipeHandlers}
      className="relative w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[500px] flex justify-center items-center overflow-hidden bg-gray-200"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label="Featured Vivo Smartphones and Offers"
    >
      <a
        href="/products"
        className="absolute w-full h-full"
        aria-label={`View ${current.title || "featured products"}`}
      >
        <AnimatePresence custom={direction}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: direction * 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 100 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute w-full h-full flex items-center justify-center"
          >
            <Image
              src={isMobile ? current.imageMobile : current.imageDesktop}
              alt={current.alt}
              title={current.title}
              fill
              sizes="100vw"
              priority
              className={`object-${current.objectFit || "contain"} max-h-full`}
              style={{ objectPosition: current.objectPosition || "center" }}
            />
          </motion.div>
        </AnimatePresence>
      </a>

      {/* Left Arrow */}
      <motion.button
        onClick={goToPrevSlide}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white h-8 w-8 sm:h-12 sm:w-12 rounded-full flex items-center justify-center shadow-lg z-10"
      >
        &larr;
      </motion.button>

      {/* Right Arrow */}
      <motion.button
        onClick={goToNextSlide}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white h-8 w-8 sm:h-12 sm:w-12 rounded-full flex items-center justify-center shadow-lg z-10"
      >
        &rarr;
      </motion.button>

      {/* Indicators */}
      <div
        className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-4 z-10"
        role="tablist"
        aria-label="Carousel Navigation"
      ></div>
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          onClick={() => goToSlide(index)}
          animate={{ scale: index === currentSlide ? 1.3 : 1 }}
          transition={{ duration: 0.3 }}
          className={`cursor-pointer rounded-full ${
            index === currentSlide
              ? "bg-blue-600 w-3 h-3 sm:w-4 sm:h-4"
              : "bg-gray-300 w-2 h-2 sm:w-3 sm:h-3"
          }`}
          role="tab"
          aria-label={`Slide ${index + 1}: ${slide.title || "Featured Item"}`}
          aria-selected={index === currentSlide}
          tabIndex={0}
        ></motion.div>
      ))}
    </section>
  );
};
