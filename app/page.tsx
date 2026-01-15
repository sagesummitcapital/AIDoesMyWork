import Section from '@/components/Section'
import CTAButton from '@/components/CTAButton'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Section className="pt-24 md:pt-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Manual work out. AI in.
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8">
            We implement AI into real business workflows so teams stop doing repetitive work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton href="/book">
              Free Workflow Audit
            </CTAButton>
            <CTAButton href="/workflows" variant="secondary">
              See workflow examples
            </CTAButton>
          </div>
        </div>
      </Section>

      {/* What We Do */}
      <Section>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">What we do</h2>
        <div className="max-w-3xl text-lg text-foreground/90 space-y-4">
          <p>
            We identify manual, repetitive workflows in your business. Then we design and implement AI-powered automation that fits your existing processes.
          </p>
          <p>
            Everything we build deploys directly into the client's existing tools. No new platforms to learn, no workflow disruption.
          </p>
        </div>
      </Section>

      {/* Common Workflows */}
      <Section className="bg-foreground/5">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Common workflows we automate
        </h2>
        <div className="max-w-3xl">
          <ul className="space-y-3 text-lg">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Lead intake and follow-ups</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Customer support triage and drafting</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Finance operations (invoices, reporting)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Internal admin and requests</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Weekly and monthly reporting</span>
            </li>
          </ul>
        </div>
      </Section>

      {/* Outcomes */}
      <Section>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Outcomes</h2>
        <div className="max-w-3xl">
          <ul className="space-y-3 text-lg">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>5–20 hours/week of manual work removed</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Faster response times</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Fewer errors</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Consistent processes</span>
            </li>
          </ul>
        </div>
      </Section>

      {/* How It Works */}
      <Section className="bg-foreground/5">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">How it works</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-4xl font-bold text-muted mb-3">01</div>
            <h3 className="text-xl font-semibold mb-2">Audit</h3>
            <p className="text-foreground/80">30-minute call to review your workflows</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-muted mb-3">02</div>
            <h3 className="text-xl font-semibold mb-2">Build</h3>
            <p className="text-foreground/80">3–7 days to design and develop</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-muted mb-3">03</div>
            <h3 className="text-xl font-semibold mb-2">Deploy</h3>
            <p className="text-foreground/80">Integration inside existing tools</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-muted mb-3">04</div>
            <h3 className="text-xl font-semibold mb-2">Train & handoff</h3>
            <p className="text-foreground/80">Light documentation and team training</p>
          </div>
        </div>
      </Section>

      {/* Trust Signals */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-xl font-medium">No demos. No experiments.</p>
            </div>
            <div>
              <p className="text-xl font-medium">Built for production workflows.</p>
            </div>
            <div>
              <p className="text-xl font-medium">Tool-agnostic. Outcome-driven.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-foreground/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start with a free workflow audit.
          </h2>
          <CTAButton href="/book">
            Free Workflow Audit
          </CTAButton>
        </div>
      </Section>
    </main>
  )
}
