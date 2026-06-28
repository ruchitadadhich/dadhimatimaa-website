import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext.jsx'
import { content } from '../data/content.js'
import Icon from '../components/Icon.jsx'

export default function Home() {
  const { lang } = useLanguage()
  const h = content.home

  return (
    <div>
      <section
        className="relative min-h-[88vh] flex items-center justify-center text-center text-sandstone-50"
        style={{
          backgroundImage: 'linear-gradient(rgba(20,7,8,0.55), rgba(20,7,8,0.78)), url(/images/temple-hero-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <p className="uppercase tracking-[0.3em] text-saffron-400 text-xs mb-4">
            Goth-Manglod &middot; Nagaur &middot; Rajasthan
          </p>
          <h1 className={`font-display text-4xl sm:text-5xl md:text-6xl font-bold text-saffron-400 drop-shadow-lg ${lang === 'hi' ? 'lang-hi' : ''}`}>
            {h.welcome[lang]}
          </h1>
          <p className={`mt-6 text-base md:text-lg text-sandstone-100/95 max-w-2xl mx-auto leading-relaxed ${lang === 'hi' ? 'lang-hi' : ''}`}>
            {h.heroSubtitle[lang]}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/visit"
              className="px-6 py-3 rounded-md bg-saffron-500 text-maroon-900 font-semibold hover:bg-saffron-400 transition-colors flex items-center gap-2"
            >
              <span className={lang === 'hi' ? 'lang-hi' : ''}>{h.ctaVisit[lang]}</span>
              <Icon name="arrowRight" className="w-4 h-4" />
            </Link>
            <Link
              to="/history"
              className="px-6 py-3 rounded-md border border-saffron-400/70 text-saffron-300 hover:bg-saffron-400/10 transition-colors"
            >
              <span className={lang === 'hi' ? 'lang-hi' : ''}>{h.ctaHistory[lang]}</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-sandstone-50 dark:bg-nightstone-900">
        <div className="max-w-5xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-saffron-600 dark:text-saffron-400 text-sm font-semibold uppercase tracking-wider mb-2">
              {h.introTitle[lang]}
            </p>
            <h2 className={`font-display text-2xl md:text-3xl text-maroon-700 dark:text-saffron-300 mb-4 ${lang === 'hi' ? 'lang-hi' : ''}`}>
              {content.siteName[lang]}
            </h2>
            <p className={`text-sandstone-700 dark:text-sandstone-200 leading-relaxed ${lang === 'hi' ? 'lang-hi' : ''}`}>
              {h.introText[lang]}
            </p>
          </div>
          <div className="rounded-xl overflow-hidden border-4 border-saffron-500/30 shadow-lg">
            <img src="/images/mandir-entrance-gate.jpg" alt="Dadhimati Mata Mandir entrance" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-maroon-700 dark:bg-nightstone-950 text-sandstone-50">
        <div className="max-w-5xl mx-auto px-4 py-14">
          <h2 className={`font-display text-2xl md:text-3xl text-saffron-400 text-center mb-10 ${lang === 'hi' ? 'lang-hi' : ''}`}>
            {h.timingsTitle[lang]}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {h.timings.map((item, i) => (
              <div key={i} className="bg-maroon-800/60 dark:bg-nightstone-900 rounded-lg p-4 text-center border border-saffron-500/20">
                <Icon name="clock" className="w-5 h-5 mx-auto text-saffron-400 mb-2" />
                <p className="text-lg font-semibold text-saffron-300">{item.value}</p>
                <p className={`text-xs text-sandstone-200/80 mt-1 ${lang === 'hi' ? 'lang-hi' : ''}`}>{item.label[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sandstone-50 dark:bg-nightstone-900">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <h2 className={`font-display text-2xl md:text-3xl text-maroon-700 dark:text-saffron-300 text-center mb-10 ${lang === 'hi' ? 'lang-hi' : ''}`}>
            {h.highlightsTitle[lang]}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {h.highlights.map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-nightstone-800 rounded-xl p-6 border border-saffron-500/20 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-full bg-saffron-500/15 flex items-center justify-center mb-4">
                  <Icon name={item.icon} className="w-5 h-5 text-saffron-600 dark:text-saffron-400" />
                </div>
                <h3 className={`font-semibold text-maroon-700 dark:text-saffron-300 mb-2 ${lang === 'hi' ? 'lang-hi' : ''}`}>
                  {item.title[lang]}
                </h3>
                <p className={`text-sm text-sandstone-600 dark:text-sandstone-300 leading-relaxed ${lang === 'hi' ? 'lang-hi' : ''}`}>
                  {item.text[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
