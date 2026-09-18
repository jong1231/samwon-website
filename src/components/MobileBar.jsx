import { Link, useLocation } from 'react-router-dom'
import { Phone, Truck } from './Icons'
import { company } from '../data/content'

export default function MobileBar() {
  const onDriver = useLocation().pathname === '/driver'
  return (
    <div className={`mobile-bar${onDriver ? ' mobile-bar--single' : ''}`} role="navigation" aria-label="빠른 연락">
      <a href={`tel:${company.phone}`} className="btn btn--primary"><Phone /> {onDriver ? '운송료 · 정산 문의 전화' : '전화 상담'}</a>
      {!onDriver && <Link to="/driver" className="btn btn--signal"><Truck /> 차주 전용</Link>}
    </div>
  )
}
