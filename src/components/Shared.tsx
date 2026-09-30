import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { TABS, type TabId } from '../tabs'

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="eyebrow">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </span>
  )
}

export function PageHeader({ eyebrow, title, intro, aside }: { eyebrow: string; title: string; intro: string; aside?: ReactNode }) {
  return (
    <div className="mb-12 flex flex-col gap-8 border-b border-line pb-10 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-2xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>
      </div>
      {aside}
    </div>
  )
}

export const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
}

export function UpNext({ current, onNavigate }: { current: TabId; onNavigate: (t: TabId) => void }) {
  const idx = TABS.findIndex((t) => t.id === current)
  const next = TABS[idx + 1]
  if (!next) return null
  return (
    <motion.button
      {...fadeUp}
      onClick={() => onNavigate(next.id)}
      className="group mt-24 flex w-full items-center justify-between border-t border-line pt-8 text-left"
    >
      <span>
        <span className="block font-mono text-xs uppercase tracking-[0.2em] text-muted">Up next</span>
        <span className="mt-1 block font-display text-3xl font-bold tracking-tight transition-colors group-hover:text-accent sm:text-4xl">
          {next.label}
        </span>
      </span>
      <span className="grid h-14 w-14 place-items-center rounded-full border border-line text-accent transition-all group-hover:translate-x-1 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
        <ArrowRight size={22} />
      </span>
    </motion.button>
  )
}

export function FilterPills<T extends string>({ options, value, onChange }: { options: readonly T[]; value: T; onChange: (v: T) => void }) {
  return (
    <div className="flex max-w-md flex-wrap gap-2 lg:justify-end">
      {options.map((o) => (
        <button
          key={o}
          onClick={() => onChange(o)}
          aria-pressed={value === o}
          className={`rounded-full border px-3.5 py-1.5 font-mono text-xs transition-colors ${
            value === o ? 'border-accent bg-accent text-white' : 'border-line bg-card text-ink/80 hover:border-accent'
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  )
}
