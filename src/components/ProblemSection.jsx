import { useReveal } from '../hooks/useReveal.js'

const PROBLEMS = [
  'Brand and product tell different stories to the same customer.',
  "Marketing generates demand a confusing website can't convert.",
  'Messaging shifts with every new hire, agency, or quarter.',
  'Manual operations quietly cap how fast the team can scale.',
  "Every vendor optimizes their piece — nobody owns the whole system.",
  'Growth becomes a series of disconnected tactics, not a system.',
]

export default function ProblemSection() {
  const [headRef, headVisible] = useReveal()
  const [gridRef, gridVisible] = useReveal()

  return (
    <section id="problem">
      <div className="container">
        <div ref={headRef} className={`section-head reveal ${headVisible ? 'is-visible' : ''}`}>
          <span className="eyebrow">Why most growth stalls</span>
          <h2>
            Most companies don't have a growth problem.
            <br />
            They have a fragmentation problem.
          </h2>
        </div>
        <div ref={gridRef} className={`problem-grid reveal ${gridVisible ? 'is-visible' : ''}`}>
          {PROBLEMS.map((text, i) => (
            <div className="problem-card" key={i}>
              <span className="num">{String(i + 1).padStart(2, '0')}</span>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
