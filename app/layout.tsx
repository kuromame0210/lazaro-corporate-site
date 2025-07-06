import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "LAZARO - マーケティング×web開発で課題解決",
    template: "%s | LAZARO"
  },
  description: "合同会社ラザロの公式HP。マーケティング×テクノロジーで、事業の限界を一段階上へ。",
  keywords: ["マーケティング", "web開発", "テクノロジー", "Smart Dev", "Marketing Design", "Business Reboot", "AI開発", "ノーコード", "ローコード", "事業戦略", "広告運用", "SNS戦略", "導線設計", "コンテンツ改善", "KPI設計", "ユーザーインサイト", "LAZARO", "合同会社ラザロ", "事業の限界突破", "一気通貫支援"],
  authors: [{ name: "合同会社ラザロ" }],
  creator: "合同会社ラザロ",
  publisher: "合同会社ラザロ",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lazaro.jp'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "LAZARO - マーケティング×web開発で課題解決",
    description: "合同会社ラザロの公式HP。マーケティング×テクノロジーで、事業の限界を一段階上へ。",
    url: 'https://lazaro.jp',
    siteName: 'LAZARO',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LAZARO - マーケティング×web開発で課題解決',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "LAZARO - マーケティング×web開発で課題解決",
    description: "合同会社ラザロの公式HP。マーケティング×テクノロジーで、事業の限界を一段階上へ。",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
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
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`font-playfair antialiased`}>
        {children}
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      </body>
    </html>
  )
}
