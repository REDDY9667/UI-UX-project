<<<<<<< HEAD
# 🚀 NEXUS 2026 - Tech Fest Website

A premium, production-grade tech fest website built with **Next.js 14**, **GSAP**, **Tailwind CSS**, and **Lenis** smooth scroll. Features cinematic animations, modern UI/UX, and responsive design.

![Tech Stack](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?style=for-the-badge&logo=greensock)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)

---

## 📋 Table of Contents

1. [Features](#-features)
2. [Tech Stack](#-tech-stack)
3. [Installation](#-installation--setup)
4. [Project Structure](#-project-structure)
5. [Step-by-Step Guide](#-step-by-step-development-guide)
6. [Components Explained](#-components-explained)
7. [Animation Patterns](#-animation-patterns)
8. [Deployment](#-deployment)
9. [Customization](#-customization)
10. [Troubleshooting](#-troubleshooting)

---

## ✨ Features

### 🎨 Design & UI
- **Cyberpunk Aesthetic**: Neon colors, dark theme, futuristic vibes
- **Glassmorphism**: Frosted glass cards with backdrop blur
- **Custom Cursor**: Dual-cursor system with trail effect
- **Animated Grid**: Perspective grid background
- **Responsive**: Mobile-first design with breakpoints

### ⚡ Animations (GSAP)
- **Text Reveal**: Character-by-character animation
- **Scroll Triggers**: Section reveals on scroll
- **Stagger Effects**: Sequential card animations
- **Counter Animations**: Animated statistics
- **Parallax**: Smooth scroll-based movement
- **Glitch Effects**: Periodic glitches on hero title

### 🛠 Technical
- **Next.js 14**: App Router, Server Components
- **TypeScript**: Type-safe development
- **Lenis**: Buttery smooth scrolling
- **Tailwind CSS**: Utility-first styling
- **GSAP ScrollTrigger**: Advanced scroll animations
- **SEO Optimized**: Meta tags, semantic HTML

---

## 🛠 Tech Stack

| Purpose | Technology |
|---------|-----------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Animations** | GSAP + ScrollTrigger |
| **Smooth Scroll** | Lenis |
| **Fonts** | Google Fonts (Orbitron, Rajdhani, Share Tech Mono) |
| **Deployment** | Vercel (recommended) |

---

## 🚀 Installation & Setup

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm** or **yarn** or **pnpm**

### Step 1: Clone or Download

```bash
# If you have this as a Git repository
git clone <your-repo-url>
cd nexus-techfest

# OR just extract the folder and navigate to it
cd nexus-techfest
```

### Step 2: Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Step 3: Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 4: Build for Production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
nexus-techfest/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page (assembles components)
│   └── globals.css         # Global styles + Tailwind
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section with animations
│   ├── About.tsx           # About section with stats
│   ├── Tracks.tsx          # Event tracks grid
│   ├── Timeline.tsx        # Schedule timeline
│   └── Footer.tsx          # Footer with links
├── lib/
│   ├── lenis.ts            # Lenis smooth scroll setup
│   └── animations.ts       # GSAP utility functions
├── public/
│   └── images/             # Static images (if needed)
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS config
├── next.config.js          # Next.js config
└── README.md              # This file
```

---

## 📚 Step-by-Step Development Guide

### Phase 1: Setup (15 minutes)

1. **Install Node.js** (if not already installed)
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify: `node --version` (should be v18+)

2. **Create Project Structure**
   - All files are already created in the correct structure
   - Just run `npm install` to get dependencies

3. **Understand the Stack**
   - **Next.js**: React framework for production
   - **GSAP**: Animation library (better than CSS for complex animations)
   - **Lenis**: Smooth scroll library
   - **Tailwind**: Utility-first CSS framework

### Phase 2: Core Concepts (30 minutes)

#### Understanding GSAP Animations

**Basic GSAP Pattern:**
```typescript
gsap.from(element, {
  y: 100,        // Start 100px below
  opacity: 0,    // Start invisible
  duration: 1,   // Animation takes 1 second
  ease: "power3.out"  // Easing function
})
```

**ScrollTrigger Pattern:**
```typescript
gsap.from(element, {
  scrollTrigger: {
    trigger: element,      // Element to watch
    start: "top 70%",     // When top hits 70% of viewport
    toggleActions: "play none none reverse"
  },
  y: 80,
  opacity: 0
})
```

**Stagger (Sequential) Pattern:**
```typescript
gsap.from(".cards", {
  y: 100,
  opacity: 0,
  stagger: 0.2,  // 0.2s delay between each
  duration: 1
})
```

#### Understanding Lenis Smooth Scroll

Lenis provides buttery smooth scrolling by:
1. Intercepting native scroll
2. Applying easing functions
3. Using requestAnimationFrame for 60fps

**How it's initialized** (in `lib/lenis.ts`):
```typescript
const lenis = new Lenis({
  duration: 1.2,  // Scroll duration
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true
})
```

### Phase 3: Building Components (2-3 hours)

#### Component 1: Hero Section
**File**: `components/Hero.tsx`

**What it does:**
- Full-screen hero with animated title
- Character-by-character text reveal
- Floating particles
- CTA button with hover effect

**Key animations:**
1. **Text Reveal**: Splits text into `<span>` elements
2. **Particle System**: 50 floating particles
3. **Timeline**: Sequential animations
4. **Glitch Effect**: Periodic distortion

**How to customize:**
- Change title: Edit the `<h1>` content
- Adjust colors: Modify Tailwind classes
- Speed up/down: Change GSAP `duration` values

#### Component 2: About Section
**File**: `components/About.tsx`

**What it does:**
- Split layout (text + stats)
- Animated statistics counters
- Glassmorphism cards

**Key animations:**
1. **Content Slide**: Slides from left
2. **Stats Pop**: Scale from 0 with bounce
3. **Counter Animation**: Counts from 0 to target value

**How to customize:**
- Update stats: Change values in `animateCounter`
- Edit content: Modify the `<p>` text
- Add more stats: Duplicate `.stats-box` divs

#### Component 3: Tracks Section
**File**: `components/Tracks.tsx`

**What it does:**
- Grid of event cards
- Hover animations
- Icon + title + description per card

**Key animations:**
1. **Cards Rise**: All cards slide up on scroll
2. **Hover Effects**: Transform, border, glow
3. **Top Border Reveal**: Gradient line on hover

**How to customize:**
- Add/remove tracks: Edit the `tracks` array
- Change icons: Replace emoji icons
- Grid layout: Modify grid classes

#### Component 4: Timeline Section
**File**: `components/Timeline.tsx`

**What it does:**
- Vertical timeline with alternating items
- Central line with dots
- Schedule events

**Key animations:**
1. **Line Reveal**: Scales from top
2. **Items Slide**: Alternates left/right
3. **Dots Pop**: Scale animation

**How to customize:**
- Update schedule: Edit the `schedule` array
- Change layout: Modify flex direction
- Adjust spacing: Change margin values

#### Component 5: Footer
**File**: `components/Footer.tsx`

**What it does:**
- Contact info
- Social links
- Quick navigation

**Key animations:**
1. **Stagger In**: Items fade in sequentially
2. **Social Hover**: Scale + rotate effect

### Phase 4: Animation Utilities (1 hour)

**File**: `lib/animations.ts`

This file contains reusable animation functions:

1. **fadeIn()**: Basic fade animation
2. **staggerFadeIn()**: Sequential fade for multiple elements
3. **scrollFadeIn()**: Scroll-triggered fade
4. **textReveal()**: Character-level text animation
5. **parallax()**: Scroll-based parallax
6. **scaleOnScroll()**: Scale animation on scroll
7. **animateCounter()**: Number counting animation

**How to use:**
```typescript
import { fadeIn, textReveal } from '@/lib/animations'

fadeIn('.my-element', { duration: 1.5 })
textReveal(titleElement, { stagger: 0.03 })
```

### Phase 5: Styling (1 hour)

**File**: `app/globals.css`

**Custom Styles Include:**
- Custom cursor styles
- Animated grid background
- Glassmorphism utilities
- Neon glow effects
- Scrollbar styling

**Tailwind Config** (`tailwind.config.js`):
- Custom colors (neon-cyan, neon-magenta, etc.)
- Custom fonts
- Custom animations

### Phase 6: Testing & Optimization (30 minutes)

1. **Test Responsiveness**
   - Open DevTools (F12)
   - Toggle device toolbar
   - Test on different screen sizes

2. **Test Animations**
   - Scroll through entire page
   - Check hover effects
   - Verify smooth scrolling

3. **Performance Check**
   - Run Lighthouse in DevTools
   - Aim for 80+ score
   - Check for console errors

---

## 🎯 Components Explained

### 1. Navbar (`components/Navbar.tsx`)
- Sticky navigation
- Smooth scroll to sections
- Background blur on scroll
- Register CTA button

### 2. Hero (`components/Hero.tsx`)
- Full viewport height
- Character-reveal animation
- Floating particles
- CTA with hover effect
- Glitch effect

### 3. About (`components/About.tsx`)
- Two-column layout
- Animated stats counters
- Glassmorphism cards
- Scroll-triggered reveal

### 4. Tracks (`components/Tracks.tsx`)
- Responsive grid
- 6 event cards
- Hover lift effect
- Border animations

### 5. Timeline (`components/Timeline.tsx`)
- Vertical timeline
- 9 schedule items
- Alternating layout
- Central dots

### 6. Footer (`components/Footer.tsx`)
- Contact info
- Social links
- Quick links
- Decorative elements

---

## 🎬 Animation Patterns

### Pattern 1: On Load Animation
```typescript
useEffect(() => {
  gsap.from('.element', {
    y: 100,
    opacity: 0,
    duration: 1
  })
}, [])
```

### Pattern 2: Scroll Trigger
```typescript
gsap.from('.element', {
  scrollTrigger: {
    trigger: '.section',
    start: 'top 70%',
  },
  y: 80,
  opacity: 0
})
```

### Pattern 3: Stagger
```typescript
gsap.from('.items', {
  y: 100,
  opacity: 0,
  stagger: 0.2
})
```

### Pattern 4: Timeline
```typescript
const tl = gsap.timeline()
tl.from('.first', { opacity: 0 })
  .from('.second', { y: 50 }, '-=0.5')
  .from('.third', { scale: 0 })
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo>
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repo
   - Click "Deploy"

3. **Done!**
   - Your site will be live at `your-project.vercel.app`
   - Auto-deploys on every git push

### Alternative: Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

---

## 🎨 Customization Guide

### Change Colors

**Edit**: `tailwind.config.js`
```javascript
colors: {
  'neon-cyan': '#YOUR_COLOR',
  'neon-magenta': '#YOUR_COLOR',
  // ...
}
```

### Change Fonts

**Edit**: `app/globals.css` (import statement)
```css
@import url('https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap');
```

**Edit**: `tailwind.config.js`
```javascript
fontFamily: {
  orbitron: ['YOUR_FONT', 'sans-serif'],
}
```

### Add New Section

1. Create component: `components/MySection.tsx`
2. Add GSAP animations
3. Import in `app/page.tsx`
4. Add to navigation

### Modify Animations

**Speed**: Change `duration` values
```typescript
duration: 2  // Slower
duration: 0.5  // Faster
```

**Easing**: Change `ease` values
```typescript
ease: 'power4.out'  // Sharp deceleration
ease: 'back.out(1.7)'  // Bounce effect
ease: 'elastic.out(1, 0.5)'  // Elastic
```

---

## 🐛 Troubleshooting

### Issue: "Cannot find module '@/...'"
**Solution**: Restart development server
```bash
# Kill the server (Ctrl+C)
npm run dev
```

### Issue: Animations not working
**Solution**: Check GSAP import
```typescript
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
```

### Issue: Smooth scroll not working
**Solution**: Ensure Lenis is initialized
- Check `app/page.tsx` has `initSmoothScroll()`
- Verify no console errors

### Issue: Build errors
**Solution**: Check TypeScript types
```bash
npm run build  # See specific errors
```

### Issue: Custom cursor not showing
**Solution**: Check CSS
- Ensure `cursor: none` on body
- Verify `.cursor` elements exist in DOM

---

## 📝 License

MIT License - Feel free to use for personal/commercial projects.

---

## 🤝 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open pull request

---

## 📧 Support

- **Issues**: Open GitHub issue
- **Questions**: Email contact@nexusfest.tech
- **Documentation**: This README

---

## 🎓 Learning Resources

### GSAP
- [GSAP Docs](https://greensock.com/docs/)
- [GSAP ScrollTrigger](https://greensock.com/scrolltrigger/)

### Next.js
- [Next.js Docs](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

### Tailwind CSS
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Tailwind UI](https://tailwindui.com/)

---

## 🎯 Project Checklist

- ✅ Next.js 14 setup
- ✅ TypeScript configuration
- ✅ Tailwind CSS integration
- ✅ GSAP animations
- ✅ Lenis smooth scroll
- ✅ Custom cursor
- ✅ Responsive design
- ✅ SEO optimization
- ✅ Performance optimized
- ✅ Production ready

---

**Built with 💙 for NEXUS 2026**

*"Where Innovation Meets Reality"*
=======
# UI-UX-project
