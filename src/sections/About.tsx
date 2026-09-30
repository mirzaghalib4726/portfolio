import { motion } from 'framer-motion'
import { ArrowRight, Award, BarChart3, GraduationCap, Languages } from 'lucide-react'
import { certifications, competencies, education, languages, profile, stats } from '../data/profile'
import { iconMap } from '../components/icons'
import { UpNext, fadeUp } from '../components/Shared'
import type { TabId } from '../tabs'

export function About({ onNavigate }: { onNavigate: (t: TabId) => void }) {
  return (
    <section>
      <div className="grid items-center gap-12 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <p className="font-display text-2xl font-medium leading-snug tracking-tight sm:text-[2rem]">
            {profile.aboutLead} <span className="text-accent">{profile.aboutHighlight}</span> {profile.aboutTail}
          </p>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted">{profile.aboutBody}</p>
        </div>
        <div className="relative mx-auto aspect-square w-60 sm:w-72">
          <div className="absolute inset-0 rounded-full bg-accent/25 blur-3xl" />
          <div className="relative grid h-full w-full place-items-center rounded-full border-4 border-card bg-gradient-to-br from-accent to-[#1e3a8a] shadow-2xl">
            <span className="font-display text-7xl font-bold text-white sm:text-8xl">{profile.initials}</span>
          </div>
        </div>
      </div>

      <motion.div {...fadeUp} className="mt-20">
        <h2 className="flex items-center gap-3 font-display text-lg font-bold uppercase tracking-[0.18em]">
          <BarChart3 size={20} className="text-accent" /> By the numbers
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s) => {
            const Icon = iconMap[s.icon]
            return (
              <div key={s.label} className="panel p-6">
                <Icon size={20} className="text-accent" />
                <p className="mt-4 font-display text-4xl font-bold tracking-tight">{s.value}</p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{s.label}</p>
              </div>
            )
          })}
        </div>
      </motion.div>

      <motion.div {...fadeUp} className="mt-20">
        <h2 className="font-display text-3xl font-bold tracking-tight">Core Competencies</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {competencies.map((c) => {
            const Icon = iconMap[c.icon]
            return (
              <div key={c.title} className="panel group p-7 transition-transform hover:-translate-y-1">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <Icon size={20} />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.body}</p>
              </div>
            )
          })}
        </div>
      </motion.div>

      <motion.div {...fadeUp} className="mt-20 grid gap-4 lg:grid-cols-3">
        <div className="panel p-7">
          <h3 className="flex items-center gap-2 font-display text-lg font-semibold">
            <GraduationCap size={20} className="text-accent" /> Education
          </h3>
          <ul className="mt-5 space-y-4">
            {education.map((e) => (
              <li key={e.degree}>
                <p className="font-medium">{e.degree}</p>
                <p className="text-sm text-muted">
                  {e.school}
                  {e.detail && <span className="ml-1 font-mono text-xs text-accent">· {e.detail}</span>}
                </p>
                {'note' in e && e.note && <p className="mt-1 text-xs leading-relaxed text-muted">{e.note}</p>}
              </li>
            ))}
          </ul>
        </div>
        <div className="panel p-7">
          <h3 className="flex items-center gap-2 font-display text-lg font-semibold">
            <Award size={20} className="text-accent" /> Certifications
          </h3>
          <ul className="mt-5 space-y-3">
            {certifications.map((c) => (
              <li key={c.name} className="text-sm">
                <p className="font-medium">{c.name}</p>
                <p className="text-muted">{c.issuer}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="panel p-7">
          <h3 className="flex items-center gap-2 font-display text-lg font-semibold">
            <Languages size={20} className="text-accent" /> Languages
          </h3>
          <ul className="mt-5 flex flex-wrap gap-2">
            {languages.map((l) => (
              <li key={l} className="chip">
                {l}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <motion.div {...fadeUp} className="panel mt-20 flex flex-col items-center gap-5 p-10 text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight">Want to discuss a project or collaboration?</h2>
        <p className="max-w-xl text-muted">
          I'm always keen to hear about SaaS products, AI-powered workflows and challenging backend problems.
        </p>
        <button onClick={() => onNavigate('contact')} className="btn-primary rounded-full px-8">
          Get In Touch <ArrowRight size={18} />
        </button>
      </motion.div>

      <UpNext current="about" onNavigate={onNavigate} />
    </section>
  )
}
