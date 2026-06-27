import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <footer>
      <div className="container footer-row">
        <div className="wordmark" style={{ fontSize: '1rem' }}>
          CELESTIA STUDIOS<span>.</span>
        </div>
        <div className="footer-links">
          <a href="#system">System</a>

          <a href="#process">Process</a>
          <a href="#founders">Studio</a>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="slate">Designed by Shikhar Srivastava™ in India</div>
      </div>
    </footer>
  )
}
