const CENTER = { x: 300, y: 300 }

const NODES = [
  { id: 'brand',       label: 'BRAND',       x: 300, y: 100, tx: 300, ty: 80,  anchor: 'middle' },
  { id: 'product',     label: 'PRODUCT',     x: 490, y: 238, tx: 512, ty: 242, anchor: 'start'  },
  { id: 'marketing',   label: 'MARKETING',   x: 418, y: 462, tx: 436, ty: 498, anchor: 'start'  },
  { id: 'development', label: 'DEVELOPMENT', x: 182, y: 462, tx: 164, ty: 498, anchor: 'end'    },
  { id: 'ai',          label: 'AI',          x: 110, y: 238, tx: 88,  ty: 242, anchor: 'end'    },
]

export default function PillarConstellation({ active }) {
  return (
    <svg viewBox="0 0 600 600" aria-hidden="true">
      <circle className="ring" cx={CENTER.x} cy={CENTER.y} r="232" />

      {NODES.map((node, i) => {
        const next = NODES[(i + 1) % NODES.length]
        const isActive = node.id === active || next.id === active
        return (
          <line
            key={`edge-${node.id}`}
            className="edge"
            x1={node.x} y1={node.y}
            x2={next.x} y2={next.y}
            style={{
              strokeDashoffset: 0,
              stroke: isActive ? 'rgba(232,199,124,.55)' : 'rgba(244,242,234,.12)',
              transition: 'stroke .6s ease',
            }}
          />
        )
      })}

      {NODES.map((node) => (
        <line
          key={`spoke-${node.id}`}
          className="spoke"
          x1={CENTER.x} y1={CENTER.y}
          x2={node.x}   y2={node.y}
          style={{
            strokeDashoffset: 0,
            stroke: node.id === active ? 'rgba(232,199,124,.5)' : 'rgba(155,143,224,.3)',
            transition: 'stroke .6s ease',
          }}
        />
      ))}

      <circle className="core-dot" cx={CENTER.x} cy={CENTER.y} r="10" />
      <text className="core-label" x={CENTER.x} y={CENTER.y + 28}>CELESTIA</text>

      {NODES.map((node) => {
        const isActive = node.id === active
        return (
          <g key={`node-${node.id}`}>
            <circle
              cx={node.x} cy={node.y} r={isActive ? 9 : 7}
              style={{
                fill: isActive ? 'var(--gold)' : 'var(--nebula-2)',
                stroke: isActive ? 'var(--gold)' : 'rgba(232,199,124,.5)',
                strokeWidth: isActive ? 0 : 1.6,
                filter: isActive ? 'drop-shadow(0 0 8px rgba(232,199,124,.8))' : 'none',
                transition: 'all .6s ease',
                opacity: 1,
              }}
            />
            <text
              className="node-label"
              x={node.tx} y={node.ty}
              textAnchor={node.anchor}
              style={{
                opacity: 1,
                fill: node.id === active ? 'var(--gold)' : 'var(--slate)',
                fontWeight: node.id === active ? '600' : '400',
                transition: 'fill .6s ease',
              }}
            >
              {node.label}
            </text>
          </g>
        )
      })}
    </svg>
  )
}