import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import MobileBar from './MobileBar'

export default function Layout() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) { el.scrollIntoView({ block: 'start' }); return }
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])
  return (
    <>
      <a href="#main" className="sr-only">본문으로 건너뛰기</a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <MobileBar />
    </>
  )
}
