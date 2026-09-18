import { Link } from 'react-router-dom'

export default function PageHead({ title, lead, crumb }) {
  return (
    <div className="page-head">
      <div className="container page-head__inner">
        <nav className="crumbs" aria-label="현재 위치">
          <Link to="/">홈</Link><span>/</span><span>{crumb || title}</span>
        </nav>
        <h1 className="h-display">{title}</h1>
        {lead && <p className="lead">{lead}</p>}
      </div>
    </div>
  )
}
