import { useReveal } from '../hooks/useReveal.js'

const CLIENTS = [
  { label: 'Early-stage Startups', problem: 'Need to build the brand and product simultaneously, in the right order.' },
  { label: 'SaaS Companies', problem: 'Strong product, weak positioning. Marketing isn\'t converting.' },
  { label: 'AI Products', problem: 'Cutting-edge tech, no clear story for buyers who don\'t understand it yet.' },
  { label: 'D2C Brands', problem: 'Brand identity is inconsistent. Growth has plateaued.' },
  { label: 'Luxury Brands', problem: 'Digital presence doesn\'t match the premium they charge offline.' },
  { label: 'Founder-led Businesses', problem: 'The founder is the brand. Need systems to scale beyond them.' },
]

export default function WhoWeFor() {
  const [ref, visible] = useReveal()

  return (
    <section className="who-for">
      <div className="container">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <span className="eyebrow">Who we build for</span>
          <h2 className="who-h2">Companies where<br /><em>fragmentation is costing them.</em></h2>
          <div className="who-grid">
            {CLIENTS.map((c) => (
              <div className="who-card" key={c.label}>
                <h3 className="who-label">{c.label}</h3>
                <p className="who-problem">{c.problem}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}