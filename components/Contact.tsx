import SectionTitle from "./SectionTitle"
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline"

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-secondary text-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="CONTACT" subtitle="お問い合わせ" light />

        <div
          className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <form action="https://formspree.io/f/xgvwljed" method="POST" className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  お名前
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="お名前を入力してください"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-gray-800"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  メールアドレス
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="メールアドレスを入力してください"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-gray-800"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                お問い合わせ内容
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="お問い合わせ内容を入力してください"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-gray-800"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-all duration-300"
                aria-label="お問い合わせを送信"
              >
                送信
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
