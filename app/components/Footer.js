import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='w-full'>
      <footer className="w-full bg-[var(--primary-blue-1)] text-[#FFFFFF]">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

            <div className="mb-6">
              <h3 className="font-bold text-lg mb-2">ALMORA BRANCH</h3>
              <p className="mb-4">(Grades 1-12)</p>
              <address className="not-italic">
                <p>Near taxi stand</p>
                <p>Almora, Uttrakhand 263601</p>
                <p>+91-8588093798</p>
              </address>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-lg mb-2">DHARANAULA BRANCH</h3>
              <p className="mb-4">(Grades K-6)</p>
              <address className="not-italic">
                <p>Paltan Bazar, Dharanaula</p>
                <p>Almora, Uttarakhand 263601</p>
                <p>+91-8588093798</p>
              </address>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-lg mb-6">DISCOVER</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">ALMORA BRANCH</a></li>
                <li><a href="#" className="hover:underline">DHARANAULA BRANCH</a></li>
                <li><a href="#" className="hover:underline">Schools Network</a></li>
                <li><a href="#" className="hover:underline">Global Connect</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg">ACCREDITATION & MEMBERSHIPS</h3>
              <div className="flex flex-wrap gap-4 items-center justify-start">
                <div className="p-2 rounded-lg flex items-center justify-center h-16 w-16">
                  <img
                    className="h-full object-contain"
                    src="./CBSE-Black.svg"
                    alt="CBSE"
                  />
                </div>
                <div className="p-2 rounded-lg flex items-center justify-center h-16 w-16">
                  <img
                    className="h-full object-contain invert"
                    src="./NCERT-Black.svg"
                    alt="NCERT"
                  />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-lg mb-4">Like. Follow. Friend.</h3>
              <p>@springdalesschoolalmora</p>
              <div className="flex items-center space-x-4 mb-4">
                <a href="#" className="text-[#FFFFFF] hover:text-gray-300">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="text-[#FFFFFF] hover:text-gray-300">
                  <FaInstagram size={24} />
                </a>
                <a href="#" className="text-[#FFFFFF] hover:text-gray-300">
                  <FaWhatsapp size={24} />
                </a>
                <a href="#" className="text-[#FFFFFF] hover:text-gray-300">
                  <FaYoutube size={24} />
                </a>
              </div>
            </div>

          </div>
        </div>

        <div className="bg-[#FFFFFF] text-[#3A4852] text-center py-4">
          <div className="container mx-auto px-4">
            &copy; School of Almora | Privacy | Cookie Policy | Terms of Use
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
