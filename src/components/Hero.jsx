import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Constellation from './Constellation.jsx'
import { useReveal } from '../hooks/useReveal.js'

export default function Hero() {
  const orbitRef = useRef(null)
  const [ref, visible] = useReveal()

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return
    function onMouseMove(e) {
      const x = (e.clientX / window.innerWidth - 0.5) * 10
      const y = (e.clientY / window.innerHeight - 0.5) * 10
      if (orbitRef.current) {
        orbitRef.current.style.transform = `translate(${x}px, ${y}px)`
      }
    }
    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <section className="hero">
      <div className="container hero-inner">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <h1 className="hero-h1">
            One studio.<br />
            Every part of growth,<br />
            <em>finally aligned.</em>
          </h1>
          <p className="hero-sub">
            Brand, product, marketing, development, and AI — built as one system, not five vendor relationships.
          </p>
          <div className="hero-ctas">
            <Link to="/contact" className="btn btn-primary">Book a Strategy Call</Link>
            <Link to="/services" className="btn btn-ghost">See the System</Link>
          </div>
        </div>
        <div className="orbit-wrap" ref={orbitRef} aria-hidden="true">
          <Constellation />
        </div>
      </div>
    </section>
  )
}