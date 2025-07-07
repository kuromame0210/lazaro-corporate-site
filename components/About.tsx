import SectionTitle from "./SectionTitle"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="section-padding bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="ABOUT" subtitle="私たちの強み" />

        <div className="max-w-5xl mx-auto">
          {/* メインメッセージ */}
          <div className="text-center mb-8 md:mb-12" data-aos="fade-up">
            <p className="text-lg md:text-xl lg:text-2xl font-playfair text-gray-800 mb-3 md:mb-4">
              戦略を描くだけで終わらせない。
            </p>
            <p className="text-lg md:text-xl lg:text-2xl font-playfair text-gray-800 mb-3 md:mb-4">
              私たちは、マーケティングの思考とテクノロジーの実装力を掛け合わせ、構想から実行、改善までを一貫して支援します。
            </p>
          </div>

          {/* web開発とマーケティングの強み */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 min-h-[400px]">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover-glow hover-shimmer group flex flex-col" data-aos="fade-up" data-aos-delay="150">
              <div className="h-48 w-full relative">
                <Image
                  src="/images/engineering.jpg"
                  alt="開発現場"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 border-l-4 border-primary">
                <div className="flex items-center mb-4">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <span className="font-bebas text-lg">Tech</span>
                  </div>
                  <h4 className="font-bebas text-primary text-lg md:text-xl lg:text-2xl">【テクノロジー】</h4>
                </div>
                <p className="font-playfair text-gray-700 text-base md:text-lg">最短で成果に直結する開発力</p>
                <p className="font-playfair text-gray-600 text-sm md:text-base mt-2">ノーコードから本格開発まで、事業成長に効く仕組みを効率よく構築。</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover-glow hover-shimmer group flex flex-col" data-aos="fade-up" data-aos-delay="200">
              <div className="h-48 w-full relative">
                <Image
                  src="/images/marketing.jpeg"
                  alt="コンサルティング風景"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 border-l-4 border-secondary">
                <div className="flex items-center mb-4">
                  <div className="bg-secondary text-white rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <span className="font-bebas text-lg">Mkt</span>
                  </div>
                  <h4 className="font-bebas text-secondary text-lg md:text-xl lg:text-2xl">【マーケティング】</h4>
                </div>
                <p className="font-playfair text-gray-700 text-base md:text-lg">動かすマーケティング戦略</p>
                <p className="font-playfair text-gray-600 text-sm md:text-base mt-2">戦略から実行・改善まで、結果にこだわるマーケティングを併走支援</p>
              </div>
            </div>
          </div>

          {/* ワンストップ対応の強調 */}
          <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-lg text-white text-center" data-aos="fade-up" data-aos-delay="250">
            <h3 className="font-bebas text-3xl mb-4">戦略・マーケ・開発。課題の全体像ごとに設計・実行します。</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">・戦略から開発まで一気通貫で支援</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">・最短ルートで成果を出す開発力</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">・数字に強い実行型マーケティング</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
