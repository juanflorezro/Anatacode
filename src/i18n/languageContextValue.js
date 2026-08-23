import { createContext } from 'react'

// Objeto de contexto puro, en su propio archivo, para que el archivo del
// Provider (componente) y el del hook useLanguage no mezclen exports de
// distinto tipo (evita el warning de react-refresh sobre fast-refresh).
export const LanguageContext = createContext(null)
