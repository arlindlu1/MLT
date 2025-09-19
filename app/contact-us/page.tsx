// app/contact-us/page.tsx
'use client'
import { useState } from 'react'
import Container from '@/components/Container'

export default function ContactPage(){
  const [loading,setLoading]=useState(false); const [msg,setMsg]=useState<string>()
  async function submit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault(); setLoading(true); setMsg(undefined)
    const f=e.currentTarget
    const body={
      topic:(f.elements.namedItem('topic') as HTMLSelectElement).value,
      name:(f.elements.namedItem('name') as HTMLInputElement).value,
      email:(f.elements.namedItem('email') as HTMLInputElement).value,
      message:(f.elements.namedItem('message') as HTMLTextAreaElement).value,
    }
    const r=await fetch('/api/contact',{method:'POST',body:JSON.stringify(body)})
    setLoading(false); setMsg(r.ok?'Thanks! We’ll be in touch.':'Something went wrong.')
    if(r.ok) f.reset()
  }
  return (
    <Container>
      <div className="py-10 max-w-xl">
        <h1 className="text-3xl font-semibold mb-6">Contact Us</h1>
        <form onSubmit={submit} className="space-y-4">
          <select name="topic" className="w-full border rounded px-3 py-2" defaultValue="General">
            <option>General</option><option>Technical Support</option>
            <option>Billing & Accounting</option><option>Press/Media</option>
            <option>Subscription Feedback</option>
          </select>
          <input name="name" placeholder="Your name" className="w-full border rounded px-3 py-2" required/>
          <input name="email" type="email" placeholder="you@example.com" className="w-full border rounded px-3 py-2" required/>
          <textarea name="message" rows={6} placeholder="How can we help?" className="w-full border rounded px-3 py-2" required/>
          <button disabled={loading} className="rounded-md bg-black text-white px-4 py-2">{loading?'Sending…':'Send'}</button>
          {msg && <p className="text-sm text-gray-600">{msg}</p>}
        </form>
      </div>
    </Container>
  )
}
