import { Link } from 'react-router-dom'
import { company } from '../data/content'
import { Phone } from '../components/Icons'

// 2차 개발 예정: 휴대폰 본인인증 로그인 → 본인 운송료내역서 월별 조회 → PDF 다운로드.
// 이 페이지는 안내용이며, 이후 로그인/조회 화면을 이 라우트(/driver) 하위에 추가하면 됩니다.
const FEATURES = [
  { title: '운송료내역서 조회', desc: '월별 운송료와 공제 내역을 휴대폰에서 바로 확인하고 PDF로 저장합니다.' },
  { title: '배차 · 운행 일정', desc: '배정된 노선과 다음 운행 일정을 한 화면에서 확인합니다.' },
  { title: '서류 · 공지', desc: '안전교육, 보험, 계약 관련 서류와 회사 공지를 받아봅니다.' },
]

export default function Driver() {
  return (
    <div className="driver-page">
      <div className="container">
        <div className="driver-hero">
          <span className="tag tag--signal">서비스 준비 중</span>
          <h1 className="h-display">차주 파트너 전용 시스템</h1>
          <p className="lead mt-3">삼원 소속 차주 기사님을 위한 전용 서비스를 준비하고 있습니다. 오픈 전까지 운송료내역서 등 문의는 전담 관리자에게 연락 주십시오.</p>
        </div>

        <ul className="driver-features">
          {FEATURES.map((f) => (
            <li key={f.title} className="driver-feature">
              <div className="driver-feature__title">{f.title}</div>
              <p className="driver-feature__desc">{f.desc}</p>
            </li>
          ))}
        </ul>

        <div className="driver-contact">
          <div>
            <div style={{ fontSize: '.9rem', opacity: .8 }}>운송료 · 정산 문의</div>
            <b>{company.phone}</b>
            <div style={{ fontSize: '.9rem', opacity: .8, marginTop: 4 }}>평일 09:00~18:00 · 삼원운수 정산 담당</div>
          </div>
          <a href={`tel:${company.phone}`} className="btn btn--light btn--lg"><Phone /> 전화 걸기</a>
        </div>

        <div className="section" style={{ paddingTop: 40 }}>
          <Link to="/careers#driver" className="btn btn--ghost">신규 차주 모집 공고 보기</Link>
        </div>
      </div>
    </div>
  )
}
