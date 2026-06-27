import { useState } from 'react'
import Starfield from '../components/Starfield.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { useReveal } from '../hooks/useReveal.js'

const STAGES = ['Early Stage', 'Growing', 'Funded']

export default function Contact() {
  const [r1, v1] = useReveal()
  const [r2, v2] = useReveal()
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    stage: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', company: '', stage: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Starfield />
      <div className="nebula-blob b1" />
      <div className="nebula-blob b2" />
      <Header />

      <main>
        <section className="contact-page">
          <div className="container contact-wrap">

            {/* Header */}
            <div ref={r1} className={`contact-head reveal ${v1 ? 'is-visible' : ''}`}>
              <span className="eyebrow">Let's talk</span>
              <h1 className="contact-h1">
                Book a <em>Strategy Call</em>
              </h1>
              <p className="contact-sub">
                30 minutes. We'll figure out where you are, what you need, and whether we're the right fit.
              </p>
            </div>

            {/* Cal embed */}
            <div className="cal-embed-wrap">
              <iframe
                src="https://cal.com/celestia-studios?embed=true&theme=dark"
                width="100%"
                height="700"
                frameBorder="0"
                title="Book a Strategy Call"
                style={{ display: 'block' }}
              />
            </div>

            {/* Divider */}
            <div ref={r2} className={`contact-form-section reveal ${v2 ? 'is-visible' : ''}`}>
              <div className="contact-form-header">
                <span className="eyebrow">Not ready to book yet</span>
                <h2 className="contact-form-h2">Leave your details.<br /><em>We'll reach out.</em></h2>
              </div>

              {status === 'success' ? (
                <div className="contact-success">
                  <h3>We got it.</h3>
                  <p>We'll be in touch within 24 hours.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="cf-row">
                    <div className="cf-field">
                      <label className="cf-label">Name</label>
                      <input
                        className="cf-input"
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="cf-field">
                      <label className="cf-label">Email</label>
                      <input
                        className="cf-input"
                        type="email"
                        name="email"
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="cf-row">
                    <div className="cf-field">
                      <label className="cf-label">Company</label>
                      <input
                        className="cf-input"
                        type="text"
                        name="company"
                        placeholder="Company name"
                        value={form.company}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="cf-field">
                      <label className="cf-label">Stage</label>
                      <div className="cf-stage-group">
                        {STAGES.map((s) => (
                          <button
                            key={s}
                            type="button"
                            className={`cf-stage-btn ${form.stage === s ? 'cf-stage-btn--active' : ''}`}
                            onClick={() => setForm({ ...form, stage: s })}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="cf-field">
                    <label className="cf-label">What's the problem</label>
                    <textarea
                      className="cf-input cf-textarea"
                      name="message"
                      placeholder="Tell us what's broken, slow, or missing."
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                    />
                  </div>

                  {status === 'error' && (
                    <p className="cf-error">Something went wrong. Try again or email us directly.</p>
                  )}

                  <button
                    type="submit"
                    className="btn btn-primary cf-submit"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Sending...' : 'Send'}
                  </button>
                </form>
              )}
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}