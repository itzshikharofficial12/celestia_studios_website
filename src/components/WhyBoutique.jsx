import { useReveal } from '../hooks/useReveal.js'

const ITEMS = [
  { n: '01', title: 'Founder Access', body: 'You work directly with Shikhar and Pushkar. Not an account manager.' },
  { n: '02', title: 'Focused Engagements', body: 'We take on a limited number of clients. Your project is never deprioritised.' },
  { n: '03', title: 'One Unified Team', body: 'Brand, product, and growth — built by the same people, to the same brief.' },
  { n: '04', title: 'Long-Term Partnership', body: 'We stay invested in your outcomes, not just your deliverables.' },
]

export default function WhyBoutique() {
  const [ref, visible] = useReveal()

  return (
    <section className="boutique">
      <div className="container">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <span className="eyebrow">Why boutique wins</span>
          <h2 className="boutique-h2">The size of the studio<br /><em>is the advantage.</em></h2>
          <div className="boutique-grid">
            {ITEMS.map((item) => (
              <div className="boutique-item" key={item.n}>
                <span className="boutique-n">{item.n}</span>
                <h3 className="boutique-title">{item.title}</h3>
                <p className="boutique-body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}