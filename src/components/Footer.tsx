export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs text-neutral-600 tracking-widest">
          starvingOrange © 2025
        </span>
        <span className="font-mono text-xs text-neutral-700">
          Built with React + TypeScript + TailwindCSS
        </span>
      </div>
    </footer>
  )
}
