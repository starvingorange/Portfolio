import { useInView } from '../hooks/useInView'

interface CareerItem {
  period: string
  org: string
  role: string
  description: string
  badge?: string
  badgeColor?: string
  link?: string
  linkLabel?: string
}

const CAREER: CareerItem[] = [
  {
    period: '2025 — 현재',
    org: 'IT지원위원회',
    role: '동아리 연합회 TF 프론트엔드 파트 리더',
    description:
      '교내 동아리 연합회 공식 웹사이트 구축에 프론트엔드 파트장으로 참여.',
  },
  {
    period: '2025',
    org: 'UMC (University MakeUs Challenge)',
    role: '백엔드 9기',
    description:
      'Spring Boot 기반 백엔드 개발 심화 학습. 팀 프로젝트 LOOP:ON — \'작심삼일\'을 실패가 아닌 습관 형성을 위한 반복 단위로 재정의한 루틴 서비스. 서버 설계 및 API 개발 담당.',
    badge: '최우수상',
    badgeColor: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/5',
  },
  {
    period: '2025',
    org: 'UMC (University MakeUs Challenge)',
    role: '프론트엔드 웹 8기',
    description:
      'React + TypeScript 기반 프론트엔드 웹 개발 학습. 팀 프로젝트 grabPT — PT 수강을 원하는 사용자와 운동 전문가 및 트레이너를 효과적으로 연결하는 스포츠 PT 매칭 플랫폼.',
    link: 'https://www.grabpt.com/',
    linkLabel: 'grabpt.com',
  },
]

export default function Career() {
  const { ref, inView } = useInView()

  return (
    <section id="career" className="py-32 px-6 bg-white/[0.01]">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-orange-400 tracking-widest">02 — CAREER</span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`space-y-0 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {CAREER.map((item, index) => (
            <CareerCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CareerCard({ item, index }: { item: CareerItem; index: number }) {
  const content = (
    <>
      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
        <div>
          <div className="text-xs font-mono text-orange-400/70 mb-1">{item.period}</div>
          <h3 className="text-white font-semibold text-lg">{item.org}</h3>
          <p className="text-sm text-neutral-500 mt-0.5">{item.role}</p>
        </div>
        {item.badge && (
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium border ${item.badgeColor}`}
          >
            🏆 {item.badge}
          </span>
        )}
      </div>
      <p className="text-neutral-400 text-sm leading-relaxed">{item.description}</p>
    </>
  )

  return (
    <div
      className="group relative flex gap-8 pb-12 last:pb-0"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-orange-500 ring-4 ring-orange-500/10 mt-1 shrink-0 group-hover:ring-orange-500/25 transition-all duration-300" />
        {index < CAREER.length - 1 && (
          <div className="flex-1 w-px bg-gradient-to-b from-orange-500/30 to-white/5 mt-2" />
        )}
      </div>

      {/* Content */}
      {item.link ? (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 glass rounded-xl p-6 hover-glow transition-all duration-300 group-hover:border-orange-500/30 hover:border-orange-500/30 hover:-translate-y-0.5 cursor-pointer block relative overflow-hidden"
        >
          {content}
          <span className="absolute bottom-4 right-4 flex items-center gap-1 text-xs text-orange-400 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
            프로젝트 보기
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </span>
        </a>
      ) : (
        <div className="flex-1 glass rounded-xl p-6 hover-glow transition-all duration-300 group-hover:border-white/10">
          {content}
        </div>
      )}
    </div>
  )
}
