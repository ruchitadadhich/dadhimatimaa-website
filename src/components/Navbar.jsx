import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext.jsx'
import { useTheme } from '../context/ThemeContext.jsx'
import { content } from '../data/content.js'
import Icon from './Icon.jsx'

export default function Navbar() {
  const { lang, toggleLang } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const t = content.nav

  const links = [
    { to: '/', label: t.home },
    { to: '/about', label: t.about },
    { to: '/history', label: t.history },
    { to: '/gallery', label: t.gallery },
    { to: '/darshan', label: t.darshan },
    { to: '/visit', label: t.visit },
    { to: '/news', label: t.news },
    { to: '/contact', label: t.contact },
  ]

  const linkClass = ({ isActive }) =>
    `px-3 py-2 text-sm tracking-wide transition-colors ${
      isActive
        ? 'text-saffron-500 font-semibold'
        : 'text-sandstone-100 hover:text-saffron-400'
    }`

  return (
    <header className="sticky top-0 z-40 bg-maroon-700 dark:bg-nightstone-900 border-b border-saffron-500/30 shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <NavLink to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="w-9 h-9 rounded-full bg-saffron-500 flex items-center justify-center text-maroon-900 font-display font-bold text-lg">
            दृ
          </span>
          <div className="leading-tight">
            <p className={`text-saffron-400 font-display font-semibold text-lg ${lang === 'hi' ? 'lang-hi' : ''}`}>
              {content.siteName[lang]}
            </p>
            <p className="text-[11px] text-sandstone-200/80 -mt-1">{content.siteTagline[lang]}</p>
          </div>
        </NavLink>

        <nav className="hidden lg:flex items-center">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === '/'}>
              <span className={lang === 'hi' ? 'lang-hi' : ''}>{l.label[lang]}</span>
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="px-2.5 py-1.5 rounded-md text-xs font-semibold border border-saffron-500/50 text-saffron-400 hover:bg-saffron-500/10 transition-colors"
            aria-label="Toggle language"
          >
            {lang === 'hi' ? 'EN' : 'हिं'}
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md border border-saffron-500/50 text-saffron-400 hover:bg-saffron-500/10 transition-colors"
            aria-label="Toggle theme"
          >
            <Icon name={theme === 'light' ? 'moon' : 'sun'} className="w-4 h-4" />
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden p-2 rounded-md border border-saffron-500/50 text-saffron-400"
            aria-label="Toggle menu"
          >
            <Icon name={open ? 'close' : 'menu'} className="w-5 h-5" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden flex flex-col bg-maroon-800 dark:bg-nightstone-950 border-t border-saffron-500/20 px-4 py-2">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === '/'} onClick={() => setOpen(false)}>
              <span className={lang === 'hi' ? 'lang-hi' : ''}>{l.label[lang]}</span>
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
