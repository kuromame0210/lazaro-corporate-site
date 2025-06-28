"use client";

import { ArrowDownIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center clip-diagonal"
        style={{
          backgroundImage: "url('/images/PC画像アップ.webp')",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 via-slate-700/80 to-slate-800/80 clip-diagonal"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 z-10 text-center" data-aos="fade-up">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bebas text-white mb-6 md:mb-8 tracking-wider animate-slide-in-bottom">
            LAZARO
          </h1>
          <div className="animate-slide-in-bottom" style={{animationDelay: '0.3s'}}>
            <p className="text-lg md:text-2xl lg:text-3xl font-playfair text-white/95 max-w-3xl mx-auto mb-3 md:mb-4 leading-relaxed">
              マーケティング×web開発で、
            </p>
            <p className="text-lg md:text-2xl lg:text-3xl font-playfair text-white/95 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed">
              あらゆる課題を解決
            </p>
          </div>
          <div className="animate-scale-in" style={{animationDelay: '0.6s'}}>
            <a
              href="#about"
              className="inline-flex items-center justify-center bg-white/95 backdrop-blur-sm text-primary px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-white hover:shadow-2xl hover-glow hover-shimmer transition-all duration-500"
            onClick={(e) => {
              e.preventDefault();
              const about = document.querySelector("#about");
              if (about) {
                const offsetTop = about.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                  top: offsetTop - 80,
                  behavior: "smooth",
                });
              }
            }}
          >
              詳しく見る
              <ArrowDownIcon className="w-5 h-5 ml-2 animate-float" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}