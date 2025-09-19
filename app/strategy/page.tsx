// app/strategy/page.tsx
import { sanityClient } from '@/lib/sanity.client'
import { strategyQuery } from '@/lib/queries'
import { PortableText } from '@portabletext/react'
import Container from '@/components/Container'

export const revalidate = 300

export default async function StrategyPage(){
  const data = await sanityClient.fetch(strategyQuery)
  return (
    <Container>
      <div className="py-10">
        <h1 className="text-3xl font-semibold mb-6">{data?.title ?? 'Strategy'}</h1>
        <div className="prose">
          <PortableText value={data?.hero}/>
          <PortableText value={data?.sections}/>
        </div>
      </div>
    </Container>
  )
}
