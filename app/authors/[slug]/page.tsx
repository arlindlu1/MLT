import { sanityClient } from '@/lib/sanity.client'
import { authorPageQuery, allAuthorsQuery } from '@/lib/queries'
import { PortableText } from '@portabletext/react'
import PostCard from '@/components/PostCard'

export const revalidate = 120

export async function generateStaticParams() {
  const authors = await sanityClient.fetch(allAuthorsQuery)
  return (authors||[]).map((a:any)=>({ slug: a.slug }))
}

export default async function AuthorPage({params}:{params:{slug:string}}){
  const a = await sanityClient.fetch(authorPageQuery, { slug: params.slug })
  if (!a) return null
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold mb-2">{a.name}</h1>
      <div className="prose"><PortableText value={a.bio}/></div>

      <h2 className="text-xl font-semibold mt-8 mb-4">Articles</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(a.posts||[]).map((p:any)=> <PostCard key={p.slug} p={p}/>)}
      </div>
    </div>
  )
}
