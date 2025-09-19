import Link from 'next/link'
import { sanityClient } from '@/lib/sanity.client'
import { navQuery } from '@/lib/queries'

export default async function Footer(){
  const data = await sanityClient.fetch(navQuery)
  const f = data?.footerNav ?? []
  return (
    <footer className="border-t mt-16">
      <div className="container-wide py-10 text-sm text-gray-600 flex items-center justify-between">
        <p>© {new Date().getFullYear()} {data?.siteTitle ?? 'MLT Global Research'}</p>
        <nav className="flex gap-4">
          {f.map((i:any)=> <Link key={i.href} href={i.href} className="hover:text-black">{i.title}</Link>)}
        </nav>
      </div>
    </footer>
  )
}
