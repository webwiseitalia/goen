import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import logo from '../assets/logogoen-Photoroom.webp'

const links = [
  { label: 'Chi Siamo', href: '#chi-siamo' },
  { label: 'Cucina', href: '#menu' },
  { label: 'Location', href: '#location' },
  { label: 'Eventi', href: '#eventi' },
  { label: 'Galleria', href: '#galleria' },
  { label: 'Contatti', href: '#contatti' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const lastY = useRef(0)
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setHidden(y > 200 && y > lastY.current)
      setScrolled(y > 100)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!navRef.current) return
    gsap.fromTo(navRef.current.children,
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out', delay: 0.2 }
    )
  }, [])

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
        style={{
          transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
          background: scrolled ? 'rgba(245,240,232,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : 'none',
        }}
      >
        <div className="flex items-center justify-between px-6 md:px-12 py-5">
          <a href="#hero" className="relative z-10">
            <img src={logo} alt="Goen" className="h-10 md:h-12 transition-all duration-500" style={{ filter: scrolled ? 'none' : 'brightness(0) invert(1)' }} />
          </a>
          <div className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="label-sm transition-colors duration-300 relative group" style={{ color: scrolled ? 'var(--text)' : '#fff' }}>
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px bg-current transition-all duration-500 w-0 group-hover:w-full" />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-6">
            <a href="#contatti" className="hidden lg:block label-sm px-6 py-3 border transition-all duration-300 hover:bg-[var(--navy)] hover:text-white hover:border-[var(--navy)]" style={{ color: scrolled ? 'var(--navy)' : '#fff', borderColor: scrolled ? 'var(--navy)' : 'rgba(255,255,255,0.4)' }}>
              Prenota
            </a>
            <button onClick={() => setOpen(!open)} className="lg:hidden flex flex-col gap-1.5 w-7 relative z-50" aria-label="Menu">
              <motion.span animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="block h-px w-full origin-center" style={{ background: open ? 'var(--navy)' : scrolled ? 'var(--navy)' : '#fff' }} />
              <motion.span animate={open ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }} className="block h-px w-5 origin-center" style={{ background: open ? 'var(--navy)' : scrolled ? 'var(--navy)' : '#fff' }} />
              <motion.span animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="block h-px w-full origin-center" style={{ background: open ? 'var(--navy)' : scrolled ? 'var(--navy)' : '#fff' }} />
            </button>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }} animate={{ clipPath: 'circle(150% at calc(100% - 40px) 40px)' }} exit={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }} transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }} className="fixed inset-0 z-40 flex flex-col justify-end pb-20 px-8" style={{ background: 'var(--cream)' }}>
            <div className="space-y-2">
              {links.map((l, i) => (
                <motion.div key={l.href} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.15 + i * 0.05, duration: 0.4, ease: [0.76, 0, 0.24, 1] }}>
                  <a href={l.href} onClick={() => setOpen(false)} className="block py-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)', fontSize: '2rem' }}>{l.label}</a>
                </motion.div>
              ))}
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-12 flex gap-8">
              <a href="tel:+39036487229" className="label-sm" style={{ color: 'var(--text-muted)' }}>+39 0364 87229</a>
              <a href="https://www.instagram.com/goenristorante/" target="_blank" rel="noopener noreferrer" className="label-sm" style={{ color: 'var(--text-muted)' }}>Instagram</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
