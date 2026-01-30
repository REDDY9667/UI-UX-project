'use client'

import { useEffect } from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Tracks from '@/components/Tracks'
import Timeline from '@/components/Timeline'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { initSmoothScroll } from '@/lib/lenis'
import { initCustomCursor } from '@/lib/animations'

export default function Home() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = initSmoothScroll()

    // Initialize custom cursor
    initCustomCursor()

    // Cleanup
    return () => {
      lenis?.destroy()
    }
  }, [])

  return (
    <>
      {/* Animated Background Grid */}
      <div className="grid-bg" />
      
      {/* Custom Cursor Elements */}
      <div className="cursor" />
      <div className="cursor-follower" />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Tracks />
        <Timeline />
        <Footer />
      </main>
    </>
  )
}