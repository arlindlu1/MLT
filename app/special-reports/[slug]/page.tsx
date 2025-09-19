// app/special-reports/[slug]/page.tsx
import { sanityClient } from '@/lib/sanity.client'
import { reportBySlugQuery } from '@/lib/queries'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@/lib/image'

export const revalidate = 60

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const data = await sanityClient.fetch(reportBySlugQuery, { slug: params.slug })
  return {
    title: data?.seo?.title || data?.title,
    description: data?.seo?.description || data?.summary,
    openGraph: {
      images: data?.seo?.ogImage
        ? [{ url: urlFor(data.seo.ogImage).width(1200).height(630).url() }]
        : [],
    },
  }
}

export default async function ReportPage({
  params,
}: {
  params: { slug: string }
}) {
  const data = await sanityClient.fetch(reportBySlugQuery, { slug: params.slug })
  if (!data) return null

  return (
    <article className="prose prose-lg mx-auto max-w-3xl px-4 py-12">
      <h1>{data.title}</h1>
      <PortableText value={data.body} />
    </article>
  )
}
