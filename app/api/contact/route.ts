import { NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/mail';

export const runtime = 'nodejs';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json(
      { error: 'Sorğu məlumatı oxunmadı.' },
      { status: 400 }
    );
  }

  const payload = {
    name: String(body.name ?? '').trim(),
    email: String(body.email ?? '').trim(),
    phone: String(body.phone ?? '').trim(),
    service: String(body.service ?? '').trim(),
    budget: String(body.budget ?? '').trim(),
    message: String(body.message ?? '').trim(),
  };

  if (!payload.name) {
    return NextResponse.json({ error: 'Ad soyad tələb olunur.' }, { status: 400 });
  }

  if (!payload.email || !EMAIL_REGEX.test(payload.email)) {
    return NextResponse.json({ error: 'Düzgün e-poçt daxil edin.' }, { status: 400 });
  }

  if (!payload.message) {
    return NextResponse.json({ error: 'Mesaj tələb olunur.' }, { status: 400 });
  }

  try {
    await sendContactEmail(payload);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact form email failed:', error);
    return NextResponse.json(
      { error: 'Mesaj göndərilə bilmədi. Zəhmət olmasa bir daha cəhd edin.' },
      { status: 500 }
    );
  }
}
