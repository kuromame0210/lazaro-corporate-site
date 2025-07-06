import SectionTitle from "./SectionTitle"
import ProductCard from "./ProductCard"
import { CloudIcon, DevicePhoneMobileIcon } from "@heroicons/react/24/outline"

export default function Products() {
  return (
    <section id="products" className="section-padding bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="PORTFOLIO" subtitle="開発実績" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <ProductCard
            title="自社運営サービス：モニハピ"
            description="弊社が運営するユーザー参加型のモニター調査プラットフォーム「モニハピ」。話題の商品やアイテムをお得に試しながらポイントを貯められるサービスです。貯まったポイントはAmazonギフト券や現金に交換可能。設計から運営まで一貫して手がけた自社サービスです。"
            features={[
              "ユーザー参加型のモニター調査プラットフォーム",
              "ECモール連携による商品購入・レビューシステム",
              "ポイント獲得・交換機能（Amazonギフト券・現金対応）",
              "話題商品のお得なモニター体験サービス"
            ]}
            image="/images/モニハピサイト画面スクリーンショット.png"
            link="https://monihapi.com/"
            delay={0}
          />
        </div>
      </div>
    </section>
  )
}
