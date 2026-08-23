import { FlagES, FlagEN, FlagFR, FlagCA } from './Flags'

// El nombre de cada idioma va en su propio idioma (convencion estandar
// en selectores de idioma: un hablante de frances busca "Français",
// no "French").
export const LANGUAGES = [
  { code: 'es', name: 'Español', Flag: FlagES },
  { code: 'en', name: 'English', Flag: FlagEN },
  { code: 'fr', name: 'Français', Flag: FlagFR },
  { code: 'ca', name: 'Català', Flag: FlagCA },
]

export const SUPPORTED_CODES = LANGUAGES.map((l) => l.code)
export const DEFAULT_LANGUAGE = 'es'
