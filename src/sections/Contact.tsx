import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Check, Copy, Download, Mail, MapPin, Send } from 'lucide-react'
import { profile } from '../data/profile'
import { GithubIcon, LinkedinIcon } from '../components/icons'
import { PageHeader } from '../components/Shared'

const input =
  'w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-accent'

export function Contact() {
  const [copied, setCopied] = useState(false)
  const [sent, setSent] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard blocked */
    }
  }

  // No backend: compose the message in the visitor's mail client.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') ?? '')
    const from = String(data.get('email') ?? '')
    const subject = encodeURIComponent(String(data.get('subject') || `Hello from ${name}`))
    const body = encodeURIComponent(`${data.get('message')}\n\n— ${name}${from ? ` (${from})` : ''}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const channels = [
    { icon: <Mail size={18} />, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: <LinkedinIcon width={18} height={18} />, label: 'LinkedIn', value: profile.linkedinHandle, href: profile.linkedin },
    { icon: <GithubIcon width={18} height={18} />, label: 'GitHub', value: profile.githubHandle, href: profile.github },
  ]

  return (
    <section>
      <PageHeader
        eyebrow="Let's talk"
        title="Get In Touch"
        intro="Have a SaaS product, an AI workflow or a gnarly backend problem? I'm open to remote roles and freelance work — drop a message and I'll get back to you."
      />
      <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
        <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="panel group flex items-center gap-4 p-5 transition-colors hover:border-accent"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                {c.icon}
              </span>
              <span className="min-w-0">
                <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{c.label}</span>
                <span className="block truncate font-medium">{c.value}</span>
              </span>
            </a>
          ))}
          <div className="panel flex items-center gap-4 p-5">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
              <MapPin size={18} />
            </span>
            <span>
              <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Location</span>
              <span className="block font-medium">
                {profile.location} · {profile.availability}
              </span>
            </span>
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <button onClick={copyEmail} className="btn-ghost px-4 py-2.5 text-sm">
              {copied ? <Check size={16} /> : <Copy size={16} />} {copied ? 'Copied!' : 'Copy email'}
            </button>
            <a href={profile.resume} download className="btn-ghost px-4 py-2.5 text-sm">
              Resume <Download size={16} />
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          onSubmit={onSubmit}
          className="panel space-y-4 p-6 sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium">Name</span>
              <input name="name" required autoComplete="name" className={input} placeholder="Your name" />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium">Email</span>
              <input name="email" type="email" autoComplete="email" className={input} placeholder="you@company.com" />
            </label>
          </div>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium">Subject</span>
            <input name="subject" className={input} placeholder="Project, role or collaboration" />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium">Message</span>
            <textarea name="message" required rows={6} className={`${input} resize-y`} placeholder="Tell me a bit about what you're building…" />
          </label>
          <button type="submit" className="btn-primary w-full sm:w-auto">
            Send message <Send size={16} />
          </button>
          {sent && <p className="text-sm text-muted">Your email app should open with the message ready to send.</p>}
        </motion.form>
      </div>
    </section>
  )
}
