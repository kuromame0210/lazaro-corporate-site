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
                事業売却経験を持つマーケティング・経営コンサルティングのプロフェッショナル。
                戦略策定から実行、広告運用まで幅広い知見でビジネス成長をサポートします。
              </p>
              <p className="font-playfair text-gray-700">
                デジタル広告運用のエキスパートとして、ROI最大化と持続的な事業成長を実現します。
              </p>
            </div>
          </div>

          {/* Team Strengths */}
          <div className="grid md:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="font-bebas text-xl">Tech</span>
              </div>
              <h4 className="font-bebas text-primary text-base md:text-lg lg:text-xl mb-2">web開発</h4>
              <p className="font-playfair text-gray-700 text-sm md:text-base">
                web開発戦略立案、アーキテクチャ設計、フルスタック開発まで完全対応
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-secondary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="font-bebas text-xl">Mkt</span>
              </div>
              <h4 className="font-bebas text-secondary text-base md:text-lg lg:text-xl mb-2">マーケティング</h4>
              <p className="font-playfair text-gray-700 text-sm md:text-base">
                戦略策定・広告運用・データ分析による実践的マーケティング支援
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-accent text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="font-bebas text-xl">Biz</span>
              </div>
              <h4 className="font-bebas text-accent text-base md:text-lg lg:text-xl mb-2">経営コンサル</h4>
              <p className="font-playfair text-gray-700 text-sm md:text-base">
                事業売却経験による実践的な経営戦略・事業成長支援
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
