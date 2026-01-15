import Link from 'next/link'
import CTAButton from './CTAButton'

export default function Navbar() {
  return (
    <nav className="border-b border-border">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-semibold">
            AI Does My Work
          </Link>
          <CTAButton href="/book">
            Free Workflow Audit
          </CTAButton>
        </div>
      </div>
    </nav>
  )
}
