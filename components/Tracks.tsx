'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { popupSequence, initInteractiveAnimations } from '../lib/animations'

gsap.registerPlugin(ScrollTrigger)

const tracks = [
  {
    icon: '🤖',
    title: 'AI Hackathon',
    description: 'Build cutting-edge AI solutions in 36 hours. Compete for prizes worth $50K and mentorship from industry leaders.',
  },
  {
    icon: '🚀',
    title: 'Startup Pitch',
    description: 'Present your startup ideas to top VCs and angel investors. Win funding and accelerator opportunities.',
  },
  {
    icon: '⚡',
    title: 'Web3 Workshop',
    description: 'Dive into blockchain, DeFi, and NFTs. Hands-on sessions with experts from leading crypto companies.',
  },
  {
    icon: '🎮',
    title: 'Game Dev Arena',
    description: 'Create immersive gaming experiences using Unity and Unreal Engine. Showcase your creativity.',
  },
  {
    icon: '🔐',
    title: 'Cybersecurity CTF',
    description: 'Capture the flag competition testing your skills in ethical hacking, cryptography, and network security.',
  },
  {
    icon: '🌐',
    title: 'IoT Challenge',
    description: 'Build smart solutions connecting the physical and digital worlds. Hardware kits provided.',
  },
]

export default function Tracks() {
  const tracksRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!tracksRef.current) return

    // Section title animation
    gsap.from('.tracks-title', {
      scrollTrigger: {
        trigger: tracksRef.current,
        start: 'top 80%',
      },
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: 'back.out(1.7)',
    })

    // Cards animation - use popupSequence (uses saved settings)
    popupSequence('.track-card', {
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: tracksRef.current,
        start: 'top 70%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    })

    // Attach hover handlers
    initInteractiveAnimations()
  }, [])

  return (
    <section id="tracks" ref={tracksRef} className="py-32 bg-gradient-to-b from-transparent to-dark-purple/30">
      {/* Section Title */}
      <h2 className="tracks-title section-title font-orbitron text-[clamp(2.5rem,8vw,5rem)] font-black mb-20 text-center relative text-neon-magenta">
        EVENT TRACKS
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-neon-magenta to-transparent mt-4" />
      </h2>

      {/* Tracks Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tracks.map((track, index) => (
          <div
            key={index}
            className="track-card group relative p-8 glass border border-neon-cyan/20 hover:border-neon-cyan transition-all duration-500 overflow-hidden cursor-pointer hover-expand"
          >
            {/* Top Border Animation */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan to-neon-magenta transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

            {/* Icon */}
            <div className="text-7xl mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
              {track.icon}
            </div>

            {/* Title */}
            <h3 className="font-orbitron text-3xl font-bold mb-4 text-neon-cyan group-hover:text-neon-magenta transition-colors">
              {track.title}
            </h3>

            {/* Description */}
            <p className="font-rajdhani text-lg leading-relaxed text-white/75 group-hover:text-white/90 transition-colors">
              {track.description}
            </p>

            {/* Background Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/0 to-neon-magenta/0 group-hover:from-neon-cyan/10 group-hover:to-neon-magenta/10 transition-all duration-500 -z-10" />

            {/* Corner Accent */}
            <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-neon-cyan/20 group-hover:border-neon-cyan transition-colors" />
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-20">
        <button className="px-12 py-4 border-2 border-neon-magenta text-neon-magenta font-orbitron font-bold text-lg uppercase tracking-wider hover:bg-neon-magenta hover:text-deep-purple transition-all duration-300 hover-expand relative overflow-hidden group">
          <span className="relative z-10">View All Tracks</span>
          <div className="absolute inset-0 bg-neon-magenta transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-10" />
        </button>
      </div>
    </section>
  )
}