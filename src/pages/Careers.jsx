import { Link } from 'react-router-dom'
import { recruitment, company } from '../data/content'
import PageHead from '../components/PageHead'
import Placeholder from '../components/Placeholder'
import { SubNav } from './Company'
import { Truck } from '../components/Icons'

export default function Careers() {
  return (
    <>
      <PageHead title="채용" lead={recruitment.subtitle} />
      <SubNav items={[{ id: 'talent', label: '인재상' }, { id: 'jobs', label: '채용 공고' }, { id: 'driver', label: '차주 모집' }]} />

      <section id="talent" className="biz-section">
        <div className="container">
          <div className="section-head">
            <h2 className="h-section">{recruitment.title}</h2>
          </div>
          <ul className="grid-4">
            {recruitment.values.map((v) => (
              <li key={v.title} className="value">
                <div className="value__title">{v.title}</div>
                <p className="value__desc">{v.desc}</p>
              </li>
            ))}
          </ul>
          <div className="grid-2 mt-4">
            <Placeholder label="사무실 근무 모습" ratio="16x10" small />
            <Placeholder label="물류센터 현장 팀 사진" ratio="16x10" small />
          </div>
        </div>
      </section>

      <section id="jobs" className="biz-section section--tint">
        <div className="container">
          <div className="section-head">
            <h2 className="h-section">채용 공고</h2>
            <p className="lead">지원서는 이메일({company.email})로 접수합니다. 서류 검토 후 개별 연락드립니다.</p>
          </div>
          <div>
            {recruitment.openings.map((j) => (
              <div key={j.title} className="job">
                <div>
                  <div className="job__title">{j.title}</div>
                  <div className="job__meta mt-1"><span>{j.dept}</span><span>{j.type}</span><span>채용 시 마감</span></div>
                </div>
                <a href={`mailto:${company.email}?subject=${encodeURIComponent(`[입사지원] ${j.title}`)}`} className="btn btn--ghost">지원하기</a>
              </div>
            ))}
          </div>
          <h3 className="h-sub mt-6">전형 절차</h3>
          <ol className="process mt-2">
            {recruitment.process.map((p) => <li key={p} className="process__step">{p}</li>)}
          </ol>
        </div>
      </section>

      <section id="driver" className="biz-section">
        <div className="container">
          <div className="section-head">
            <span className="tag tag--signal">차주 모집</span>
            <h2 className="h-section mt-2">고정 노선, 정시 정산, 전담 관리자</h2>
            <p className="lead">삼원운수 직영 관리 노선입니다. 물량과 정산 일정이 보장되며 초보 기사님도 동승 교육 후 단독 운행이 가능합니다.</p>
          </div>
          <ul className="grid-2">
            {recruitment.driverJobs.map((d) => (
              <li key={d.title} className="driver-job">
                <span className="tag tag--signal" style={{ justifySelf: 'start' }}>{d.type}</span>
                <div className="driver-job__title">{d.title}</div>
                <dl>
                  <dt>차종</dt><dd>{d.vehicle}</dd>
                  <dt>구간</dt><dd>{d.area}</dd>
                  <dt>시간</dt><dd>{d.hours}</dd>
                </dl>
                <a href={`tel:${company.phone}`} className="btn btn--signal"><Truck /> 전화 문의 {company.phone}</a>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <h3 className="h-sub">지원 자격</h3>
            <ul className="mt-2" style={{ display: 'grid', gap: 8 }}>
              {recruitment.driverRequirements.map((r) => (
                <li key={r} className="feature"><span className="feature__dot" style={{ background: 'var(--signal)' }} /><div className="feature__title" style={{ fontWeight: 600 }}>{r}</div></li>
              ))}
            </ul>
          </div>
          <div className="mt-4 row">
            <Link to="/driver" className="btn btn--ghost">이미 소속 차주이신가요? 차주 전용 페이지</Link>
          </div>
        </div>
      </section>
    </>
  )
}
