// components/BlogSearch.tsx
'use client'
import { useEffect, useState } from 'react'
export default function BlogSearch(){
  const [q,setQ]=useState(''); const [res,setRes]=useState<any[]>([])
  useEffect(()=>{ const id=setTimeout(async()=>{
    if(!q){ setRes([]); return }
    const r=await fetch(`/api/search?q=${encodeURIComponent(q)}`).then(r=>r.json()); setRes(r)
  },300); return ()=>clearTimeout(id) },[q])
  return (
    <div className="border rounded-lg p-4">
      <input className="w-full border rounded px-3 py-2 text-sm" placeholder="Search articles…" value={q} onChange={e=>setQ(e.target.value)}/>
      {!!res.length && <ul className="mt-2 divide-y border rounded">
        {res.map((r:any,i:number)=>(
          <li key={i} className="p-2 text-sm">
            <a className="hover:underline" href={`/${r._type==='post'?'blog':'special-reports'}/${r.slug}`}>{r.title}</a>
          </li>
        ))}
      </ul>}
    </div>
  )
}
