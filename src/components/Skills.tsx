import { useInView } from '../hooks/useInView'

interface SkillGroup {
  label: string
  icon: string
  skills: string[]
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    label: 'Frontend',
    icon: '⬡',
    skills: ['TypeScript', 'React', 'Zustand', 'TailwindCSS', 'TanStack Query'],
  },
  {
    label: 'Backend',
    icon: '⬡',
    skills: ['Java', 'Spring Boot'],
  },
  {
    label: 'Collaboration',
    icon: '⬡',
    skills: ['Notion', 'Discord', 'Zoom'],
  },
]

const SKILL_COLORS: Record<string, string> = {
  TypeScript: 'border-blue-500/20 text-blue-400 bg-blue-500/5',
  React: 'border-cyan-500/20 text-cyan-400 bg-cyan-500/5',
  Zustand: 'border-orange-500/20 text-orange-400 bg-orange-500/5',
  TailwindCSS: 'border-sky-500/20 text-sky-400 bg-sky-500/5',
  'TanStack Query': 'border-red-500/20 text-red-400 bg-red-500/5',
  Java: 'border-amber-500/20 text-amber-400 bg-amber-500/5',
  'Spring Boot': 'border-green-500/20 text-green-400 bg-green-500/5',
  Notion: 'border-white/10 text-neutral-300 bg-white/3',
  Discord: 'border-indigo-500/20 text-indigo-400 bg-indigo-500/5',
  Zoom: 'border-blue-400/20 text-blue-300 bg-blue-400/5',
}

export default function Skills() {
  const { ref, inView } = useInView()

  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-orange-400 tracking-widest">03 — SKILLS</span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`grid md:grid-cols-3 gap-6 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {SKILL_GROUPS.map((group, i) => (
            <SkillCard key={group.label} group={group} delay={i * 120} />
          ))}
        </div>

        {/* Language section */}
        <div
          className={`mt-8 glass rounded-xl p-6 transition-all duration-700 delay-300 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-orange-400 text-lg">⬡</span>
            <h3 className="text-white font-semibold">Language</h3>
          </div>
          <div className="flex flex-wrap gap-3 items-center">
            <span className="px-4 py-2 rounded-lg border border-orange-500/20 text-orange-400 bg-orange-500/5 text-sm font-medium">
              English — 상
            </span>
            <span className="text-sm text-neutral-500">해외 거주 3년 경험 보유</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillCard({ group, delay }: { group: SkillGroup; delay: number }) {
  return (
    <div
      className="glass rounded-xl p-6 hover-glow transition-all duration-300"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="text-orange-400 text-lg">{group.icon}</span>
        <h3 className="text-white font-semibold">{group.label}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className={`px-3 py-1.5 rounded-lg border text-xs font-medium tracking-wide ${
              SKILL_COLORS[skill] ?? 'border-white/10 text-neutral-300 bg-white/5'
            }`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
