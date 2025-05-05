'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    vin: '',
  });

  const [reportType, setReportType] = useState<'Standard' | 'Premium'>('Standard');
  const router = useRouter();

  const getPrice = () => (reportType === 'Standard' ? 14.99 : 29.99);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleGoToPayment = () => {
    const orderDetails = {
      ...form,
      reportType,
      reportPrice: getPrice(),
    };

    // Save order details to localStorage (optional)
    localStorage.setItem('vehicleOrder', JSON.stringify(orderDetails));

    // Redirect to the report page with the VIN and report type as query params
    router.push(`/report?vin=${form.vin}&reportType=${reportType}`);
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-[#1c1162] mb-6">Checkout</h1>

      <div className="space-y-6 bg-white p-8 rounded-2xl shadow-lg border">
        {/* Report Type Selection */}
        <div>
          <label className="block font-semibold text-gray-800 mb-2">Select Report Type:</label>
          <div className="flex gap-6">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="reportType"
                value="Standard"
                checked={reportType === 'Standard'}
                onChange={() => setReportType('Standard')}
              />
              <span>Standard ($14.99)</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="reportType"
                value="Premium"
                checked={reportType === 'Premium'}
                onChange={() => setReportType('Premium')}
              />
              <span>Premium ($29.99)</span>
            </label>
          </div>
        </div>

        {/* Order Summary */}
        <div className="text-gray-600 text-sm">
          You are buying a <strong>{reportType}</strong> report for <strong>${getPrice()}</strong>
        </div>

        {/* User Inputs */}
        <input
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          required
          placeholder="Full Name"
          className="w-full p-3 border rounded-lg"
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          type="email"
          placeholder="Email Address"
          className="w-full p-3 border rounded-lg"
        />
        <input
          name="vin"
          value={form.vin}
          onChange={handleChange}
          required
          placeholder="Vehicle VIN Number"
          className="w-full p-3 border rounded-lg"
        />

        <button
          type="button"
          onClick={handleGoToPayment}
          className="w-full bg-[#1c1162] text-white py-3 rounded-lg hover:bg-[#100a40] transition"
        >
          Go to Report
        </button>
      </div>
    </div>
  );
}
