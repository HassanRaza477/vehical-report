'use client';

import React from 'react';
import Image from 'next/image';
import CarImage from '@/public/images/side.jpg';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-[#fefdff] to-[#d4c3f0] py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1c1162] leading-tight">
            Report Hub <br /> Vehicle History Reports
          </h1>
          <p className="mt-4 text-gray-700 text-lg max-w-xl mx-auto lg:mx-0">
            Get the Full Story on Any Vehicle. Reliable and detailed vehicle history reports at your fingertips.
          </p>
        </div>

        {/* Image */}
        <div className="flex-1 relative w-full max-w-md">
          <Image
            src={CarImage}
            alt="Hero car"
            className="rounded-xl object-cover shadow-xl"
            width={520}
            height={320}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
