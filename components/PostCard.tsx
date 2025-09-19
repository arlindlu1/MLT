import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/image'

export default function PostCard({p}:{p:any}) {
  return (
    <a href={`/blog/${p.slug}`} className="block border rounded-lg overflow-hidden hover:shadow-sm">
      {p.mainImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={urlFor(p.mainImage).width(1200).height(630).url()} alt={p.title} className="w-full h-48 object-cover"/>
      )}
      <div className="p-4">
        <h3 className="text-lg font-medium">{p.title}</h3>
        {p.excerpt && <p className="text-sm text-gray-600 mt-1 line-clamp-3">{p.excerpt}</p>}
      </div>
    </a>
  )