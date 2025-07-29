import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full">
      <footer className="w-full bg-[var(--primary-blue-1)] text-white text-sm">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

            {/* Almora Branch */}
            <div>
              <h3 className="font-semibold text-base mb-2">ALMORA BRANCH</h3>
              <p className="mb-2 text-gray-300">(Grades 1–12)</p>
              <address className="not-italic space-y-1">
                <p>Near Taxi Stand</p>
                <p>Almora, Uttarakhand 263601</p>
                <p>+91-9557413361</p>
              </address>
            </div>

            {/* Dharanaula Branch */}
            <div>
              <h3 className="font-semibold text-base mb-2">DHARANAULA BRANCH</h3>
              <p className="mb-2 text-gray-300">(Grades K–6)</p>
              <address className="not-italic space-y-1">
                <p>Paltan Bazar, Dharanaula</p>
                <p>Almora, Uttarakhand 263601</p>
                <p>+91-8588093798</p>
              </address>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-base mb-2">QUICK LINKS</h3>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">Almora Branch</a></li>
                <li><a href="#" className="hover:underline">Dharanaula Branch</a></li>
              </ul>
            </div>

            {/* Curriculum & Accreditation */}
            <div>
              <h3 className="font-semibold text-base mb-2">CURRICULUM & ACCREDITATION</h3>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12">
                  <img src="./CBSE-Black.svg" alt="CBSE Affiliated" className="h-full w-full object-contain" />
                </div>
                <div className="h-12 w-12 invert">
                  <img src="./NCERT-Black.svg" alt="Follows NCERT Curriculum" className="h-full w-full object-contain" />
                </div>
              </div>
              <p className="mt-2 text-gray-300 text-xs">
                Affiliated to CBSE | Follows NCERT Curriculum
              </p>
            </div>

            {/* Social Section + Email */}
            <div>
              <h3 className="font-semibold text-base mb-2">FOLLOW US</h3>
              <p className="mb-3">@springdalesschoolalmora</p>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="hover:text-gray-300"><FaFacebook size={20} /></a>
                <a href="#" className="hover:text-gray-300"><FaInstagram size={20} /></a>
                <a href="#" className="hover:text-gray-300"><FaWhatsapp size={20} /></a>
                <a href="#" className="hover:text-gray-300"><FaYoutube size={20} /></a>
              </div>
              {/* Email */}
              <div className="flex items-center space-x-2">
                <IoIosMail size={20} className="text-blue-200" />
                <a
                  href="mailto:principal.springdalesalmora@gmail.com"
                  className="hover:underline"
                >
                  principal.springdalesalmora@gmail.com
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-white text-[#3A4852] text-center py-4 text-xs">
          <div className="container mx-auto px-4">
            &copy; {currentYear} Springdales School, Almora. All rights reserved. | Developed & Maintained By{' '}
            <Link href="https://www.linkedin.com/in/ankit-suyal-b37789344/" className="hover:underline">
              Ankit Suyal
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
