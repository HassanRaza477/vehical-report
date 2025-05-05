export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      { name: 'fullName', type: 'string', title: 'Full Name' },
      { name: 'email', type: 'string', title: 'Email' },
      { name: 'vin', type: 'string', title: 'VIN Number' },
      { name: 'reportType', type: 'string', title: 'Report Type' },
      { name: 'reportPrice', type: 'number', title: 'Report Price' },
      { name: 'paymentMethod', type: 'string', title: 'Payment Method' },
      { name: 'status', type: 'string', title: 'Status', initialValue: 'Pending' },
      { name: 'createdAt', type: 'datetime', title: 'Created At' },
    ],
  };
  