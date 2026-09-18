import { Link } from 'react-router-dom'
import { hero, stats, certifications, businesses, subsidiaries, partners, company } from '../data/content'
import Placeholder from '../components/Placeholder'
import CountUp from '../components/CountUp'
import { ArrowRight, Truck } from '../components/Icons'

export default function Home() {
  return (
    <>
      {/* 히어로 */}
      <section className="hero">
        <div className="container hero__inner">
          <div>
            <h1 className="h-display hero__title reveal">{hero.title}</h1>
            <p className="lead hero__sub reveal" data-delay="1">{hero.subtitle}</p>
            <div className="hero__cta reveal" data-delay="2">
              <Link to="/contact" className="btn btn--primary btn--lg">{hero.primaryCta}</Link>
              <Link to="/business" className="btn btn--ghost btn--lg">사업분야 보기 <ArrowRight width="18" height="18" /></Link>
              <Link to="/driver" className="btn btn--signal btn--lg"><Truck /> {hero.driverCta}</Link>
            </div>
            <div className="hero__note reveal" data-delay="3">
              <span>우수물류기업 인증</span>
              <span>HACCP 콜드체인</span>
              <span>ISO 9001·14001·45001</span>
            </div>
          </div>
          <div className="hero__media reveal" data-delay="1">
            <Placeholder label={hero.photo} ratio="16x10" spec="권장 1600×1000px 이상" />
            <div className="hero__badge">
              <b>Since 1992</b>
              <span>34년, 6개 계열사 통합 물류</span>
            </div>
          </div>
        </div>
      </section>

      {/* 사업분야 스트립 */}
      <section className="strip" aria-label="사업분야">
        <div className="container">
          <ul className="strip__list">
            {businesses.map((b) => (
              <li key={b.id}>
                <Link to={`/business#${b.id}`} className="strip__item">
                  <span className="strip__en">{b.en}</span>
                  <span className="strip__name">{b.name} <ArrowRight /></span>
                  <span className="strip__short">{b.short}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 개요 */}
      <section className="section">
        <div className="container split">
          <div>
            <h2 className="h-section">귀사의 공급망을 진단하고<br />최적의 물류 운영 체계를 설계합니다</h2>
            <div className="prose mt-3">
              <p>삼원종합물류는 1992년 창립 이래 34년간 축적한 현장 운영 노하우와 6개 전문 계열사의 통합 인프라를 바탕으로 산업별 특화 물류 솔루션을 제공하는 종합물류 기업입니다.</p>
              <p>생산거점 간 미들마일 수송, 소비자 최종 배송인 라스트마일, HACCP 인증 콜드체인, 스마트 WMS 기반 창고운영, SCM 컨설팅까지 화주의 원가 절감과 서비스 수준 향상을 동시에 실현하는 End-to-End 물류 파트너입니다.</p>
            </div>
            <div className="mt-4 row">
              <Link to="/company" className="btn btn--ghost">회사소개 <ArrowRight width="18" height="18" /></Link>
            </div>
          </div>
          <Placeholder label="관제실 또는 본사 사무실 전경" ratio="4x3" spec="권장 1200×900px" />
        </div>
      </section>

      {/* 숫자 밴드 */}
      <section className="section section--dark">
        <div className="container">
          <ul className="stats">
            {stats.map((s) => (
              <li key={s.label}>
                <div className="stat__value"><CountUp value={s.value} /><small>{s.suffix}</small></div>
                <div className="stat__label">{s.label}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 인증 */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="h-section">공인된 기준으로 증명합니다</h2>
            <p className="lead">화주가 화물을 위탁하기 전에 확인하는 인증과 체계를 모두 갖추고 있습니다.</p>
          </div>
          <ul className="grid-4">
            {certifications.map((c) => (
              <li key={c.title} className="cert">
                <div className="cert__org">{c.org}</div>
                <h3 className="cert__title">{c.title}</h3>
                <p className="cert__desc">{c.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 계열사 */}
      <section className="section section--tint">
        <div className="container">
          <div className="section-head">
            <h2 className="h-section">6개 계열사가 하나의 공급망을 운영합니다</h2>
            <p className="lead">운송, 배송, 창고, 인력, 플랫폼을 각각의 전문 법인이 맡고, 삼원종합물류가 컨트롤타워로서 통합 관제합니다.</p>
          </div>
          <ul className="group">
            {subsidiaries.map((s, i) => (
              <li key={s.name} className={`group__item${i === 0 ? ' group__item--hq' : ''}`}>
                <div className="group__role">{s.role}</div>
                <div className="group__name">{s.name}</div>
                <p className="group__desc">{s.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 파트너 */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="h-section">함께하는 고객사</h2>
            <p className="lead">유통, 제조, 제약, 식품 분야의 기업들이 삼원종합물류와 장기 파트너십을 이어가고 있습니다.</p>
          </div>
        </div>
        <div className="marquee" aria-label="주요 고객사 로고">
          <div className="marquee__track">
            {[...partners, ...partners].map((p, i) => (
              <div className="logo-cell" key={i}><img src={p.logo} alt={p.name} loading="lazy" /></div>
            ))}
          </div>
        </div>
        <div className="container mt-4">
          <Link to="/partners" className="btn btn--ghost">실적·고객사 전체 보기 <ArrowRight width="18" height="18" /></Link>
        </div>
      </section>

      {/* 차주 밴드 */}
      <section className="driver-band">
        <div className="container driver-band__inner">
          <div>
            <span className="driver-band__mark">삼원 소속 차주 기사님께</span>
            <h2 className="h-section">차주 파트너 전용 시스템</h2>
            <p>투명한 정산, 안정적인 물량 배차, 전담 관리자 1:1 지원. 운송료내역서 조회를 포함한 차주 전용 서비스를 준비하고 있습니다.</p>
          </div>
          <div className="driver-band__cta">
            <Link to="/driver" className="btn btn--signal btn--lg"><Truck /> 차주 전용 바로가기</Link>
            <Link to="/careers#driver" className="btn btn--ghost btn--lg">차주 모집 공고</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container cta-band__inner">
          <div>
            <h2 className="h-section">물류 비용, 지금보다 줄일 수 있습니다</h2>
            <p>물동량과 배송 권역을 알려주시면 전담 컨설턴트가 24시간 이내에 연락드립니다. 현장 실사와 견적 제안은 무상입니다.</p>
          </div>
          <div className="cta-band__actions">
            <a href={`tel:${company.phone}`} className="cta-band__phone">{company.phone}</a>
            <Link to="/contact" className="btn btn--light btn--lg">상담 신청하기</Link>
          </div>
        </div>
      </section>
    </>
  )
}
