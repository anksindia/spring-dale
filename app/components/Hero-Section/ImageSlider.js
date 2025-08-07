"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const images = [
  {
    src: "/photo7.webp",
    showOverlay: true,
    title: "Welcome to Spring Dales",
    caption: "A modern and serene campus experience.",
  },
  {
    src: "/photo5.webp",
    showOverlay: true,
    title: "Well-trained, experienced teachers",
    caption: "Dedicated mentors guiding young minds.",
  },
  {
    src: "/photo9.webp",
    showOverlay: true,
    title: "A Holistic Learning Environment",
    caption: "Blending comfort, care, and creativity.",
  },
  {
    src: "/photo10.webp",
    showOverlay: true,
    title: "Luxury and Serenity",
    caption: "A peaceful environment for growth.",
  },
];

const imageVariants = {
  initial: { opacity: 0, scale: 1.05 },
  animate: { opacity: 1, scale: 1 },
  // exit: { opacity: 0, scale: 0.95 }, // Removing exit for a cleaner transition
};

const overlayVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 40 },
};

const textVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
};

export default function ImageSlider({ className = "" }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);
  const currentImage = images[index];

  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 5000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className={`relative group w-full overflow-hidden shadow-xl ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Image container with Fade-in and Zoom-in Effect */}
      <div className="relative w-full h-[260px] sm:h-[360px] md:h-[36rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage.src}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={currentImage.src}
              alt={currentImage.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Arrows (Desktop only) */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/40 p-2 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Previous"
      >
        <FaChevronLeft size={20} />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/40 p-2 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Next"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Text Overlay with Swipe-up Effect */}
      {currentImage.showOverlay && (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage.title}
            variants={overlayVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`
              absolute bottom-0 left-0 w-full
              px-4 py-4 sm:px-6 sm:py-6
              bg-gradient-to-t from-[#01A6CF] via-[#00ccff] to-transparent
              text-white z-20
              md:max-w-full md:rounded-tr-2xl
            `}
          >
            <motion.h2
              key={`${currentImage.title}-h2`}
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-5xl font-bold  tracking-wide"
            >
              {currentImage.title}
            </motion.h2>
            <motion.p
              key={`${currentImage.title}-p`}
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mt-2 text-sm sm:text-base md:text-lg opacity-90 tracking-wide"
            >
              {currentImage.caption}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}