'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border border-border rounded-lg">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-foreground/5 transition-colors"
          >
            <span className="font-medium">{item.question}</span>
            <span className="text-xl">{openIndex === index ? '−' : '+'}</span>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4 text-foreground/90">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
