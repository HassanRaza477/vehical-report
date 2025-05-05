'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  const [vin, setVin] = useState('');
  const [reportType, setReportType] = useState<'Free' | 'Standard' | 'Premium'>('Free');

  const handleGenerateReport = () => {
    if (vin.length !== 17) {
      alert('Please enter a valid 17-character VIN.');
      return;
    }

    router.push(`/report?vin=${vin}&reportType=${reportType}`);
  };

  return (
    <div className="max-w-full mx-auto px-6 py-20 text-center bg-gradient-to-r from-[#fefdff] to-[#d4c3f0]">
      <h1 className="text-5xl font-bold text-[#1c1162] mb-4">Vehicle Report Generator</h1>
      <p className="text-lg text-gray-600 mb-4">Enter your vehicle  VIN number and select a report type to view your vehicle details.</p>

      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 max-w-xl mx-auto">
        <input
          type="text"
          value={vin}
          onChange={(e) => setVin(e.target.value)}
          placeholder="Enter 17-character VIN"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 mb-6"
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {['Free', 'Standard', 'Premium'].map((type) => (
            <label key={type} className="flex items-center space-x-2 bg-gray-50 px-4 py-3 rounded-md shadow-sm border cursor-pointer">
              <input
                type="radio"
                name="reportType"
                value={type}
                checked={reportType === type}
                onChange={() => setReportType(type as any)}
              />
              <span className="text-lg">
                {type}<br />
                <span className="text-xs text-gray-500">
                  {type === 'Free' ? '(Basic Info)' : type === 'Standard' ? '($9.99)' : '($19.99)'}
                </span>
              </span>
            </label>
          ))}
        </div>

        <button
          onClick={handleGenerateReport}
          className="w-full bg-[#6c4ef7] hover:bg-[#573ce0] text-white font-semibold text-lg px-6 py-3 rounded-md transition"
        >
          Generate Report
        </button>
      </div>
    </div>
  );
}
