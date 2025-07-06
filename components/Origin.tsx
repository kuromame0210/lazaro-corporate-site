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
                src="/images/ラザロ神話.jpg"
                alt="ラザロの復活 - フェニックス"
                fill
                className="object-contain"
              />
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="font-playfair text-gray-700 mb-6">
                ラザロは、聖書に登場する“唯一よみがえった男”。
                失われた希望に再び火を灯し、動きを止めたものを再起させる象徴です。
                <br/>
                私たちは、この名に、事業や構想、想いに“もう一度、命を吹き込む”という意思を込めました。
                マーケティングとテクノロジーの力で、仕組みを整え、可能性を再起動させる。
                <br/>
                感情を動かし、結果を生み出す。そんな“ラザロ計画”を、あなたと共に描き、実行します。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}