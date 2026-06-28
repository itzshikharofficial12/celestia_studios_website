import { useState } from 'react'
import { useReveal } from '../hooks/useReveal.js'

const NODES = [
  {
    id: 'brand',
    label: 'Brand',
    x: 50, y: 8,
    desc: 'The foundation. Sets the rules every other discipline follows.',
    detail: 'Positioning, identity, messaging — built once, referenced forever.',
  },
  {
    id: 'website',
    label: 'Website',
    x: 82, y: 38,
    desc: 'Where the brand promise gets tested by real people.',
    detail: 'Strategy, UX, UI, and development — in one studio.',
  },
  {
    id: 'growth',
    label: 'Growth',
    x: 68, y: 78,
    desc: 'Brings the right people in, not just more people.',
    detail: 'Funnel architecture, conversion, distribution — built to compound.',
  },
  {
    id: 'ai',
    label: 'AI Ops',
    x: 32, y: 78,
    desc: 'Makes the whole system faster with every cycle.',
    detail: 'Automation, pipelines, agents — compounding output per person.',
  },
  {
    id: 'product',
    label: 'Product',
    x: 18, y: 38,
    desc: 'Delivers on what the marketing promised.',
    detail: 'UX audit, flows, design system — built to the same brief.',
  },
]

export default function SystemOverview() {
  const [active, setActive] = useState(NODES[0])
  const [ref, visible] = useReveal()

  return (
    <section className="sys-overview">
      <div className="container">
        <div ref={ref} className={`sys-head reveal ${visible ? 'is-visible' : ''}`}>
          <span className="eyebrow">The system</span>
          <h2 className="sys-h2">Five disciplines.<br /><em>One brief.</em></h2>
        </div>
        <div className="sys-inner">

          {/* Pentagon SVG */}
          <div className="sys-visual" aria-hidden="true">
            <svg viewBox="0 0 100 100" className="sys-svg">
              {/* Connecting lines */}
              {NODES.map((node, i) => {
                const next = NODES[(i + 1) % NODES.length]
                return (
                  <line key={`e-${node.id}`}
                    x1={node.x} y1={node.y}
                    x2={next.x} y2={next.y}
                    stroke={active.id === node.id || active.id === next.id
                      ? 'rgba(232,199,124,.5)' : 'rgba(244,242,234,.1)'}
                    strokeWidth=".5"
                    style={{ transition: 'stroke .4s ease' }}
                  />
                )
              })}
              {/* Spokes to center */}
              {NODES.map((node) => (
                <line key={`s-${node.id}`}
                  x1={50} y1={44} x2={node.x} y2={node.y}
                  stroke={active.id === node.id ? 'rgba(232,199,124,.4)' : 'rgba(155,143,224,.2)'}
                  strokeWidth=".4"
                  style={{ transition: 'stroke .4s ease' }}
                />
              ))}
              {/* Center dot */}
              <circle cx={50} cy={44} r={2} fill="var(--gold)"
                style={{ filter: 'drop-shadow(0 0 3px rgba(232,199,124,.8))' }} />
              <text x={50} y={49} textAnchor="middle"
                style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: '3px', fill: 'var(--gold)', letterSpacing: '.3px' }}>
                CELESTIA
              </text>
              {/* Nodes */}
              {NODES.map((node) => (
                <g key={node.id}
                  onMouseEnter={() => setActive(node)}
                  style={{ cursor: 'pointer' }}
                >
                  <circle cx={node.x} cy={node.y} r={5} fill="transparent" />
                  <circle cx={node.x} cy={node.y} r={active.id === node.id ? 2.8 : 1.8}
                    fill={active.id === node.id ? 'var(--gold)' : 'var(--nebula-2)'}
                    stroke={active.id === node.id ? 'var(--gold)' : 'rgba(232,199,124,.4)'}
                    strokeWidth={active.id === node.id ? 0 : .5}
                    style={{
                      filter: active.id === node.id ? 'drop-shadow(0 0 4px rgba(232,199,124,.9))' : 'none',
                      transition: 'all .4s ease',
                    }}
                  />
                  <text x={node.x} y={node.y + (node.y < 44 ? -4 : 5)}
                    textAnchor="middle"
                    style={{
                      fontFamily: "'IBM Plex Mono',monospace",
                      fontSize: '4px',
                      fill: active.id === node.id ? 'var(--gold)' : 'var(--slate)',
                      fontWeight: active.id === node.id ? 600 : 400,
                      transition: 'fill .4s ease',
                      letterSpacing: '.3px',
                    }}>
                    {node.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          {/* Text side */}
          <div className="sys-text">
            <div className="sys-active-node" key={active.id}>
              <span className="sys-active-label">{active.label}</span>
              <p className="sys-active-desc">{active.desc}</p>
              <p className="sys-active-detail">{active.detail}</p>
            </div>
            <div className="sys-node-list">
              {NODES.map((node) => (
                <button
                  key={node.id}
                  className={`sys-node-btn ${active.id === node.id ? 'sys-node-btn--active' : ''}`}
                  onMouseEnter={() => setActive(node)}
                  onClick={() => setActive(node)}
                >
                  <span className="sys-node-dash">—</span>
                  {node.label}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}