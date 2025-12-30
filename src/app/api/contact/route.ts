import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, budget, timeline, services, message } = body;

    // In a real app, you'd send an email or save to a database here.
    console.log('Contact form submission:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Company:', company);
    console.log('Budget:', budget);
    console.log('Timeline:', timeline);
    console.log('Services:', services);
    console.log('Message:', message);

    return NextResponse.json({ message: 'Form submitted successfully.' }, { status: 200 });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ message: 'Error submitting form.' }, { status: 500 });
  }
}
