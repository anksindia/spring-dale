"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

// FAQ DATA
const faqs = [
  {
    question: "Does Spring Dales School Almora provide transport services?",
    answer: "Yes, we have well-maintained school buses covering major routes in Almora and nearby areas, ensuring safe and timely transportation for students.",
  },
  {
    question: "Is this the best CBSE school in Almora?",
    answer: "Yes, Spring Dales School Almora is consistently ranked among the top CBSE schools in the region, known for academic excellence, innovative learning methods, and outstanding results.",
  },
  {
    question: "Does the school have hostel facilities?",
    answer: "Yes, we offer comfortable hostel accommodation with proper care, supervision, and nutritious meals for both boys and girls.",
  },
  {
    question: "What are the safety measures for students?",
    answer: "We ensure a safe learning environment with CCTV surveillance, trained staff, and a strict safety protocol followed on campus and during transport.",
  },
  {
    question: "Does the school focus on co-curricular activities?",
    answer: "Yes, we strongly believe in holistic development and offer various sports, arts, cultural programs, and technology-based learning opportunities.",
  },
];

// Accordion Item
const AccordionItem = ({ faq, isOpen, onToggle }) => (
  <div className="border-b border-gray-200">
    {/* Question */}
    <button
      className="w-full flex justify-between items-center py-4 text-left font-semibold text-gray-800 focus:outline-none"
      onClick={onToggle}
    >
      <span>{faq.question}</span>
      <FaChevronDown
        className={`transition-transform duration-300 text-[#00ccff] ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}
      />
    </button>

    {/* Answer */}
    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <p className="pb-4 text-gray-600">{faq.answer}</p>
    </div>
  </div>
);

// Main Component
export default function FAQsSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 sm:px-10 bg-dotted">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#00ccff] mb-12">
          Frequently Asked Questions
        </h2>

        {/* Accordion */}
        <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
