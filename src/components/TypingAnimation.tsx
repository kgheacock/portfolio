'use client'
import { useState, useEffect } from 'react'

const roles = ['Full Stack Engineer', 'TypeScript Expert', 'Open Source Contributor', 'API Architect']

export default function TypingAnimation() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayed.length < current.length) {
          setDisplayed(current.slice(0, displayed.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(current.slice(0, displayed.length - 1))
        } else {
          setIsDeleting(false)
          setRoleIndex((i) => (i + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)
    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  return (
    <span className="text-terminal-green">
      {displayed}
      <span className="animate-blink inline-block ml-0.5 text-terminal-green">█</span>
    </span>
  )
}
