import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs text-white/80 backdrop-blur-md">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Available for new projects in 2025
          </div>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Designer crafting modern, minimalist experiences
          </h1>
          <p className="mt-4 text-lg text-white/80 md:text-xl">
            I blend photography, motion, and product design to shape brand stories that feel effortless and future-forward.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-white/20">
              View selected work
            </a>
            <a href="#contact" className="rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur">
              Get in touch
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
    </section>
  )
}
