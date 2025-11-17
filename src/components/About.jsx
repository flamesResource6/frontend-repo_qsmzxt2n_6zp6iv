export default function About() {
  return (
    <section id="about" className="relative bg-gradient-to-b from-slate-950 to-slate-900 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Approach</h2>
            <p className="mt-4 text-white/70">
              I design with intent—balancing minimalism with warmth. My background across brand, product, and motion
              helps me build systems that feel cohesive while leaving room for surprise.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 text-white/80">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-3xl font-semibold">10+</p>
                <p className="text-sm text-white/60">Years crafting digital products</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-3xl font-semibold">80+</p>
                <p className="text-sm text-white/60">Projects across sectors</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-3xl font-semibold">12</p>
                <p className="text-sm text-white/60">Awards & features</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-3xl font-semibold">3</p>
                <p className="text-sm text-white/60">Disciplines: brand, product, motion</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=1600&auto=format&fit=crop"
              alt="Studio desk with camera and laptop"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
