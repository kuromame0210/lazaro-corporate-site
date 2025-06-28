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
      className="card-elevated p-8 transition-all duration-500 group h-full flex flex-col hover-glow hover-shimmer scroll-reveal"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="flex justify-center mb-6">
        <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
          <Icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300" role="img" aria-hidden="true" />
        </div>
      </div>
      <h3 className="text-lg md:text-xl lg:text-2xl font-bebas text-secondary text-center mb-3 md:mb-4 group-hover:text-primary transition-colors duration-300">{title}</h3>
      <p className="font-playfair text-gray-600 text-center leading-relaxed flex-grow text-base md:text-lg">{description}</p>
    </div>
  )
}
