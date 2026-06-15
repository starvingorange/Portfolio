import { useInView } from '../hooks/useInView'

const LINKS = [
  {
    label: 'GitHub',
    value: '@starvingorange',
    href: 'https://github.com/starvingorange',
    icon: <GitHubIcon />,
  },
  {
    label: 'Velog',
    value: '@kkim02',
    href: 'https://velog.io/@kkim02/posts',
    icon: <VelogIcon />,
  },
  {
    label: 'Email',
    value: 'kyungjjoo@gmail.com',
    href: 'mailto:kyungjjoo@gmail.com',
    icon: <MailIcon />,
  },
]

export default function Contact() {
  const { ref, inView } = useInView()

  return (
    <section id="contact" className="py-32 px-6 bg-white/[0.01]">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-orange-400 tracking-widest">04 — CONTACT</span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              함께 만들어요,
              <br />
              <span className="text-gradient">더 나은 것을.</span>
            </h2>
            <p className="text-neutral-400 mb-12 leading-relaxed">
              새로운 프로젝트, 협업, 또는 단순한 대화도 환영합니다.
              <br />
              언제든지 편하게 연락 주세요.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="group glass rounded-xl p-5 hover-glow transition-all duration-300 hover:border-orange-500/20"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-orange-400 group-hover:scale-110 transition-transform duration-200">
                    {link.icon}
                  </span>
                  <span className="text-xs font-mono text-neutral-500 tracking-widest">
                    {link.label}
                  </span>
                </div>
                <p className="text-white text-sm font-medium group-hover:text-orange-300 transition-colors duration-200">
                  {link.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function VelogIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 192 192" fill="currentColor">
      <path d="M24 0h144a24 24 0 0 1 24 24v144a24 24 0 0 1-24 24H24A24 24 0 0 1 0 168V24A24 24 0 0 1 24 0zm54.1 139.4 27.1-66.3h14.5l-34.1 82.8H70.7L36.6 73.1h14.8l26.7 66.3zm54.7 16.5V73.1H146v82.8h-13.2z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 7 10-7" />
    </svg>
  )
}
