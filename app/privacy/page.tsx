import Section from '@/components/Section'

export default function Privacy() {
  return (
    <main>
      <Section className="pt-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Privacy Policy
          </h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-foreground/90">
            <p className="text-lg">
              Last updated: January 2026
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
            <p>
              We collect information you provide directly to us when you use our services, including when you book a consultation, engage our services, or communicate with us.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to comply with legal obligations.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Services</h2>
            <p>
              We may use third-party services to help us operate our business and deliver our services. These third parties have access to your information only to perform specific tasks on our behalf.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your information.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us through the consultation booking form.
            </p>
          </div>
        </div>
      </Section>
    </main>
  )
}
