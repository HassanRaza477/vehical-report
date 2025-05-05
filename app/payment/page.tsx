'use client';

import { useEffect, useState } from 'react';

export default function PaymentPage() {
    const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const [order, setOrder] = useState<{
    fullName: string;
    email: string;
    vin: string;
    reportType: 'Standard' | 'Premium';
    reportPrice: number;
  } | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('vehicleOrder');
    if (stored) {
      setOrder(JSON.parse(stored));
    }
  }, []);

  if (!order) {
    return <div className="p-6 text-center">Loading order details...</div>;
  }

  const features =
    order.reportType === 'Premium'
      ? ['Accident History', 'Title Records', 'Owner History', 'Service Records', 'Odometer Check']
      : ['Accident History', 'Title Records'];

      const handlePayment = async () => {
        const res = await fetch('/api/save-order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...order, paymentMethod }),
        });
      
        const data = await res.json();
      
        if (data.success) {
          alert(`Payment successful with ${paymentMethod}!`);
          // Redirect to success page or reset localStorage if needed
        } else {
          alert('Failed to save order. Try again.');
        }
      };
      

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-[#1c1162] mb-6">Payment</h1>

      {/* Order Summary */}
      <div className="bg-white p-6 rounded-xl shadow-md border mb-6">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <p><strong>Name:</strong> {order.fullName}</p>
        <p><strong>Email:</strong> {order.email}</p>
        <p><strong>VIN:</strong> {order.vin}</p>
        <p><strong>Report Type:</strong> {order.reportType}</p>
        <p><strong>Price:</strong> ${order.reportPrice}</p>
      </div>

      {/* Features Access */}
      <div className="bg-white p-6 rounded-xl shadow-md border mb-6">
        <h2 className="text-xl font-semibold mb-4">Included Features</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* Payment Method */}
      <div className="bg-white p-6 rounded-xl shadow-md border">
  <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
  <p className="mb-4 text-gray-600">Choose a payment method to complete your order:</p>

  <div className="space-y-3 mb-6">
    <label className="flex items-center space-x-3">
      <input
        type="radio"
        name="paymentMethod"
        value="Credit Card"
        checked={paymentMethod === 'Credit Card'}
        onChange={(e) => setPaymentMethod(e.target.value)}
      />
      <span>Credit Card</span>
    </label>
    <label className="flex items-center space-x-3">
      <input
        type="radio"
        name="paymentMethod"
        value="PayPal"
        checked={paymentMethod === 'PayPal'}
        onChange={(e) => setPaymentMethod(e.target.value)}
      />
      <span>PayPal</span>
    </label>
    <label className="flex items-center space-x-3">
      <input
        type="radio"
        name="paymentMethod"
        value="Crypto"
        checked={paymentMethod === 'Crypto'}
        onChange={(e) => setPaymentMethod(e.target.value)}
      />
      <span>Crypto</span>
    </label>
  </div>

 <button
  onClick={handlePayment}
  className="w-full bg-[#1c1162] text-white py-3 rounded-lg hover:bg-[#100a40] transition"
>
  Pay ${order.reportPrice} with {paymentMethod}
</button>

</div>

    </div>
  );
}
