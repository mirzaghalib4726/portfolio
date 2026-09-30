export const TABS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const

export type TabId = (typeof TABS)[number]['id']

export const isTab = (v: string): v is TabId => TABS.some((t) => t.id === v)
