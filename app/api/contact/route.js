import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function POST(request) {
  const body = await request.json();
  const { name, email, message } = body;

  if (
    !name || typeof name !== 'string' ||
    !email || typeof email !== 'string' ||
    !message || typeof message !== 'string'
  ) {
    return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
  }

  try {
    await dbConnect();

    await Contact.create({ name, email, message });

    return NextResponse.json({ message: 'Message submitted successfully' }, { status: 201 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
