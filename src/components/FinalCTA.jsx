import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal.js'
import Constellation from './Constellation.jsx'

export default function FinalCTA() {
  const [ref, visible] = useReveal()

  return (
    <section className="final-cta" id="contact">
      <div className="orbit-wrap cta-orbit" aria-hidden="true">
        <Constellation showLabels={false} animate={false} />
      </div>
      <div ref={ref} className={`container inner-content reveal ${visible ? 'is-visible' : ''}`}>
        <span className="eyebrow">Let's build the system</span>
        <h2>Your brand and your product, finally working as one.</h2>
        <Link to="/contact" className="btn btn-primary">
          Book a Strategy Call
        </Link>
      </div>
    </section>
  )
}