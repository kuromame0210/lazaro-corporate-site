interface SectionTitleProps {
  title: string
  subtitle?: string
  light?: boolean
}

export default function SectionTitle({ title, subtitle, light = false }: SectionTitleProps) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <div className="flex flex-col items-center">
        <h2 className={`text-2xl md:text-4xl lg:text-5xl font-bebas tracking-wide transition-all duration-500 hover:scale-105 ${light ? "text-white" : "gradient-text"}`} data-aos="fade-up">
          {title}
        </h2>
        <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-3 md:mt-4 animate-pulse-glow" data-aos="fade-up" data-aos-delay="50"></div>
        {subtitle && (
          <p className={`text-base md:text-lg lg:text-xl font-playfair mt-4 md:mt-6 ${light ? "text-white/90" : "text-gray-600"}`} data-aos="fade-up" data-aos-delay="100">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}
