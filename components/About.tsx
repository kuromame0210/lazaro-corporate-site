import SectionTitle from "./SectionTitle"

export default function About() {
  return (
    <section id="about" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="ABOUT" subtitle="私たちの強み" />

        <div className="max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          {/* メインメッセージ */}
          <div className="text-center mb-12">
            <p className="text-2xl font-playfair text-gray-800 mb-4">
              マーケティング×エンジニアリングのプロフェッショナルチームで、
            </p>
            <p className="text-2xl font-playfair text-gray-800">
              あなたのビジネスを包括的にサポートします。
            </p>
          </div>

          {/* 技術とマーケティングの強み */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-primary">
              <div className="flex items-center mb-4">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <span className="font-bebas text-lg">Tech</span>
                </div>
                <h4 className="font-bebas text-primary text-2xl">【技術】</h4>
              </div>
              <p className="font-playfair text-gray-700 text-lg">CTOレベルの技術力で設計から開発まで一気通貫</p>
              <p className="font-playfair text-gray-600 text-sm mt-2">技術戦略立案・アーキテクチャ設計・開発・運用まで完全対応</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-secondary">
              <div className="flex items-center mb-4">
                <div className="bg-secondary text-white rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <span className="font-bebas text-lg">Mkt</span>
                </div>
                <h4 className="font-bebas text-secondary text-2xl">【マーケティング】</h4>
              </div>
              <p className="font-playfair text-gray-700 text-lg">事業コンサルから広告運用まで一気通貫</p>
              <p className="font-playfair text-gray-600 text-sm mt-2">戦略策定・実行・分析・改善まで完全サポート</p>
            </div>
          </div>

          {/* ワンストップ対応の強調 */}
          <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-lg text-white text-center">
            <h3 className="font-bebas text-3xl mb-4">ワンストップで課題解決いたします</h3>
            <p className="font-playfair text-xl mb-4">
              相談窓口→課題解決、までワンストップで対応します
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">一人開発による格安対応</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">事業売却経験による実践的アドバイス</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">お客様の事業成長を全力サポート</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
