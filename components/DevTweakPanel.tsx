'use client'

import { useEffect, useState } from 'react'
import { getAnimationSettings, setAnimationSettings } from '../lib/animationSettings'

export default function DevTweakPanel() {
  // Only mount in dev
  if (process.env.NODE_ENV !== 'development') return null

  const [settings, setSettings] = useState(getAnimationSettings())

  useEffect(() => {
    const handler = (e: any) => setSettings(e.detail || getAnimationSettings())
    window.addEventListener('animationSettingsChanged', handler)
    return () => window.removeEventListener('animationSettingsChanged', handler)
  }, [])

  const update = (patch: Partial<typeof settings>) => {
    setAnimationSettings(patch)
    setSettings((s) => ({ ...s, ...patch }))
  }

  const reset = () => {
    setAnimationSettings({ intensity: 1, duration: 0.6, stagger: 0.08 })
    setSettings(getAnimationSettings())
  }

  return (
    <div className="fixed right-4 bottom-4 z-50 w-80 p-4 bg-deep-purple/90 border border-neon-cyan/20 rounded-md text-white text-sm shadow-lg">
      <div className="flex items-center justify-between mb-3">
        <strong>Animation Tweaks</strong>
        <button onClick={reset} className="text-xs text-neon-cyan underline">Reset</button>
      </div>

      <label className="block mb-2">Intensity: {settings.intensity.toFixed(2)}</label>
      <input
        className="w-full mb-3"
        type="range"
        min={0}
        max={2}
        step={0.01}
        value={settings.intensity}
        onChange={(e) => update({ intensity: Number(e.target.value) })}
      />

      <label className="block mb-2">Duration: {settings.duration.toFixed(2)}s</label>
      <input
        className="w-full mb-3"
        type="range"
        min={0.1}
        max={2}
        step={0.01}
        value={settings.duration}
        onChange={(e) => update({ duration: Number(e.target.value) })}
      />

      <label className="block mb-2">Stagger: {settings.stagger.toFixed(2)}s</label>
      <input
        className="w-full"
        type="range"
        min={0}
        max={0.5}
        step={0.01}
        value={settings.stagger}
        onChange={(e) => update({ stagger: Number(e.target.value) })}
      />

      <p className="mt-3 text-xs text-white/70">Dev-only: tweak intensity, duration, and stagger live.</p>
    </div>
  )
}
