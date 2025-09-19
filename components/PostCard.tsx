// components/PostCard.tsx
import Link from 'next/link'
import { urlFor } from '@/lib/image'

type Props = {
  p: {
    slug: string
    title: string
    excerpt?: string
    mainImage?: any
  }
}

export default function PostCard({ p }: Props) {
  return (
    <article className="border rounded-lg overflow-hidden hover:shadow-sm">
      {p.mainImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={urlFor(p.mainImage).width(1200).height(630).url()}
          alt={p.title}
          className="w-full h-48 object-cover"
        />
      ) : null}

      <div className="p-4">
        <h3 className="text-lg font-medium">
          <Link href={`/blog/${p.slug}`} className="hover:underline">
            {p.title}
          </Link>
        </h3>
        {p.excerpt ? (
          <p className="text-sm text-gray-600 mt-1 line-clamp-3">{p.excerpt}</p>
        ) : null}
      </div>
    </article>
  )
}
