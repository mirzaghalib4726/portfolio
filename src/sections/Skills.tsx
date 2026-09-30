import { motion } from 'framer-motion'
import { skillGroups } from '../data/profile'
import { iconMap } from '../components/icons'
import { PageHeader, UpNext } from '../components/Shared'
import type { TabId } from '../tabs'

export function Skills({ onNavigate }: { onNavigate: (t: TabId) => void }) {
  return (
    <section>
      <PageHeader
        eyebrow="Capabilities & toolset"
        title="Skill Ecosystem"
        intro="The technologies, tools and practices I use to design, build and ship production SaaS — from NestJS services and data layers to AI pipelines and CI/CD."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => {
          const Icon = iconMap[g.icon]
          return (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="panel p-7"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent">
                  <Icon size={19} />
                </span>
                <h2 className="font-display text-2xl font-semibold tracking-tight">{g.title}</h2>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s} className="chip transition-colors hover:border-accent hover:text-accent">
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>
      <UpNext current="skills" onNavigate={onNavigate} />
    </section>
  )
}
