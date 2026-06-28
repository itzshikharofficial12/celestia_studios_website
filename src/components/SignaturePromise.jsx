import { useReveal } from '../hooks/useReveal.js'

const LINES = [
  'No templates.',
  'No outsourcing.',
  'No shortcuts.',
]

export default function SignaturePromise() {
  const [ref, visible] = useReveal()

  return (
    <section className="promise">
      <div className="container">
        <div ref={ref} className={`promise-inner reveal ${visible ? 'is-visible' : ''}`}>
          <div className="promise-lines">
            {LINES.map((line, i) => (
              <p key={i} className="promise-line">{line}</p>
            ))}
          </div>
          <p className="promise-close">
            Just thoughtful systems,<br />built from the ground up.
          </p>
        </div>
      </div>
    </section>
  )
}