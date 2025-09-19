// app/api/contact/route.ts
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { topic, name, email, message } = await req.json()
  if (!name || !email || !message) return NextResponse.json({ok:false}, {status:400})

  // store in Sanity (if you set token)
  // ... (you already have this; keep or remove)

  // Email via Resend
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type':'application/json' },
    body: JSON.stringify({
      from: 'MLT Contact <noreply@your-domain>',
      to: [process.env.CONTACT_TO!],
      subject: `[${topic||'Contact'}] ${name} <${email}>`,
      html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message.replace(/\n/g,'<br/>')}</p>`
    })
  })
  if (!r.ok) return NextResponse.json({ok:false}, {status:502})
  return NextResponse.json({ ok:true })
}
