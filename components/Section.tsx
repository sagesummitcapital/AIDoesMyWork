import React from 'react'

interface SectionProps {
  children: React.ReactNode
  className?: string
}

export default function Section({ children, className = '' }: SectionProps) {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {children}
      </div>
    </section>
  )
}
