'use client'
import { useEffect, useRef } from 'react'
import styles from "./Cursor.module.scss"

export default function ShadowCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
      cursorRef.current!.style.opacity = '1'
    }

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.9
      pos.current.y += (mouse.current.y - pos.current.y) * 0.9
      cursorRef.current!.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`
      requestAnimationFrame(animate)
    }

    animate()
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return <div ref={cursorRef} className={styles.cursorShadow} />
}
