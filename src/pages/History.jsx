import React from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'
import { content } from '../data/content.js'
import PageHeader from '../components/PageHeader.jsx'

export default function History() {
  const { lang } = useLanguage()
  const h = content.history

  return (
    <div>
      <PageHeader title={h.title} subtitle={h.subtitle} image="/images/temple-shikhar.jpg" />

      <div className="max-w-4xl mx-auto px-4 py-14">
        <section className="mb-14 grid md:grid-cols-[1.4fr,1fr] gap-10 items-start">
          <div>
            <h2 className={`font-display text-2xl text-maroon-700 dark:text-saffron-300 mb-3 ${lang === 'hi' ? 'lang-hi' : ''}`}>
              {h.archTitle[lang]}
            </h2>
            <p className={`text-sandstone-700 dark:text-sandstone-200 leading-relaxed ${lang === 'hi' ? 'lang-hi' : ''}`}>
              {h.archText[lang]}
            </p>
          </div>
          <div className="rounded-xl overflow-hidden border-4 border-saffron-500/30 shadow-lg">
            <img src="/images/temple-shikhar.jpg" alt="Temple shikhara architecture" className="w-full h-full object-cover" />
          </div>
        </section>

        <section className="mb-14">
          <h2 className={`font-display text-2xl text-maroon-700 dark:text-saffron-300 mb-8 text-center ${lang === 'hi' ? 'lang-hi' : ''}`}>
            {h.timelineTitle[lang]}
          </h2>
          <div className="relative pl-8 border-l-2 border-saffron-500/40 space-y-8">
            {h.timeline.map((item, i) => (
              <div key={i} className="relative">
                <span className="absolute -left-[2.55rem] top-0 w-5 h-5 rounded-full bg-saffron-500 border-2 border-white dark:border-nightstone-900" />
                <p className="text-saffron-600 dark:text-saffron-400 font-semibold mb-1">
                  {typeof item.year === 'string' ? item.year : item.year[lang]}
                </p>
                <p className={`text-sandstone-700 dark:text-sandstone-200 leading-relaxed ${lang === 'hi' ? 'lang-hi' : ''}`}>
                  {item.text[lang]}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className={`font-display text-2xl text-maroon-700 dark:text-saffron-300 mb-3 ${lang === 'hi' ? 'lang-hi' : ''}`}>
            {h.significanceTitle[lang]}
          </h2>
          <p className={`text-sandstone-700 dark:text-sandstone-200 leading-relaxed ${lang === 'hi' ? 'lang-hi' : ''}`}>
            {h.significanceText[lang]}
          </p>
        </section>
      </div>
    </div>
  )
}
