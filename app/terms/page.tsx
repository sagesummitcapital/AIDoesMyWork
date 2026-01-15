import Section from '@/components/Section'

export default function Terms() {
  return (
    <main>
      <Section className="pt-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Terms of Service
          </h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-foreground/90">
            <p className="text-lg">
              Last updated: January 2026
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Agreement to Terms</h2>
            <p>
              By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Services</h2>
            <p>
              We provide business workflow automation and AI implementation services. The specific scope of work for each engagement will be defined in a separate statement of work or service agreement.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Payment Terms</h2>
            <p>
              Payment terms are outlined in individual service agreements. Generally, we require a deposit before beginning work, with the balance due upon completion and deployment.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Intellectual Property</h2>
            <p>
              Upon full payment, clients receive ownership of custom automation and workflows built specifically for their business. We retain ownership of our general methodologies, frameworks, and tools.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Warranties and Limitations</h2>
            <p>
              We provide our services with reasonable care and skill. However, we cannot guarantee specific business outcomes or results. Our liability is limited to the fees paid for the specific services in question.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Termination</h2>
            <p>
              Either party may terminate a service agreement with written notice. Terms specific to termination will be outlined in individual service agreements.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
            <p>
              For questions about these Terms of Service, please contact us through the consultation booking form.
            </p>
          </div>
        </div>
      </Section>
    </main>
  )
}
