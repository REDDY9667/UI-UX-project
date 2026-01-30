'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { animateCounter } from '@/lib/animations'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null)
  const stat1Ref = useRef<HTMLDivElement>(null)
  const stat2Ref = useRef<HTMLDivElement>(null)
  const stat3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!aboutRef.current) return

    // Content animation
    gsap.from('.about-content', {
      scrollTrigger: {
        trigger: aboutRef.current,
        start: 'top 70%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
    })

    // Stats animation
    gsap.from('.stats-box', {
      scrollTrigger: {
        trigger: aboutRef.current,
        start: 'top 70%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
      scale: 0,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'back.out(1.7)',
    })

    // Animate counters when in view
    ScrollTrigger.create({
      trigger: aboutRef.current,
      start: 'top 70%',
      onEnter: () => {
        if (stat1Ref.current) {
          animateCounter(stat1Ref.current, 1000, { duration: 2 })
        }
        if (stat2Ref.current) {
          const elem = stat2Ref.current
          const obj = { value: 0 }
          gsap.to(obj, {
            value: 100,
            duration: 2,
            onUpdate: () => {
              elem.textContent = `$${Math.floor(obj.value)}K`
            },
          })
        }
        if (stat3Ref.current) {
          animateCounter(stat3Ref.current, 50, { duration: 2 })
        }
      },
    })
  }, [])

  return (
    <section id="about" ref={aboutRef} className="py-32">
      {/* Section Title */}
      <h2 className="section-title font-orbitron text-[clamp(2.5rem,8vw,5rem)] font-black mb-16 text-center relative text-neon-cyan">
        ABOUT THE EVENT
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent mt-4" />
      </h2>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6">
        {/* Left: Text Content */}
        <div className="about-content space-y-8">
          <p className="text-2xl leading-relaxed text-white/85 font-rajdhani">
            NEXUS 2026 is where the brightest minds converge to shape the future.
            A 48-hour journey through innovation, collaboration, and groundbreaking technology.
          </p>
          <p className="text-xl leading-relaxed text-white/70 font-rajdhani">
            Join 1000+ developers, designers, and entrepreneurs from across the globe.
            Experience workshops from industry titans, compete in cutting-edge challenges,
            and build solutions that matter.
          </p>
          <div className="flex items-center space-x-4 pt-4">
            <div className="h-1 w-20 bg-gradient-to-r from-neon-cyan to-neon-magenta" />
            <p className="font-share-tech text-neon-cyan text-sm">EST. 2024</p>
          </div>
        </div>

        {/* Right: Stats Visualization */}
        <div className="about-visual relative h-[500px]">
          {/* Stat Box 1 */}
          <div className="stats-box absolute top-0 left-0 p-8 glass border-neon-cyan hover:border-neon-magenta transition-all hover-lift cursor-pointer hover-expand">
            <div ref={stat1Ref} className="stat-number font-orbitron text-6xl font-black text-neon-cyan mb-2">
              0
            </div>
            <div className="stat-label text-sm uppercase tracking-widest opacity-70 font-rajdhani">
              Participants
            </div>
          </div>

          {/* Stat Box 2 */}
          <div className="stats-box absolute top-[150px] right-0 p-8 glass border-neon-magenta hover:border-neon-yellow transition-all hover-lift cursor-pointer hover-expand">
            <div ref={stat2Ref} className="stat-number font-orbitron text-6xl font-black text-neon-magenta mb-2">
              $0
            </div>
            <div className="stat-label text-sm uppercase tracking-widest opacity-70 font-rajdhani">
              Prize Pool
            </div>
          </div>

          {/* Stat Box 3 */}
          <div className="stats-box absolute bottom-0 left-12 p-8 glass border-neon-yellow hover:border-neon-cyan transition-all hover-lift cursor-pointer hover-expand">
            <div ref={stat3Ref} className="stat-number font-orbitron text-6xl font-black text-neon-yellow mb-2">
              0
            </div>
            <div className="stat-label text-sm uppercase tracking-widest opacity-70 font-rajdhani">
              Mentors
            </div>
          </div>

          {/* Background Decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-neon-magenta/5 rounded-lg blur-3xl -z-10" />
        </div>
      </div>
    </section>
  )
}