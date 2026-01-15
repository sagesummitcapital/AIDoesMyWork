import Link from 'next/link'

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
}

export default function CTAButton({ href, children, variant = 'primary' }: CTAButtonProps) {
  const baseClasses = 'inline-block px-6 py-3 rounded-md font-medium transition-colors'
  const variantClasses = variant === 'primary'
    ? 'bg-foreground text-background hover:bg-foreground/90'
    : 'border border-border hover:border-foreground'

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses}`}>
      {children}
    </Link>
  )
}
