import { ceoMessage, history, subsidiaries, fleet, offices, directions, company } from '../data/content'
import PageHead from '../components/PageHead'
import Placeholder from '../components/Placeholder'

const SUB = [
  { id: 'overview', label: '기업 개요' },
  { id: 'ceo', label: '대표 인사말' },
  { id: 'history', label: '연혁' },
  { id: 'group', label: '계열사' },
  { id: 'fleet', label: '차량 현황' },
  { id: 'offices', label: '사업장' },
]

export default function Company() {
  return (
    <>
      <PageHead title="회사소개" lead="1992년 창립 이후 34년, 운송에서 시작해 창고·플랫폼·컨설팅까지 공급망 전 구간을 아우르는 종합물류 기업으로 성장했습니다." />
      <SubNav items={SUB} />

      <section id="overview" className="biz-section">
        <div className="container split">
          <div>
            <h2 className="h-section">기업 개요</h2>
            <dl className="mt-3" style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '10px 16px', margin: 0 }}>
              <dt className="small">회사명</dt><dd style={{ margin: 0, fontWeight: 600 }}>{company.name} ({company.nameEn})</dd>
              <dt className="small">대표이사</dt><dd style={{ margin: 0, fontWeight: 600 }}>{company.ceo}</dd>
              <dt className="small">설립일</dt><dd style={{ margin: 0, fontWeight: 600 }}>{company.founded}</dd>
              <dt className="small">매출</dt><dd style={{ margin: 0, fontWeight: 600 }}>{company.revenue}</dd>
              <dt className="small">신용등급</dt><dd style={{ margin: 0, fontWeight: 600 }}>{company.creditRating}</dd>
              <dt className="small">본사</dt><dd style={{ margin: 0, fontWeight: 600 }}>{company.address}</dd>
              <dt className="small">사업 영역</dt><dd style={{ margin: 0, fontWeight: 600 }}>기업물류, 유통물류, 콜드체인, 주선·퀵서비스, 창고운영, SCM 컨설팅</dd>
            </dl>
          </div>
          <Placeholder label="본사 사옥 또는 이천 물류센터 외관" ratio="4x3" spec="권장 1200×900px" />
        </div>
      </section>

      <section id="ceo" className="biz-section section--tint">
        <div className="container split">
          <Placeholder label={ceoMessage.photo} ratio="3x4" spec="권장 900×1200px" />
          <div>
            <h2 className="h-section">공급망을 함께 설계하고,<br />함께 책임지는 파트너</h2>
            <div className="prose mt-3">
              {ceoMessage.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <p className="mt-4"><b>{company.name} {ceoMessage.title} {ceoMessage.name}</b></p>
          </div>
        </div>
      </section>

      <section id="history" className="biz-section">
        <div className="container">
          <div className="section-head">
            <h2 className="h-section">연혁</h2>
          </div>
          <div className="timeline">
            {history.map((h) => (
              <div key={h.year} className="timeline__row">
                <div className="timeline__year">{h.year}</div>
                <ul className="timeline__events">{h.events.map((e) => <li key={e}>{e}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="group" className="biz-section section--tint">
        <div className="container">
          <div className="section-head">
            <h2 className="h-section">계열사</h2>
            <p className="lead">각 법인이 운송, 배송, 창고, 인력, 플랫폼을 전담하고 삼원종합물류가 통합 관제합니다.</p>
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

      <section id="fleet" className="biz-section">
        <div className="container">
          <div className="section-head">
            <h2 className="h-section">차량 현황</h2>
            <p className="lead">간선 수송용 대형 차량부터 콜드체인 특수차량까지, 화물 특성에 맞는 차종을 직접 운영합니다.</p>
          </div>
          <ul className="fleet">
            {fleet.map((f) => (
              <li key={f.type} className="fleet__item">
                <div className="fleet__count">{f.count}<small>대</small></div>
                <div className="fleet__type">{f.type}</div>
                <p className="fleet__desc">{f.desc}</p>
              </li>
            ))}
          </ul>
          <div className="grid-3 mt-4">
            <Placeholder label="대형 윙바디 차량" ratio="4x3" small />
            <Placeholder label="냉장·냉동 탑차" ratio="4x3" small />
            <Placeholder label="컨테이너 트레일러" ratio="4x3" small />
          </div>
        </div>
      </section>

      <section id="offices" className="biz-section section--tint">
        <div className="container">
          <div className="section-head">
            <h2 className="h-section">사업장</h2>
          </div>
          <div className="split" style={{ alignItems: 'start' }}>
            <div>
              <div className="offices">
                {offices.map((o) => (
                  <div key={o.name} className="office">
                    <div className="office__name">{o.name}{o.main && <span className="tag">본사</span>}</div>
                    <div className="office__addr">{o.address}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Placeholder label="본사 위치 지도 (네이버·카카오 지도 삽입 자리)" ratio="4x3" />
              <ul className="mt-3" style={{ display: 'grid', gap: 8 }}>
                <li className="feature"><span className="feature__dot" /><div><div className="feature__title">지하철</div><div className="feature__desc">{directions.subway}</div></div></li>
                <li className="feature"><span className="feature__dot" /><div><div className="feature__title">버스</div><div className="feature__desc">{directions.bus}</div></div></li>
                <li className="feature"><span className="feature__dot" /><div><div className="feature__title">주차</div><div className="feature__desc">{directions.parking}</div></div></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export function SubNav({ items }) {
  return (
    <div className="subnav">
      <div className="container">
        <nav className="subnav__list" aria-label="페이지 내 이동">
          {items.map((it) => <a key={it.id} href={`#${it.id}`} className="subnav__link">{it.label}</a>)}
        </nav>
      </div>
    </div>
  )
}
