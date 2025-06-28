import SectionTitle from "./SectionTitle"
import ServiceCard from "./ServiceCard"
import { CodeBracketIcon, PresentationChartLineIcon, ShieldCheckIcon, UserGroupIcon } from "@heroicons/react/24/outline"

export default function Services() {
  return (
    <section id="services" className="section-padding pb-20 bg-gray-50 clip-diagonal scroll-mt-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="SERVICE" subtitle="完全ワンストップ対応" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
          <ServiceCard
            title="web開発・コンサル"
            description="要件定義
→ UI/UX設計
→ 開発
→ 運用まで完全一貫対応。マッチングサイト、ECサイト等何でも開発可能。高品質なシステムを迅速にお届けします。"
            Icon={CodeBracketIcon}
            delay={0}
          />

          <ServiceCard
            title="マーケティング支援"
            description="事業戦略策定
→ マーケティング戦略
→ 広告運用
→ 効果測定まで一気通貫。事業売却経験による実践的コンサルティング。"
            Icon={PresentationChartLineIcon}
            delay={100}
          />

          <ServiceCard
            title="総合支援サービス"
            description="「困った時は何でも相談」できる総合支援。小さな案件から事業拡大まで段階的に一貫対応します。"
            Icon={UserGroupIcon}
            delay={300}
          />
        </div>
      </div>
    </section>
  )
}
