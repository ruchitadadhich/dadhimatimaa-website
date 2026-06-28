import React from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'
import { content } from '../data/content.js'
import PageHeader from '../components/PageHeader.jsx'
import Icon from '../components/Icon.jsx'

export default function Darshan() {
  const { lang } = useLanguage()
  const d = content.darshan

  return (
    <div>
      <PageHeader title={d.title} subtitle={d.subtitle} image="/images/mataji-deity-2.jpg" />

      <div className="max-w-4xl mx-auto px-4 py-14">
        <section className="mb-14">
          <h2 className={`font-display text-2xl text-maroon-700 dark:text-saffron-300 mb-6 text-center ${lang === 'hi' ? 'lang-hi' : ''}`}>
            {d.dailyTitle[lang]}
          </h2>
          <div className="bg-white dark:bg-nightstone-800 rounded-xl border border-saffron-500/20 divide-y divide-saffron-500/10 overflow-hidden">
            {d.daily.map((item, i) => (
              <div key={i} className="flex items-center justify-between px-5 py-4">
                <div className="flex items-center gap-3">
                  <Icon name="flame" className="w-4 h-4 text-saffron-500" />
                  <span className={`text-sandstone-700 dark:text-sandstone-100 font-medium ${lang === 'hi' ? 'lang-hi' : ''}`}>
                    {item.name[lang]}
                  </span>
                </div>
                <span className="text-saffron-600 dark:text-saffron-400 text-sm font-semibold">{item.time}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className={`font-display text-2xl text-maroon-700 dark:text-saffron-300 mb-3 ${lang === 'hi' ? 'lang-hi' : ''}`}>
            {d.pujaTitle[lang]}
          </h2>
          <p className={`text-sandstone-700 dark:text-sandstone-200 leading-relaxed ${lang === 'hi' ? 'lang-hi' : ''}`}>
            {d.pujaText[lang]}
          </p>
        </section>

        <section>
          <h2 className={`font-display text-2xl text-maroon-700 dark:text-saffron-300 mb-6 ${lang === 'hi' ? 'lang-hi' : ''}`}>
            {d.festivalTitle[lang]}
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {d.festivals.map((f, i) => (
              <div key={i} className="bg-sandstone-50 dark:bg-nightstone-900 rounded-lg p-5 border border-saffron-500/20">
                <h3 className={`font-semibold text-maroon-700 dark:text-saffron-300 mb-1.5 ${lang === 'hi' ? 'lang-hi' : ''}`}>
                  {f.name[lang]}
                </h3>
                <p className={`text-sm text-sandstone-600 dark:text-sandstone-300 leading-relaxed ${lang === 'hi' ? 'lang-hi' : ''}`}>
                  {f.desc[lang]}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
