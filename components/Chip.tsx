// components/Chip.tsx
export default function Chip({children, href}:{children:React.ReactNode; href:string}) {
  return <a href={href} className="px-3 py-1 rounded-full border text-sm text-gray-700 hover:bg-gray-50">{children}</a>
}
