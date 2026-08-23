import { useState } from 'react'
import { useLanguage } from '../../i18n/useLanguage'
import styles from './ContactSales.module.css'

const initialForm = { name: '', company: '', email: '', message: '' }

const ContactSales = () => {
  const { t } = useLanguage()
  const [form, setForm] = useState(initialForm)
  const [sent, setSent] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // TODO: conectar a un backend / servicio de correo real (API propia,
    // Zoho CRM, Formspree, etc). Por ahora solo confirma en pantalla.
    alert(`Formulario enviado:\n\n${JSON.stringify(form, null, 2)}`)
    setSent(true)
  }

  const firstName = form.name.split(' ')[0] || ''
  const thanksMessage = t.contact.sentThanksTemplate.replace('{name}', firstName)

  return (
    <section className={`container ${styles.section}`}>
      <div className={styles.intro}>
        <h1 className={styles.title}>{t.contact.title}</h1>
        <p className={styles.text}>{t.contact.text}</p>
      </div>

      <div className={styles.grid}>
        <div className="card">
          {sent ? (
            <div className={styles.confirmation}>
              <span className="eyebrow">{t.contact.sentEyebrow}</span>
              <h3>{thanksMessage}</h3>
              <p>{t.contact.sentBody}</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label htmlFor="name">{t.contact.formName}</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="company">{t.contact.formCompany}</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  value={form.company}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="email">{t.contact.formEmail}</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="message">{t.contact.formMessage}</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                {t.contact.formSubmit}
              </button>
            </form>
          )}
        </div>

        <div className={`card ${styles.directCard}`}>
          <h3 className={styles.directTitle}>{t.contact.directTitle}</h3>
          <p className={styles.directText}>{t.contact.directText}</p>
          <a href="mailto:administracion@anatacode.com" className={styles.directEmail}>
            administracion@anatacode.com
          </a>
          <p className={styles.directNote}>{t.contact.directNote}</p>
        </div>
      </div>
    </section>
  )
}

export default ContactSales
