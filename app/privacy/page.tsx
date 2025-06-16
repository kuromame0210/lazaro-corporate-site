"use client"

import SectionTitle from "@/components/SectionTitle"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import AOSInit from "@/components/AOSInit"

export default function PrivacyPolicy() {
  return (
    <>
      <AOSInit />
      <Header />
      <div className="min-h-screen bg-white">
        {/* Header Spacer */}
        <div className="h-20"></div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="PRIVACY POLICY" subtitle="プライバシーポリシー" />
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-8">
              <p className="text-sm text-gray-600 mb-4">
                最終更新日：{new Date().getFullYear()}年{new Date().getMonth() + 1}月{new Date().getDate()}日
              </p>
              
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bebas text-primary mb-4">1. 個人情報の取得について</h2>
                  <p className="font-playfair text-gray-700 mb-4">
                    LAZARO（以下「当社」）では、お問い合わせフォームを通じて以下の個人情報を取得いたします：
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>お名前</li>
                    <li>メールアドレス</li>
                    <li>お問い合わせ内容</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bebas text-primary mb-4">2. 個人情報の利用目的</h2>
                  <p className="font-playfair text-gray-700 mb-4">
                    取得した個人情報は、以下の目的でのみ利用いたします：
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>お問い合わせへの回答</li>
                    <li>サービスに関するご案内</li>
                    <li>その他、お客様との連絡のため</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bebas text-primary mb-4">3. 個人情報の管理</h2>
                  <p className="font-playfair text-gray-700">
                    当社は、個人情報を適切に管理し、紛失、破壊、改ざん、不正アクセス等を防止するため、
                    必要かつ適切な安全管理措置を講じます。
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bebas text-primary mb-4">4. 第三者への提供</h2>
                  <p className="font-playfair text-gray-700">
                    当社は、法令に基づく場合を除き、お客様の個人情報を第三者に提供することはありません。
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bebas text-primary mb-4">5. お問い合わせ</h2>
                  <p className="font-playfair text-gray-700 mb-4">
                    個人情報の取扱いに関するお問い合わせは、以下までご連絡ください：
                  </p>
                  <div className="bg-white p-4 rounded border">
                    <p className="font-playfair text-gray-700">
                      LAZARO<br />
                      〒160-0023　東京都新宿区西新宿 3-3-13　西新宿水間ビル 2F<br />
                      Email: info@lazaro.jp
                    </p>
                  </div>
                </section>
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href="/#contact" 
                className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-all duration-300"
              >
                お問い合わせへ
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  )
}