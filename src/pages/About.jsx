import React from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'
import { content } from '../data/content.js'
import PageHeader from '../components/PageHeader.jsx'

export default function About() {
  const { lang } = useLanguage()
  const a = content.about

  const sections = [
    { title: a.section1Title, text: a.section1Text },
    { title: a.section2Title, text: a.section2Text },
    { title: a.section3Title, text: a.section3Text },
  ]

  return (
    <div>
      <PageHeader title={a.title} subtitle={a.subtitle} image="/images/mataji-deity-1.jpg" />

      <div className="max-w-4xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-[1fr,1.4fr] gap-10 items-start mb-10">
          <div className="rounded-xl overflow-hidden border-4 border-saffron-500/30 shadow-lg">
            <img src="/images/mataji-deity-2.jpg" alt="Dadhimati Mata deity" className="w-full h-full object-cover" />
          </div>
          <blockquote className={`font-display text-xl md:text-2xl text-maroon-700 dark:text-saffron-300 italic leading-relaxed ${lang === 'hi' ? 'lang-hi' : ''}`}>
            {a.quoteText[lang]}
          </blockquote>
        </div>

        <div className="space-y-10">
          {sections.map((s, i) => (
            <div key={i}>
              <h2 className={`font-display text-2xl text-maroon-700 dark:text-saffron-300 mb-3 ${lang === 'hi' ? 'lang-hi' : ''}`}>
                {s.title[lang]}
              </h2>
              <p className={`text-sandstone-700 dark:text-sandstone-200 leading-relaxed ${lang === 'hi' ? 'lang-hi' : ''}`}>
                {s.text[lang]}
              </p>
              <div className="diya-divider mt-8 opacity-60" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
