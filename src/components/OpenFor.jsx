import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal.js'

export default function OpenFor() {
  const [ref, visible] = useReveal()

  return (
    <section className="open-for">
      <div className="container">
        <div ref={ref} className={`open-inner reveal ${visible ? 'is-visible' : ''}`}>
          <div className="open-left">
            <span className="eyebrow">Availability</span>
            <h2 className="open-h2">Currently accepting<br /><em>3 new projects.</em></h2>
            <p className="open-sub">Founder-led. Response within 24 hours.</p>
            <Link to="/contact" className="btn btn-primary" style={{ marginTop: 32 }}>
              Start a Conversation
            </Link>
          </div>
          <div className="open-right">
            <div className="open-stat">
              <span className="open-num">3</span>
              <span className="open-stat-label">Open Spots</span>
            </div>
            <div className="open-stat">
              <span className="open-num">24h</span>
              <span className="open-stat-label">Response Time</span>
            </div>
            <div className="open-stat">
              <span className="open-num">2</span>
              <span className="open-stat-label">Founders</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}