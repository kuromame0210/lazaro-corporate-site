"use client"

import { useState, useEffect } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "ホーム", href: "#home" },
  { name: "私たちについて", href: "#about" },
  { name: "LAZAROの由来", href: "#origin" },
  { name: "サービス", href: "#services" },
  { name: "製品", href: "#products" },
  { name: "チーム", href: "#team" },
  { name: "会社概要", href: "#company" },
  { name: "お問い合わせ", href: "#contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop - 80, // Adjust for header height
        behavior: "smooth",
      })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-lg py-3" : "bg-white/90 backdrop-blur-sm py-4",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#home" className="text-2xl font-bold text-primary hover:text-primary/80 transition-all duration-300 relative group">
            <span className="relative z-10 font-bebas tracking-wider">LAZARO</span>
            {/* ロゴの光るエフェクト */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/30 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-sm transform scale-110"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                handleClick(item.href)
              }}
              className="relative text-gray-700 hover:text-primary font-medium transition-all duration-300 px-3 py-2 group"
            >
              <span className="relative z-10">{item.name}</span>
              {/* 下線エフェクト */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
          ))}
        </nav>

        {/* Mobile Navigation Button */}
        <button
          className="lg:hidden text-gray-700 hover:text-primary p-2 transition-all duration-300 hover:bg-primary/10 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <div className="relative w-6 h-6">
            <Bars3Icon 
              className={`h-6 w-6 absolute transition-all duration-300 ${
                isOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
              }`} 
            />
            <XMarkIcon 
              className={`h-6 w-6 absolute transition-all duration-300 ${
                isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
              }`} 
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`lg:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg transition-all duration-300 ease-out ${
          isOpen 
            ? 'max-h-96 opacity-100 translate-y-0' 
            : 'max-h-0 opacity-0 -translate-y-4 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-2 gap-3">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleClick(item.href)
                }}
                className={`relative text-gray-700 hover:text-primary font-medium py-3 px-4 transition-all duration-300 text-center group ${
                  isOpen 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-4 opacity-0'
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : '0ms'
                }}
              >
                <span className="relative z-10">{item.name}</span>
                {/* 下線エフェクト */}
                <div className="absolute bottom-1 left-2 right-2 h-0.5 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
