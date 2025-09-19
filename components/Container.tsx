// components/Container.tsx
export default function Container({children, wide=false}:{children:React.ReactNode; wide?:boolean}) {
  return <div className={wide ? 'container-wide' : 'container-narrow'}>{children}</div>
}
