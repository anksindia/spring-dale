import { div } from "framer-motion/client";
import React from "react";

function PageHeading({ content,imageUrl }) {
  return (
    <div className="md:relative  md:mb-10">
      <div className="w-full h-45 md:h-100 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
      </div>
      <div className="border-b-4 border-[var(--primary-blue-3)] bg-[var(--primary-blue-1)] w-full py-15 md:w-[75vw] md:py-13 md:mx-[12.5vw] md:absolute md:top-80">
        <h1 className="text-white text-4xl font-bold text-center md:text-5xl">
          {content}
        </h1>
      </div>
    </div>
  );
}

export default PageHeading;
