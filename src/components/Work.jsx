export default function Work() {
  const items = [
    {
      title: 'Lenscraft — Camera brand identity',
      tags: ['Identity', 'Art Direction', '3D'],
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Frame — Photography app',
      tags: ['Product', 'UX/UI', 'Motion'],
      image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Prism — Creative studio website',
      tags: ['Web', 'Interaction', 'Design System'],
      image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
    },
  ]

  return (
    <section id="work" className="relative bg-slate-950 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Selected Work</h2>
            <p className="mt-2 max-w-2xl text-white/60">A curated set of brand, product, and web projects with a focus on clarity and craft.</p>
          </div>
          <a href="#" className="hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 sm:inline-flex">All projects</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={item.image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold">{item.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 border border-white/10">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
