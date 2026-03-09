import { useEffect, useRef } from 'react'

export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const revealEl = () => el.classList.add('revealed')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          revealEl()
          observer.unobserve(el)
        }
      },
      // Lower threshold so elements in viewport on refresh are caught immediately
      { threshold: 0.05, ...options }
    )

    // Wait for first browser paint before observing,
    // so elements already in viewport are detected correctly
    const frameId = requestAnimationFrame(() => {
      observer.observe(el)
    })

    // Safety fallback: force reveal after 900ms in case
    // IntersectionObserver doesn't fire (e.g. fast refresh, hidden tab)
    const fallbackId = setTimeout(revealEl, 900)

    return () => {
      cancelAnimationFrame(frameId)
      clearTimeout(fallbackId)
      observer.disconnect()
    }
  }, [])

  return ref
}
