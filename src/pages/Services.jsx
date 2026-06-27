import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Starfield from '../components/Starfield.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { useReveal } from '../hooks/useReveal.js'

const CENTER = { x: 300, y: 300 }
const NODES = [
  { id: 'brand',       label: 'BRAND',       x: 300, y: 88,  tx: 300, ty: 65,  anchor: 'middle' },
  { id: 'website',     label: 'WEBSITE',     x: 476, y: 262, tx: 500, ty: 262, anchor: 'start'  },
  { id: 'growth',      label: 'GROWTH',      x: 394, y: 468, tx: 412, ty: 504, anchor: 'start'  },
  { id: 'ai',          label: 'AI OPS',      x: 206, y: 468, tx: 188, ty: 504, anchor: 'end'    },
  { id: 'ops',         label: '',            x: 124, y: 262, tx: 100, ty: 262, anchor: 'end'    },
]

const QUAD_NODES = [
  { id: 'brand',   label: 'BRAND',   x: 180, y: 140, tx: 160, ty: 130, anchor: 'end'    },
  { id: 'website', label: 'WEBSITE', x: 420, y: 140, tx: 440, ty: 130, anchor: 'start'  },
  { id: 'growth',  label: 'GROWTH',  x: 420, y: 460, tx: 440, ty: 474, anchor: 'start'  },
  { id: 'ai',      label: 'AI OPS',  x: 180, y: 460, tx: 160, ty: 474, anchor: 'end'    },
]

function ServiceConstellation({ active }) {
  return (
    <svg viewBox="0 0 600 600" aria-hidden="true" className="svc-constellation">
      <circle
        cx={CENTER.x} cy={CENTER.y} r="200"
        fill="none" stroke="rgba(244,242,234,.06)"
        strokeWidth="1" strokeDasharray="2 6"
        style={{ transformOrigin: `${CENTER.x}px ${CENTER.y}px`, animation: 'spin 110s linear infinite' }}
      />
      {QUAD_NODES.map((node, i) => {
        const next = QUAD_NODES[(i + 1) % QUAD_NODES.length]
        const isActive = !active || node.id === active || next.id === active
        return (
          <line key={`e-${node.id}`}
            x1={node.x} y1={node.y} x2={next.x} y2={next.y}
            stroke={isActive && active ? 'rgba(232,199,124,.35)' : 'rgba(244,242,234,.1)'}
            strokeWidth="1.2"
            style={{ transition: 'stroke .6s ease' }}
          />
        )
      })}
      {QUAD_NODES.map((node) => (
        <line key={`s-${node.id}`}
          x1={CENTER.x} y1={CENTER.y} x2={node.x} y2={node.y}
          stroke={active && node.id === active ? 'rgba(232,199,124,.5)' : 'rgba(155,143,224,.22)'}
          strokeWidth="1"
          style={{ transition: 'stroke .6s ease' }}
        />
      ))}
      <circle cx={CENTER.x} cy={CENTER.y} r="10" fill="var(--gold)"
        style={{ animation: 'pulseCore 3.4s ease-in-out infinite' }} />
      <text x={CENTER.x} y={CENTER.y + 26} textAnchor="middle"
        style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: '9px', letterSpacing: '.12em', fill: 'var(--gold)' }}>
        CELESTIA
      </text>
      {QUAD_NODES.map((node) => {
        const isActive = node.id === active
        const isDim = active && !isActive
        return (
          <g key={`n-${node.id}`}>
            <circle cx={node.x} cy={node.y} r={isActive ? 9 : 6}
              fill={isActive ? 'var(--gold)' : 'var(--nebula-2)'}
              stroke={isActive ? 'var(--gold)' : 'rgba(232,199,124,.4)'}
              strokeWidth={isActive ? 0 : 1.5}
              style={{
                filter: isActive ? 'drop-shadow(0 0 10px rgba(232,199,124,.9))' : 'none',
                opacity: isDim ? 0.2 : 1,
                transition: 'all .6s ease',
              }}
            />
            <text x={node.tx} y={node.ty} textAnchor={node.anchor}
              style={{
                fontFamily: "'IBM Plex Mono',monospace",
                fontSize: '11px', letterSpacing: '.07em',
                fill: isActive ? 'var(--gold)' : 'var(--slate)',
                opacity: isDim ? 0.2 : 1,
                fontWeight: isActive ? 600 : 400,
                transition: 'all .6s ease',
              }}>
              {node.label}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

const PACKAGES = [
  {
    id: 'brand',
    name: 'Brand Foundation System',
    effect: 'Creates trust.',
    body: 'The foundation everything else is built on. We run discovery workshops, define your positioning, build the visual and verbal identity, and set up your brand presence — so every future decision has a framework to reference.',
    outputs: [
      'Founder Discovery Workshop',
      'Brand Questionnaires',
      'Competitor Analysis',
      'Audience Research',
      'Brand Discovery Report',
      'Visual Identity System',
      'Verbal Identity System',
      'Brand Strategy Document',
      'LinkedIn Setup',
      'Brand Videos + Images',
    ],
  },
  {
    id: 'website',
    name: 'SaaS Website Development',
    effect: 'Removes friction.',
    body: 'A website that converts — not just one that looks good. We handle the full stack from strategy and copy to UX, UI, and development, so the end product performs as well as it presents.',
    outputs: [
      'Website Strategy',
      'Information Architecture',
      'Copy Framework',
      'UX Design',
      'UI Design',
      'Framer or Next.js Development',
      'Mobile Optimization',
      'SEO Basics',
      'Analytics Setup',
    ],
  },
  {
    id: 'growth',
    name: 'Growth Engine',
    effect: 'Creates demand.',
    body: 'For companies that have product-market fit and need a system to scale demand. We audit what\'s breaking the funnel, fix the conversion layer, and build the distribution infrastructure to bring in the right buyers consistently.',
    outputs: [
      'Funnel Audit',
      'Conversion Audit',
      'Landing Page Design',
      'Analytics Setup',
      'CRO Recommendations',
      'LinkedIn Founder Strategy',
      'Lead Magnet Strategy',
      'Email Capture System',
    ],
  },
  {
    id: 'ai',
    name: 'AI Operations System',
    effect: 'Creates scale.',
    body: 'AI built into your actual operations — not a chatbot bolted on. We audit your workflows, identify the highest-leverage automation opportunities, and build the systems that let your team do more without adding headcount.',
    outputs: [
      'Workflow Audit',
      'AI Automation Strategy',
      'Lead Qualification',
      'CRM Automation',
      'Proposal Generation',
      'Internal Knowledge Base',
      'AI Assistants',
      'AI Agents',
    ],
  },
]

function PackageRow({ pkg, index, active, onHover }) {
  const [ref, visible] = useReveal()

  return (
    <div
      ref={ref}
      className={`svc-row reveal ${visible ? 'is-visible' : ''} ${active === pkg.id ? 'svc-row--active' : ''}`}
      style={{ transitionDelay: `${index * 0.07}s` }}
      onMouseEnter={() => onHover(pkg.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="svc-row-left">
        <span className="svc-num">{String(index + 1).padStart(2, '0')}</span>
        <div className="svc-row-title-group">
          <h2 className="svc-name">{pkg.name}</h2>
          <span className="svc-effect">{pkg.effect}</span>
        </div>
      </div>
      <p className="svc-body">{pkg.body}</p>
      <div className="svc-outputs">
        {pkg.outputs.map((o) => (
          <span key={o} className="svc-chip">{o}</span>
        ))}
      </div>
    </div>
  )
}

export default function Services() {
  const [active, setActive] = useState(null)
  const [headRef, headVisible] = useReveal()
  const [ctaRef, ctaVisible] = useReveal()

  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <Starfield />
      <div className="nebula-blob b1" />
      <div className="nebula-blob b2" />
      <Header />

      <main>

        {/* Hero */}
        <section className="svc-hero">
          <div className="container">
            <div ref={headRef} className={`svc-hero-inner reveal ${headVisible ? 'is-visible' : ''}`}>
              <div className="svc-hero-text">
                <span className="eyebrow">What we build</span>
                <h1 className="svc-h1">
                  Four systems.<br />
                  <em>One studio.</em>
                </h1>
                <p className="svc-hero-sub">
                  Not a menu of services — a set of integrated systems. Each one is designed to work alone or compound with the others.
                </p>
              </div>
              <div className="svc-hero-visual">
                <ServiceConstellation active={active} />
              </div>
            </div>
          </div>
        </section>

        {/* Packages list */}
        <section className="svc-list-section">
          <div className="container">
            <div className="svc-list">
              {PACKAGES.map((pkg, i) => (
                <PackageRow
                  key={pkg.id}
                  pkg={pkg}
                  index={i}
                  active={active}
                  onHover={setActive}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Connect line */}
        <section className="svc-connect">
          <div className="container">
            <p className="svc-connect-text">
              Brand sets the rules. The website is where people test them. Growth brings the right people in. AI makes the whole system faster with every cycle. Use one, or run all four as a single compounding engine.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="svc-cta">
          <div className="container">
            <div ref={ctaRef} className={`svc-cta-inner reveal ${ctaVisible ? 'is-visible' : ''}`}>
              <h2>Not sure which system you need?<br /><em>Let's figure it out together.</em></h2>
              <div className="svc-cta-btns">
                <Link to="/contact" className="btn btn-primary">Book a Strategy Call</Link>
                <Link to="/" className="btn btn-ghost">Back to Home</Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}