import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_-10%,rgba(99,102,241,0.25),transparent_70%)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
      <footer className="relative border-t border-white/10 bg-slate-950/60 py-8 text-center text-white/60">
        © {new Date().getFullYear()} Nova Studio — All rights reserved
      </footer>
    </div>
  )
}

export default App
