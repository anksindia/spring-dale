'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CampusesSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((el, index) => {
        const cardImage = imageRefs.current[index];

        // Animate card itself
        gsap.fromTo(
          el,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );

        // Animate image with blur + scale
        gsap.fromTo(
          cardImage,
          { scale: 1.08, filter: 'blur(10px)', opacity: 0 },
          {
            scale: 1,
            filter: 'blur(0px)',
            opacity: 1,
            duration: 1.4,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const campuses = [
    {
      title: 'Almora Campus',
      desc: 'Nestled in the scenic Almora hills, this campus offers nature-inspired classrooms, outdoor learning, and a strong focus on creativity and exploration.',
      img: '/spring.webp',
      btn: 'Explore Almora',
    },
    {
      title: 'Dharanaula Campus',
      desc: 'Located in the heart of the city, our Dharanaula branch focuses on AI-based learning, future technologies, and collaborative innovation studios.',
      img: '/sec.png',
      btn: 'Explore Dharanaula',
    },
  ];

  return (
    <section ref={sectionRef} className=" inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] py-24 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {campuses.map((campus, index) => (
          <div
            key={campus.title}
            ref={(el) => (cardsRef.current[index] = el)}
            className="bg-[var(--primary-blue-2)] rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform duration-300"
          >
            <div className="relative w-full h-64 sm:h-72 md:h-80">
              <Image
                ref={(el) => (imageRefs.current[index] = el)}
                src={campus.img}
                alt={campus.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0}
              />
            </div>
            <div className="p-6 flex flex-col justify-between grow text-white">
              <h3 className="text-2xl font-semibold mb-3">{campus.title}</h3>
              <p className="text-white/80 leading-relaxed mb-6">{campus.desc}</p>
              <button className="self-start border border-white text-white hover:bg-white hover:text-[var(--primary-blue-2)] px-5 py-2 rounded-md transition-colors duration-300 text-sm font-medium">
                {campus.btn}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CampusesSection;





