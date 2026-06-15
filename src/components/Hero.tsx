import { useEffect, useState } from 'react'

const TAGLINES = [
  '끝없이 나아가는 개발자',
  'Frontend Developer',
  'Backend Developer',
  'Full-Stack Engineer',
]

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const current = TAGLINES[taglineIndex]

    if (!deleting && displayed.length < current.length) {
      const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
      return () => clearTimeout(t)
    }

    if (!deleting && displayed.length === current.length) {
      const t = setTimeout(() => setDeleting(true), 2200)
      return () => clearTimeout(t)
    }

    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
      return () => clearTimeout(t)
    }

    if (deleting && displayed.length === 0) {
      setDeleting(false)
      setTaglineIndex((i) => (i + 1) % TAGLINES.length)
    }
  }, [displayed, deleting, taglineIndex])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-orange-500/5 blur-[120px] pointer-events-none" />

      <div
        className={`relative z-10 text-center px-6 transition-all duration-1000 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
          <span className="font-mono text-xs text-orange-400 tracking-widest">
            PORTFOLIO
          </span>
        </div>

        {/* Name */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4">
          <span className="text-white">김</span>
          <span className="text-gradient">경주</span>
        </h1>

        {/* Typewriter */}
        <div className="h-10 flex items-center justify-center mb-10">
          <p className="font-mono text-lg md:text-xl text-neutral-400">
            {displayed}
            <span className="animate-blink text-orange-400 ml-0.5">|</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="#career"
            className="px-6 py-3 bg-orange-500 hover:bg-orange-400 text-black font-semibold text-sm rounded-lg transition-colors duration-200"
          >
            경력 보기
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-white/10 hover:border-orange-500/40 text-neutral-300 hover:text-white text-sm rounded-lg transition-all duration-200 hover-glow"
          >
            연락하기
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="font-mono text-xs tracking-widest text-neutral-500">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-neutral-500 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  )
}
