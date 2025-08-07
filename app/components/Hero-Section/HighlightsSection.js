'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const highlights = [
  {
    label: 'Academic Results & College Placements',
    image: '/gif/Academic.gif',
    description:
      'Outstanding IB results and placements in top global universities like Harvard, LSE, and NYU.',
  },
  {
    label: 'Quality of Teaching',
    image: '/gif/Tech.gif',
    description:
      'Highly qualified faculty with international experience and a commitment to personalized learning.',
  },
  {
    label: 'Student Wellbeing & Safety',
    image: '/gif/Wellbeing.gif',
    description:
      'Safe, secure, and emotionally supportive environment with full-time counselors and medical care.',
  },
  {
    label: 'Diversity & Inclusion',
    image: '/gif/Diversity.gif',
    description:
      'A vibrant international community with 29+ nationalities, inclusive policies, and student voice.',
  },
  {
    label: 'Opportunities Beyond Academics',
    image: '/gif/Quality.gif',
    description:
      'Over 50 clubs, global trips, performing arts, sports, and leadership programs that build real-world skills.',
  },
  {
    label: 'Modern Facilities',
    image: '/gif/Technology.gif',
    description:
      'Smart classrooms, labs, libraries, performance studios, sports arenas, and maker spaces.',
  },
  {
    label: 'Reputation & Accreditation',
    image: '/gif/Abroad.gif',
    description:
      'Fully accredited by IB, CIS, NEASC — globally recognized for excellence and continuous improvement.',
  },
];

export default function HighlightsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-light text-gray-900 mb-4"
          >
            What Makes Us <span className="font-medium">Uniquely OIS</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            A holistic education backed by global values, innovation, and care.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="p-6 flex flex-col items-center text-center">
                {/* GIF Image */}
                <div className="w-24 h-24 relative mb-4">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Label */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.label}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <button className="px-8 py-3.5 bg-white border border-gray-300 rounded-lg text-gray-900 font-medium hover:bg-gray-50 transition-colors shadow-sm">
            Explore the Full Experience <span className="ml-1">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
