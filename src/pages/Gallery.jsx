import React, { useState } from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'
import { content } from '../data/content.js'
import PageHeader from '../components/PageHeader.jsx'
import Icon from '../components/Icon.jsx'

export default function Gallery() {
  const { lang } = useLanguage()
  const g = content.gallery
  const [filter, setFilter] = useState('all')
  const [active, setActive] = useState(null)

  const filters = ['all', 'temple', 'deity']
  const items = filter === 'all' ? g.items : g.items.filter((it) => it.category === filter)

  return (
    <div>
      <PageHeader title={g.title} subtitle={g.subtitle} image="/images/mandir-entrance-gate.jpg" />

      <div className="max-w-5xl mx-auto px-4 py-14">
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                filter === f
                  ? 'bg-saffron-500 text-maroon-900 border-saffron-500'
                  : 'border-saffron-500/40 text-maroon-700 dark:text-saffron-300 hover:bg-saffron-500/10'
              } ${lang === 'hi' ? 'lang-hi' : ''}`}
            >
              {g.filters[f][lang]}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(item)}
              className="group rounded-xl overflow-hidden border border-saffron-500/20 shadow-sm hover:shadow-lg transition-shadow text-left"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.caption[lang]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className={`px-3 py-2 text-sm text-sandstone-700 dark:text-sandstone-200 bg-white dark:bg-nightstone-800 ${lang === 'hi' ? 'lang-hi' : ''}`}>
                {item.caption[lang]}
              </p>
            </button>
          ))}
        </div>

        <p className={`text-center text-sm text-sandstone-500 dark:text-sandstone-400 mt-10 ${lang === 'hi' ? 'lang-hi' : ''}`}>
          {g.note[lang]}
        </p>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={active.src} alt={active.caption[lang]} className="w-full rounded-lg" />
            <div className="flex items-center justify-between mt-3">
              <p className={`text-sandstone-100 text-sm ${lang === 'hi' ? 'lang-hi' : ''}`}>{active.caption[lang]}</p>
              <button
                onClick={() => setActive(null)}
                className="text-saffron-400 p-2 rounded-full hover:bg-white/10"
                aria-label="Close"
              >
                <Icon name="close" className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
