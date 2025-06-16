"use client"

import { ArrowDownIcon } from "@heroicons/react/24/outline"

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary clip-diagonal"></div>
      <div className="container mx-auto px-4 z-10 text-center" data-aos="fade-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bebas text-white mb-6">LAZARO</h1>
        <p className="text-xl md:text-2xl font-playfair text-white/90 max-w-2xl mx-auto mb-8">
          マーケティング×エンジニアリングで、あらゆる課題を解決
        </p>
        <a
          href="#about"
          className="inline-flex items-center justify-center bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all duration-300"
          onClick={(e) => {
            e.preventDefault()
            const about = document.querySelector("#about")
            if (about) {
              const offsetTop = about.getBoundingClientRect().top + window.pageYOffset
              window.scrollTo({
                top: offsetTop - 80,
                behavior: "smooth",
              })
            }
          }}
        >
          詳しく見る
          <ArrowDownIcon className="w-5 h-5 ml-2" />
        </a>
      </div>
    </section>
  )
}
