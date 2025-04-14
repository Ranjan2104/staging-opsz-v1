import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Email from '@/models/Email';

export async function POST(request) {
  const body = await request.json();
  const { email } = body;

  if (!email || typeof email !== 'string') {
    return NextResponse.json({ message: 'Invalid email' }, { status: 400 });
  }

  try {
    await dbConnect();
    const existing = await Email.findOne({ email });
    if (existing) {
      return NextResponse.json({ message: 'Email already subscribed' }, { status: 409 });
    }
    
    await Email.create({ email });

    return NextResponse.json({ message: 'Email subscribed successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
