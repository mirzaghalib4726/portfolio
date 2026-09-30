import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, Menu, Moon, Sun, X } from 'lucide-react'
import { profile } from '../data/profile'
import { TABS, type TabId } from '../tabs'

type Props = {
  active: TabId
  onNavigate: (tab: TabId) => void
  dark: boolean
  onToggleTheme: () => void
}

export function Nav({ active, onNavigate, dark, onToggleTheme }: Props) {
  const [open, setOpen] = useState(false)

  const go = (tab: TabId) => {
    setOpen(false)
    onNavigate(tab)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full py-2.5 pl-6 pr-2.5 shadow-[0_10px_30px_-18px_rgba(15,23,42,0.4)]">
        <button onClick={() => go('home')} className="font-display text-xl font-bold tracking-tight text-accent">
          {profile.shortName}
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {TABS.map((t) => (
            <li key={t.id}>
              <button
                onClick={() => go(t.id)}
                aria-current={active === t.id ? 'page' : undefined}
                className={`relative rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                  active === t.id ? 'font-semibold text-accent' : 'text-muted hover:text-ink'
                }`}
              >
                {t.label}
                {active === t.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="grid h-10 w-10 place-items-center rounded-full border border-line bg-card text-accent transition-colors hover:border-accent"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href={profile.resume}
            download
            className="hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-shadow hover:shadow-[0_0_24px_var(--glow)] sm:inline-flex"
          >
            Resume <Download size={16} />
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-line bg-card text-ink md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="glass mx-auto mt-2 max-w-6xl rounded-3xl p-3 md:hidden"
          >
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => go(t.id)}
                className={`block w-full rounded-2xl px-4 py-3 text-left text-sm ${
                  active === t.id ? 'bg-accent/10 font-semibold text-accent' : 'text-ink'
                }`}
              >
                {t.label}
              </button>
            ))}
            <a href={profile.resume} download className="btn-primary mt-2 w-full">
              Download Resume <Download size={16} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
