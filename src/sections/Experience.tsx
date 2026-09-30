import { useState } from 'react'
import { motion } from 'framer-motion'
import { CircleCheck, MapPin } from 'lucide-react'
import { experience } from '../data/profile'
import { FilterPills, PageHeader, UpNext, fadeUp } from '../components/Shared'
import type { TabId } from '../tabs'

const ALL = 'All Roles'
const companies = [ALL, ...Array.from(new Set(experience.map((e) => e.company)))]

export function ExperienceSection({ onNavigate }: { onNavigate: (t: TabId) => void }) {
  const [filter, setFilter] = useState(ALL)
  const items = filter === ALL ? experience : experience.filter((e) => e.company === filter)

  return (
    <section>
      <PageHeader
        eyebrow="Career trajectory"
        title="Experience"
        intro="A timeline of engineering roles — from machine learning and scraping services to leading production SaaS backends."
        aside={<FilterPills options={companies} value={filter} onChange={setFilter} />}
      />
      <ol className="relative space-y-8 pl-8 sm:pl-12">
        <span className="absolute bottom-4 left-[7px] top-4 w-px bg-gradient-to-b from-accent via-line to-transparent sm:left-[11px]" />
        {items.map((e) => (
          <motion.li key={`${e.company}-${e.period}`} {...fadeUp} className="relative">
            <span className="absolute -left-8 top-8 grid h-4 w-4 place-items-center rounded-full border-2 border-accent bg-background sm:-left-12 sm:h-6 sm:w-6">
              <span className="h-1.5 w-1.5 rounded-full bg-accent sm:h-2 sm:w-2" />
            </span>
            <div className="panel p-6 sm:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="font-display text-2xl font-semibold tracking-tight">{e.role}</h2>
                  <p className="mt-1 flex flex-wrap items-center gap-x-2 text-sm text-accent">
                    {e.company}
                    {e.location && (
                      <span className="inline-flex items-center gap-1 text-muted">
                        <MapPin size={13} /> {e.location}
                      </span>
                    )}
                  </p>
                </div>
                <span className="chip self-start whitespace-nowrap">{e.period}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                    <CircleCheck size={18} className="mt-0.5 shrink-0 text-accent" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ol>
      <UpNext current="experience" onNavigate={onNavigate} />
    </section>
  )
}
