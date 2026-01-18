'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface FluidGlassProps {
  children: React.ReactNode
  className?: string
  blur?: number
  opacity?: number
}

export default function FluidGlass({
  children,
  className = '',
  blur = 20,
  opacity = 0.1,
}: FluidGlassProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        setMousePosition({ x, y })
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  return (
    <motion.div
      ref={containerRef}
      className={`relative ${className}`}
      style={{
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        background: `linear-gradient(135deg, rgba(255, 255, 255, ${opacity}) 0%, rgba(255, 255, 255, ${opacity * 0.5}) 100%)`,
        border: '1px solid rgba(255, 255, 255, 0.2)',
      }}
      animate={{
        background: [
          `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 255, 255, ${opacity * 1.5}), rgba(255, 255, 255, ${opacity * 0.3}))`,
        ],
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Fluid distortion effect */}
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(14, 165, 233, 0.1), transparent 50%)`,
          filter: 'blur(40px)',
          opacity: 0.5,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
