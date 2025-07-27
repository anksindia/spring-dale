"use client";
import React, { useState } from "react";
import { IoMenu, IoClose, IoChevronDown } from "react-icons/io5"; // Added IoChevronDown
import { FaPhoneAlt, FaSchool, FaFlag } from "react-icons/fa";
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
  const pathname = usePathname();

  // Framer Motion variants for mobile menu
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
    // Special handling for the root path to ensure it only matches exactly if not a sub-path
    if (path === '/') {
      return pathname === '/';
    }
    return pathname === path || pathname.startsWith(path);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="w-full bg-gradient-to-br from-[#01A6CF] to-[#0077B6] text-sm text-white shadow-sm overflow-hidden z-[10] relative">
        <div className="max-w-[1400px] mx-auto px-4 flex flex-wrap justify-between items-center py-2 gap-2 relative">

          {/* Left - Contact */}
          <div className="hidden md:flex items-center gap-2 whitespace-nowrap text-blue-200 font-medium">
            <FaPhoneAlt className="text-blue-200" />
            <Link href="tel:+919876543210" className="hover:underline">
              +91-9876543210
            </Link>
          </div>

          {/* Center - Marquee */}
          <div className="relative w-full max-w-full md:max-w-[50%] mx-auto overflow-hidden text-yellow-300 font-semibold whitespace-nowrap">
            <motion.div
              className="flex gap-10 items-center"
              animate={{ x: ["100%", "-100%"] }}
              transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            >
              <span className="flex items-center gap-2">
                <FaFlag className="text-yellow-400" />
                Admissions Open for 2025–26! Enroll Now!
              </span>
              <span className="flex items-center gap-2">
                <FaFlag className="text-yellow-400" />
                Limited Seats Available!
              </span>
              <span className="flex items-center gap-2">
                <FaFlag className="text-yellow-400" />
                Admissions Open for 2025–26! Enroll Now!
              </span>
              <span className="flex items-center gap-2">
                <FaFlag className="text-yellow-400" />
                Limited Seats Available!
              </span>
            </motion.div>
          </div>

          {/* Right - Affiliation */}
          <div className="hidden md:flex items-center gap-2 text-white font-medium whitespace-nowrap">
            <FaSchool className="text-white" />
            CBSE Affiliation No.: 1234567
          </div>
        </div>
      </div>

      {/* Header/Nav */}
      <header className="w-full sticky top-0 z-50 font-sans bg-white shadow-xl">
        <div className="max-w-[1400px] mx-auto px-4 md:px-10 py-3 flex items-center justify-between text-[#01A6CF]">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/logo.png" alt="School Logo" className="h-16 w-auto object-contain filter drop-shadow-lg" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center justify-between flex-1 ml-10">
            <nav className="flex gap-8 font-semibold text-base">
              {navLinks.map((link, idx) => (
                <div key={idx} className="relative group">
                  {/* IMPORTANT: Link is now directly wrapped by motion.div */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={link.path}
                      className={`cursor-pointer flex items-center gap-1 hover:text-yellow-400 transition-colors duration-300 transform hover:-translate-y-0.5 ${isActive(link.path) ? 'text-yellow-400' : ''}`}
                    >
                      {link.title}
                    </Link>
                  </motion.div>
                  {link.submenu.length > 0 && (
                    <motion.div
                      className="absolute top-full left-0 mt-3 bg-white text-[#01A6CF] shadow-2xl  w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20 overflow-hidden "
                    >
                      <ul className="flex flex-col gap-2 p-4 text-sm">
                        {link.submenu.map((item, i) => (
                          <li key={i}>
                            <Link
                              href={item.path}
                              className={`block py-1 px-2 rounded hover:bg-[#01A6CF] hover:text-yellow-400 transition-all duration-200 ${isActive(item.path) ? 'bg-blue-700 text-yellow-400' : ''}`}
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Links */}
            <div className="flex gap-6 text-sm ml-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/notice-board"
                  className="px-5 py-2 rounded-full bg-yellow-400 text-blue-900 font-bold shadow-md hover:bg-yellow-300 transform hover:scale-105 transition-all duration-200"
                >
                  Notice Board
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/disclosure"
                  className="px-5 py-2 rounded-full border border-[#01A6CF] text-[#01A6CF] font-bold hover:bg-[#86d7ec] hover:text-white transform hover:scale-105 transition-all duration-200"
                >
                  Mandatory Public Disclosure
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)} className="text-4xl text-white focus:outline-none">
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

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden bg-gradient-to-br from-[#01A6CF] to-[#0077B6] px-4 pb-4 text-white shadow-inner"
            >
              <nav className="flex flex-col gap-4 py-2">
                <motion.div
                  variants={mobileLinkVariants}
                >
                  <Link
                    href="/notice-board"
                    className="block px-4 py-2 rounded-md bg-yellow-400 text-blue-900 font-semibold text-center hover:bg-yellow-300 transition-colors"
                    onClick={() => setMobileOpen(false)} // Close menu on click
                  >
                    Notice Board
                  </Link>
                </motion.div>
                <motion.div
                  variants={mobileLinkVariants}
                >
                  <Link
                    href="/disclosure"
                    className="block px-4 py-2 rounded-md border border-white text-center hover:bg-white hover:text-blue-900 transition-colors"
                    onClick={() => setMobileOpen(false)} // Close menu on click
                  >
                    Mandatory Public Disclosure
                  </Link>
                </motion.div>
                {navLinks.map((link, idx) => (
                  <motion.div key={idx} variants={mobileLinkVariants} className="flex flex-col">
                    <div className="flex justify-between items-center w-full py-2 px-4 rounded-md font-medium text-left hover:bg-blue-700 transition-colors">
                      {/* Separate Link and Submenu Toggle for Mobile */}
                      <Link
                        href={link.path}
                        className={`flex-grow ${isActive(link.path) ? 'text-[#FFD700]' : ''}`}
                        onClick={() => {
                          // Close mobile menu if it's a direct link with no submenu
                          if (link.submenu.length === 0) {
                            setMobileOpen(false);
                          }
                          // This onClick handler is defensive; Link should handle navigation
                        }}
                      >
                        {link.title}
                      </Link>
                      {link.submenu.length > 0 && (
                        <motion.span
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent Link click from propagating
                            setOpenSubmenu(openSubmenu === idx ? null : idx);
                          }}
                          initial={false}
                          animate={{ rotate: openSubmenu === idx ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-2 p-1 cursor-pointer text-xl" // Increased icon size slightly
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
                          className="pl-8 mt-2 text-sm text-white flex flex-col gap-2 overflow-hidden"
                        >
                          {link.submenu.map((sub, i) => (
                            <Link
                              key={i}
                              href={sub.path}
                              className={`block py-1 px-2 rounded hover:bg-blue-700 hover:text-yellow-300 transition-colors ${isActive(sub.path) ? 'bg-blue-700 text-yellow-300' : ''}`}
                              onClick={() => setMobileOpen(false)} // Close mobile menu on submenu item click
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