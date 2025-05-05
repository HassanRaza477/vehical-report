'use client';
import Link from "next/link";

export default function PricingPage() {
  return (
    <div>
      {/* 🚘 Hero Section */}
      <section className="bg-[#1c1162] text-white py-28 px-6 text-center rounded-b-3xl">
        <h1 className="text-5xl font-extrabold mb-4">Vehicle Report Pricing</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Get accurate up to date vehicle history reports. Choose the plan that fits your needs.
        </p>
      </section>

      {/* 💰 Pricing Cards */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* 🆓 Free VIN Check */}
          <div className="bg-white border border-gray-300 rounded-2xl shadow-lg p-10 text-center hover:shadow-2xl transition-all">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Free VIN Check</h2>
            <p className="text-5xl font-extrabold text-[#1c1162] mb-2">$0</p>
            <p className="text-gray-500 mb-6">One time basic lookup</p>
            <ul className="text-gray-700 space-y-4 text-left mb-8">
              <li>✔ Basic Vehicle Info</li>
              <li>✔ VIN Decoder</li>
              <li>✔ Year Make Model</li>
              <li>✖ Title Accident History</li>
              <li>✖ Market Value Estimate</li>
              <li>✖ Theft Recall Info</li>
            </ul>
            <Link href="/checkout?type=Free%20VIN%20Check&price=0" passHref>
              <button className="w-full py-3 bg-[#1c1162] text-white font-semibold rounded-lg hover:bg-[#100a40] transition">
                Run Free Check
              </button>
            </Link>
          </div>

          {/* ⚙️ Standard Report */}
          <div className="bg-[#1c1162] text-white rounded-2xl shadow-2xl p-12 text-center scale-105 border-4 border-[#100a40]">
            <h2 className="text-3xl font-bold mb-4">Standard Report</h2>
            <p className="text-5xl font-extrabold mb-2">$14.99</p>
            <p className="text-gray-300 mb-6">1 Full Vehicle Report</p>
            <ul className="space-y-4 text-left mb-8">
              <li>✔ Basic VIN Details</li>
              <li>✔ Title & Accident History</li>
              <li>✔ Ownership Records</li>
              <li>✔ Theft & Recall Checks</li>
              <li>✖ Market Valuation</li>
              <li>✖ Auction Photos</li>
            </ul>
            <Link href="/checkout?type=Standard%20Report&price=14.99" passHref>
              <button className="w-full py-3 bg-white text-[#1c1162] font-semibold rounded-lg hover:bg-gray-200 transition">
                Buy Standard Report
              </button>
            </Link>

          </div>

          {/* 🔥 Premium Report */}
          <div className="bg-white border border-gray-300 rounded-2xl shadow-lg p-10 text-center hover:shadow-2xl transition-all">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Premium Report</h2>
            <p className="text-5xl font-extrabold text-[#1c1162] mb-2">$29.99</p>
            <p className="text-gray-500 mb-6">Most detailed report</p>
            <ul className="text-gray-700 space-y-4 text-left mb-8">
              <li>✔ Everything in Standard</li>
              <li>✔ Market Valuation</li>
              <li>✔ Auction & Sales Records</li>
              <li>✔ Lien & Loan Info</li>
              <li>✔ Service & Maintenance</li>
              <li>✔ Downloadable PDF Report</li>
            </ul>
            <Link href="/checkout?type=Premium%20Report&price=29.99" passHref>
              <button className="w-full py-3 bg-[#1c1162] text-white font-semibold rounded-lg hover:bg-[#100a40] transition">
                Buy Premium Report
              </button>
            </Link>

          </div>
        </div>
      </section>

      {/*  Dealership CTA */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold text-[#1c1162] mb-4">Need Bulk Reports for Your Dealership?</h2>
        <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
          Contact our sales team for bulk pricing API access and dealership tools to streamline your vehicle sourcing.
        </p>
        <button className="px-6 py-3 bg-[#1c1162] text-white font-semibold rounded-lg hover:bg-[#100a40] transition">
          Contact Enterprise Sales
        </button>
      </section>
    </div>
  );
}
