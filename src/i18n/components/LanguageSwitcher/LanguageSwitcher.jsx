import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../../i18n/useLanguage'
import { LANGUAGES } from '../../i18n/languages'
import styles from './LanguageSwitcher.module.css'

const LanguageSwitcher = () => {
  const { lang, setLang, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const current = LANGUAGES.find((item) => item.code === lang) ?? LANGUAGES[0]

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.nav.langLabel}
      >
        <current.Flag className={styles.flag} />
        <span className={styles.code}>{current.code.toUpperCase()}</span>
      </button>

      {open && (
        <ul className={styles.menu} role="listbox">
          {LANGUAGES.map((item) => (
            <li key={item.code}>
              <button
                type="button"
                role="option"
                aria-selected={item.code === lang}
                className={`${styles.option} ${item.code === lang ? styles.optionActive : ''}`}
                onClick={() => {
                  setLang(item.code)
                  setOpen(false)
                }}
              >
                <item.Flag className={styles.flag} />
                <span>{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default LanguageSwitcher
