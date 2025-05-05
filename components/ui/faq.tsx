
"use client";
import { useState } from 'react';

const FAQ_DATA = [
  {
    question: "How accurate are your vehicle reports?",
    answer: "Our reports combine data from 100+ verified sources including government databases, insurance companies, and dealership records. We maintain 98% accuracy rate as verified by independent audits."
  },
  {
    question: "How long does it take to get a report?",
    answer: "Reports are generated instantly after payment confirmation. Typically takes under 2 minutes to receive your full PDF report via email."
  },
  {
    question: "Is my payment information secure?",
    answer: "We use military-grade 256-bit SSL encryption and PCI DSS compliant payment processing. Your financial data is never stored on our servers."
  },
  {
    question: "Can I get a refund?",
    answer: "We offer full refunds within 24 hours if the report contains errors or doesn't meet your expectations. Contact our support team for assistance."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find quick answers to common questions about vehicle reports
          </p>
        </div>

        <div className="grid gap-4 md:gap-6">
          {FAQ_DATA.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 md:p-8 flex justify-between items-center"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-6 md:p-8 pt-0 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions? We are here to help
          </p>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}