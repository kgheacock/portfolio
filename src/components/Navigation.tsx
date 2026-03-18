'use client'
import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'about', href: '#about' },
  { label: 'projects', href: '#projects' },
  { label: 'skills', href: '#skills' },
  { label: 'experience', href: '#experience' },
  { label: 'contact', href: '#contact' },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = navLinks.map((l) => l.href.slice(1))
      let current = ''
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 100) current = id
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const id = href.slice(1)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-terminal-bg/95 backdrop-blur-sm border-b border-terminal-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="text-terminal-green font-bold text-lg hover:text-glow-green transition-all duration-200 select-none"
            style={{ textShadow: '0 0 10px rgba(0,255,65,0.4)' }}
          >
            [KH]
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-3 py-1.5 text-sm transition-all duration-150 rounded-sm ${
                  activeSection === link.href.slice(1)
                    ? 'text-terminal-green'
                    : 'text-terminal-dim hover:text-gray-300'
                }`}
              >
                {activeSection === link.href.slice(1) && (
                  <span className="text-terminal-green mr-1">›</span>
                )}
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-terminal-dim hover:text-terminal-green transition-colors p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 space-y-1">
              <span
                className={`block h-px bg-current transition-all duration-200 ${
                  menuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`block h-px bg-current transition-all duration-200 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-px bg-current transition-all duration-200 ${
                  menuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-terminal-surface border-b border-terminal-border">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`block w-full text-left px-3 py-2 text-sm transition-colors ${
                  activeSection === link.href.slice(1)
                    ? 'text-terminal-green'
                    : 'text-terminal-dim hover:text-gray-300'
                }`}
              >
                <span className="text-terminal-green mr-2">$</span>
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
