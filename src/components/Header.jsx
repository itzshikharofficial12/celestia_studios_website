import { Link } from 'react-router-dom'

export default function Header() {
  return (
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
        <Link to="/contact" className="btn btn-primary btn-sm">
          Book a Strategy Call
        </Link>
      </div>
    </header>
  )
}