import Hero from "@/components/Hero"
import About from "@/components/About"
import Origin from "@/components/Origin"
import Services from "@/components/Services"
import Products from "@/components/Products"
import Team from "@/components/Team"
import Company from "@/components/Company"
import Contact from "@/components/Contact"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import AOSInit from "@/components/AOSInit"

export default function Home() {
  return (
    <>
      <AOSInit />
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Origin />
        <Services />
        <Products />
        <Team />
        <Company />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
