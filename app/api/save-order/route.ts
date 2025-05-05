import { NextResponse } from 'next/server';
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: 'production',
  apiVersion: '2024-06-01',
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN!,
  useCdn: false,
});

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const result = await client.create({
      _type: 'order',
      fullName: body.fullName,
      email: body.email,
      vin: body.vin,
      reportType: body.reportType,
      reportPrice: body.reportPrice,
      paymentMethod: body.paymentMethod,
      status: 'Pending',
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, data: result });
  } catch (err) {
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
}
