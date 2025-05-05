// components/TrustSection.tsx
import React from 'react';

const TrustSection = () => {
  return (
    <section className="max-w-[100%] mx-auto px-5  bg-gradient-to-br from-[#ede9f7] to-[#d4c3f0] py-12 rounded-lg shadow-lg">
      <h2 className="text-4xl text-[#1c1162] text-center font-bold mb-10">
        Why Trust Our Vehicle Reports?
      </h2>

      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {/* Trusted Data Sources Card */}
        <div className="flex-1 max-w-[450px] p-8 rounded-xl card">
          <h3 className="text-2xl text-[#1c1162] font-bold mb-5">
            Trusted Data Sources
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-gray-700 mt-1">•</span>
              <span>
                Access to NMYTIS  AutoCheck and other top databases ensures
                accurate information.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-700 mt-1">•</span>
              <span>
                Our reports integrate verified data from over 50 trusted sources
                worldwide.
              </span>
            </li>
          </ul>
        </div>

        {/* Exceptional Support Card */}
        <div className="flex-1 max-w-[450px]  p-8 rounded-xl card">
          <h3 className="text-2xl text-[#1c1162] font-bold mb-5">
            Exceptional Support & Security
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-gray-700 mt-1">•</span>
              <span>
                24/7 customer support via phone and email for any questions.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-700 mt-1">•</span>
              <span>
                Secure payment processing and strict data privacy guarantees.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-700 mt-1">•</span>
              <span>
                Over 1 million VIN reports processed annually with utmost reliability.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;