import { useEffect, useRef, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useParallax(speed = 0.3) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const img = el.querySelector('img')
    if (!img) return
    const tween = gsap.to(img, {
      y: () => speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
    return () => tween.scrollTrigger?.kill()
  }, [speed])
  return ref
}

export function useFadeIn(delay = 0) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    gsap.fromTo(el,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0,
        duration: 1.1,
        delay,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      }
    )
  }, [delay])
  return ref
}

export function useClipReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    gsap.fromTo(el,
      { clipPath: 'inset(0 0 100% 0)' },
      {
        clipPath: 'inset(0 0 0% 0)',
        duration: 1.4,
        ease: 'power4.inOut',
        scrollTrigger: { trigger: el, start: 'top 80%', once: true },
      }
    )
  }, [])
  return ref
}

export function useStaggerReveal() {
  const ref = useRef(null)
  const initRef = useRef(false)

  const init = useCallback(() => {
    const el = ref.current
    if (!el || initRef.current) return
    initRef.current = true
    const items = el.querySelectorAll('[data-stagger]')
    if (!items.length) return
    gsap.fromTo(items,
      { opacity: 0, y: 70, rotation: 1.5 },
      {
        opacity: 1, y: 0, rotation: 0,
        duration: 1,
        stagger: { each: 0.12, ease: 'power2.in' },
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      }
    )
  }, [])

  useEffect(() => { init() }, [init])
  return ref
}

export default function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const els = ref.current?.querySelectorAll('[data-reveal]')
    if (!els?.length) return
    els.forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0,
          duration: 1.1,
          delay: i * 0.06,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        }
      )
    })
  }, [])
  return ref
}
