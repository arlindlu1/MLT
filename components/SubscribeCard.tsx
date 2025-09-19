// components/SubscribeCard.tsx
'use client'
import { useState } from 'react'
export default function SubscribeCard() {
  const [email,setEmail]=useState(''); const [msg,setMsg]=useState<string>()
  async function submit(e:React.FormEvent){ e.preventDefault(); setMsg(undefined)
    const r = await fetch('/api/newsletter',{method:'POST',body:JSON.stringify({email})})
    setMsg(r.ok?'Subscribed. Check your inbox.':'Subscription failed.'); if(r.ok) setEmail('')
  }
  return (
    <div className="border rounded-lg p-4">
      <h3 className="font-medium">Subscribe</h3>
      <p className="text-sm text-gray-600 mt-1">Get new research by email.</p>
      <form onSubmit={submit} className="mt-3 flex gap-2">
        <input value={email} onChange={e=>setEmail(e.target.value)} type="email" required placeholder="you@example.com"
          className="flex-1 border rounded-md px-3 py-2 text-sm"/>
        <button className="rounded-md bg-black text-white px-3 text-sm">Join</button>
      </form>
      {msg && <p className="text-xs text-gray-600 mt-2">{msg}</p>}
    </div>
  )
}
