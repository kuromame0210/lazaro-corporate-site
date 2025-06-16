import SectionTitle from "./SectionTitle"
import ServiceCard from "./ServiceCard"
import { CodeBracketIcon, PresentationChartLineIcon, ShieldCheckIcon, UserGroupIcon } from "@heroicons/react/24/outline"

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50 clip-diagonal scroll-mt-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="SERVICE" subtitle="完全ワンストップ対応" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            title="フルスタック開発サービス"
            description="要件定義→UI/UX設計→開発→運用まで完全一貫対応。マッチングサイト、ECサイト等何でも開発可能。一人開発による圧倒的コスパ。"
            Icon={CodeBracketIcon}
            delay={0}
          />

          <ServiceCard
            title="事業成長支援パッケージ"
            description="事業戦略策定→マーケティング戦略→広告運用→効果測定まで一気通貫。事業売却経験による実践的コンサルティング。"
            Icon={PresentationChartLineIcon}
            delay={100}
          />

          <ServiceCard
            title="経営・CTO支援"
            description="技術戦略→システム設計→チーム組成→運用までトータルサポート。経営視点×技術力による包括的アドバイス。"
            Icon={ShieldCheckIcon}
            delay={200}
          />

          <ServiceCard
            title="個人事業主向けオールインワン"
            description="「困った時は何でも相談」できる格安総合支援。小さな案件から事業拡大まで段階的に一貫対応。"
            Icon={UserGroupIcon}
            delay={300}
          />
        </div>
      </div>
    </section>
  )
}
