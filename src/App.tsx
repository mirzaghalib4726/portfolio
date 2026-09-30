import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { Home } from './sections/Home'
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { ExperienceSection } from './sections/Experience'
import { Projects } from './sections/Projects'
import { Contact } from './sections/Contact'
import { isTab, type TabId } from './tabs'

const readHash = (): TabId => {
  const h = window.location.hash.replace('#', '')
  return isTab(h) ? h : 'home'
}

export default function App() {
  const [tab, setTab] = useState<TabId>(readHash)
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    const onHash = () => setTab(readHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const navigate = useCallback((next: TabId) => {
    if (next === 'home') history.pushState(null, '', window.location.pathname)
    else history.pushState(null, '', `#${next}`)
    setTab(next)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', next ? '#04070d' : '#faf6ee')
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch {
      /* storage unavailable */
    }
  }

  const pages: Record<TabId, React.ReactNode> = {
    home: <Home onNavigate={navigate} />,
    about: <About onNavigate={navigate} />,
    skills: <Skills onNavigate={navigate} />,
    experience: <ExperienceSection onNavigate={navigate} />,
    projects: <Projects onNavigate={navigate} />,
    contact: <Contact />,
  }

  return (
    <>
      <div className="ambient" />
      <Nav active={tab} onNavigate={navigate} dark={dark} onToggleTheme={toggleTheme} />
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-32 sm:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {pages[tab]}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer onNavigate={navigate} />
    </>
  )
}
