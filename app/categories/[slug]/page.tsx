import { sanityClient } from '@/lib/sanity.client'
import { categoryPageQuery, allCategoriesQuery } from '@/lib/queries'
import PostCard from '@/components/PostCard'
import Link from 'next/link'

export const revalidate = 60

export async function generateStaticParams() {
  const cats = await sanityClient.fetch(allCategoriesQuery)
  return (cats || []).map((c:any)=>({ slug: c.slug }))
}

export default async function CategoryPage({params}:{params:{slug:string}}) {
  const data = await sanityClient.fetch(categoryPageQuery, { slug: params.slug })
  if (!data) return null
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">{data.title}</h1>

      {!!data.posts?.length && (
        <>
          <h2 className="text-xl font-semibold mb-3">Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {data.posts.map((p:any)=> <PostCard key={p.slug} p={p} />)}
          </div>
        </>
      )}

      {!!data.reports?.length && (
        <>
          <h2 className="text-xl font-semibold mb-3">Special Reports</h2>
          <ul className="space-y-3">
            {data.reports.map((r:any)=>(
              <li key={r.slug} className="border rounded p-4">
                <Link href={`/special-reports/${r.slug}`} className="font-medium hover:underline">{r.title}</Link>
                <p className="text-gray-600">{r.summary}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
