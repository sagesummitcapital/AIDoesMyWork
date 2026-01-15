import Section from '@/components/Section'
import FAQAccordion from '@/components/FAQAccordion'

export default function FAQ() {
  const faqs = [
    {
      question: 'What kinds of businesses do you work with?',
      answer: 'We work with any business that has repetitive, manual workflows. Most of our clients are service businesses, agencies, small-to-midsize companies, and growing startups with 10-200 employees. If your team is doing the same task over and over, we can probably help.'
    },
    {
      question: 'Do you replace our tools?',
      answer: 'No. We integrate with your existing tools and platforms. Everything we build works inside the systems you already use—your CRM, email, project management software, accounting platform, etc. We're tool-agnostic and build around your current stack.'
    },
    {
      question: 'How long does implementation take?',
      answer: 'Most single workflow implementations take 3-7 days from kickoff to deployment. Larger projects with multiple workflows typically take 2-4 weeks. We work fast and focus on getting automations live quickly so you see results right away.'
    },
    {
      question: 'Is our data secure?',
      answer: 'Yes. We follow industry-standard security practices and work within your existing access controls. We never store sensitive data unnecessarily and use secure API connections for all integrations. We can sign NDAs and work within your security requirements.'
    },
    {
      question: 'Do you train our team?',
      answer: 'Yes. Every implementation includes documentation and a brief training session to show your team how the automation works, how to monitor it, and how to handle edge cases. The goal is for your team to own and understand the system after handoff.'
    }
  ]

  return (
    <main>
      <Section className="pt-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-12">
            Frequently Asked Questions
          </h1>
          
          <FAQAccordion items={faqs} />
        </div>
      </Section>
    </main>
  )
}
