// app/authors/page.tsx
import { sanityClient } from '@/lib/sanity.client'
import Link from 'next/link'

export const revalidate = 300

export default async function AuthorsIndex() {
  const list = await sanityClient.fetch(
    `*[_type=="author"]|order(name asc){name,"slug": slug.current}`
  )

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">Authors</h1>
      <ul className="space-y-2">
        {list.map((a: any) => (
          <li key={a.slug}>
            <Link href={`/authors/${a.slug}`} className="hover:underline">
              {a.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
