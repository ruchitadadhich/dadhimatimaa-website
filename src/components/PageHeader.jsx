import React from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function PageHeader({ title, subtitle, image }) {
  const { lang } = useLanguage()
  return (
    <div
      className="relative bg-maroon-700 dark:bg-nightstone-900 text-sandstone-50 overflow-hidden"
      style={
        image
          ? {
              backgroundImage: `linear-gradient(rgba(42,10,14,0.78), rgba(42,10,14,0.78)), url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : {}
      }
    >
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20 text-center">
        <h1 className={`font-display text-3xl md:text-5xl font-semibold text-saffron-400 ${lang === 'hi' ? 'lang-hi' : ''}`}>
          {title[lang]}
        </h1>
        {subtitle && (
          <p className={`mt-3 text-sandstone-100/90 text-base md:text-lg ${lang === 'hi' ? 'lang-hi' : ''}`}>
            {subtitle[lang]}
          </p>
        )}
        <div className="diya-divider w-32 mx-auto mt-6 opacity-80" />
      </div>
    </div>
  )
}
