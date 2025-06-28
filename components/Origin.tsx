import SectionTitle from "./SectionTitle"
import Image from "next/image"

export default function Origin() {
  return (
    <section id="origin" className="section-padding bg-gray-50 clip-diagonal scroll-mt-10">
      <div className="container mx-auto px-4">
        <SectionTitle title="ORIGIN" subtitle="LAZAROの由来" />

        <div className="max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden bg-black/90 flex items-center justify-center">
              <Image
                src="/images/ラザロ神話1.jpeg"
                alt="ラザロの復活 - フェニックス"
                fill
                className="object-contain"
              />
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="font-playfair text-gray-700 mb-6">
                社名「LAZARO」は聖書に登場するラザロの物語──困難に倒れても正しい努力は必ず報われ、再び立ち上がる──に由来し、
                不死鳥フェニックスのように、あらゆる困難から蘇る力を象徴しています。
              </p>

              <p className="font-playfair text-gray-700">
                この理念を胸に、どんな困難な課題でも諦めることなく最適な解決策を見つけ出し、
                お客様の事業が新たなステージへと飛躍できるよう、
                全力でサポートすることを使命としています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}