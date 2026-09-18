import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <section className="section">
      <div className="container" style={{ textAlign: 'center', padding: '80px 0' }}>
        <h1 className="h-section">페이지를 찾을 수 없습니다</h1>
        <p className="lead mt-2" style={{ margin: '14px auto 0' }}>주소가 변경되었거나 삭제된 페이지입니다.</p>
        <Link to="/" className="btn btn--primary mt-4">홈으로</Link>
      </div>
    </section>
  )
}
