interface SectionTitleProps {
  title: string
  subtitle?: string
  light?: boolean
}

export default function SectionTitle({ title, subtitle, light = false }: SectionTitleProps) {
  return (
    <div className="text-center mb-12" data-aos="fade-up">
      <h2 className={`text-3xl md:text-4xl font-bebas mb-4 ${light ? "text-white" : "text-secondary"}`}>{title}</h2>
      {subtitle && (
        <p className={`text-lg font-playfair ${light ? "text-white/80" : "text-secondary/80"}`}>{subtitle}</p>
      )}
      <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
    </div>
  )
}
