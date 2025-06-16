import type { HeroIcon } from "@/types"

interface ProductCardProps {
  title: string
  description: string
  features: string[]
  Icon: HeroIcon
  delay?: number
}

export default function ProductCard({ title, description, features, Icon, delay = 0 }: ProductCardProps) {
  return (
    <div
      className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="flex justify-center mb-6">
        <div className="bg-primary/10 p-4 rounded-full">
          <Icon className="w-12 h-12 text-primary" role="img" aria-hidden="true" />
        </div>
      </div>
      <h3 className="text-2xl font-bebas text-secondary text-center mb-4">{title}</h3>
      <p className="font-playfair text-gray-600 text-center mb-6">{description}</p>

      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-accent mr-2">•</span>
            <span className="font-playfair text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
