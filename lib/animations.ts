import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Custom Cursor Animation
export function initCustomCursor() {
  if (typeof window === 'undefined') return

  const cursor = document.querySelector('.cursor') as HTMLElement
  const follower = document.querySelector('.cursor-follower') as HTMLElement

  if (!cursor || !follower) return

  document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1,
    })
    gsap.to(follower, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.3,
    })
  })

  // Expand cursor on interactive elements
  const interactiveElements = document.querySelectorAll('a, button, .hover-expand')
  
  interactiveElements.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      gsap.to(cursor, { scale: 1.5, duration: 0.3 })
      gsap.to(follower, { scale: 1.5, duration: 0.3 })
    })
    
    el.addEventListener('mouseleave', () => {
      gsap.to(cursor, { scale: 1, duration: 0.3 })
      gsap.to(follower, { scale: 1, duration: 0.3 })
    })
  })
}

// Fade In Animation
export function fadeIn(element: string | Element, options = {}) {
  const defaults = {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  }

  return gsap.from(element, { ...defaults, ...options })
}

// Stagger Fade In
export function staggerFadeIn(elements: string | NodeListOf<Element>, options = {}) {
  const defaults = {
    y: 80,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    ease: 'power3.out',
  }

  return gsap.from(elements, { ...defaults, ...options })
}

// Scroll Trigger Fade In
export function scrollFadeIn(element: string | Element, triggerElement: string, options = {}) {
  const defaults = {
    y: 80,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: triggerElement,
      start: 'top 70%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
    },
  }

  return gsap.from(element, { ...defaults, ...options })
}

// Text Reveal Animation (Split text into characters)
export function textReveal(element: HTMLElement, options = {}) {
  const text = element.textContent || ''
  element.innerHTML = ''

  // Split text into spans
  text.split('').forEach((char) => {
    const span = document.createElement('span')
    span.textContent = char === ' ' ? '\u00A0' : char
    span.style.display = 'inline-block'
    element.appendChild(span)
  })

  const defaults = {
    y: 120,
    opacity: 0,
    rotationX: -90,
    stagger: 0.02,
    duration: 0.8,
    ease: 'power4.out',
  }

  return gsap.from(element.children, { ...defaults, ...options })
}

// Parallax Effect
export function parallax(element: string | Element, options = {}) {
  const defaults = {
    yPercent: -30,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  }

  return gsap.to(element, { ...defaults, ...options })
}

// Scale on Scroll
export function scaleOnScroll(element: string | Element, triggerElement: string, options = {}) {
  const defaults = {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: triggerElement,
      start: 'top 70%',
      toggleActions: 'play none none reverse',
    },
  }

  return gsap.from(element, { ...defaults, ...options })
}

// Slide In from Side
export function slideIn(element: string | Element, direction: 'left' | 'right' = 'left', options = {}) {
  const defaults = {
    x: direction === 'left' ? -100 : 100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  }

  return gsap.from(element, { ...defaults, ...options })
}

// Counter Animation
export function animateCounter(element: HTMLElement, endValue: number, options = {}) {
  const defaults = {
    duration: 2,
    ease: 'power2.out',
  }

  const obj = { value: 0 }
  
  return gsap.to(obj, {
    ...defaults,
    ...options,
    value: endValue,
    onUpdate: () => {
      element.textContent = Math.floor(obj.value).toString()
    },
  })
}

// Popup Animation (configurable intensity & timing)
// intensity: number (0..2) — 0 = subtle, 1 = default, 2 = strong
import { getAnimationSettings } from './animationSettings'

export function popup(element: string | Element, options: {
  intensity?: number,
  duration?: number,
  delay?: number,
  ease?: string,
  opacityFrom?: number,
  onComplete?: () => void,
  stagger?: number,
  scrollTrigger?: any,
} = {}) {
  // Merge with saved settings
  const saved = getAnimationSettings()
  const intensity = options.intensity ?? saved.intensity ?? 1
  const fromScale = Math.max(0, 1 - 0.5 * intensity) // intensity 1 -> scale 0.5
  const defaults = {
    scale: fromScale,
    opacity: options.opacityFrom ?? 0,
    duration: options.duration ?? saved.duration ?? 0.6,
    delay: options.delay ?? 0,
    ease: options.ease ?? 'back.out(1.7)',
    stagger: options.stagger,
    onComplete: options.onComplete,
    scrollTrigger: options.scrollTrigger,
  }

  if (options.stagger) {
    return gsap.from(element, { ...defaults, stagger: options.stagger })
  }
  return gsap.from(element, defaults)
}

// Popup sequence helper for NodeList/arrays
export function popupSequence(elements: string | NodeListOf<Element>, options: {
  intensity?: number,
  duration?: number,
  stagger?: number,
  ease?: string,
  scrollTrigger?: any,
} = {}) {
  const saved = getAnimationSettings()
  const defaults = {
    intensity: options.intensity ?? saved.intensity ?? 1,
    duration: options.duration ?? saved.duration ?? 0.6,
    stagger: options.stagger ?? saved.stagger ?? 0.08,
    ease: options.ease ?? 'back.out(1.7)',
    scrollTrigger: options.scrollTrigger,
  }
  const fromScale = Math.max(0, 1 - 0.5 * defaults.intensity)
  return gsap.from(elements, {
    scale: fromScale,
    opacity: 0,
    duration: defaults.duration,
    stagger: defaults.stagger,
    ease: defaults.ease,
    scrollTrigger: defaults.scrollTrigger,
  })
}

// Initialize interactive animations (hover effects)
export function initInteractiveAnimations() {
  if (typeof window === 'undefined') return
  const settings = getAnimationSettings()

  // Hover expand: subtle scale on hover using current settings
  const attachHover = (el: Element) => {
    let hoverTween: gsap.core.Tween | null = null
    el.addEventListener('mouseenter', () => {
      hoverTween?.kill()
      hoverTween = gsap.to(el as HTMLElement, {
        scale: 1 + 0.08 * settings.intensity,
        duration: Math.max(0.12, settings.duration / 3),
        ease: 'power2.out',
      })
    })
    el.addEventListener('mouseleave', () => {
      hoverTween?.kill()
      gsap.to(el as HTMLElement, { scale: 1, duration: 0.2, ease: 'power2.inOut' })
    })
  }

  // Attach to existing .hover-expand elements
  document.querySelectorAll('.hover-expand').forEach(attachHover)

  // Listen for future changes (simple approach)
  window.addEventListener('animationSettingsChanged', (e: any) => {
    // Reattach to ensure new settings apply
    document.querySelectorAll('.hover-expand').forEach((el) => {
      // remove and re-add by replacing node listeners (quick and simple)
      attachHover(el)
    })
  })
}

// Glitch Effect
export function glitchEffect(element: string | Element) {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 5 })
  
  tl.to(element, {
    duration: 0.1,
    x: -2,
    y: 2,
    ease: 'none',
  })
  .to(element, {
    duration: 0.1,
    x: 2,
    y: -2,
    ease: 'none',
  })
  .to(element, {
    duration: 0.1,
    x: -2,
    y: -2,
    ease: 'none',
  })
  .to(element, {
    duration: 0.1,
    x: 0,
    y: 0,
    ease: 'none',
  })

  return tl
}



// Export GSAP and ScrollTrigger for direct use
export { gsap, ScrollTrigger }