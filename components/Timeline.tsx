'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const schedule = [
  { time: '09:00 AM', event: 'Registration & Check-in', details: 'Get your badges and swag' },
  { time: '10:30 AM', event: 'Opening Ceremony', details: 'Keynote by industry leaders' },
  { time: '12:00 PM', event: 'Hackathon Begins', details: 'Let the coding begin!' },
  { time: '02:00 PM', event: 'Workshop Sessions', details: 'Learn from experts' },
  { time: '06:00 PM', event: 'Networking Dinner', details: 'Connect with peers & mentors' },
  { time: '11:00 PM', event: 'Midnight Checkpoint', details: 'Progress review & support' },
  { time: '09:00 AM', event: 'Final Submissions', details: 'Deadline for all projects' },
  { time: '02:00 PM', event: 'Demo & Judging', details: 'Showcase your innovations' },
  { time: '05:00 PM', event: 'Awards Ceremony', details: 'Winners announced!' },
]

export default function Timeline() {
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!timelineRef.current) return

    // Title animation
    gsap.from('.timeline-title', {
      scrollTrigger: {
        trigger: timelineRef.current,
        start: 'top 80%',
      },
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: 'back.out(1.7)',
    })

    // Timeline line animation
    gsap.from('.timeline-line', {
      scrollTrigger: {
        trigger: timelineRef.current,
        start: 'top 70%',
      },
      scaleY: 0,
      transformOrigin: 'top',
      duration: 1.5,
      ease: 'power3.out',
    })

    // Timeline items animation
    gsap.from('.timeline-item', {
      scrollTrigger: {
        trigger: timelineRef.current,
        start: 'top 70%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
      x: (index) => (index % 2 === 0 ? -100 : 100),
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
    })

    // Dots animation
    gsap.from('.timeline-dot', {
      scrollTrigger: {
        trigger: timelineRef.current,
        start: 'top 70%',
      },
      scale: 0,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      ease: 'back.out(2)',
    })
  }, [])

  return (
    <section id="timeline" ref={timelineRef} className="py-32">
      {/* Section Title */}
      <h2 className="timeline-title section-title font-orbitron text-[clamp(2.5rem,8vw,5rem)] font-black mb-20 text-center relative text-neon-yellow">
        SCHEDULE
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-neon-yellow to-transparent mt-4" />
      </h2>

      {/* Timeline Container */}
      <div className="max-w-5xl mx-auto px-6 relative">
        {/* Central Vertical Line */}
        <div className="timeline-line absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-neon-cyan to-transparent hidden md:block" />

        {/* Timeline Items */}
        <div className="space-y-16">
          {schedule.map((item, index) => (
            <div
              key={index}
              className={`timeline-item flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-col md:space-x-0 space-y-4 md:space-y-0`}
            >
              {/* Content Box */}
              <div
                className={`timeline-content w-full md:w-[45%] p-6 glass border border-neon-cyan/30 hover:border-neon-cyan transition-all duration-300 relative group cursor-pointer hover-expand ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}
              >
                {/* Time */}
                <div className="timeline-time font-orbitron text-2xl font-bold text-neon-magenta mb-3">
                  {item.time}
                </div>

                {/* Event Name */}
                <div className="timeline-event font-rajdhani text-xl font-semibold mb-2 group-hover:text-neon-cyan transition-colors">
                  {item.event}
                </div>

                {/* Details */}
                <div className="text-white/60 font-rajdhani group-hover:text-white/80 transition-colors">
                  {item.details}
                </div>

                {/* Corner Decoration */}
                <div
                  className={`absolute top-0 w-12 h-12 border-t-2 border-neon-cyan/20 group-hover:border-neon-cyan transition-colors ${
                    index % 2 === 0 ? 'right-0 border-r-2' : 'left-0 border-l-2'
                  }`}
                />
              </div>

              {/* Central Dot */}
              <div className="timeline-dot hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-neon-cyan rounded-full border-4 border-deep-purple shadow-[0_0_20px_rgba(0,255,255,0.8)] z-10" />
            </div>
          ))}
        </div>

        {/* Mobile Timeline Line */}
        <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-neon-cyan to-transparent" />
      </div>

      {/* Download Schedule CTA */}
      <div className="text-center mt-20">
        <button className="px-12 py-4 border-2 border-neon-yellow text-neon-yellow font-orbitron font-bold text-lg uppercase tracking-wider hover:bg-neon-yellow hover:text-deep-purple transition-all duration-300 hover-expand relative overflow-hidden group">
          <span className="relative z-10">Download Full Schedule</span>
          <div className="absolute inset-0 bg-neon-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-10" />
        </button>
      </div>
    </section>
  )
}