import SectionTitle from "./SectionTitle"
import ProductCard from "./ProductCard"
import { CloudIcon, DevicePhoneMobileIcon } from "@heroicons/react/24/outline"

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="PRODUCTS" subtitle="私たちの製品" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <ProductCard
            title="モニハピ"
            description="毎日の小さな幸せを可視化し、行動変容を促すセルフモニタリングツール。"
            features={[
              "日々の幸福度を記録",
              "行動パターンの分析",
              "カスタマイズ可能なダッシュボード",
              "目標設定と達成度トラッキング",
            ]}
            Icon={CloudIcon}
            delay={0}
          />
        </div>
      </div>
    </section>
  )
}
