import { Mail } from 'lucide-react'
import { profile } from '../data/profile'
import { GithubIcon, LinkedinIcon } from './icons'
import type { TabId } from '../tabs'

const YEAR = new Date().getFullYear()

export function Footer({ onNavigate }: { onNavigate: (t: TabId) => void }) {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:px-8">
        <p>
          © {YEAR}{' '}
          <button onClick={() => onNavigate('home')} className="font-medium text-ink hover:text-accent">
            {profile.name}
          </button>
          . Built with React &amp; Tailwind.
        </p>
        <div className="flex items-center gap-2">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-9 w-9 place-items-center rounded-full border border-line hover:border-accent hover:text-accent">
            <GithubIcon width={16} height={16} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-full border border-line hover:border-accent hover:text-accent">
            <LinkedinIcon width={16} height={16} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="grid h-9 w-9 place-items-center rounded-full border border-line hover:border-accent hover:text-accent">
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
