import SectionTitle from "./SectionTitle"

export default function Company() {
  const companyInfo = [
    { label: "屋号", value: "LAZARO" },
    { label: "所在地", value: "〒160-0023　東京都新宿区西新宿 3-3-13　西新宿水間ビル 2F" },
    {
      label: "事業内容",
      value: "– フルスタック開発サービス\n– 事業成長支援パッケージ\n– 経営・CTO支援\n– 個人事業主向けオールインワン支援",
    },
    { label: "事業形態", value: "個人事業主" },
    { label: "対応エリア", value: "全国（リモート対応）" },
  ]

  return (
    <section id="company" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="COMPANY" subtitle="会社概要" />

        <div className="max-w-3xl mx-auto" data-aos="fade-up">
          <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
              <tbody>
                {companyInfo.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <th className="py-4 px-6 text-left font-bebas text-secondary border-b border-gray-200 w-1/3">
                      {item.label}
                    </th>
                    <td className="py-4 px-6 font-playfair text-gray-700 border-b border-gray-200 whitespace-pre-line">
                      {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
