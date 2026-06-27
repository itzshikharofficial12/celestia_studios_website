import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Starfield from "../components/Starfield.jsx";
import { useReveal } from "../hooks/useReveal.js";

const FEATURES = [
  {
    title: "Strategic by Design",
    text: "Every engagement begins with research, positioning, and a clear roadmap before execution."
  },
  {
    title: "Built for Growth",
    text: "Every website, brand, and system is designed to grow alongside ambitious companies."
  },
  {
    title: "Stories Worth Telling",
    text: "We're preparing in-depth case studies that showcase our process, thinking, and measurable impact."
  }
];

export default function Work() {
  const [heroRef, heroVisible] = useReveal();
  const [cardsRef, cardsVisible] = useReveal();

  return (
    <>
      <Starfield />
      <div className="nebula-blob b1" />
      <div className="nebula-blob b2" />

      <Header />

      <main>

        <section className="work-hero">
          <div className="container">

            <div
              ref={heroRef}
              className={`work-hero-inner reveal ${
                heroVisible ? "is-visible" : ""
              }`}
            >

              <span className="eyebrow">
                Case Studies
              </span>

              <h1 className="work-title">
                Our work is
                <br />
                <span>coming soon.</span>
              </h1>

              <p className="work-subtitle">
                Exceptional work deserves exceptional storytelling.
                We're documenting every strategy, design decision and measurable
                result before we publish our first collection of case studies.
              </p>

              <div className="work-divider">
                ✦
              </div>

              <Link to="/" className="btn btn-primary">
                Back to Home
              </Link>

            </div>

          </div>
        </section>

        <section className="work-features">
          <div className="container">

            <div
              ref={cardsRef}
              className={`work-grid reveal ${
                cardsVisible ? "is-visible" : ""
              }`}
            >

              {FEATURES.map((item) => (
                <div className="work-card" key={item.title}>

                  <div className="work-icon">
                    ✦
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                </div>
              ))}

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}