import { useEffect, useMemo, useState } from 'react'
import es from './translations/es'
import en from './translations/en'
import fr from './translations/fr'
import ca from './translations/ca'
import { SUPPORTED_CODES, DEFAULT_LANGUAGE } from './languages'
import { LanguageContext } from './languageContextValue'

const DICTIONARIES = { es, en, fr, ca }
const STORAGE_KEY = 'anatacode-lang'

// Revisa el/los idiomas configurados en el navegador y devuelve el
// primero que coincida con uno de los que soportamos.
function detectBrowserLanguage() {
  if (typeof navigator === 'undefined') return DEFAULT_LANGUAGE

  const candidates =
    navigator.languages && navigator.languages.length > 0
      ? navigator.languages
      : [navigator.language].filter(Boolean)

  for (const candidate of candidates) {
    const primary = candidate.slice(0, 2).toLowerCase()
    if (SUPPORTED_CODES.includes(primary)) return primary
  }

  return DEFAULT_LANGUAGE
}

function getInitialLanguage() {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE

  // Si la persona ya eligio un idioma antes, respetamos esa eleccion.
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored && SUPPORTED_CODES.includes(stored)) return stored

  // Si no, usamos el idioma del navegador.
  return detectBrowserLanguage()
}

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(getInitialLanguage)

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = DICTIONARIES[lang].meta.title
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // localStorage puede fallar en modo privado -- no es critico, seguimos.
    }
  }, [lang])

  const setLang = (code) => {
    if (SUPPORTED_CODES.includes(code)) setLangState(code)
  }

  const value = useMemo(
    () => ({ lang, setLang, t: DICTIONARIES[lang] }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
