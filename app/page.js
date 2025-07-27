"use client"

import React from 'react'
import ImageSlider from './components/Hero-Section/ImageSlider'
import CampusesSection from './components/Hero-Section/CampusesSection'
import InfiniteImageCards from './components/InfiniteImageCards'



const schoolFacilities = [
  {
    image: "/facilities/Cafeteria.jpg",
    label: "Cafeteria",
  },
  {
    image: "/facilities/playground.jpg",
    label: "Playground",
  },
  {
    image: "/facilities/library.jpg",
    label: "Library",
  },
  {
    image: "/facilities/NCC.webp",
    label: "N.C.C",
  },
  {
    image: "/facilities/laboratory.jpg",
    label: "Laboratory",
  },
  {
    image: "/facilities/computer-lab.jpg",
    label: "Computer Lab",
  },
  {
    image: "/facilities/auditorium.jpg",
    label: "Auditorium",
  },
  {
    image: "/facilities/bus.jpg",
    label: "Transport",
  },
];


const page = () => {
  return (
    <div>

      {/* ImageSlider */}
      <div className="relative h-fit">
        <ImageSlider className="w-full h-full object-cover" />

      {/* SchoolFacilitiesSection */}
      <div className="flex items-center pt-1 text-[#1d1c4a] justify-center inset-0 -z-10 h-fit  w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] text-3xl font-bold text-center">
        At Spring Dales we offer
      </div>
      <div className="h-fit flex items-center justify-center inset-0 -z-10  w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] px-6 sm:px-10 ">
        <InfiniteImageCards
          items={schoolFacilities}
          direction="left"
          speed="normal"
        />
      </div>

     
   

      <CampusesSection />

      
    

    </div>
    </div>
  )
}

export default page
