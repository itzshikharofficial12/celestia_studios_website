import { useReveal } from '../hooks/useReveal.js'

export default function ProblemAnswer() {
  const [ref, visible] = useReveal()

  return (
    <section className="problem-answer">
      <div className="container">
        <div ref={ref} className={`pa-grid reveal ${visible ? 'is-visible' : ''}`}>
          <div className="pa-left">
            <span className="eyebrow">Why most growth stalls</span>
            <p className="pa-problem">
              Brand and product tell different stories.<br />
              Marketing generates demand the website can't convert.<br />
              Five vendors, five definitions of success.
            </p>
          </div>
          <div className="pa-divider" aria-hidden="true" />
          <div className="pa-right">
            <span className="eyebrow">What Celestia is</span>
            <p className="pa-answer">
              One studio that owns the whole system — so every part of your growth pulls in the same direction.
            </p>
            <p className="pa-answer-sub">
              No handoffs. No misaligned incentives. No starting over every time you hire a new vendor.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}