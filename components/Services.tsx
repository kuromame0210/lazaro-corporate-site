import SectionTitle from "./SectionTitle"
import ServiceCard from "./ServiceCard"
import { CodeBracketIcon, PresentationChartLineIcon, ShieldCheckIcon, UserGroupIcon } from "@heroicons/react/24/outline"

export default function Services() {
  return (
    <section id="services" className="section-padding pb-20 bg-gray-50 clip-diagonal scroll-mt-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="SERVICE" subtitle="戦略から開発まで一気通貫で支援" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
          <ServiceCard
            title="Smart Dev"
            description="AIを活用したノーコード/ローコードから本格開発まで、テクノロジーの力で仕組みを高速構築。アイデアを価値ある形に仕上げます。
            要件定義 → UI/UX設計 → 開発 → 運用まで完全一貫対応。マッチングサイト、ECサイト等何でも開発可能。高品質なシステムを迅速にお届けします。
"
            Icon={CodeBracketIcon}
            delay={0}
          />

          <ServiceCard
            title="Marketing Design"
            description="ユーザーインサイトから逆算し、広告・SNS・導線設計・コンテンツ改善まで、成果に直結する打ち手を企画実行します。"
            Icon={PresentationChartLineIcon}
            delay={100}
          />

          <ServiceCard
            title="Business Reboot"
            description="構想整理、戦略設計、KPI設計など、頭の中にある「なんとなくの可能性」を現実的なロードマップに落とし込みます。"
            Icon={UserGroupIcon}
            delay={300}
          />
        </div>
      </div>
    </section>
  )
}
