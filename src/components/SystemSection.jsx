import { useReveal } from '../hooks/useReveal.js'

const PILLARS = [
  { name: 'Brand', effect: 'Creates trust.' },
  { name: 'Product', effect: 'Creates value.' },
  { name: 'Marketing', effect: 'Creates demand.' },
  { name: 'Development', effect: 'Removes friction.' },
  { name: 'AI', effect: 'Creates scale.' },
]

export default function SystemSection() {
  const [headRef, headVisible] = useReveal()
  const [rowRef, rowVisible] = useReveal()

  return (
    <section id="system">
      <div className="container">
        <div ref={headRef} className={`section-head reveal ${headVisible ? 'is-visible' : ''}`}>
          <span className="eyebrow">The Celestia system</span>
          <h2>Five forces. One connected engine.</h2>
          <p className="lede" style={{ marginTop: 14 }}>
            Businesses don't grow through isolated services — they grow when every part of the
            system pulls in the same direction.
          </p>
        </div>
        <div ref={rowRef} className={`system-row reveal ${rowVisible ? 'is-visible' : ''}`}>
          {PILLARS.map((p) => (
            <div className="system-card" key={p.name}>
              <div className="system-dot" />
              <h3>{p.name}</h3>
              <p>{p.effect}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
