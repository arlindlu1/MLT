// components/Header.tsx
import Link from 'next/link'
import Image from 'next/image'
import { sanityClient } from '@/lib/sanity.client'
import { navQuery } from '@/lib/queries'
import { urlFor } from '@/lib/image'

export default async function Header() {
  const data = await sanityClient.fetch(navQuery)
  const nav = data?.mainNav ?? [
    {title:'Home',href:'/'},{title:'Blog',href:'/blog'},
    {title:'Special Reports',href:'/special-reports'},
    {title:'Strategy',href:'/strategy'},{title:'Contact',href:'/contact-us'}
  ]
  const logo = data?.logo ? urlFor(data.logo).width(140).height(40).url() : null

  return (
    <header className="border-b bg-white">
      <div className="container-wide h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {logo ? (
            <Image src={logo} alt={data?.siteTitle ?? 'MLT Global Research'} width={140} height={40} />
          ) : (
            <span className="font-semibold text-[15px] tracking-tight">{data?.siteTitle ?? 'MLT Global Research'}</span>
          )}
        </Link>
        <nav className="flex gap-6 text-sm text-gray-700">
          {nav.map((i:any)=>(
            <Link key={i.href} href={i.href} className="hover:text-black">{i.title}</Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
