// app/blog/page.tsx
export const dynamic = 'force-dynamic'
import Container from '@/components/Container'
import { sanityClient } from '@/lib/sanity.client'
import { postsQuery, postsByCategoryQuery } from '@/lib/queries'
import PostCard from '@/components/PostCard'
import Chip from '@/components/Chip'
import BlogSearch from '@/components/BlogSearch'
import SubscribeCard from '@/components/SubscribeCard'

export default async function BlogIndex({searchParams}:{searchParams:{category?:string}}){
  const {category}=searchParams
  const posts = await sanityClient.fetch(category?postsByCategoryQuery:postsQuery, category?{cat:category}:{})
  const categories = await sanityClient.fetch(`*[_type=="category"]|order(title asc){title,"slug":slug.current}`)

  return (
    <Container wide>
      <div className="py-10 grid lg:grid-cols-[1fr_320px] gap-10">
        <div>
          <h1 className="text-3xl font-semibold mb-4">Blog</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((c:any)=> <Chip key={c.slug} href={`/blog?category=${c.slug}`}>{c.title}</Chip>)}
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {posts.map((p:any)=> <PostCard key={p.slug} p={p}/>)}
          </div>
        </div>
        <aside className="space-y-6">
          <BlogSearch/>
          <SubscribeCard/>
        </aside>
      </div>
    </Container>
  )
}
