import { useState } from 'react'
import styles from './ContactSales.module.css'

const initialForm = { name: '', company: '', email: '', message: '' }

const ContactSales = () => {
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
    setSent(true)
  }

  return (
    <section className={`container ${styles.section}`}>
      <div className={styles.intro}>
        <h1 className={styles.title}>Hablemos de tu proyecto.</h1>
        <p className={styles.text}>
          Cuentanos en que estas trabajando y en donde se te esta yendo mas
          tiempo del que deberia. Te respondemos personalmente.
        </p>
      </div>

      <div className={styles.grid}>
        <div className="card">
          {sent ? (
            <div className={styles.confirmation}>
              <span className="eyebrow">mensaje enviado</span>
              <h3>Gracias, {form.name.split(' ')[0] || ''}.</h3>
              <p>Recibimos tu mensaje y te vamos a responder pronto.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label htmlFor="name">Nombre</label>
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
                <label htmlFor="company">Empresa</label>
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
                <label htmlFor="email">Correo</label>
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
                <label htmlFor="message">Cuentanos tu proyecto</label>
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
                Enviar mensaje
              </button>
            </form>
          )}
        </div>

        <div className={`card ${styles.directCard}`}>
          <h3 className={styles.directTitle}>Prefieres escribir directo?</h3>
          <p className={styles.directText}>
            Tambien puedes escribirnos por correo y te respondemos desde ahi.
          </p>
          <a href="mailto:hola@anatacode.com" className={styles.directEmail}>
            hola@anatacode.com
          </a>
          <p className={styles.directNote}>
            Atendemos clientes en Colombia y tambien proyectos internacionales.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContactSales
