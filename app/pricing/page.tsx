import Section from '@/components/Section'
import PricingCard from '@/components/PricingCard'
import CTAButton from '@/components/CTAButton'

export default function Pricing() {
  return (
    <main>
      <Section className="pt-24">
        <div className="max-w-4xl mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Simple, outcome-based pricing.
          </h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <PricingCard
            title="Workflow Install"
            price="$3,000–$7,500"
            features={[
              'One-time fee',
              'One core workflow',
              'Build, deploy, documentation',
              '14 days post-launch support'
            ]}
          />
          
          <PricingCard
            title="Workflow Stack"
            price="$9,000–$20,000"
            features={[
              'One-time fee',
              '3–5 workflows',
              'Integrations and dashboards',
              '30 days post-launch support'
            ]}
          />
          
          <PricingCard
            title="Ongoing Optimization"
            price="$500–$1,500/mo"
            features={[
              'Monthly retainer (optional)',
              'Workflow refinements',
              'Performance monitoring',
              'Priority support'
            ]}
          />
        </div>
      </Section>

      <Section className="bg-foreground/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start with a free audit
          </h2>
          <CTAButton href="/book">
            Free Workflow Audit
          </CTAButton>
        </div>
      </Section>
    </main>
  )
}
