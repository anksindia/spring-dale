"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const InfiniteImageCards = ({
  items,
  direction = "left", // 'left' or 'right'
  speed = "medium",    // 'slow' | 'medium' | 'fast'
  pauseOnHover = true,
  className = "",
}) => {
  const containerRef = useRef(null);
  const controls = useAnimation();

  const speedMap = {
    slow: 80,
    medium: 40,
    fast: 20,
  };

  const duration = speedMap[speed] || 40;
  const xFrom = direction === "left" ? 0 : "-50%";
  const xTo = direction === "left" ? "-50%" : 0;

  const handleMouseEnter = () => {
    if (pauseOnHover) controls.stop();
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      controls.start({
        x: [xFrom, xTo],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration,
          },
        },
      });
    }
  };

  useEffect(() => {
    controls.start({
      x: [xFrom, xTo],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration,
        },
      },
    });
  }, [direction, duration]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden max-w-7xl w-full ${className}`}
    >
      <motion.ul
        className="flex gap-4 w-max"
        animate={controls}
        initial={{ x: xFrom }}
      >
        {[...items, ...items].map((item, index) => (
          <li
            key={index}
            className="w-[400px] shrink-0 rounded-xl border border-gray-300 bg-white px-4 py-3 flex flex-col items-center shadow-md"
          >
            <div className="relative w-full h-56 rounded-md overflow-hidden">
              <Image
                src={item.image}
                alt={item.label}
                fill
                className="object-cover"
              />
            </div>
            <span className="mt-3 text-sm font-medium text-center uppercase text-gray-800">
              {item.label}
            </span>
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export default InfiniteImageCards;
