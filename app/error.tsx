// app/error.tsx
'use client'
export default function Error({ error }: { error: Error }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24">
      <h1 className="text-3xl font-semibold">Something went wrong</h1>
      <pre className="mt-4 text-sm bg-gray-50 p-3 rounded">{error.message}</pre>
    </div>
  )
}
