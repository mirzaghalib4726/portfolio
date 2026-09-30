import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, CircleCheck, Eye, X } from 'lucide-react'
import { projects, type Project } from '../data/profile'
import { FilterPills, PageHeader, UpNext } from '../components/Shared'
import type { TabId } from '../tabs'

const ALL = 'All'
const categories = [ALL, ...Array.from(new Set(projects.map((p) => p.category)))]

function Cover({ project, large }: { project: Project; large?: boolean }) {
  const h = project.hue
  return (
    <div
      className={`relative overflow-hidden ${large ? 'h-48 rounded-2xl' : 'h-44'}`}
      style={{
        background: `radial-gradient(120% 90% at 100% 0%, hsl(${h} 85% 60% / 0.55), transparent 55%),
          radial-gradient(90% 80% at 0% 100%, hsl(${(h + 40) % 360} 80% 55% / 0.45), transparent 60%),
          linear-gradient(135deg, hsl(${h} 45% 16%), hsl(${(h + 20) % 360} 50% 9%))`,
      }}
    >
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.18) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'linear-gradient(to bottom, black, transparent)',
        }}
      />
      <div className="absolute inset-x-5 bottom-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">{project.tagline}</p>
        <p className="mt-1 font-display text-2xl font-bold leading-tight text-white">{project.name}</p>
      </div>
      <span className="absolute right-4 top-4 rounded-full bg-white/15 px-2.5 py-1 font-mono text-[10px] text-white backdrop-blur">
        {project.category}
      </span>
    </div>
  )
}

export function Projects({ onNavigate }: { onNavigate: (t: TabId) => void }) {
  const [filter, setFilter] = useState(ALL)
  const [open, setOpen] = useState<Project | null>(null)
  const items = filter === ALL ? projects : projects.filter((p) => p.category === filter)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <section>
      <PageHeader
        eyebrow="Portfolio showcase"
        title="Featured Works"
        intro="Production platforms I've built or led — AI document pipelines, multi-tenant SaaS, logistics, healthcare integrations and marketplaces."
        aside={<FilterPills options={categories} value={filter} onChange={setFilter} />}
      />

      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {items.map((p) => (
            <motion.article
              layout
              key={p.name}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3 }}
              className="panel group flex flex-col overflow-hidden transition-transform hover:-translate-y-1"
            >
              <Cover project={p} />
              <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-[11px] text-muted">
                  {p.period}
                  {p.role && <> · {p.role}</>}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.description}</p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.slice(0, 6).map((s) => (
                    <li key={s} className="chip">
                      {s}
                    </li>
                  ))}
                  {p.stack.length > 6 && <li className="chip text-accent">+{p.stack.length - 6}</li>}
                </ul>
                <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
                  <button onClick={() => setOpen(p)} className="btn-primary px-4 py-2 text-xs font-semibold uppercase tracking-wide">
                    View case study <Eye size={15} />
                  </button>
                  {p.links?.[0] && (
                    <a href={p.links[0].href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">
                      Live <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] grid place-items-center bg-slate-950/60 p-4 backdrop-blur-sm"
            onClick={() => setOpen(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={open.name}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="panel max-h-[88vh] w-full max-w-2xl overflow-y-auto p-5 sm:p-7"
            >
              <div className="relative">
                <Cover project={open} large />
                <button
                  onClick={() => setOpen(null)}
                  aria-label="Close"
                  className="absolute left-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-black/40 text-white backdrop-blur hover:bg-black/60"
                >
                  <X size={18} />
                </button>
              </div>
              <p className="mt-5 font-mono text-xs text-muted">
                {open.period}
                {open.role && <> · {open.role}</>}
              </p>
              <p className="mt-3 leading-relaxed">{open.description}</p>
              <h3 className="mt-6 font-display text-lg font-semibold">What I built</h3>
              <ul className="mt-3 space-y-2.5">
                {open.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <CircleCheck size={17} className="mt-0.5 shrink-0 text-accent" />
                    {h}
                  </li>
                ))}
              </ul>
              <h3 className="mt-6 font-display text-lg font-semibold">Stack</h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {open.stack.map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>
              {open.links && (
                <div className="mt-7 flex flex-wrap gap-3">
                  {open.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="btn-ghost px-4 py-2 text-sm">
                      {l.label} <ArrowUpRight size={15} />
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <UpNext current="projects" onNavigate={onNavigate} />
    </section>
  )
}
