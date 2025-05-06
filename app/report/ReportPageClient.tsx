'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ReportPageClient() {
  const searchParams = useSearchParams();
  const vin = searchParams.get('vin') || '';
  const reportType = (searchParams.get('reportType') || 'Free') as 'Free' | 'Standard' | 'Premium';

  interface VehicleData {
    VIN: string;
    Make: string;
    Model: string;
    ModelYear: string;
    VehicleType?: string;
    EngineCylinders?: string;
    EngineModel?: string;
    FuelTypePrimary?: string;
    BodyClass?: string;
    PlantCountry?: string;
    AirBagLocFront?: string;
    AirBagLocSide?: string;
    DriveType?: string;
    BrakeSystemDesc?: string;
    Trim?: string;
    TransmissionStyle?: string;
    EngineHP?: string;
  }

  const [vehicleData, setVehicleData] = useState<VehicleData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (vin.length === 17) {
      fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvalues/${vin}?format=json`)
        .then(res => res.json())
        .then(data => setVehicleData(data.Results[0]))
        .catch(err => console.error(err))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [vin]);

  if (loading) {
    return (
      <div className="p-10 text-center text-xl font-semibold text-gray-700 animate-pulse">
        ⏳ Loading report...
      </div>
    );
  }

  if (!vehicleData) {
    return (
      <div className="p-10 text-center text-red-600 font-semibold">
        ❌ No data found for VIN: {vin}
      </div>
    );
  }

  return (
    <motion.div
      className="max-w-6xl mx-auto p-8 mt-10 rounded-xl shadow-xl bg-gradient-to-br from-white via-gray-50 to-blue-100"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold text-[#1c1162] mb-6 tracking-tight">📄 Vehicle Report ({reportType})</h1>

      <div className="grid gap-4 text-gray-800 text-base">
        <p><strong>VIN:</strong> {vehicleData.VIN}</p>
        <p><strong>Make:</strong> {vehicleData.Make}</p>
        <p><strong>Model:</strong> {vehicleData.Model}</p>
        <p><strong>Model Year:</strong> {vehicleData.ModelYear}</p>

        {reportType !== 'Free' && (
          <>
            <hr className="my-4" />
            <h2 className="text-xl font-semibold text-[#1c1162]">🚗 Standard Details</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <p><strong>Vehicle Type:</strong> {vehicleData.VehicleType}</p>
              <p><strong>Engine:</strong> {vehicleData.EngineCylinders || 'N/A'} Cyl / {vehicleData.EngineModel || 'N/A'}</p>
              <p><strong>Fuel Type:</strong> {vehicleData.FuelTypePrimary}</p>
              <p><strong>Body Class:</strong> {vehicleData.BodyClass}</p>
              <p><strong>Plant Country:</strong> {vehicleData.PlantCountry}</p>
            </div>
          </>
        )}

        {reportType === 'Premium' && (
          <>
            <hr className="my-4" />
            <h2 className="text-xl font-semibold text-[#1c1162]">💎 Premium Details</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <p><strong>Airbags:</strong> Front: {vehicleData.AirBagLocFront || 'N/A'}, Side: {vehicleData.AirBagLocSide || 'N/A'}</p>
              <p><strong>Drive Type:</strong> {vehicleData.DriveType}</p>
              <p><strong>Brake System:</strong> {vehicleData.BrakeSystemDesc}</p>
              <p><strong>Trim:</strong> {vehicleData.Trim}</p>
              <p><strong>Transmission:</strong> {vehicleData.TransmissionStyle}</p>
              <p><strong>Engine HP:</strong> {vehicleData.EngineHP}</p>
            </div>

            <hr className="my-4" />
            <h2 className="text-xl font-semibold text-[#1c1162]">📝 Vehicle History</h2>
            <div className="bg-white border border-gray-200 p-4 rounded-md shadow-sm">
              <p className="text-gray-600 italic">[Sample vehicle history data placeholder]</p>
              <ul className="list-disc list-inside mt-2 text-sm">
                <li>First registered: 2017-03-10</li>
                <li>Title issued: Clean</li>
                <li>Ownership: 2 previous owners</li>
              </ul>
            </div>

            <hr className="my-4" />
            <h2 className="text-xl font-semibold text-[#1c1162]">💥 Accident History</h2>
            <div className="bg-white border border-red-100 p-4 rounded-md shadow-sm">
              <p className="text-gray-600 italic">[Sample accident history placeholder]</p>
              <ul className="list-disc list-inside mt-2 text-sm text-red-600">
                <li>Minor accident reported: 2019-05-22 (rear bumper)</li>
              </ul>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}
