// components/Button.tsx
export default function Button({children, href, onClick}:{children:React.ReactNode; href?:string; onClick?:()=>void}) {
  const base = 'inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-white text-sm hover:opacity-90'
  return href ? <a className={base} href={href}>{children}</a> : <button className={base} onClick={onClick}>{children}</button>
}
