'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { popup, initInteractiveAnimations } from '../lib/animations'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!heroRef.current || !titleRef.current) return

    // Create floating particles
    const createParticles = () => {
      const particleCount = 50
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div')
        particle.className = 'particle'
        particle.style.cssText = `
          position: absolute;
          background: var(--neon-cyan);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          opacity: 0.6;
          box-shadow: 0 0 10px var(--neon-cyan);
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
        `
        heroRef.current?.appendChild(particle)

        gsap.to(particle, {
          y: -100 - Math.random() * 200,
          x: Math.random() * 100 - 50,
          opacity: 0,
          duration: 3 + Math.random() * 3,
          repeat: -1,
          delay: Math.random() * 3,
        })
      }
    }

    createParticles()

    // SIMPLE animation timeline - no complex text reveal
    const tl = gsap.timeline()
    
    // Animate title - SIMPLE fade in
    tl.from('.hero-title', {
      y: 100,
      opacity: 0,
      scale: 0.8,
      duration: 1.5,
      ease: 'power4.out',
    })
    .from('.hero-subtitle', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    }, '-=0.8')
    .from('.hero-date', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
    }, '-=0.6')
    .call(() => {
      // Use popup helper — use dev-adjustable settings where available
      popup('.cta-button')
    }, undefined, '-=0.4')
    .from('.scroll-indicator', {
      opacity: 0,
      y: -20,
      duration: 0.5,
    }, '-=0.2')

    // Ensure hover handlers (dev-tweakable) are attached
    initInteractiveAnimations()

    // Glitch effect on title
    const glitchInterval = setInterval(() => {
      if (titleRef.current) {
        titleRef.current.classList.add('animate-glitch')
        setTimeout(() => {
          titleRef.current?.classList.remove('animate-glitch')
        }, 300)
      }
    }, 5000)

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-20"
    >
      {/* Hero Title - SIMPLIFIED */}
      <h1
        ref={titleRef}
        className="hero-title font-orbitron text-[clamp(3rem,12vw,10rem)] font-black text-center tracking-wider relative z-10"
        style={{ 
          background: 'linear-gradient(135deg, #00ffff, #ff00ff, #ffff00)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textShadow: '0 0 30px rgba(0, 255, 255, 0.3)',
          filter: 'drop-shadow(0 0 20px rgba(255, 0, 255, 0.2))'
        }}
      >
        NEXUS
      </h1>

      {/* Subtitle */}
      <p className="hero-subtitle font-share-tech text-[clamp(1rem,3vw,1.5rem)] mt-8 text-neon-cyan uppercase tracking-[0.5em] opacity-80">
        Where Innovation Meets Reality
      </p>

      {/* Date */}
      <p className="hero-date text-[clamp(1.2rem,4vw,2rem)] mt-4 text-neon-magenta font-bold font-rajdhani">
        MARCH 15-17, 2026
      </p>

      {/* CTA Button */}
      <button className="cta-button mt-12 px-16 py-6 font-orbitron text-xl font-bold uppercase tracking-widest bg-transparent text-neon-cyan border-2 border-neon-cyan relative overflow-hidden group hover-expand transition-all">
        <span className="relative z-10 group-hover:text-deep-purple transition-colors">
          Initialize Sequence
        </span>
        <div className="absolute inset-0 bg-neon-cyan transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
      </button>

      {/* Scroll Indicator */}
      <div className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="text-center">
          <p className="font-share-tech text-sm text-neon-cyan mb-2">SCROLL TO EXPLORE</p>
          <div className="w-0.5 h-10 bg-gradient-to-b from-neon-cyan to-transparent mx-auto" />
        </div>
      </div>
    </section>
  )
}