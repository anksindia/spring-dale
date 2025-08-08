// src/components/AcademicSection.jsx
import Image from 'next/image';

const academicLevels = [
  {
    image: '/one.png',
    label: 'KINDERGARTEN TO II',
    alt: 'Young girl smiling',
  },
  {
    image: '/two.png',
    label: 'GRADE III TO V',
    alt: 'Young boy smiling',
  },
  {
    image: '/three.png',
    label: 'GRADE VI TO VIII',
    alt: 'Teenage girl smiling',
  },
  {
    image: '/four.png',
    label: 'GRADE IX TO XII',
    alt: 'Teenage boy smiling',
  },
];

export default function AcademicSection() {
  return (
    <section className="bg-dotted py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl sm:text-5xl font-bold text-gray-800 mb-2">Choose your</h2>
        <h1 className="text-5xl sm:text-5xl font-bold text-[#00ccff] mb-12">ACADEMICS</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {academicLevels.map((level, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Image container with a gradient background */}
              <div className="relative w-full aspect-[3/4] max-w-xs
              bg-gradient-to-t from-[#00ccff] to-transparent from-20% p-2 ">
                <Image
                  src={level.image}
                  alt={level.alt}
                  fill
                  className="object-cover object-top rounded-md"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <p className="mt-4 font-bold text-lg text-[#00ccff]">{level.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}