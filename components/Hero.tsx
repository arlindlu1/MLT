export default function Hero({title, subtitle}:{title:string; subtitle?:string}) {
  return (
    <section className="bg-gray-50 border-b">
      <div className="container-wide py-14">
        <h1 className="font-serif text-4xl md:text-5xl text-brand">{title}</h1>
        {subtitle && <p className="mt-3 text-lg text-brand-soft max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  )
}
