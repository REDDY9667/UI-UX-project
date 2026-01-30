'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!footerRef.current) return

    // Footer items animation
    gsap.from('.footer-item', {
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top 80%',
      },
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power3.out',
    })
  }, [])

  const socialLinks = [
    { name: 'Twitter', icon: '𝕏', url: '#' },
    { name: 'LinkedIn', icon: 'IN', url: '#' },
    { name: 'Instagram', icon: 'IG', url: '#' },
    { name: 'Discord', icon: 'DC', url: '#' },
    { name: 'GitHub', icon: 'GH', url: '#' },
  ]

  return (
    <footer
      ref={footerRef}
      className="relative py-16 bg-gradient-to-t from-dark-purple/95 to-transparent border-t border-neon-cyan/20"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="footer-item space-y-4">
            <h3 className="font-orbitron text-3xl font-bold text-gradient mb-4">NEXUS</h3>
            <p className="font-rajdhani text-white/70 leading-relaxed">
              Where innovation meets reality. Join us for the most transformative tech event of 2026.
            </p>
            <div className="flex items-center space-x-3">
              <div className="h-1 w-12 bg-gradient-to-r from-neon-cyan to-neon-magenta" />
              <span className="font-share-tech text-neon-cyan text-xs">EST. 2024</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-item">
            <h4 className="font-orbitron text-xl font-bold text-neon-cyan mb-6">Quick Links</h4>
            <ul className="space-y-3 font-rajdhani">
              {['About', 'Tracks', 'Schedule', 'Sponsors', 'FAQ', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/70 hover:text-neon-cyan transition-colors cursor-pointer hover-expand inline-block"
                  >
                    → {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-item">
            <h4 className="font-orbitron text-xl font-bold text-neon-magenta mb-6">Get In Touch</h4>
            <div className="space-y-4 font-rajdhani text-white/70">
              <p className="flex items-center space-x-2">
                <span className="text-neon-cyan">📧</span>
                <a href="mailto:contact@nexusfest.tech" className="hover:text-neon-cyan transition-colors cursor-pointer hover-expand">
                  contact@nexusfest.tech
                </a>
              </p>
              <p className="flex items-center space-x-2">
                <span className="text-neon-cyan">📱</span>
                <span>+91 XXX XXX XXXX</span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="text-neon-cyan">📍</span>
                <span>Mumbai, India</span>
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="footer-item border-t border-white/10 pt-8 mb-8">
          <h4 className="font-orbitron text-xl font-bold text-center text-neon-cyan mb-6">
            Connect With Us
          </h4>
          <div className="flex justify-center items-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="w-12 h-12 flex items-center justify-center border border-neon-cyan/30 hover:border-neon-magenta text-neon-cyan hover:text-neon-magenta transition-all duration-300 font-bold text-lg cursor-pointer hover-expand hover:scale-125 hover:rotate-12"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-item text-center border-t border-white/10 pt-8">
          <p className="font-share-tech text-white/50 text-sm mb-2">
            © 2026 NEXUS TECH FEST | REDEFINING THE IMPOSSIBLE
          </p>
          <p className="font-rajdhani text-white/40 text-xs">
            Designed with 💙 for the future of innovation
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-neon-magenta/5 rounded-full blur-3xl -z-10" />
        <div className="absolute top-0 left-0 w-64 h-64 bg-neon-cyan/5 rounded-full blur-3xl -z-10" />
      </div>
    </footer>
  )
}