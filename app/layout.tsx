import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "LAZARO - マーケティング×web開発で課題解決",
  description: "マーケティング×web開発のプロフェッショナルチームで、あらゆる課題を解決いたします。",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      </head>
      <body className={`font-playfair antialiased`}>
        {children}
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      </body>
    </html>
  )
}
