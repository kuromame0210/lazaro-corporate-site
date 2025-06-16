import SectionTitle from "./SectionTitle"

export default function Origin() {
  return (
    <section id="origin" className="py-24 bg-gray-50 clip-diagonal scroll-mt-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="ORIGIN" subtitle="LAZAROの由来" />

        <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <p className="font-playfair text-gray-700 mb-6">
              社名「LAZARO」は聖書に登場するラザロの物語──困難に倒れても正しい努力は必ず報われ、再び立ち上がる──に由来し、
              世界平和を象徴する言葉でもあります。
            </p>

            <p className="font-playfair text-gray-700">
              この理念を胸に、社会にとって価値ある仕事を通じて、
              より良い世界の実現に貢献することを使命としています。
              どんな困難な課題でも、諦めることなく最適な解決策を見つけ出し、
              お客様と共に成長していくことを信念としています。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}