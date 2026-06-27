import { Link } from 'react-router-dom'
import Starfield from '../components/Starfield.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { useReveal } from '../hooks/useReveal.js'

const STEPS = [
  {
    n: '01',
    title: 'The Strategy Call',
    time: '30 min',
    body: 'We talk through where you are, what you\'re trying to build, and what\'s getting in the way. No pitch, no deck — just an honest conversation about whether we\'re the right fit.',
  },
  {
    n: '02',
    title: 'Discovery',
    time: 'Week 1–2',
    body: 'We go deep on your market, your competitors, and your current positioning. Everything after this is grounded in evidence, not opinion.',
  },
  {
    n: '03',
    title: 'Strategy & Execution',
    time: 'Week 3 onwards',
    body: 'Brand, product, marketing, development, and AI — built in the right order, to the same brief. No handoffs, no misaligned incentives.',
  },
  {
    n: '04',
    title: 'Systemization',
    time: 'Ongoing',
    body: 'Documentation, training, and automation so everything we build keeps compounding after the engagement. You own it completely.',
  },
]

function Step({ step, index }) {
  const [ref, visible] = useReveal()
  return (
    <div
      ref={ref}
      className={`process-page-item reveal ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="ppi-left">
        <span className="ppi-num">{step.n}</span>
      </div>
      <div className="ppi-center">
        <h2 className="ppi-title">{step.title}</h2>
        <p className="ppi-body">{step.body}</p>
      </div>
      <div className="ppi-right">
        <span className="ppi-time">{step.time}</span>
      </div>
    </div>
  )
}

export default function Process() {
  const [headRef, headVisible] = useReveal()
  const [footRef, footVisible] = useReveal()

  return (
    <>
      <Starfield />
      <div className="nebula-blob b1" />
      <div className="nebula-blob b2" />
      <Header />

      <main>
        <section className="process-page">
          <div className="container">

            <div ref={headRef} className={`process-page-head reveal ${headVisible ? 'is-visible' : ''}`}>
              <span className="eyebrow">How we work</span>
              <h1 className="process-page-h1">
                Here's exactly what happens<br />
                <em>after you reach out.</em>
              </h1>
            </div>

            <div className="process-page-list">
              {STEPS.map((step, i) => (
                <Step key={step.n} step={step} index={i} />
              ))}
            </div>

            <div ref={footRef} className={`process-page-footer reveal ${footVisible ? 'is-visible' : ''}`}>
              <p className="process-page-note">
                No retainers until both sides are certain it's the right fit.
              </p>
              <div className="process-page-ctas">
                <Link to="/contact" className="btn btn-primary">Book a Strategy Call</Link>
                <Link to="/services" className="btn btn-ghost">See the System</Link>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}