// app/about/page.tsx
import React from 'react';
import Image from 'next/image';
import { FaShieldAlt, FaClock, FaFileAlt, FaUsers } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      
      {/* Hero Section */}
      <section className="bg-[#1c1162] text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Report Hub</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Empowering car buyers with accurate reliable and instant vehicle history reports.
        </p>
      </section>

      {/* About Image + Text Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative w-full h-96">
            <Image 
              src="/images/about.jpg" 
              alt="reporthub Overview" 
              fill 
              className="object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              At Report Hub we specialize in delivering reliable and fast vehicle history reports to help you make smarter safer car buying decisions.
              With cutting edge data technology and partnerships with national databases we bring transparency and trust to your vehicle purchase.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-100 dark:bg-gray-800 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Mission and Vision</h2>
          <div className="grid md:grid-cols-2 gap-10 text-left">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To provide vehicle buyers with trusted insights and comprehensive reports that promote confidence transparency and safety.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To become the most trusted vehicle data provider globally empowering buyers with knowledge before every purchase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <FaShieldAlt size={32} className="text-[#1c1162]" />,
                title: "Trusted Reports",
                desc: "We provide data from verified sources so you get the most accurate vehicle history."
              },
              {
                icon: <FaClock size={32} className="text-[#1c1162]" />,
                title: "Instant Access",
                desc: "Get your vehicle report instantly after submitting a VIN no waiting."
              },
              {
                icon: <FaFileAlt size={32} className="text-[#1c1162]" />,
                title: "Detailed Insights",
                desc: "Our reports include ownership title issues accidents mileage and more."
              },
              {
                icon: <FaUsers size={32} className="text-[#1c1162]" />,
                title: "Satisfied Customers",
                desc: "Thousands of happy customers trust AutoInsight for their vehicle research."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 text-left"
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
