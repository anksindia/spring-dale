import React from 'react';
import Image from 'next/image';
import PageHeading from "../components/PageHeading";

const admissions = () => {
    return (
        <div>
            <PageHeading content={"Meet the Admissions Team"} imageUrl={"/photo4.webp"} />

            <div className="flex flex-col md:flex-row justify-between gap-10 pt-10 pb-10 px-5 md:px-40">
                {/* Main Content */}
                <div className="md:w-2/3 px-5 py-10">
                    <h3 className="text-4xl font-semibold mb-5">Welcome!</h3>
                    <p className="text-lg leading-relaxed text-gray-700">
                        We appreciate your interest and look forward to getting to know your family.
                        <br /><br />
                        When a family chooses <strong>Spring Dales Almora</strong>, they are joining a community of learners. We are connected by an appreciation for our educational ideals in a setting that fosters <strong>collaboration, not competitiveness</strong>. Our graduates continue on to a variety of colleges and universities, all matched to their individual academic strengths and personal purpose.
                        <br /><br />
                        As you learn more about our <strong>close-knit community</strong>, we are here to answer any questions you may have. There are several ways to learn more about the educational experience at Spring Dales Almora, including <strong>campus tours, open houses, community events, virtual informational sessions, and one-on-one conversations</strong>.
                        <br /><br />
                        We look forward to connecting with your family at an upcoming event and guiding you through the admissions process.
                    </p>

                    <p className="mt-5 font-medium text-gray-700">
                        Warm wishes,
                        <br /> Emma & Rahul
                        <br /> The Spring Dales Almora Admissions Team
                    </p>

                    {/* Contact Info */}
                    <div className="mt-5">
                        <h4 className="text-2xl text-[#01A6CF] font-semibold">Contact Us</h4>
                        <p className="text-lg text-[#01A6CF]">
                            <a href="mailto:admissions@springdalesalmora.org" className="underline">
                                admissions@springdalesalmora.org
                            </a>
                        </p>
                        <p className="text-lg text-[#01A6CF]">
                            <a href="tel:+911234567890" className="underline">+91 1234567890</a>
                        </p>
                    </div>
                </div>

                {/* Sidebar - Admissions Office */}
                <div className="md:w-1/3">
                    <h3 className="text-2xl text-center mb-5">Admissions Office</h3>

                    <div className="flex flex-col items-center mb-10">
                        <Image
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfBNqQiUOfbPw3m_t5RLhw5M87r_1J9EIYqg&s"
                            alt="Director of Admissions"
                            width={160}
                            height={160}
                            className="rounded-full mb-3 object-cover"
                        />
                        <h4 className="text-lg font-medium">Jennifer Chapa</h4>
                        <p className="text-gray-600">Director of Admissions</p>
                        <a href="mailto:jennifer@springdalesalmora.org" className="text-[#01A6CF] underline">
                            jennifer@springdalesalmora.org
                        </a>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                            alt="Assistant Director of Admissions"
                            width={160}  
                            height={160} 
                            className="rounded-full mb-3 object-cover"
                        />
                        <h4 className="text-lg font-medium">Jen Battad</h4>
                        <p className="text-gray-600">Assistant Director of Admissions</p>
                        <a href="mailto:jen@springdalesalmora.org" className="text-[#01A6CF] underline">
                            jen@springdalesalmora.org
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default admissions;
