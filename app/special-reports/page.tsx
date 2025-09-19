// app/special-reports/page.tsx
import { sanityClient } from '@/lib/sanity.client'
import { reportsQuery } from '@/lib/queries'
import Container from '@/components/Container'

export const revalidate = 60

export default async function ReportsIndex() {
  const items = await sanityClient.fetch(reportsQuery)

  return (
    <Container wide>
      <div className="py-10">
        <h1 className="text-3xl font-semibold mb-6">Special Reports</h1>

        <ul className="grid gap-6 sm:grid-cols-2">
          {(items || []).map((r: any) => (
            <li key={r.slug} className="border rounded-lg p-4">
              <a
                href={`/special-reports/${r.slug}`}
                className="font-medium hover:underline"
              >
                {r.title}
              </a>
              {r.summary && (
                <p className="text-sm text-gray-600 mt-1 line-clamp-3">
                  {r.summary}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}
