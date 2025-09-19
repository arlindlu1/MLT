import { NextResponse } from 'next/server'
import { sanityClient } from '@/lib/sanity.client'
import { searchQuery } from '@/lib/queries'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const q = (searchParams.get('q') ?? '').trim()
  if (!q) return NextResponse.json([])
  const res = await sanityClient.fetch(searchQuery, { q: `${q}*` })
  return NextResponse.json(res)
}
