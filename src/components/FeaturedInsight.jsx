import { useReveal } from '../hooks/useReveal.js'

export default function FeaturedInsight() {
  const [ref, visible] = useReveal()

  return (
    <section className="insight">
      <div className="container">
        <div ref={ref} className={`insight-card reveal ${visible ? 'is-visible' : ''}`}>
          <span className="eyebrow">Perspective</span>
          <p className="insight-pull">
            Most startups don't need<br />
            a better website.<br />
            <em>They need a better system.</em>
          </p>
          <a href="#" className="insight-read">Read the thinking —</a>
        </div>
      </div>
    </section>
  )
}