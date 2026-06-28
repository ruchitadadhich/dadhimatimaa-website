import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext.jsx'
import { content } from '../data/content.js'
import Icon from './Icon.jsx'

export default function Footer() {
  const { lang } = useLanguage()
  const t = content.footer
  const nav = content.nav

  return (
    <footer className="bg-maroon-800 dark:bg-nightstone-950 text-sandstone-100 border-t border-saffron-500/20">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <p className={`font-display text-xl text-saffron-400 mb-2 ${lang === 'hi' ? 'lang-hi' : ''}`}>
            {content.siteName[lang]}
          </p>
          <p className={`text-sm text-sandstone-200/80 leading-relaxed ${lang === 'hi' ? 'lang-hi' : ''}`}>
            {t.about[lang]}
          </p>
        </div>

        <div>
          <p className={`font-semibold text-saffron-400 mb-3 ${lang === 'hi' ? 'lang-hi' : ''}`}>{t.quickLinks[lang]}</p>
          <ul className="space-y-1.5 text-sm">
            {[
              ['/', nav.home],
              ['/about', nav.about],
              ['/gallery', nav.gallery],
              ['/darshan', nav.darshan],
              ['/visit', nav.visit],
              ['/contact', nav.contact],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className={`hover:text-saffron-400 transition-colors ${lang === 'hi' ? 'lang-hi' : ''}`}>
                  {label[lang]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className={`font-semibold text-saffron-400 mb-3 ${lang === 'hi' ? 'lang-hi' : ''}`}>{t.getInTouch[lang]}</p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Icon name="phone" className="w-4 h-4 text-saffron-400" />
              <a href="tel:+919001865226" className="hover:text-saffron-400">+91 90018 65226</a>
            </li>
            <li className="flex items-center gap-2">
              <Icon name="mail" className="w-4 h-4 text-saffron-400" />
              <a href="mailto:info@dadhimatimataji.org" className="hover:text-saffron-400">info@dadhimatimataji.org</a>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="map" className="w-4 h-4 text-saffron-400 mt-0.5" />
              <span className={lang === 'hi' ? 'lang-hi' : ''}>{content.visit.address[lang]}</span>
            </li>
          </ul>
          <div className="flex gap-3 mt-4">
            {['facebook', 'instagram', 'youtube'].map((icon) => (
              <a
                key={icon}
                href="#"
                className="w-8 h-8 rounded-full border border-saffron-500/40 flex items-center justify-center hover:bg-saffron-500/10 transition-colors"
                aria-label={icon}
              >
                <Icon name={icon} className="w-4 h-4 text-saffron-400" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="diya-divider opacity-60" />

      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-1 text-xs text-sandstone-300/70">
        <p className={lang === 'hi' ? 'lang-hi' : ''}>
          © {new Date().getFullYear()} {content.siteName[lang]} — {t.rights[lang]}
        </p>
        <p className={lang === 'hi' ? 'lang-hi' : ''}>{t.madeWith[lang]}</p>
      </div>
    </footer>
  )
}
