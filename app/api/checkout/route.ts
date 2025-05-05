import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const order = await client.create({
      _type: 'order',
      fullName: body.fullName,
      email: body.email,
      vin: body.vin,
      reportType: body.reportType,
      reportPrice: parseFloat(body.reportPrice),
      status: 'Pending',
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, order });
  } catch (err) {
    console.error('Sanity Error:', err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
