'use client';
import React from 'react';

const ReportFeatures: React.FC = () => {
  return (
    <section className="bg-[#2d1c59] py-16 px-4">
      <div className="max-w-5xl mx-auto bg-[#c8c1da] rounded-xl px-6 py-10 md:px-12 md:py-14 cursor-pointer">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1c1162] mb-10">
          Comprehensive Report Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-[#e9e4f2] p-6 rounded-md text-[#1c1162]">
            <h3 className="font-extrabold text-xl mb-2">Accident History</h3>
            <p className="text-base">Explore any prior collisions or damage reports.</p>
          </div>
          <div className="bg-[#e9e4f2] p-6 rounded-md text-[#1c1162]">
            <h3 className="font-extrabold text-xl mb-2">Title Records</h3>
            <p className="text-base">Verify the authenticity and status of the vehicle title.</p>
          </div>
          <div className="bg-[#e9e4f2] p-6 rounded-md text-[#1c1162]">
            <h3 className="font-extrabold text-xl mb-2">Mileage Verification</h3>
            <p className="text-base">Ensure accurate odometer readings. 1 in 5 vehicles has discrepancies. (Source: NHTSA)</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#e9e4f2] p-6 rounded-md text-[#1c1162]">
            <h3 className="font-extrabold text-xl mb-2">Ownership & Lien Records</h3>
            <p className="text-base">Check for previous owners and any outstanding financial claims.</p>
          </div>
          <div className="bg-[#e9e4f2] p-6 rounded-md text-[#1c1162]">
            <h3 className="font-extrabold text-xl mb-2">Recall Information</h3>
            <p className="text-base">Stay informed on safety recalls affecting the vehicle.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportFeatures;
