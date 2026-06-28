import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => { setOpen(false) }, [location])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header>
        <div className="container nav-row">
          <Link to="/" className="wordmark">
            CELESTIA STUDIOS<span>.</span>
          </Link>

          <nav className="links">
            <Link to="/services">Services</Link>
            <Link to="/studio">Studio</Link>
            <Link to="/work">Work</Link>
            <Link to="/process">Process</Link>
          </nav>

          <Link to="/contact" className="btn btn-primary btn-sm nav-cta">
            Book a Strategy Call
          </Link>

          <button
            className={`hamburger${open ? ' hamburger--open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`mobile-drawer${open ? ' mobile-drawer--open' : ''}`} aria-hidden={!open}>
        <nav className="mobile-nav">
          <Link to="/services">Services</Link>
          <Link to="/studio">Studio</Link>
          <Link to="/work">Work</Link>
          <Link to="/process">Process</Link>
          <Link to="/contact" className="btn btn-primary mobile-nav-cta">
            Book a Strategy Call
          </Link>
        </nav>
      </div>

      {open && (
        <div
          className="mobile-overlay"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}