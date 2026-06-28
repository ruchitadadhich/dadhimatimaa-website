import React from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'
import { content } from '../data/content.js'
import PageHeader from '../components/PageHeader.jsx'
import Icon from '../components/Icon.jsx'

export default function News() {
  const { lang } = useLanguage()
  const n = content.news

  return (
    <div>
      <PageHeader title={n.title} subtitle={n.subtitle} image="/images/mandir-entrance-gate.jpg" />

      <div className="max-w-3xl mx-auto px-4 py-14 space-y-8">
        {n.items.map((item, i) => (
          <article key={i} className="bg-white dark:bg-nightstone-800 rounded-xl border border-saffron-500/20 p-6 shadow-sm">
            <span className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-saffron-600 dark:text-saffron-400 mb-3 ${lang === 'hi' ? 'lang-hi' : ''}`}>
              <Icon name="flame" className="w-3.5 h-3.5" />
              {item.tag[lang]}
            </span>
            <h2 className={`font-display text-xl text-maroon-700 dark:text-saffron-300 mb-2 ${lang === 'hi' ? 'lang-hi' : ''}`}>
              {item.title[lang]}
            </h2>
            <p className={`text-sandstone-700 dark:text-sandstone-200 leading-relaxed ${lang === 'hi' ? 'lang-hi' : ''}`}>
              {item.text[lang]}
            </p>
          </article>
        ))}
      </div>
    </div>
  )
}
