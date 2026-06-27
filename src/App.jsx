import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Starfield from './components/Starfield.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import ProblemAnswer from './components/ProblemAnswer.jsx'
import FoundersCTA from './components/FoundersCTA.jsx'
import Footer from './components/Footer.jsx'
import Services from './pages/Services.jsx'
import Studio from './pages/Studio.jsx'
import Work from './pages/Work.jsx'
import Contact from './pages/Contact.jsx'
import Process from './pages/Process.jsx'

function Home() {
  return (
    <>
      <Starfield />
      <div className="nebula-blob b1" />
      <div className="nebula-blob b2" />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <ProblemAnswer />
        <FoundersCTA />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/process" element={<Process />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  )
}