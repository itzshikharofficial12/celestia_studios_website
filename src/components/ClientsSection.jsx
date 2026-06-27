import { useReveal } from '../hooks/useReveal.js'

const CLIENTS = [
  'B2B SaaS',
  'AI Startups',
  'Venture-Backed Startups',
  'Product-Led Businesses',
  'Technology Companies',
]

export default function ClientsSection() {
  const [ref, visible] = useReveal()

  return (
    <section id="clients">
      <div className="container">
        <div ref={ref} className={`client-band reveal ${visible ? 'is-visible' : ''}`}>
          <span className="eyebrow">Who this is built for</span>
          <h2 style={{ marginTop: 18, fontSize: 'clamp(1.7rem,3vw,2.2rem)' }}>
            Ambitious, product-led B2B companies ready to scale deliberately.
          </h2>
          <div className="chip-row">
            {CLIENTS.map((c) => (
              <span className="chip" key={c}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
