// app/api/newsletter/route.ts
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { email } = await req.json()
    if (!email) return NextResponse.json({ ok:false }, { status: 400 })

    const r = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        groups: process.env.MAILERLITE_GROUP_ID ? [process.env.MAILERLITE_GROUP_ID] : undefined,
      }),
    })

    if (!r.ok) return NextResponse.json({ ok:false }, { status: 502 })
    return NextResponse.json({ ok:true })
  } catch {
    return NextResponse.json({ ok:false }, { status: 500 })
  }
}
