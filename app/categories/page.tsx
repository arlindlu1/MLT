import { sanityClient } from '@/lib/sanity.client'

export const revalidate = 300

export default async function CategoriesIndex() {
  const cats = await sanityClient.fetch(`*[_type=="category"]|order(title asc){title,"slug":slug.current}`)
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">Categories</h1>
      <ul className="space-y-2">
        {cats.map((c:any)=>(
          <li key={c.slug}><a className="hover:underline" href={`/categories/${c.slug}`}>{c.title}</a></li>
        ))}
      </ul>
    </div>
  )
}
