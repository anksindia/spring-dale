"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; 
import PageHeading from "../components/PageHeading";
import {
  FaGraduationCap,
  FaUsers,
  FaChalkboardTeacher,
  FaSchool,
  FaLanguage,
  FaBookOpen,
  FaClock,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaBus,
  FaHandHoldingUsd,
  FaHeart,
  FaLightbulb,
  FaSmileBeam,
} from "react-icons/fa";

const schoolImages = ["/photo.webp", "/photo2.webp", "/photo3.webp"];

// Simple Image Carousel Component
function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-2xl shadow-lg">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`School campus image ${index + 1}`}
          fill
          className={`object-cover transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
        />
      ))}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div>
      <PageHeading
        content="Discover Spring Dales Almora"
        imageUrl="/photo7.webp"
      />

      <section className="px-6 md:px-24 py-14 flex flex-col gap-20 text-gray-800 bg-[#f0f9ff]">
        {/* Welcome Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ImageCarousel images={schoolImages} />
          <div>
            <h2 className="text-4xl font-extrabold mb-6 text-[#01A6CF]">
              Welcome to Spring Dales Almora
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Nestled in the serene Kumaon Hills, <strong>Spring Dales Almora</strong> is
              where tradition meets innovation. Our vibrant campus, caring
              teachers, and engaging programs empower students to thrive
              intellectually, emotionally, and socially.
            </p>
          </div>
        </div>

        {/* Quick Facts */}
        <div className="mt-4">
          <h2 className="text-3xl font-bold text-center text-[#0077B6] mb-10">
            Quick Facts
          </h2>
          <div className="grid md:grid-cols-2 gap-12 text-md bg-white p-10 rounded-2xl shadow-xl">
            <div className="flex flex-col gap-4">
              <Fact icon={<FaGraduationCap className="text-[#01A6CF]" />} title="Grades" value="Nursery – Class 12" />
              <Fact icon={<FaUsers className="text-[#01A6CF]" />} title="Enrollment" value="300+ students" />
              <Fact icon={<FaChalkboardTeacher className="text-[#01A6CF]" />} title="Faculty" value="40+ teachers & staff" />
              <Fact icon={<FaSchool className="text-[#01A6CF]" />} title="Campus" value="Lush green Almora-based campus" />
              <Fact icon={<FaLanguage className="text-[#01A6CF]" />} title="Medium" value="English" />
              <Fact icon={<FaBookOpen className="text-[#01A6CF]" />} title="Curriculum" value="CBSE + Experiential Learning" />
            </div>
            <div className="flex flex-col gap-4">
              <Fact icon={<FaClock className="text-[#01A6CF]" />} title="School Hours" value="9:00 AM – 3:00 PM (Mon–Fri)" />
              <Fact icon={<FaCalendarAlt className="text-[#01A6CF]" />} title="After School Programs" value="Available till 5:30 PM" />
              <Fact icon={<FaMoneyBillWave className="text-[#01A6CF]" />} title="Fee Structure" value="Affordable & transparent" />
              <Fact icon={<FaBus className="text-[#01A6CF]" />} title="Transport" value="Covers major Almora routes" />
              <Fact icon={<FaHandHoldingUsd className="text-[#01A6CF]" />} title="Financial Aid" value="Scholarships & Need-based Aid" />
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="grid md:grid-cols-2 gap-10 items-center border-t pt-10">
          <div className="flex justify-center items-center w-40 h-auto mx-auto md:mx-0 text-blue-500">
            <Image src="/celebrate.png" alt="Celebration Badge" width={120} height={120} /> {/* ✅ Optimized */}
          </div>
          <div className="flex flex-col gap-5 text-md leading-relaxed">
            <h2 className="text-3xl font-bold text-[#01A6CF]">
              Our Story: A Journey of Growth
            </h2>
            <p>
              <strong>Spring Dales Almora</strong> began with a dream—to deliver world-class
              education in the serene Himalayan foothills. From a small group of
              dreamers, we’ve grown into a thriving school community known for
              our academic excellence and warmth.
            </p>
            <p>
              With each year, our programs have expanded, our infrastructure has
              grown, and our mission has remained strong: cultivate young minds
              with love, creativity, and global readiness.
            </p>
          </div>
        </div>

        {/* Explore More */}
        <div className="bg-gradient-to-tr from-[#01A6CF] to-[#0077B6] text-white text-center py-12 rounded-3xl shadow-xl">
          <h3 className="text-3xl font-bold mb-6">
            Dive Deeper into Spring Dales
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { href: "/about/story", text: "Our Complete Story" },
              { href: "/about/vision", text: "Our Vision in Detail" },
              { href: "/about/mission", text: "Our Mission Explained" },
              { href: "/about/philosophy", text: "Our Philosophy Unpacked" },
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="px-6 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-full hover:bg-yellow-300 transform hover:scale-105 transition"
              >
                {item.text} →
              </Link>
            ))}
          </div>
        </div>

        {/* Closing Quote — ✅ Fixed unescaped quotes */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-center py-12 rounded-xl shadow-xl">
          <p className="text-xl md:text-2xl font-medium text-blue-200 px-4">
            Our journey in the hills began with a profound question:
          </p>
          <p className="text-2xl md:text-3xl font-extrabold text-yellow-300 mt-4 px-4 flex items-center justify-center gap-2">
            <FaLightbulb className="text-yellow-300" />
            {"What if school could be a realm overflowing with love, joyous laughter, and boundless discovery?"}
            <FaSmileBeam className="text-yellow-300" />
          </p>
        </div>
      </section>
    </div>
  );
}

function Fact({ icon, title, value }) {
  return (
    <p className="flex items-center gap-3">
      <span className="text-2xl">{icon}</span>
      <span className="font-semibold text-[#01A6CF]">{title}:</span>{" "}
      <span className="text-gray-700">{value}</span>
    </p>
  );
}
