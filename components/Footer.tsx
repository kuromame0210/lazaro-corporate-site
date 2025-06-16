export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary py-8 text-white/80">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-playfair">© {currentYear} LAZARO LLC. All rights reserved.</p>
          </div>

          <div className="flex space-x-4">
            <a href="/privacy" className="hover:text-white transition-colors duration-200">
              プライバシーポリシー
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
