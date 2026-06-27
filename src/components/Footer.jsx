import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wordmark" aria-hidden="true">
        CELESTIA STUDIOS
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">
          A Celestia Studios Production @ 2026
        </span>
        <div className="footer-links">
          <a href="https://www.instagram.com/mycelestiastudio/" target='_blank'>Instagram</a>
          <a href="https://www.linkedin.com/company/celestiastudios/" target='_blank'>Linkedin</a>
        </div>
        <a
          href="https://x.com/celestiastudios"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social"
        >
          Follow us on X
        </a>
      </div>
    </footer>
  )
}