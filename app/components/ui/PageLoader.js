'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

const PageLoader = ({ setIsLoading }) => {
  const containerRef = useRef(null);
  const textRef = useRef([]);
  const logoRef = useRef(null);

  const text = 'EMPOWERING MINDS THROUGH EXPERIENTIAL LEARNING';

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Step 1: Animate each word in
    tl.fromTo(
      textRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
      },
      0
    );

    // Step 2: Fade out text & scale down
    tl.to(
      textRef.current,
      {
        y: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
      },
      '+=0.8'
    );

    // Step 3: Logo Reveal
    tl.fromTo(
      logoRef.current,
      { scale: 0, opacity: 0 },
      { scale: 2.8, opacity: 1, duration: 1.6 },
      '-=0.8'
    );

    // Step 4: Loader fade-out
    tl.to(containerRef.current, {
      opacity: 0,
      duration: 1,
      delay: 0.5,
      onComplete: () => setIsLoading(false),
    });
  }, [setIsLoading]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 flex flex-col items-center justify-center bg-dotted z-50 transition-all duration-1000"
    >
      {/* Animated Text */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-xl md:text-3xl text-[#01A6CF] font-semibold tracking-widest mb-6 px-4 text-center">
        {text.split(' ').map((word, i) => (
          <span
            key={i}
            ref={(el) => (textRef.current[i] = el)}
            className="inline-block opacity-0"
            style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.4)' }}
          >
            {word}
          </span>
        ))}
      </div>

      {/* Logo */}
      <div
        ref={logoRef}
        className="relative pb-2 drop-shadow-[0_0_20px_rgba(2,164,204,0.8)] scale-125 opacity-0"
      >
        <Image
          src="/logo.png"
          alt="SpringDalesLogo"
          width={72}
          height={72}
        />
      </div>
    </div>
  );
};

export default PageLoader;
