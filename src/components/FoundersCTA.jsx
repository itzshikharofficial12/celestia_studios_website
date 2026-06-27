import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal.js'

export default function FoundersCTA() {
  const [ref, visible] = useReveal()

  return (
    <section className="founders-cta" id="contact">
      <div className="container">
        <div ref={ref} className={`founders-cta-inner reveal ${visible ? 'is-visible' : ''}`}>
          <div className="fcta-quote-block">
            <p className="fcta-quote">
              "We promise that your marketing and your product will never work against each other again."
            </p>
            <p className="fcta-names">
              Shikhar Srivastava · Pushkar Gupta<br />
              <span>Founders, Celestia Studios</span>
            </p>
          </div>
          <div className="fcta-action">
            <h2 className="fcta-h2">
              Ready to build the system?
            </h2>
            <div className="fcta-btns">
              <Link to="/contact" className="btn btn-primary">Book a Strategy Call</Link>
              <Link to="/studio" className="btn btn-ghost">Meet the Studio</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}