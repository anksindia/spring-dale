"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const InfiniteImageCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className = "",
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach((item) => {
      const clone = item.cloneNode(true);
      scrollerRef.current.appendChild(clone);
    });

    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );

    const duration =
      speed === "fast" ? "20s" : speed === "slow" ? "80s" : "40s";
    containerRef.current.style.setProperty("--animation-duration", duration);

    setStart(true);
  }, []);



  return (
    <div
      ref={containerRef}
      className={`scroller relative z-20 max-w-7xl overflow-hidden  
        ${className}`}   // [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] 
    >
      <ul
        ref={scrollerRef}
        className={`flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4
          ${start ? "animate-scroll" : ""}
          ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}
        `}
      >
        {items.map((item, index) => (
          <li
            key={index}
            className="relative w-[300px] max-w-full shrink-0 rounded-xl border border-gray-300 
              bg-white  px-4 py-3 flex flex-col items-center shadow-md "
          >
            <div className="relative w-full h-40 rounded-md overflow-hidden">
              <Image
                src={item.image}
                alt={item.label}
                fill
                className="object-cover"
              />
            </div>
            <span className="mt-3 text-sm font-medium text-center text-gray-800 ">
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteImageCards;
