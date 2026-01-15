'use client'

import { useEffect } from 'react'
import Section from '@/components/Section'

export default function Book() {
  useEffect(() => {
    // Load HubSpot Meetings script (once)
    if (!document.querySelector('#hs-meetings-script')) {
      const meetingsScript = document.createElement('script')
      meetingsScript.id = 'hs-meetings-script'
      meetingsScript.src =
        'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js'
      meetingsScript.async = true
      document.body.appendChild(meetingsScript)
    }
  }, [])

  return (
    <main>
      <Section className="pt-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Free Workflow Audit
          </h1>

          <div className="text-lg text-foreground/90 mb-12 space-y-4">
            <p>
              30-minute call where we review 1–2 workflows in your business and
              identify AI automation opportunities.
            </p>
            <p>
              You’ll get a clear recommendation on next steps and whether
              automation makes sense for your situation.
            </p>
            <p className="font-medium">
              If it’s not a fit, I’ll tell you.
            </p>
          </div>

          {/* Calendar Embed */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Book your call</h2>
            <p className="text-muted mb-8">
              Pick a time that works. I’ll come prepared.
            </p>

            <div
              className="meetings-iframe-container"
              data-src="https://meetings-na2.hubspot.com/sage-summit?embed=true"
            />
          </div>
        </div>
      </Section>
    </main>
  )
}

