// app/feed.xml/route.ts
import { NextResponse } from 'next/server'
import { sanityClient } from '@/lib/sanity.client'

export const revalidate = 600

export async function GET() {
  const base = process.env.NEXT_PUBLIC_BASE_URL || 'https://mltglobalresearch.com'

  const posts = await sanityClient.fetch(`*[_type=="post"]|order(publishedAt desc)[0...50]{
    title,
    "slug": slug.current,
    excerpt,
    publishedAt
  }`)

  const items = posts.map((p: any) => `
    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${base}/blog/${p.slug}</link>
      <guid>${base}/blog/${p.slug}</guid>
      <pubDate>${new Date(p.publishedAt || Date.now()).toUTCString()}</pubDate>
      <description><![CDATA[${p.excerpt || ''}]]></description>
    </item>`
  ).join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>MLT Global Research – Blog</title>
      <link>${base}</link>
      <description>Latest articles from MLT Global Research</description>
      ${items}
    </channel>
  </rss>`

  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  })
}
