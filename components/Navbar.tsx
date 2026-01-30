'use client'

import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { popup, popupSequence, initInteractiveAnimations } from '../lib/animations'

gsap.registerPlugin(ScrollTrigger)

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    // Navbar animation on load (use popup helpers)
    popup('.nav-logo', { intensity: 1.1, duration: 0.9, delay: 0.2 })

    popupSequence('.nav-link', { stagger: 0.12, duration: 0.7 })

    // Mount hover handlers for .hover-expand
    initInteractiveAnimations()

    // Navbar background on scroll
    ScrollTrigger.create({
      start: 'top -80',
      end: 'bottom top',
      onUpdate: (self) => {
        setIsScrolled(self.progress > 0)
      },
    })
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-deep-purple/80 backdrop-blur-md border-b border-neon-cyan/20' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="nav-logo font-orbitron text-2xl font-bold text-gradient cursor-pointer hover-expand">
          NEXUS
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('hero')}
            className="nav-link font-rajdhani text-lg hover:text-neon-cyan transition-colors cursor-pointer hover-expand"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="nav-link font-rajdhani text-lg hover:text-neon-cyan transition-colors cursor-pointer hover-expand"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('tracks')}
            className="nav-link font-rajdhani text-lg hover:text-neon-cyan transition-colors cursor-pointer hover-expand"
          >
            Tracks
          </button>
          <button
            onClick={() => scrollToSection('timeline')}
            className="nav-link font-rajdhani text-lg hover:text-neon-cyan transition-colors cursor-pointer hover-expand"
          >
            Schedule
          </button>
          <button className="nav-link px-6 py-2 border-2 border-neon-cyan text-neon-cyan font-orbitron font-semibold hover:bg-neon-cyan hover:text-deep-purple transition-all cursor-pointer hover-expand">
            Register
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="text-neon-cyan text-2xl hover-expand">☰</button>
        </div>
      </div>
    </nav>
  )
}