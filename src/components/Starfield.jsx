import { useEffect, useRef } from 'react'

export default function Starfield() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let stars = []
    let raf = null

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    function makeStars() {
      const count = Math.min(160, Math.floor(window.innerWidth / 9))
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.3 + 0.3,
        baseAlpha: Math.random() * 0.5 + 0.25,
        speed: Math.random() * 0.4 + 0.05,
        phase: Math.random() * Math.PI * 2,
      }))
    }

    function draw(t) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#f4f2ea'
      stars.forEach((s) => {
        const twinkle = reduced ? 0 : Math.sin(t * 0.001 * s.speed + s.phase) * 0.35
        ctx.globalAlpha = Math.max(0, Math.min(1, s.baseAlpha + twinkle))
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fill()
      })
      ctx.globalAlpha = 1
      if (!reduced) raf = requestAnimationFrame(draw)
    }

    resize()
    makeStars()
    draw(0)

    function onResize() {
      resize()
      makeStars()
      if (reduced) draw(0)
    }
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return <canvas id="stars" ref={canvasRef} aria-hidden="true" />
}
