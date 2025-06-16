import type { HeroIcon } from "@/types"

interface ServiceCardProps {
  title: string
  description: string
  Icon: HeroIcon
  delay?: number
}

export default function ServiceCard({ title, description, Icon, delay = 0 }: ServiceCardProps) {
  return (
    <div
      className="bg-white p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="flex justify-center mb-4">
        <Icon className="w-12 h-12 text-primary" role="img" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-bebas text-secondary text-center mb-3">{title}</h3>
      <p className="font-playfair text-gray-600 text-center">{description}</p>
    </div>
  )
}
