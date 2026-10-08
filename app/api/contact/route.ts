import { NextRequest, NextResponse } from 'next/server';

import { sendContactMail } from '../../../backend/src/services/contactMailService';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const payload = {
      name: String(body?.name ?? '').trim(),
      email: String(body?.email ?? '').trim(),
      phone: String(body?.phone ?? '').trim(),
      service: String(body?.service ?? '').trim(),
      message: String(body?.message ?? '').trim(),
    };

    if (!payload.name || !payload.email || !payload.phone) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and phone are required.' },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(payload.email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address.' },
        { status: 400 },
      );
    }

    await sendContactMail(payload);

    return NextResponse.json(
      { success: true, message: 'Your request has been sent successfully.' },
      { status: 200 },
    );
  } catch (error) {
    console.error('Contact form submission failed:', error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : 'Something went wrong while sending your request.',
      },
      { status: 500 },
    );
  }
}
