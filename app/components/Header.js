"use client";
import React, { useState } from "react";
import { IoMenu, IoClose, IoChevronDown } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaGraduationCap, FaBullhorn, FaBookOpen } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    title: "About",
    path: "/about",
    submenu: [
      { title: "Our Story", path: "/about/our-story" },
      { title: "Vision", path: "/about/vision" },
      { title: "Mission", path: "/about/mission" },
      { title: "Philosophy", path: "/about/philosophy" },
    ],
  },
  {
    title: "Admissions",
    path: "/admissions",
    submenu: [
      { title: "Scholarship & Financial Aid", path: "/admissions/scholarships" },
      { title: "Fee Structure", path: "/admissions/fees" },
    ],
  },
  {
    title: "Academics",
    path: "/academics",
    submenu: [
      { title: "Curriculum Overview", path: "/academics/curriculum" },
      { title: "Entrepreneurship & Business", path: "/academics/entrepreneurship" },
      { title: "Co-Curricular Activities", path: "/academics/co-curricular" },
    ],
  },
  {
    title: "Our Approach",
    path: "/approach",
    submenu: [
      { title: "AI in Education", path: "/approach/ai" },
      { title: "Experiential Learning", path: "/approach/experiential" },
      { title: "Activity-Based Learning", path: "/approach/activity-based" },
    ],
  },
  {
    title: "Campus Life",
    path: "/campus-life",
    submenu: [
      { title: "School Facilities", path: "/campus-life/facilities" },
      { title: "Life in Hills", path: "/campus-life/life-in-hills" },
      { title: "Volunteer Opportunities", path: "/campus-life/volunteer" },
    ],
  },
  {
    title: "Media",
    path: "/media",
    submenu: []
  },
  {
    title: "Contact us",
    path: "/contact",
    submenu: []
  },
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [hoveredSubmenu, setHoveredSubmenu] = useState(null);
  const pathname = usePathname();

  const mobileMenuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1, transition: { duration: 0.3, staggerChildren: 0.05 } },
    exit: { height: 0, opacity: 0, transition: { duration: 0.3 } },
  };

  const mobileLinkVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const isActive = (path) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname === path || pathname.startsWith(path);
  };

  return (
    <>
      {/* Top Bar - Responsive adjustments for padding and content visibility */}
      <div className="w-full bg-[#01A6CF] text-xs sm:text-sm text-white shadow-md overflow-hidden z-[10] relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-wrap justify-between items-center py-2 gap-2 relative">

          {/* Left - Contact (Hidden on screens smaller than lg) */}
          <div className="hidden lg:flex items-center gap-2 whitespace-nowrap text-blue-200 font-medium">
            <IoIosMail size={20} className="text-blue-200" />
            <a href="mailto:principal.springdalesalmora@gmail.com" className="hover:underline text-gray-200">
              principal.springdalesalmora@gmail.com
            </a>
          </div>

          {/* Center - Marquee (Adjusted width for responsiveness) */}
          <div className="relative w-full lg:w-auto lg:flex-1 lg:max-w-[50%] mx-auto overflow-hidden text-[#FFA500] font-semibold whitespace-nowrap text-center lg:text-left">
            <motion.div
              className="flex gap-10 items-center justify-center lg:justify-start"
              animate={{ x: ["100%", "-100%"] }}
              transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            >
              <span className="flex items-center gap-2 text-white uppercase">
  <FaGraduationCap className="text-white" />
  Admissions Open for 2025–26! Enroll Now!
</span>
<span className="flex items-center gap-2 text-white uppercase">
  <FaBullhorn className="text-white" />
  Limited Seats Available!
</span>
<span className="flex items-center gap-2 text-white uppercase">
  <FaGraduationCap className="text-white" />
  Admissions Open for 2025–26! Enroll Now!
</span>
<span className="flex items-center gap-2 text-white uppercase">
  <FaBullhorn className="text-white" />
  Limited Seats Available!
</span>
            </motion.div>
          </div>

          {/* Right - Affiliation (Hidden on screens smaller than lg) */}
          <div className="hidden lg:flex items-center gap-2 text-white font-medium whitespace-nowrap">
            <FaBookOpen className="text-white" />
            CBSE Affiliation No.: 3530151
          </div>
        </div>
      </div>

      {/* Main Header/Nav - Responsive padding and element visibility */}
      <header className="w-full sticky top-0 z-50 font-sans bg-white shadow-lg">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-10 py-3 flex items-center justify-between text-[#01A6CF]">

          {/* Logo and School Name (Responsive sizing and visibility) */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <img src="/logo.png" alt="Spring Dales School Almora Logo" className="h-10 sm:h-12 lg:h-14 w-auto object-contain" />
            <span className="lg:hidden text-base sm:text-lg font-bold text-[#01A6CF]">Spring Dales School Almora</span>
          </Link>

          {/* Desktop Nav and Buttons (Hidden on screens smaller than lg) */}
          <div className="hidden lg:flex items-center justify-end flex-grow">
            <nav className="flex gap-4 xl:gap-6 font-semibold text-sm xl:text-base">
              {navLinks.map((link, idx) => (
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => setHoveredSubmenu(idx)}
                  onMouseLeave={() => setHoveredSubmenu(null)}
                >
                  <Link
                    href={link.path}
                    className={`cursor-pointer flex items-center gap-1 transition-colors duration-300 relative ${isActive(link.path) ? 'text-[#01A6CF]' : 'text-[#01A6CF] hover:text-[#01A6CF]'}`}
                  >
                    {link.title}
                    <motion.span
                      className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#01A6CF] transform origin-left transition-transform duration-300 ease-out ${isActive(link.path) || hoveredSubmenu === idx ? 'scale-x-100' : 'scale-x-0'}`}
                      initial={false}
                    />
                  </Link>
                  {link.submenu.length > 0 && (
                    <AnimatePresence>
                      {hoveredSubmenu === idx && (
                        <motion.div
                          className="absolute top-full left-0 mt-4 bg-white text-[#01A6CF] shadow-xl rounded-md w-48 xl:w-60 z-20 overflow-hidden"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ul className="flex flex-col gap-2 p-3 xl:p-4 text-sm">
                            {link.submenu.map((item, i) => (
                              <li key={i}>
                                <Link
                                  href={item.path}
                                  className={`block py-1 px-2 rounded hover:bg-[#01A6CF] hover:text-white transition-all duration-200 ${isActive(item.path) ? 'bg-[#01A6CF] text-white' : ''}`}
                                >
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>
            <div className="flex gap-3 ml-6 xl:ml-8">
              <Link
                href="/disclosure"
                className="px-3 py-1.5 xl:px-4 xl:py-2 border border-gray-300 rounded-md text-[#01A6CF] hover:bg-gray-100 transition-colors whitespace-nowrap text-xs xl:text-sm font-semibold"
              >
                Public Disclosure
              </Link>
              <Link
                href="/notice-board"
                className="px-3 py-1.5 xl:px-4 xl:py-2 rounded-md bg-[#FFA500] text-white shadow-md hover:bg-[#e69500] transition-colors whitespace-nowrap text-xs xl:text-sm font-semibold"
              >
                Notice Board
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button (Visible on screens smaller than lg) */}
          <div className="lg:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)} className="text-3xl sm:text-4xl text-[#01A6CF] focus:outline-none">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={mobileOpen ? "close" : "menu"}
                  initial={{ rotate: mobileOpen ? -90 : 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: mobileOpen ? 90 : -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileOpen ? <IoClose /> : <IoMenu />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Menu (Full-width overlay) */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="lg:hidden w-full bg-[#01A6CF] px-4 pb-4 text-white shadow-inner"
            >
              <nav className="flex flex-col gap-3 py-4">
                <motion.div variants={mobileLinkVariants}>
                  <Link
                    href="/notice-board"
                    className="block px-4 py-2 rounded-md bg-[#FFA500] text-black font-semibold text-center hover:bg-[#e69500] transition-colors text-sm sm:text-base"
                    onClick={() => setMobileOpen(false)}
                  >
                    Notice Board
                  </Link>
                </motion.div>
                <motion.div variants={mobileLinkVariants}>
                  <Link
                    href="/disclosure"
                    className="block px-4 py-2 rounded-md border border-gray-400 text-center hover:bg-white hover:text-[#01A6CF] transition-colors font-semibold text-sm sm:text-base"
                    onClick={() => setMobileOpen(false)}
                  >
                    Mandatory Public Disclosure
                  </Link>
                </motion.div>
                {navLinks.map((link, idx) => (
                  <motion.div key={idx} variants={mobileLinkVariants} className="flex flex-col">
                    <div className="flex justify-between items-center w-full py-2 px-4 rounded-md font-medium text-left hover:bg-[#0077B6] transition-colors text-sm sm:text-base">
                      <Link
                        href={link.path}
                        className={`flex-grow ${isActive(link.path) ? 'text-white' : ''}`}
                        onClick={() => {
                          if (link.submenu.length === 0) {
                            setMobileOpen(false);
                          }
                        }}
                      >
                        {link.title}
                      </Link>
                      {link.submenu.length > 0 && (
                        <motion.span
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenSubmenu(openSubmenu === idx ? null : idx);
                          }}
                          initial={false}
                          animate={{ rotate: openSubmenu === idx ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-2 p-1 cursor-pointer text-lg sm:text-xl"
                        >
                          <IoChevronDown />
                        </motion.span>
                      )}
                    </div>
                    <AnimatePresence>
                      {openSubmenu === idx && link.submenu.length > 0 && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-6 sm:pl-8 mt-2 text-sm text-gray-200 flex flex-col gap-2 overflow-hidden"
                        >
                          {link.submenu.map((sub, i) => (
                            <Link
                              key={i}
                              href={sub.path}
                              className={`block py-1 px-2 rounded hover:bg-[#0077B6] hover:text-white transition-colors text-sm ${isActive(sub.path) ? 'bg-[#0077B6] text-white' : ''}`}
                              onClick={() => setMobileOpen(false)}
                            >
                              {sub.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

export default Header;