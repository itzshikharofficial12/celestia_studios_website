import { useReveal } from '../hooks/useReveal.js'

const STEPS = [
  {
    n: '01',
    title: 'Discovery',
    body:
      'Founder workshops, competitor and audience research, and market position analysis — so every decision after this is grounded in evidence, not opinion.',
  },
  {
    n: '02',
    title: 'Strategy',
    body:
      'Brand positioning, messaging, and visual direction defined as one coherent system — not a moodboard, a decision framework.',
  },
  {
    n: '03',
    title: 'Execution',
    body:
      'Website, growth funnel, and AI workflows built to that strategy — designed to convert, not just to look finished.',
  },
  {
    n: '04',
    title: 'Systemization',
    body:
      'Documentation, training, and automation so the system keeps compounding long after the engagement ends.',
  },
]

export default function ProcessSection() {
  const [headRef, headVisible] = useReveal()
  const [listRef, listVisible] = useReveal()

  return (
    <section id="process">
      <div className="container">
        <div ref={headRef} className={`section-head reveal ${headVisible ? 'is-visible' : ''}`}>
          <span className="eyebrow">How we work</span>
          <h2>A deliberate path from discovery to a system that runs itself.</h2>
        </div>
        <div ref={listRef} className={`process-list reveal ${listVisible ? 'is-visible' : ''}`}>
          {STEPS.map((step, i) => (
            <div
              className={`process-item ${i === STEPS.length - 1 ? 'last' : ''}`}
              key={step.n}
            >
              <span className="pnum">{step.n}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
