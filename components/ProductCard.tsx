import type { HeroIcon } from "@/types"
import Image from "next/image"

interface ProductCardProps {
  title: string
  description: string
  features: string[]
  Icon?: HeroIcon
  image?: string
  delay?: number
  link?: string
}

export default function ProductCard({ title, description, features, Icon, image, delay = 0, link }: ProductCardProps) {
  return (
    <div
      className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-lg hover-glow hover-shimmer scroll-reveal"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      {image ? (
        <div className="flex justify-center mb-6">
          <div className="w-full max-w-md">
            <Image
              src={image}
              alt={title}
              width={400}
              height={240}
              className="rounded-lg object-cover w-full h-60 transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      ) : Icon ? (
        <div className="flex justify-center mb-6">
          <div className="bg-primary/10 p-4 rounded-full">
            <Icon className="w-12 h-12 text-primary" role="img" aria-hidden="true" />
          </div>
        </div>
      ) : null}
      <h3 className="text-xl font-bebas text-secondary text-center mb-4">{title}</h3>
      <p className="font-playfair text-gray-600 text-center mb-6">{description}</p>

      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-accent mr-2">•</span>
            <span className="font-playfair text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      
      {link && (
        <div className="text-center">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg transform hover:scale-105"
          >
            公式サイトを見る
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      )}
    </div>
  )
}
