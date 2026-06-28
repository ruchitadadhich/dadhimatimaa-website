import React from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'
import { content } from '../data/content.js'
import PageHeader from '../components/PageHeader.jsx'
import Icon from '../components/Icon.jsx'

export default function Visit() {
  const { lang } = useLanguage()
  const v = content.visit

  return (
    <div>
      <PageHeader title={v.title} subtitle={v.subtitle} image="/images/temple-hero-1.jpg" />

      <div className="max-w-5xl mx-auto px-4 py-14">
        <section className="grid md:grid-cols-[1fr,1.2fr] gap-10 mb-14">
          <div>
            <h2 className={`font-display text-2xl text-maroon-700 dark:text-saffron-300 mb-3 ${lang === 'hi' ? 'lang-hi' : ''}`}>
              {v.addressTitle[lang]}
            </h2>
            <p className={`text-sandstone-700 dark:text-sandstone-200 leading-relaxed flex gap-2 ${lang === 'hi' ? 'lang-hi' : ''}`}>
              <Icon name="map" className="w-5 h-5 text-saffron-500 shrink-0 mt-0.5" />
              {v.address[lang]}
            </p>
            <a
              href={v.mapLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-md bg-saffron-500 text-maroon-900 font-semibold hover:bg-saffron-400 transition-colors"
            >
              <Icon name="map" className="w-4 h-4" />
              <span className={lang === 'hi' ? 'lang-hi' : ''}>Google Maps</span>
            </a>
          </div>
          <div className="rounded-xl overflow-hidden border-4 border-saffron-500/30 shadow-lg aspect-[4/3]">
            <iframe
              title="Dadhimati Mata Temple location map"
              src={v.mapEmbedUrl}
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <section className="mb-14">
          <h2 className={`font-display text-2xl text-maroon-700 dark:text-saffron-300 mb-6 ${lang === 'hi' ? 'lang-hi' : ''}`}>
            {v.routesTitle[lang]}
          </h2>
          <div className="overflow-x-auto rounded-xl border border-saffron-500/20">
            <table className="w-full text-sm">
              <thead className="bg-maroon-700 dark:bg-nightstone-950 text-saffron-300">
                <tr>
                  <th className={`text-left px-4 py-3 ${lang === 'hi' ? 'lang-hi' : ''}`}>{lang === 'hi' ? 'से' : 'From'}</th>
                  <th className="text-left px-4 py-3">{lang === 'hi' ? 'दूरी' : 'Distance'}</th>
                  <th className={`text-left px-4 py-3 ${lang === 'hi' ? 'lang-hi' : ''}`}>{lang === 'hi' ? 'मार्ग' : 'Route'}</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-nightstone-800 divide-y divide-saffron-500/10">
                {v.routes.map((r, i) => (
                  <tr key={i}>
                    <td className={`px-4 py-3 font-medium text-maroon-700 dark:text-saffron-300 ${lang === 'hi' ? 'lang-hi' : ''}`}>
                      {r.from[lang]}
                    </td>
                    <td className="px-4 py-3 text-sandstone-600 dark:text-sandstone-300">{r.distance}</td>
                    <td className={`px-4 py-3 text-sandstone-600 dark:text-sandstone-300 ${lang === 'hi' ? 'lang-hi' : ''}`}>
                      {r.via[lang]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className={`font-display text-2xl text-maroon-700 dark:text-saffron-300 mb-6 ${lang === 'hi' ? 'lang-hi' : ''}`}>
            {v.facilitiesTitle[lang]}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {v.facilities.map((f, i) => (
              <div key={i} className="bg-sandstone-50 dark:bg-nightstone-900 rounded-lg p-5 border border-saffron-500/20 text-center">
                <Icon name={f.icon} className="w-6 h-6 mx-auto text-saffron-500 mb-3" />
                <h3 className={`font-semibold text-maroon-700 dark:text-saffron-300 text-sm mb-1.5 ${lang === 'hi' ? 'lang-hi' : ''}`}>
                  {f.title[lang]}
                </h3>
                <p className={`text-xs text-sandstone-600 dark:text-sandstone-300 leading-relaxed ${lang === 'hi' ? 'lang-hi' : ''}`}>
                  {f.text[lang]}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
