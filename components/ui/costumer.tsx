// components/CustomerLove.tsx
import React from 'react';

const testimonials = [
  {
    quote: "Saved me from a costly mistake",
    name: "James R.",
    role: "Car Buyer",
  },
  {
    quote: "Accurate and detailed report highly recommend.",
    name: "Sophia L.",
    role: "Used Car Dealer",
  },
  {
    quote: "Great customer service and fast delivery.",
    name: "Carlos M.",
    role: "Vehicle Enthusiast",
  },
];

const CustomerLove = () => {
  return (
    <section className="bg-gradient-to-br from-[#f3f0fc] to-[#d6c6f3] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-[#1c1162] mb-4">
          Our Customers Love Us
        </h2>
        <p className="text-lg text-[#4a5568] mb-12">
          Rated 4.8 out of 5 on Trustpilot and Google Reviews
        </p>

        {/* Rating Section */}
        <div className="flex justify-center items-center gap-2 mb-16">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-6 h-6 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.11 3.415a1 1 0 00.95.69h3.586c.969 0 1.371 1.24.588 1.81l-2.9 2.1a1 1 0 00-.364 1.118l1.11 3.415c.3.921-.755 1.688-1.538 1.118l-2.9-2.1a1 1 0 00-1.176 0l-2.9 2.1c-.783.57-1.838-.197-1.538-1.118l1.11-3.415a1 1 0 00-.364-1.118l-2.9-2.1c-.783-.57-.38-1.81.588-1.81h3.586a1 1 0 00.95-.69l1.11-3.415z" />
            </svg>
          ))}
          <span className="text-xl font-semibold text-[#2d3748]">4.8/5</span>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="test-card rounded-2xl p-6 shadow-md border border-[#e2e8f0] hover:shadow-xl transition duration-300"
            >
              <p className="text-[#2d3748] text-lg italic mb-4">“{item.quote}”</p>
              <div className="text-sm text-[#718096] font-medium">
                - {item.name}, <span className="italic">{item.role}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trusted Section */}
        <div className="bg-[#1c1162] text-white py-10 px-6 rounded-2xl shadow-md">
          <h3 className="text-2xl font-semibold">
            Trusted by thousands of happy customers.
          </h3>
          <p className="mt-2 text-[#cbd5e0]">
            Join others who rely on us for peace of mind in their vehicle purchases.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomerLove;
