import React, { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'hi'
    return window.localStorage.getItem('dadhimati-lang') || 'hi'
  })

  const toggleLang = () => {
    setLang((l) => {
      const next = l === 'hi' ? 'en' : 'hi'
      window.localStorage.setItem('dadhimati-lang', next)
      return next
    })
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
