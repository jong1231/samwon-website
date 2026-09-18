import { Link } from 'react-router-dom'
import { company, businesses } from '../data/content'
import { NAV } from './nav'

const LOGO = `${import.meta.env.BASE_URL}samwon_logo.svg`

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <Link to="/" className="footer__logo" aria-label="삼원종합물류 홈"><img src={LOGO} alt="SAMWON 삼원종합물류" /></Link>
          <div className="footer__info">
            <div><b>{company.name}</b>대표이사 {company.ceo}</div>
            <div><b>사업자등록번호</b>{company.bizNumber}</div>
            <div><b>본사</b>{company.address}</div>
            <div><b>차고지</b>{company.garage}</div>
            <div><b>전화</b>{company.phone} <b style={{ marginLeft: 12 }}>팩스</b>{company.fax}</div>
            <div><b>이메일</b>{company.email}</div>
          </div>
        </div>
        <div className="footer__links">
          <div>
            <h4>회사</h4>
            {NAV.map((n) => <Link key={n.to} to={n.to}>{n.label}</Link>)}
          </div>
          <div>
            <h4>사업분야</h4>
            {businesses.map((b) => <Link key={b.id} to={`/business#${b.id}`}>{b.name}</Link>)}
          </div>
          <div>
            <h4>바로가기</h4>
            <Link to="/driver">차주 전용</Link>
            <Link to="/contact">물류 상담 신청</Link>
            <Link to="/privacy">개인정보처리방침</Link>
          </div>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
        <span>Since {company.since}</span>
      </div>
    </footer>
  )
}
