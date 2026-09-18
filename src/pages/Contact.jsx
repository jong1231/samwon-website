import { useState } from 'react'
import { company, contactProcess, faqs } from '../data/content'
import PageHead from '../components/PageHead'
import Placeholder from '../components/Placeholder'
import { Plus } from '../components/Icons'

const SERVICES = ['기업물류 (미들마일)', '유통물류 (라스트마일)', '주선 · 에스원퀵', '창고운영 · 3PL', '물류컨설팅', '기타']

export default function Contact() {
  const [form, setForm] = useState({ company: '', name: '', phone: '', email: '', service: SERVICES[0], message: '' })
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  // 별도 서버 없이 동작하도록 메일 클라이언트로 전달합니다.
  // 추후 폼 수신 서비스(예: Formspree)나 자체 API로 교체 가능.
  const submit = (e) => {
    e.preventDefault()
    const subject = `[물류 상담 신청] ${form.company} / ${form.service}`
    const body = [
      `회사명: ${form.company}`, `담당자: ${form.name}`, `연락처: ${form.phone}`, `이메일: ${form.email}`,
      `관심 서비스: ${form.service}`, '', '문의 내용:', form.message,
    ].join('\n')
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <>
      <PageHead title="문의" lead="물동량과 배송 권역을 알려주시면 전담 컨설턴트가 24시간 이내에 연락드립니다. 현장 실사와 견적 제안은 무상입니다." />

      <section className="section">
        <div className="container contact-grid">
          <div>
            <div className="contact-card">
              <div className="contact-card__label">대표번호</div>
              <a href={`tel:${company.phone}`} className="contact-card__value" style={{ display: 'block' }}>{company.phone}</a>
              <div className="contact-card__sub">평일 09:00~18:00 · 팩스 {company.fax}</div>
            </div>
            <div className="contact-card">
              <div className="contact-card__label">이메일</div>
              <a href={`mailto:${company.email}`} className="contact-card__value" style={{ display: 'block', fontSize: '1.15rem' }}>{company.email}</a>
              <div className="contact-card__sub">견적 요청, 제휴 제안, 채용 문의</div>
            </div>
            <div className="contact-card">
              <div className="contact-card__label">본사</div>
              <div className="contact-card__value" style={{ fontSize: '1.05rem' }}>{company.address}</div>
              <div className="contact-card__sub">3호선 남부터미널역 3번 출구 도보 5분</div>
            </div>
            <div className="mt-3">
              <Placeholder label="본사 위치 지도 (네이버·카카오 지도 삽입 자리)" ratio="16x10" small />
            </div>
          </div>

          <div>
            <h2 className="h-sub">온라인 상담 신청</h2>
            <form className="form mt-3" onSubmit={submit}>
              <div className="form__row">
                <div className="field"><label htmlFor="f-company">회사명</label><input id="f-company" required value={form.company} onChange={set('company')} placeholder="예: 삼원식품" /></div>
                <div className="field"><label htmlFor="f-name">담당자</label><input id="f-name" required value={form.name} onChange={set('name')} placeholder="성함 / 직책" /></div>
              </div>
              <div className="form__row">
                <div className="field"><label htmlFor="f-phone">연락처</label><input id="f-phone" type="tel" required value={form.phone} onChange={set('phone')} placeholder="010-0000-0000" /></div>
                <div className="field"><label htmlFor="f-email">이메일</label><input id="f-email" type="email" value={form.email} onChange={set('email')} placeholder="name@company.com" /></div>
              </div>
              <div className="field">
                <label htmlFor="f-service">관심 서비스</label>
                <select id="f-service" value={form.service} onChange={set('service')}>{SERVICES.map((s) => <option key={s}>{s}</option>)}</select>
              </div>
              <div className="field">
                <label htmlFor="f-msg">문의 내용</label>
                <textarea id="f-msg" required value={form.message} onChange={set('message')} placeholder="월 물동량, 주요 배송 권역, 화물 특성(온도 관리 필요 여부 등)을 적어주시면 더 정확한 제안이 가능합니다." />
              </div>
              <p className="form__note">입력하신 정보는 상담 목적으로만 사용되며, 개인정보처리방침에 따라 보호됩니다.</p>
              <button type="submit" className="btn btn--primary btn--lg">상담 신청 보내기</button>
            </form>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className="section-head">
            <h2 className="h-section">상담부터 운영 개시까지</h2>
          </div>
          <ol className="process">
            {contactProcess.map((p) => (
              <li key={p.title} className="process__step" style={{ display: 'grid', gap: 4 }}>
                <span>{p.title}</span>
                <span className="small" style={{ fontWeight: 400 }}>{p.desc}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="h-section">자주 묻는 질문</h2>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>
    </>
  )
}

function FAQ({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="faq">
      {items.map((it, i) => (
        <div key={it.q} className={`faq__item${open === i ? ' is-open' : ''}`}>
          <button type="button" className="faq__q" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
            <span>{it.q}</span><Plus />
          </button>
          <div className="faq__a">{it.a}</div>
        </div>
      ))}
    </div>
  )
}
