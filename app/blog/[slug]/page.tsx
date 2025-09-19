// app/blog/[slug]/page.tsx
import { sanityClient } from '@/lib/sanity.client'
import { postBySlugQuery } from '@/lib/queries'
import { PortableText } from '@portabletext/react'
import Container from '@/components/Container'
import SubscribeCard from '@/components/SubscribeCard'
import Toc from '@/components/Toc'
import { urlFor } from '@/lib/image'

export const revalidate = 60

export async function generateMetadata({ params }:{params:{slug:string}}){
  const post = await sanityClient.fetch(postBySlugQuery, { slug: params.slug })
  return {
    title: post?.seo?.title || post?.title,
    description: post?.seo?.description || post?.excerpt,
    openGraph: { images: post?.seo?.ogImage ? [{ url: urlFor(post.seo.ogImage).width(1200).height(630).url() }] : [] },
  }
}

export default async function PostPage({params}:{params:{slug:string}}){
  const post = await sanityClient.fetch(postBySlugQuery, { slug: params.slug })
  if(!post) return null
  return (
    <Container wide>
      <div className="py-10 grid lg:grid-cols-[1fr_260px] gap-10">
        <article className="prose prose-lg">
          <h1 className="font-serif">{post.title}</h1>
          <PortableText value={post.body}/>
          {post?.pdfUrl && <p><a className="underline" href={post.pdfUrl} target="_blank">Download PDF</a></p>}
        </article>
        <div className="space-y-6">
          <Toc/>
          <SubscribeCard/>
        </div>
      </div>
    </Container>
  )
}
