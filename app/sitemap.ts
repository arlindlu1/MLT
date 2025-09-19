// app/sitemap.ts
import type { MetadataRoute } from 'next'
import { sanityClient } from '@/lib/sanity.client'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_BASE_URL || 'https://mltglobalresearch.com'
  const posts = await sanityClient.fetch(`*[_type=="post"]{ "slug": slug.current, _updatedAt }`)
  const reports = await sanityClient.fetch(`*[_type=="specialReport"]{ "slug": slug.current, _updatedAt }`)

  const staticRoutes = ['', '/blog', '/special-reports', '/strategy', '/contact-us']
    .map((p)=>({ url: `${base}${p}`, lastModified: new Date() }))

  const postUrls = posts.map((p:any)=>({ url: `${base}/blog/${p.slug}`, lastModified: p._updatedAt }))
  const reportUrls = reports.map((r:any)=>({ url: `${base}/special-reports/${r.slug}`, lastModified: r._updatedAt }))

  return [...staticRoutes, ...postUrls, ...reportUrls]
}
