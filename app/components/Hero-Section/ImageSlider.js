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
    caption: "",
  },
  {
    src: "/photo5.webp",
    showOverlay: true,
    title: "Well-trained, experienced teachers",
    caption: "",
  },
  {
    src: "/photo9.webp",
    showOverlay: false, 
  },
  {
    src: "/photo10.webp",
    showOverlay: true,
    title: "Luxury and Serenity",
    caption: "",
  },
];

export default function ImageSlider({ className = "" }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  const currentImage = images[index];

  // Auto-slide
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
      className={`group relative w-full aspect-[16/9] md:h-[34rem] overflow-hidden shadow-xl ${className}`}
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
          className="absolute top-0 left-0 w-full h-full"
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
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full z-10 opacity-0 group-hover:opacity-100 transition"
        aria-label="Previous Slide"
      >
        <FaChevronLeft size={20} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full z-10 opacity-0 group-hover:opacity-100 transition"
        aria-label="Next Slide"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? "bg-white scale-110" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Overlay (optional per image) */}
      {currentImage.showOverlay && (
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="
    absolute bottom-0 left-0 z-20
    px-3 py-2 
    sm:pl-4 sm:pt-2 
    md:pl-5 md:pt-4 
    backdrop-blur-md 
    bg-gradient-to-br from-[#01A6CF]/80 to-[#0077B6]/80 
    text-white 
    max-w-[80%] sm:max-w-[60%] md:max-w-[45%] lg:max-w-[35%] 
    shadow-lg 
    rounded-tl-3xl rounded-br-3xl rounded-tr-xl 
    border border-white/10
  "
>
  {currentImage.title && (
    <motion.h2
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="text-base sm:text-lg md:text-xl font-bold leading-snug"
    >
      {currentImage.title}
    </motion.h2>
  )}
  {currentImage.caption && (
    <p className="mt-2 text-sm sm:text-base font-light opacity-90">
      {currentImage.caption}
    </p>
  )}
</motion.div>

      )}
    </div>
  );
}