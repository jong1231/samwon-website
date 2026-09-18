import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { NAV } from './nav'
import { Menu, Close, Truck } from './Icons'
import { company } from '../data/content'

const LOGO = `${import.meta.env.BASE_URL}samwon_logo.svg`

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header className="header">
        <div className="container header__inner">
          <Link to="/" className="header__logo" aria-label="삼원종합물류 홈">
            <img src={LOGO} alt="SAMWON 삼원종합물류" width="456" height="159" />
          </Link>

          <nav className="nav" aria-label="주요 메뉴">
            {NAV.map((n) => (
              <NavLink key={n.to} to={n.to} className={({ isActive }) => `nav__link${isActive ? ' is-active' : ''}`}>{n.label}</NavLink>
            ))}
          </nav>

          <div className="header__actions">
            <Link to="/driver" className="btn btn--signal btn--nav"><Truck /> 차주 전용</Link>
            <Link to="/contact" className="btn btn--primary btn--nav">물류 상담 신청</Link>
          </div>

          <button className="header__menu-btn" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="drawer" aria-label={open ? '메뉴 닫기' : '메뉴 열기'}>
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </header>

      {open && (
        <div id="drawer" className="drawer">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} className={({ isActive }) => `drawer__link${isActive ? ' is-active' : ''}`}>{n.label}</NavLink>
          ))}
          <div className="drawer__cta">
            <Link to="/driver" className="btn btn--signal btn--lg btn--block"><Truck /> 차주 전용</Link>
            <Link to="/contact" className="btn btn--primary btn--lg btn--block">물류 상담 신청</Link>
            <a href={`tel:${company.phone}`} className="btn btn--ghost btn--lg btn--block">대표번호 {company.phone}</a>
          </div>
          <div className="drawer__meta">{company.name} · {company.address}</div>
        </div>
      )}
    </>
  )
}
