import PageHead from '../components/PageHead'
import { company } from '../data/content'

export default function Privacy() {
  return (
    <>
      <PageHead title="개인정보처리방침" />
      <section className="section">
        <div className="container legal">
          <p>{company.name}(이하 "회사")는 「개인정보 보호법」에 따라 이용자의 개인정보를 보호하고 관련 고충을 신속하게 처리하기 위하여 다음과 같이 개인정보처리방침을 수립·공개합니다.</p>
          <h2>1. 수집하는 개인정보 항목과 목적</h2>
          <ul>
            <li>물류 상담 신청: 회사명, 담당자명, 연락처, 이메일, 문의 내용 — 상담 및 견적 제공</li>
            <li>채용 지원: 성명, 연락처, 이메일, 경력 사항 — 채용 전형 진행</li>
            <li>차주 지원 및 차주 전용 서비스: 성명, 연락처, 차량 정보 — 배차 및 정산 관리</li>
          </ul>
          <h2>2. 보유 및 이용 기간</h2>
          <p>수집 목적이 달성된 후 지체 없이 파기합니다. 다만 관계 법령에 따라 보존이 필요한 경우 해당 기간 동안 보관합니다.</p>
          <h2>3. 제3자 제공 및 위탁</h2>
          <p>회사는 이용자의 동의 없이 개인정보를 제3자에게 제공하지 않습니다. 업무 위탁이 발생하는 경우 위탁 내용과 수탁자를 본 방침에 공개합니다.</p>
          <h2>4. 이용자의 권리</h2>
          <p>이용자는 언제든지 개인정보 열람, 정정, 삭제, 처리 정지를 요구할 수 있으며, 회사는 지체 없이 조치합니다.</p>
          <h2>5. 개인정보 보호책임자</h2>
          <p>{company.name} · 전화 {company.phone} · 이메일 {company.email}</p>
          <p className="mt-4 small">본 방침은 게시일로부터 적용됩니다.</p>
        </div>
      </section>
    </>
  )
}
