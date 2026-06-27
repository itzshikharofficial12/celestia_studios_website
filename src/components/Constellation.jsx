const CENTER = { x: 300, y: 300 }

const NODES = [
  { id: 'brand', label: 'BRAND', x: 300, y: 100, tx: 300, ty: 80, anchor: 'middle' },
  { id: 'product', label: 'PRODUCT', x: 490, y: 238, tx: 512, ty: 242, anchor: 'start' },
  { id: 'marketing', label: 'MARKETING', x: 418, y: 462, tx: 436, ty: 498, anchor: 'start' },
  { id: 'development', label: 'DEVELOPMENT', x: 182, y: 462, tx: 164, ty: 498, anchor: 'end' },
  { id: 'ai', label: 'AI', x: 110, y: 238, tx: 88, ty: 242, anchor: 'end' },
]

export default function Constellation({ showLabels = true, animate = true }) {
  return (
    <svg viewBox="0 0 600 600">
      <circle className="ring" cx={CENTER.x} cy={CENTER.y} r="232" />

      {/* pentagon edges — the loop */}
      {NODES.map((node, i) => {
        const next = NODES[(i + 1) % NODES.length]
        return (
          <line
            key={`edge-${node.id}`}
            className="edge"
            x1={node.x}
            y1={node.y}
            x2={next.x}
            y2={next.y}
            style={animate ? { animationDelay: `${0.1 + i * 0.12}s` } : { strokeDashoffset: 0 }}
          />
        )
      })}

      {/* spokes — each pillar feeding the core */}
      {NODES.map((node, i) => (
        <line
          key={`spoke-${node.id}`}
          className="spoke"
          x1={CENTER.x}
          y1={CENTER.y}
          x2={node.x}
          y2={node.y}
          style={animate ? { animationDelay: `${0.7 + i * 0.08}s` } : { strokeDashoffset: 0 }}
        />
      ))}

      {/* core */}
      <circle className="core-dot" cx={CENTER.x} cy={CENTER.y} r="10" />
      {showLabels && (
        <text className="core-label" x={CENTER.x} y={CENTER.y + 28}>
          CELESTIA
        </text>
      )}

      {/* nodes */}
      {NODES.map((node, i) => (
        <g key={`node-${node.id}`}>
          <circle
            className="node-dot"
            cx={node.x}
            cy={node.y}
            r="7"
            style={animate ? { animationDelay: `${1.1 + i * 0.08}s` } : { opacity: 1, transform: 'scale(1)' }}
          />
          {showLabels && (
            <text
              className="node-label"
              x={node.tx}
              y={node.ty}
              textAnchor={node.anchor}
              style={animate ? { animationDelay: `${1.3 + i * 0.08}s` } : { opacity: 1 }}
            >
              {node.label}
            </text>
          )}
        </g>
      ))}
    </svg>
  )
}
