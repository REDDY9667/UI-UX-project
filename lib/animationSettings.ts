export type AnimationSettings = {
  intensity: number // 0..2
  duration: number // seconds
  stagger: number // seconds
}

export const DEFAULT_SETTINGS: AnimationSettings = {
  intensity: 1,
  duration: 0.6,
  stagger: 0.08,
}

const KEY = 'animationSettings'

export function getAnimationSettings(): AnimationSettings {
  if (typeof window === 'undefined') return DEFAULT_SETTINGS
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return DEFAULT_SETTINGS
    const parsed = JSON.parse(raw)
    return { ...DEFAULT_SETTINGS, ...parsed }
  } catch (e) {
    return DEFAULT_SETTINGS
  }
}

export function setAnimationSettings(settings: Partial<AnimationSettings>) {
  if (typeof window === 'undefined') return
  const current = getAnimationSettings()
  const next = { ...current, ...settings }
  localStorage.setItem(KEY, JSON.stringify(next))
  // Notify listeners
  try {
    window.dispatchEvent(new CustomEvent('animationSettingsChanged', { detail: next }))
  } catch (e) {
    // ignore
  }
}
