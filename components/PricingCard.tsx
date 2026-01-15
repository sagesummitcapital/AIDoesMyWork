interface PricingCardProps {
  title: string
  price: string
  features: string[]
}

export default function PricingCard({ title, price, features }: PricingCardProps) {
  return (
    <div className="border border-border rounded-lg p-8 hover:border-foreground/30 transition-colors">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-3xl font-bold mb-6">{price}</p>
      
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="text-foreground/90">
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}
