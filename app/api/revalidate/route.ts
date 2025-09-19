// app/api/revalidate/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST(req: NextRequest) {
  if (req.nextUrl.searchParams.get('secret') !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ ok:false }, { status: 401 })
  }
  const body = await req.json().catch(()=> ({}))
  const paths: string[] = body?.paths ?? ['/', '/blog', '/special-reports']
  paths.forEach(p => revalidatePath(p))
  return NextResponse.json({ ok:true, revalidated: paths })
}
