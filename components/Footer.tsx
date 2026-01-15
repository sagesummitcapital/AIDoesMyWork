import Link from 'next/link'

export default function Footer() {
  const links = [
    { href: '/workflows', label: 'Workflows' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/book', label: 'Book' },
    { href: '/faq', label: 'FAQ' },
    { href: '/privacy', label: 'Privacy' },
    { href: '/terms', label: 'Terms' },
  ]

  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-wrap gap-6 justify-center md:justify-start text-sm text-muted">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className="hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
