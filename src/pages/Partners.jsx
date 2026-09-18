import { Link } from 'react-router-dom'
import { partners, caseStudies } from '../data/content'
import PageHead from '../components/PageHead'

export default function Partners() {
  return (
    <>
      <PageHead title="실적·고객사" lead="유통, 제조, 제약, 식품 분야의 기업들과 장기 파트너십을 이어가고 있습니다." />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="h-section">주요 고객사</h2>
          </div>
          <ul className="logo-grid">
            {partners.map((p) => (
              <li key={p.name} className="logo-cell"><img src={p.logo} alt={p.name} loading="lazy" /></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className="section-head">
            <h2 className="h-section">운영 실적</h2>
            <p className="lead">산업별로 어떤 물류를 어떻게 운영하고 있는지 대표 사례를 정리했습니다.</p>
          </div>
          <ul className="grid-2">
            {caseStudies.map((c) => (
              <li key={c.client} className="case">
                <div className="case__service">{c.service}</div>
                <div className="case__client">{c.client}</div>
                <p className="case__result">{c.result}</p>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <Link to="/contact" className="btn btn--primary">우리 회사에 맞는 운영안 문의</Link>
          </div>
        </div>
      </section>
    </>
  )
}
