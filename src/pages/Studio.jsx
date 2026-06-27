import { Link } from 'react-router-dom'
import Starfield from '../components/Starfield.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { useReveal } from '../hooks/useReveal.js'

export default function Studio() {
  const [r1, v1] = useReveal()
  const [r2, v2] = useReveal()
  const [r3, v3] = useReveal()
  const [r4, v4] = useReveal()
  const [r5, v5] = useReveal()

  return (
    <>
      <Starfield />
      <div className="nebula-blob b1" />
      <div className="nebula-blob b2" />
      <Header />

      <main>

        {/* Manifesto */}
        <section className="stu-manifesto">
          <div className="container">
            <div ref={r1} className={`reveal ${v1 ? 'is-visible' : ''}`}>
              <span className="eyebrow">Celestia Studios</span>
              <h1 className="stu-manifesto-h1">
                Most founders don't have a brand problem.<br />
                <em>They have a fragmentation problem.</em>
              </h1>
            </div>
          </div>
        </section>

        {/* Why */}
        <section className="stu-why">
          <div className="container">
            <div ref={r2} className={`stu-why-inner reveal ${v2 ? 'is-visible' : ''}`}>
              <div className="stu-why-left">
                <span className="eyebrow">Why we exist</span>
              </div>
              <div className="stu-why-right">
                <p className="stu-why-p">
                  Four vendors. Four invoices. Four definitions of success. Nobody owns the whole system.
                </p>
                <p className="stu-why-p">
                  Celestia is one studio that does. Brand, website, growth, and AI — built together, to the same brief.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founders */}
        <section className="stu-founders">
          <div className="container">
            <div ref={r3} className={`reveal ${v3 ? 'is-visible' : ''}`}>
              <span className="eyebrow">The people</span>
              <div className="stu-founders-grid">

                <div className="stu-founder">
                  <div className="stu-founder-photo" aria-hidden="true" />
                  <div className="stu-founder-header">
                    <h2 className="stu-founder-name">Shikhar Srivastava</h2>
                    <span className="stu-founder-domain">Development + Strategy</span>
                  </div>
                  <p className="stu-founder-bio">
                    Builds the systems that make everything possible — from architecture to production deploy.
                  </p>
                </div>

                <div className="stu-founder">
                  <div className="stu-founder-photo" aria-hidden="true" />
                  <div className="stu-founder-header">
                    <h2 className="stu-founder-name">Pushkar Gupta</h2>
                    <span className="stu-founder-domain">Brand + Marketing</span>
                  </div>
                  <p className="stu-founder-bio">
                    Shapes how a company is perceived — from identity and positioning to the campaigns that bring the right people in.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Differentiator */}
        <section className="stu-diff">
          <div className="container">
            <div ref={r4} className={`stu-diff-inner reveal ${v4 ? 'is-visible' : ''}`}>
              <span className="eyebrow">What makes us different</span>
              <div className="stu-diff-grid">
                <div className="stu-diff-item">
                  <h3>One brief.</h3>
                  <p>Everything runs from a single strategy document.</p>
                </div>
                <div className="stu-diff-item">
                  <h3>No handoffs.</h3>
                  <p>Strategy, design, and development in one studio.</p>
                </div>
                <div className="stu-diff-item">
                  <h3>One outcome.</h3>
                  <p>We measure results, not deliverables checked off a list.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="stu-cta">
          <div className="container">
            <div ref={r5} className={`stu-cta-inner reveal ${v5 ? 'is-visible' : ''}`}>
              <h2>"Your marketing and your product will never work against each other again."</h2>
              <p className="stu-cta-names">
                Shikhar Srivastava · Pushkar Gupta — Founders, Celestia Studios
              </p>
              <div className="stu-cta-btns">
                <Link to="/contact" className="btn btn-primary">Book a Strategy Call</Link>
                <Link to="/services" className="btn btn-ghost">See What We Build</Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}