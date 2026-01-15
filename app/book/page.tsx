import Section from '@/components/Section'

export default function Book() {
  return (
    <main>
      <Section className="pt-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Free Workflow Audit
          </h1>
          
          <div className="text-lg text-foreground/90 mb-12 space-y-4">
            <p>
              30-minute call where we review 1–2 workflows in your business and identify AI automation opportunities.
            </p>
            <p>
              You'll get a clear recommendation on next steps and whether automation makes sense for your situation.
            </p>
            <p className="font-medium">
              If it's not a fit, we'll tell you.
            </p>
          </div>

          {/* Placeholder for form embed */}
          <div className="border-2 border-dashed border-border rounded-lg p-12 mb-8 text-center">
            <p className="text-muted mb-4">Intake Form Embed</p>
            <p className="text-sm text-muted">
              Replace this with Typeform embed code
            </p>
          </div>

          {/* Placeholder for calendar embed */}
          <div className="border-2 border-dashed border-border rounded-lg p-12 text-center">
            <p className="text-muted mb-4">Calendar Embed</p>
            <p className="text-sm text-muted">
              Replace this with Calendly embed code
            </p>
          </div>
        </div>
      </Section>
    </main>
  )
}
