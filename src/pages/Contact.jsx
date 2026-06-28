import React, { useState } from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'
import { content } from '../data/content.js'
import PageHeader from '../components/PageHeader.jsx'
import Icon from '../components/Icon.jsx'

export default function Contact() {
  const { lang } = useLanguage()
  const c = content.contact
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div>
      <PageHeader title={c.title} subtitle={c.subtitle} image="/images/mataji-deity-1.jpg" />

      <div className="max-w-5xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className={`font-display text-2xl text-maroon-700 dark:text-saffron-300 mb-6 ${lang === 'hi' ? 'lang-hi' : ''}`}>
            {c.officeTitle[lang]}
          </h2>

          <div className="bg-white dark:bg-nightstone-800 rounded-xl border border-saffron-500/20 p-6 mb-6">
            <p className={`text-xs uppercase tracking-wide text-sandstone-500 dark:text-sandstone-400 mb-1 ${lang === 'hi' ? 'lang-hi' : ''}`}>
              {c.priestLabel[lang]}
            </p>
            <p className={`font-display text-xl text-maroon-700 dark:text-saffron-300 ${lang === 'hi' ? 'lang-hi' : 'lang-hi'}`}>
              {lang === 'hi' ? c.priestName : c.priestNameEn}
            </p>
          </div>

          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-saffron-500/15 flex items-center justify-center shrink-0">
                <Icon name="phone" className="w-4.5 h-4.5 text-saffron-600 dark:text-saffron-400" />
              </span>
              <div>
                <p className={`text-xs text-sandstone-500 dark:text-sandstone-400 ${lang === 'hi' ? 'lang-hi' : ''}`}>{c.phoneLabel[lang]}</p>
                <a href={`tel:${c.phone.replace(/\s/g, '')}`} className="text-maroon-700 dark:text-saffron-300 font-semibold hover:text-saffron-500">
                  {c.phone}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-saffron-500/15 flex items-center justify-center shrink-0">
                <Icon name="mail" className="w-4.5 h-4.5 text-saffron-600 dark:text-saffron-400" />
              </span>
              <div>
                <p className={`text-xs text-sandstone-500 dark:text-sandstone-400 ${lang === 'hi' ? 'lang-hi' : ''}`}>{c.emailLabel[lang]}</p>
                <a href={`mailto:${c.email}`} className="text-maroon-700 dark:text-saffron-300 font-semibold hover:text-saffron-500">
                  {c.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-10 h-10 rounded-full bg-saffron-500/15 flex items-center justify-center shrink-0">
                <Icon name="map" className="w-4.5 h-4.5 text-saffron-600 dark:text-saffron-400" />
              </span>
              <div>
                <p className={`text-xs text-sandstone-500 dark:text-sandstone-400 ${lang === 'hi' ? 'lang-hi' : ''}`}>{c.addressLabel[lang]}</p>
                <p className={`text-maroon-700 dark:text-saffron-300 font-medium ${lang === 'hi' ? 'lang-hi' : ''}`}>{c.address[lang]}</p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h2 className={`font-display text-2xl text-maroon-700 dark:text-saffron-300 mb-6 ${lang === 'hi' ? 'lang-hi' : ''}`}>
            {c.formTitle[lang]}
          </h2>
          {sent ? (
            <div className="bg-saffron-500/10 border border-saffron-500/30 rounded-xl p-6 text-center">
              <p className={`text-maroon-700 dark:text-saffron-300 font-semibold ${lang === 'hi' ? 'lang-hi' : ''}`}>
                {lang === 'hi' ? 'धन्यवाद! आपका संदेश प्राप्त हुआ।' : 'Thank you! Your message has been noted.'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className={`block text-sm text-sandstone-600 dark:text-sandstone-300 mb-1 ${lang === 'hi' ? 'lang-hi' : ''}`}>
                  {c.formName[lang]}
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2.5 rounded-md border border-saffron-500/30 bg-white dark:bg-nightstone-800 text-sandstone-800 dark:text-sandstone-100 focus:outline-none focus:ring-2 focus:ring-saffron-500/50"
                />
              </div>
              <div>
                <label className={`block text-sm text-sandstone-600 dark:text-sandstone-300 mb-1 ${lang === 'hi' ? 'lang-hi' : ''}`}>
                  {c.formEmail[lang]}
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2.5 rounded-md border border-saffron-500/30 bg-white dark:bg-nightstone-800 text-sandstone-800 dark:text-sandstone-100 focus:outline-none focus:ring-2 focus:ring-saffron-500/50"
                />
              </div>
              <div>
                <label className={`block text-sm text-sandstone-600 dark:text-sandstone-300 mb-1 ${lang === 'hi' ? 'lang-hi' : ''}`}>
                  {c.formMessage[lang]}
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-md border border-saffron-500/30 bg-white dark:bg-nightstone-800 text-sandstone-800 dark:text-sandstone-100 focus:outline-none focus:ring-2 focus:ring-saffron-500/50"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-md bg-saffron-500 text-maroon-900 font-semibold hover:bg-saffron-400 transition-colors"
              >
                <span className={lang === 'hi' ? 'lang-hi' : ''}>{c.formSubmit[lang]}</span>
              </button>
              <p className={`text-xs text-sandstone-500 dark:text-sandstone-400 ${lang === 'hi' ? 'lang-hi' : ''}`}>{c.formNote[lang]}</p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
