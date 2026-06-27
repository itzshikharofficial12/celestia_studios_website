import { useReveal } from '../hooks/useReveal.js'
import Starfield from '../components/Starfield.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

export default function Contact() {
  const [ref, visible] = useReveal()

  return (
    <>
      <Starfield />
      <div className="nebula-blob b1" />
      <div className="nebula-blob b2" />
      <Header />

      <main>
        <section className="contact-hero">
          <div className="container">
            <div ref={ref} className={`contact-inner reveal ${visible ? 'is-visible' : ''}`}>
              <span className="eyebrow">Let's talk</span>
              <h1 className="contact-h1">
                Book a <em>Strategy Call</em>
              </h1>
              <p className="lede" style={{ marginTop: 20 }}>
                30 minutes. We'll figure out where you are, what you need, and whether we're the right fit.
              </p>
              <div className="cal-embed-wrap">
                <iframe
                  src="https://cal.com/celestia-studios?embed=true&theme=dark"
                  width="100%"
                  height="700"
                  frameBorder="0"
                  title="Book a Strategy Call"
                  style={{ display: 'block' }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}