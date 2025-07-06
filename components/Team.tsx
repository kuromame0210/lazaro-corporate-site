import SectionTitle from "./SectionTitle"
import Image from "next/image"

export default function Team() {
  return (
    <section id="team" className="section-padding bg-gray-50 clip-diagonal scroll-mt-10">
      <div className="container mx-auto px-4">
        <SectionTitle title="TEAM" subtitle="チームメンバー" />

        <div className="max-w-6xl mx-auto">
          {/* Representative Profile */}
          <div
            className="bg-white p-8 rounded-lg shadow-sm mb-8 flex flex-col md:flex-row items-center gap-8"
            data-aos="fade-up"
          >
            <div className="w-48 h-48 relative flex-shrink-0">
              <Image
                src="/images/代表プロフィール画像.jpg"
                alt="代表者プロフィール"
                width={192}
                height={192}
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bebas text-primary mb-1">黒澤僚太</h3>
              <p className="text-accent font-medium mb-4">代表・CTO / web開発プロフェッショナル</p>
              <p className="font-playfair text-gray-700 mb-4">
                東京都八丈島在住で、マッチングサイト等の複雑なシステムを構築。
                web開発戦略立案からアーキテクチャ設計、開発、運用まで一気通貫で対応し、高品質なシステムをお届けします。
              </p>
              <p className="font-playfair text-gray-700">
                web開発×マーケティング×経営視点でお客様の事業成長を支援いたします。
              </p>
            </div>
          </div>

          {/* Marketing Partner Profile */}
          <div
            className="bg-white p-8 rounded-lg shadow-sm mb-8 flex flex-col md:flex-row-reverse items-center gap-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="w-48 h-48 relative flex-shrink-0">
              <Image
                src="/placeholder-user.jpg"
                alt="マーケティングパートナー"
                width={192}
                height={192}
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bebas text-secondary mb-1">マーケティングパートナー</h3>
              <p className="text-accent font-medium mb-4">マーケティングプロフェッショナル / 経営コンサルタント</p>
              <p className="font-playfair text-gray-700 mb-4">
                事業課題の発見から戦略設計、施策の実行・改善までを一気通貫で支援。BtoCブランドの立ち上げや運用、大手企業のマーケティング支援、Web開発を含むデジタル施策など、幅広いプロジェクトに携わる。
                戦略だけで終わらせず、現場で「成果が出るまで」を設計・実装するスタイルに定評があり、分野横断型の伴走支援を得意とします。
              </p>
              </div>
          </div>

        </div>
      </div>
    </section>
  )
}
