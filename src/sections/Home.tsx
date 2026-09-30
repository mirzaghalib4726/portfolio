import { motion } from 'framer-motion'
import { ArrowRight, Download, Mail, MapPin } from 'lucide-react'
import { profile } from '../data/profile'
import { NetworkCanvas } from '../components/NetworkCanvas'
import { GithubIcon, LinkedinIcon } from '../components/icons'
import { Eyebrow, UpNext } from '../components/Shared'
import type { TabId } from '../tabs'

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
})

export function Home({ onNavigate }: { onNavigate: (t: TabId) => void }) {
  return (
    <section>
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <motion.div {...rise(0)}>
            <Eyebrow>
              <span className="relative -ml-3.5 mr-0.5 flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              </span>
              Available for new projects
            </Eyebrow>
          </motion.div>
          <motion.h1 {...rise(0.08)} className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {profile.name}
          </motion.h1>
          <motion.p
            {...rise(0.16)}
            className="mt-3 font-display text-4xl font-bold leading-[1.08] tracking-tight text-accent drop-shadow-[0_0_24px_var(--glow)] sm:text-6xl"
          >
            {profile.headline}
          </motion.p>
          <motion.div {...rise(0.22)} className="mt-5 flex flex-wrap gap-2">
            {profile.focus.map((f) => (
              <span key={f} className="chip">
                {f}
              </span>
            ))}
          </motion.div>
          <motion.p {...rise(0.28)} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {profile.summary}
          </motion.p>
          <motion.div {...rise(0.36)} className="mt-9 flex flex-wrap gap-3">
            <button onClick={() => onNavigate('projects')} className="btn-primary">
              View My Work <ArrowRight size={18} />
            </button>
            <a href={profile.resume} download className="btn-ghost">
              Download Resume <Download size={18} />
            </a>
          </motion.div>
          <motion.div {...rise(0.44)} className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={15} className="text-accent" /> {profile.location} · {profile.availability}
            </span>
            <span className="flex items-center gap-2">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-9 w-9 place-items-center rounded-full border border-line bg-card hover:border-accent hover:text-accent">
                <GithubIcon width={16} height={16} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-full border border-line bg-card hover:border-accent hover:text-accent">
                <LinkedinIcon width={16} height={16} />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="grid h-9 w-9 place-items-center rounded-full border border-line bg-card hover:border-accent hover:text-accent">
                <Mail size={16} />
              </a>
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="panel relative aspect-[4/5] max-h-[560px] w-full overflow-hidden bg-surface"
        >
          <NetworkCanvas />
          <div className="glass pointer-events-none absolute bottom-4 left-4 right-4 rounded-2xl p-4 font-mono text-xs leading-relaxed">
            <span className="text-accent">const</span> engineer = {'{'}
            <br />
            &nbsp;&nbsp;backend: <span className="text-accent">'NestJS · Laravel · FastAPI'</span>,
            <br />
            &nbsp;&nbsp;frontend: <span className="text-accent">'Next.js · Nuxt'</span>,
            <br />
            &nbsp;&nbsp;ai: <span className="text-accent">'OpenAI · LangChain · OCR'</span>,
            <br />
            {'}'}
          </div>
        </motion.div>
      </div>

      <UpNext current="home" onNavigate={onNavigate} />
    </section>
  )
}
