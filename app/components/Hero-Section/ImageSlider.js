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

export default function ImageSlider({ className = "" }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  const currentImage = images[index];

  // Auto-slide logic
  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 4000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div
      className={`
        group w-full overflow-hidden shadow-xl flex flex-col 
        md:relative md:aspect-[16/9] md:h-[34rem] 
        ${className}
      `}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slide Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage.src}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-[240px] sm:h-[320px] md:absolute md:top-0 md:left-0 md:w-full md:h-full"
        >
          <Image
            src={currentImage.src}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2  z-10 opacity-0 group-hover:opacity-100 transition"
        aria-label="Previous Slide"
      >
        <FaChevronLeft size={20} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2  z-10 opacity-0 group-hover:opacity-100 transition"
        aria-label="Next Slide"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Overlay */}
      {currentImage.showOverlay && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
      z-20
      w-full 
      px-3 py-3
      sm:px-4 sm:py-5
      md:px-6 md:py-5
      md:max-w-[60%] lg:max-w-[50%]
      bg-[#0292C5]/90 
      backdrop-blur-md 
      text-white 
      shadow-2xl
      md:absolute md:bottom-0 md:left-0 
      border border-white/10 
      md:text-center
    "
        >
          {currentImage.title && (
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="
          text-xl sm:text-2xl md:text-4xl 
          font-bold leading-snug break-words uppercase
        "
            >
              {currentImage.title}
            </motion.h2>
          )}
          {currentImage.caption && (
            <p className="mt-2 text-sm sm:text-base md:text-lg font-light opacity-90 break-words uppercase">
              {currentImage.caption}
            </p>
          )}
        </motion.div>
      )}

    </div>
  );
}
