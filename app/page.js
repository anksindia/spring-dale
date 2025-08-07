"use client"

import React from 'react'
import ImageSlider from './components/Hero-Section/ImageSlider'
import CampusesSection from './components/Hero-Section/CampusesSection'
import InfiniteImageCards from './components/InfiniteImageCards'
import Image from 'next/image'




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

const newsItems = [
  {
    image: "/news/news.jpg",
    title: "Spring Dales Shines in Sports",
    description:
      "Our students continue to excel in various sports, showcasing strength, discipline, and determination across regional and national events.",
  },
  {
    image: "/news/news2.jpg",
    title: "Student Scores Perfect 10 GPA",
    description:
      "Deepti Kansal from Spring Dales School scored a perfect 10 GPA in CBSE Class 10, showcasing academic excellence.",
  },
  {
    image: "/news/news3.jpg",
    title: "All India Topper from Spring Dales",
    description:
      "M Gayathri secured 99.2% and was recognized as an all-India CBSE topper, aiming to become a Chartered Accountant.",
  },
];



const page = () => {
  return (
    <div>

      {/* ImageSlider */}
      <div className="relative h-fit">
        <ImageSlider className="w-full h-full object-cover" />

        <div className="relative bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] py-16 px-6 md:px-12 text-center">
          <div className="max-w-5xl mx-auto text-start">
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--primary-blue-2)] mb-6 leading-tight">
              DISCOVER <br />
              <span className="text-black">Spring Dales School</span> <br />
              <span className="text-black">Almora, Uttarakhand</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl">
              Nestled in the peaceful hills of Kumaon and surrounded by the stunning beauty of the Himalayas,&nbsp;
              <span className="text-[var(--primary-blue-2)] font-semibold">Spring Dales School</span> is much more than just a school, it’s a sanctuary where
              learning, care, and nature come together.
            </p>

            <button className="px-3 py-1.5 xl:px-4 xl:py-2 border border-gray-300 rounded-md text-[#01A6CF] hover:bg-gray-100 transition-colors whitespace-nowrap text-xs xl:text-sm font-semibold">
              Read More
            </button>
          </div>
        </div>
       
        {/* In the News Section */}
        <div className="w-full bg-dotted py-20 px-6 md:px-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d1c4a] mb-14">
            In the <span className='text-[var(--primary-blue-2)] uppercase'> News</span>
          </h2>

          <div className="grid gap-3 md:grid-cols-3">
            {newsItems.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
              >
                <div className="relative w-full h-80">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-xl"
                    priority={index === 0}
                  />
                </div>
                <div className="p-6 text-start">
                  <h3 className="text-xl font-bold text-[#1d1c4a] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Explore More Button */}
          <div className="mt-14">
            <button className="px-3 py-1.5 xl:px-4 xl:py-2 border border-gray-300 rounded-md text-[#01A6CF] hover:bg-gray-100 transition-colors whitespace-nowrap text-xs xl:text-sm font-semibold">
              Read More
            </button>
          </div>
        </div>



        {/* SchoolFacilitiesSection */}
        {/* Section Heading */}
        <div className="w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] py-8 px-4 sm:px-6 text-center text-5xl font-bold text-black">
          More Than a <span className='text-[var(--primary-blue-2)] uppercase'>Classroom</span>
        </div>

        {/* Facilities Carousel */}
        <div className="w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] py-10 px-6 sm:px-10 flex justify-center items-center">
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
