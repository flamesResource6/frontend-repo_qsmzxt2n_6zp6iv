export default function Contact() {
  return (
    <section id="contact" className="relative bg-slate-900 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Let’s build something timeless</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">
          I collaborate with startups, studios, and global brands. Tell me about your vision and I’ll share a tailored approach.
        </p>
        <div className="mx-auto mt-8 grid max-w-md gap-3 sm:grid-cols-2">
          <a href="mailto:hello@novastudio.design" className="rounded-xl bg-white px-5 py-3 font-semibold text-slate-900">hello@novastudio.design</a>
          <a href="https://cal.com" target="_blank" rel="noreferrer" className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white">Book a call</a>
        </div>
      </div>
    </section>
  )
}
