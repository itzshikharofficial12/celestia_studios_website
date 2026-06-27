export default function Marquee() {
  const items = [
    'Brand', 'Product', 'Marketing', 'Development', 'AI Operations',
    'Brand', 'Product', 'Marketing', 'Development', 'AI Operations',
  ]

  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-dot" />
          </span>
        ))}
      </div>
    </div>
  )
}