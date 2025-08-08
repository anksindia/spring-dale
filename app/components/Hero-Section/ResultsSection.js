"use client";

import { useState } from "react";
import Image from "next/image";
import { LiaMedalSolid } from "react-icons/lia"; // 🏅 Medal Icon
import { FaAward } from "react-icons/fa"; // 🏆 Award Icon

// ----------- DATA -----------
const resultsData = {
  class12: [
    { id: 1, name: "DEV GORAL", achievement: "Secured 9 A* grades.", image: "/four.png", percentage: "99%", subject: "PHYSICS" },
    { id: 2, name: "DEEKA KAMODIA", achievement: "Secured 9 A* grades.", image: "/four.png", percentage: "92%", subject: "GLOBAL PERSPECTIVES" },
    { id: 3, name: "NIVAN PUMANIVA", achievement: "Secured 9 A* grades.", image: "/four.png", percentage: "90%", subject: "INTERNATIONAL MATHEMATICS" },
    { id: 4, name: "JANVI KOTHARI", achievement: "Secured 9 A* grades.", image: "/four.png", percentage: "88%", subject: "BIOLOGY" },
    { id: 5, name: "RAVI MEHTA", achievement: "Consistently topped class.", image: "/four.png", percentage: "93%", subject: "ECONOMICS" },
  ],
  class10: [
    { id: 1, name: "CHIRAG SHARMA", achievement: "Outstanding in all subjects.", image: "/four.png", percentage: "95%", subject: "ADDITIONAL MATHS" },
    { id: 2, name: "ANAYA SINGH", achievement: "Topper in core subjects.", image: "/four.png", percentage: "91%", subject: "SCIENCE" },
    { id: 3, name: "VEDANT JAIN", achievement: "Excellent grades.", image: "/four.png", percentage: "89%", subject: "CHEMISTRY" },
    { id: 4, name: "SAKSHI KUMAR", achievement: "Shining success.", image: "/four.png", percentage: "85%", subject: "SOCIAL STUDIES" },
    { id: 5, name: "MEERA RAO", achievement: "Top in Maths and English.", image: "/four.png", percentage: "94%", subject: "MATHEMATICS" },
  ],
};

// ----------- COMPONENTS -----------

// Tabs
const TabButton = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-5 py-2 font-semibold transition-colors duration-300 ${
      active
        ? "text-[#00ccff] border-b-2 border-[#00ccff]"
        : "text-gray-500 border-none hover:text-gray-700"
    }`}
  >
    {label}
  </button>
);

// Card
const StudentCard = ({ student }) => (
  <div className="group relative flex-shrink-0 w-[80vw] sm:w-[280px] h-[340px] rounded-3xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.03] bg-white border mt-1 border-gray-100">
    
    {/* Image Section */}
    <div className="relative w-full h-48 bg-gradient-to-br from-[#e6f9ff] to-[#ffffff] p-3 rounded-b-none">
      <div className="relative w-full h-full rounded-xl overflow-hidden">
        <Image
          src={student.image}
          alt={student.name}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
    </div>

    {/* Info Section */}
    <div className="p-5 flex flex-col items-center text-center">
      <h4 className="text-xl font-bold text-gray-800 flex items-center gap-2">
        <LiaMedalSolid className="text-yellow-500 text-2xl" />
        {student.name}
      </h4>
      <p className="text-sm mt-2 text-gray-500 flex items-center gap-2">
        <FaAward className="text-[#00ccff]" />
        {student.achievement}
      </p>
    </div>

    {/* Hover Overlay */}
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-[#00ccff] to-[#00ccff80] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <LiaMedalSolid className="text-yellow-300 text-6xl mb-3 animate-bounce" />
      <h4 className="text-5xl font-bold">{student.percentage}</h4>
      <p className="mt-2 text-lg">{student.subject}</p>
    </div>
  </div>
);

// ----------- MAIN SECTION -----------
export default function ResultsSection() {
  const [activeTab, setActiveTab] = useState("class12");
  const currentResults = resultsData[activeTab];

  return (
    <section className="bg-dotted py-24 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-5xl font-bold text-[#00ccff] mb-12 flex items-center gap-3">
          <FaAward className="text-yellow-400" /> Results
        </h2>

        {/* Tabs */}
        <div className="flex gap-4 mb-10 border-b border-gray-300">
          {["class12", "class10"].map((tab) => (
            <TabButton
              key={tab}
              label={tab === "class12" ? "Class 12" : "Class 10"}
              active={activeTab === tab}
              onClick={() => setActiveTab(tab)}
            />
          ))}
        </div>

        {/* Cards */}
        <div className="overflow-x-auto overflow-y-hidden custom-scrollbar">
          <div className="flex gap-6 px-1 pb-2">
            {currentResults.map((student) => (
              <StudentCard key={student.id} student={student} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
