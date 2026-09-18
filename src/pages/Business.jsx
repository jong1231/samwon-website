import { Link } from 'react-router-dom'
import { businesses } from '../data/content'
import PageHead from '../components/PageHead'
import Placeholder from '../components/Placeholder'
import { SubNav } from './Company'
import { ArrowRight } from '../components/Icons'

export default function Business() {
  return (
    <>
      <PageHead title="사업분야" lead="미들마일에서 라스트마일까지, 보관에서 컨설팅까지. 화주의 공급망 어느 구간이든 삼원종합물류가 직접 운영합니다." />
      <SubNav items={businesses.map((b) => ({ id: b.id, label: b.name }))} />

      {businesses.map((b, i) => (
        <section key={b.id} id={b.id} className={`biz-section${i % 2 ? ' section--tint' : ''}`}>
          <div className="container">
            <div className={`split${i % 2 ? ' split--rev' : ''}`}>
              <div>
                <div className="small text-navy" style={{ fontWeight: 700 }}>{b.en}</div>
                <h2 className="h-section mt-1">{b.name}</h2>
                <p className="h-sub mt-2" style={{ color: 'var(--ink-2)', fontWeight: 600 }}>{b.slogan}</p>
                <div className="prose mt-3">
                  {b.overview.split('\n\n').map((p, k) => <p key={k}>{p}</p>)}
                </div>
              </div>
              <Placeholder label={b.photo} ratio="4x3" spec="권장 1200×900px" />
            </div>

            <ul className="grid-4 mt-6">
              {b.strengths.map((s) => (
                <li key={s.title} className="feature">
                  <span className="feature__dot" />
                  <div>
                    <div className="feature__title">{s.title}</div>
                    <p className="feature__desc">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="quote mt-6">
              <p className="quote__text">{b.quote}</p>
            </div>
            <div className="mt-4">
              <Link to="/contact" className="btn btn--primary">{b.name} 상담 신청 <ArrowRight width="18" height="18" /></Link>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
