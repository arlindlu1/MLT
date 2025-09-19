'use client'
import { useEffect, useState } from 'react'

type Item = { id:string; text:string }
export default function Toc() {
  const [items, setItems] = useState<Item[]>([])
  useEffect(() => {
    const hs = Array.from(document.querySelectorAll('article h2, article h3')) as HTMLElement[]
    const data = hs.map(h => {
      if (!h.id) {
        h.id = h.textContent?.toLowerCase().replace(/\s+/g,'-').replace(/[^\w-]/g,'') ?? ''
      }
      return { id: h.id, text: h.textContent || '' }
    })
    setItems(data)
  }, [])
  if (!items.length) return null
  return (
    <aside className="sticky top-24 hidden lg:block w-64 text-sm">
      <div className="border rounded p-4">
        <div className="font-medium mb-2">Contents</div>
        <ul className="space-y-2">
          {items.map(i=> <li key={i.id}><a className="hover:underline" href={`#${i.id}`}>{i.text}</a></li>)}
        </ul>
      </div>
    </aside>
  )
}
