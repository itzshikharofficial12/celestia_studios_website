import { useReveal } from '../hooks/useReveal.js'

export default function FoundersSection() {
  const [leftRef, leftVisible] = useReveal()
  const [rightRef, rightVisible] = useReveal()

  return (
    <section id="founders">
      <div className="container founders">
        <div ref={leftRef} className={`reveal ${leftVisible ? 'is-visible' : ''}`}>
          <span className="eyebrow">The studio</span>
          <p className="quote" style={{ marginTop: 18 }}>
            "We promise that your marketing and your product will never work against each other
            again."
          </p>
          <p className="founder-names">
            SHIKHAR SRIVASTAVA &nbsp;·&nbsp; PUSHKAR GUPTA
            <br />
            FOUNDERS, CELESTIA STUDIOS
          </p>
        </div>
        <div ref={rightRef} className={`reveal ${rightVisible ? 'is-visible' : ''}`}>
          <p className="lede" style={{ fontSize: '1.05rem' }}>
            We're not freelancers, and we're not task executors. We're strategic growth partners —
            measuring success the same way you do: in clarity, conversion, and compounding
            results, not deliverables checked off a list.
          </p>
        </div>
      </div>
    </section>
  )
}
