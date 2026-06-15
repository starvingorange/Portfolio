import { useInView } from '../hooks/useInView'

const STATS = [
  { value: '3년', label: '해외 거주 경험' },
  { value: '풀스택', label: '프론트엔드 + 백엔드 개발' },
  { value: '8·9기', label: 'UMC 수료' },
]

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-orange-400 tracking-widest">01 — ABOUT</span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`grid md:grid-cols-2 gap-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Text */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              끝없이
              <br />
              <span className="text-gradient">나아가는</span> 개발자
            </h2>

            <p className="text-neutral-400 leading-relaxed text-base">
              안녕하세요, 풀스택 개발자 <strong className="text-white font-medium">김경주</strong>입니다.
              프론트엔드에서 시작해 백엔드까지 넓혀온 개발자로, 사용자 경험을 세심하게 설계하고
              견고한 서버 로직으로 뒷받침하는 것을 중요하게 생각합니다.
            </p>

            <p className="text-neutral-400 leading-relaxed text-base">
              3년간의 해외 거주 경험을 통해 넓은 시각과 영어 소통 능력을 갖추었으며,
              꾸준한 성장을 위해 항상 새로운 기술과 도전을 두려워하지 않습니다.
            </p>

            <div className="flex gap-3 pt-2">
              <a
                href="https://github.com/starvingorange"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-sm text-neutral-300 hover:text-white hover:border-white/15 transition-all duration-200 hover-glow"
              >
                <GitHubIcon />
                GitHub
              </a>
              <a
                href="https://velog.io/@kkim02/posts"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-sm text-neutral-300 hover:text-white hover:border-white/15 transition-all duration-200 hover-glow"
              >
                <VelogIcon />
                Velog
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-col justify-center gap-6">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-xl p-6 hover-glow transition-all duration-300 group"
              >
                <div className="text-3xl font-bold text-gradient mb-1 group-hover:scale-105 transition-transform duration-200 inline-block">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function VelogIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 192 192" fill="currentColor">
      <path d="M24 0h144a24 24 0 0 1 24 24v144a24 24 0 0 1-24 24H24A24 24 0 0 1 0 168V24A24 24 0 0 1 24 0zm54.1 139.4 27.1-66.3h14.5l-34.1 82.8H70.7L36.6 73.1h14.8l26.7 66.3zm54.7 16.5V73.1H146v82.8h-13.2z" />
    </svg>
  )
}
