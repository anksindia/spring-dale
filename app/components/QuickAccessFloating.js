"use client";
import { useState } from "react";
import { FaPlus, FaSchoolFlag, FaPenToSquare } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";

const ButtonItem = ({ Icon, label, bgColor }) => (
  <div
    className={`flex flex-col items-center justify-center w-12 h-12 p-2 rounded-full ${bgColor} text-white hover:scale-110 transition-transform shadow-lg`}
  >
    <Icon className="text-xl mb-1" />
    <span className="text-xs font-medium">{label}</span>
  </div>
);

const QuickAccessFloating = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed left-4 bottom-2 z-50 flex flex-col items-start gap-3">
      {open && (
        <div className="flex flex-col items-start gap-3 transition-all duration-300">
          <ButtonItem Icon={FaSchoolFlag} label="Visit" bgColor="bg-cyan-500" />
          <ButtonItem Icon={IoIosPeople} label="Learn" bgColor="bg-[#1d1c4a]" />
          <ButtonItem Icon={FaPenToSquare} label="Apply" bgColor="bg-orange-500" />
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full bg-blue-900 text-white flex items-center justify-center shadow-lg hover:rotate-90 transition-transform duration-300"
        aria-label="Toggle Quick Access"
      >
        <FaPlus className="text-xl" />
      </button>
    </div>
  );
};

export default QuickAccessFloating;
