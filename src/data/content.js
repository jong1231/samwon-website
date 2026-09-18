// ─────────────────────────────────────────────────────────────
// 삼원종합물류 홈페이지 콘텐츠
// 기존 홈페이지(jong1231.github.io/samwon-logistics)의 내용을 기준으로 정리.
// 문구·수치 수정은 이 파일만 고치면 사이트 전체에 반영됩니다.
// ─────────────────────────────────────────────────────────────

import ssg from '../assets/partners/ssg.svg'
import homeplus from '../assets/partners/homeplus.png'
import glovis from '../assets/partners/glovis.svg'
import hyundaiDept from '../assets/partners/hyundai_dept.svg'
import haitai from '../assets/partners/haitai.svg'
import hanexpress from '../assets/partners/hanexpress.png'
import dongwon from '../assets/partners/dongwon.svg'
import nonghyup from '../assets/partners/nonghyup.svg'
import yonsei from '../assets/partners/yonsei.png'
import geoyoung from '../assets/partners/geoyoung.png'
import taeeun from '../assets/partners/taeeun.png'
import naturalway from '../assets/partners/naturalway.png'
import cretec from '../assets/partners/cretec.gif'
import lotte from '../assets/partners/lotte.svg'
import yuhanKimberly from '../assets/partners/yuhan_kimberly.png'
import yuhan from '../assets/partners/yuhan.svg'
import msfood from '../assets/partners/msfood.png'
import kctc from '../assets/partners/kctc.png'
import bluepharm from '../assets/partners/bluepharm.png'
import coway from '../assets/partners/coway.svg'

export const company = {
  name: '삼원종합물류㈜',
  nameEn: 'SAMWON LOGISTICS',
  phone: '02-598-3001',
  fax: '02-597-2564',
  email: 'info@3won.kr',
  address: '서울특별시 서초구 효령로 328 아트리트21 6층',
  garage: '경기도 이천시 설성면 설가로 250-29 (상봉리)',
  bizNumber: '126-81-17267',
  ceo: '정종혁',
  founded: '1992년 2월 1일',
  revenue: '870억 원 (2024년, 자회사 포함)',
  creditRating: 'BB+ (2024년 4월)',
  employees: '6개 계열사 통합 운영',
  since: 1992,
}

export const hero = {
  title: '공급망의 시작부터 끝까지\n삼원이 설계하고, 삼원이 책임집니다',
  subtitle:
    '미들마일 수송, 라스트마일 배송, HACCP 콜드체인, 스마트 창고, SCM 컨설팅. 6개 전문 계열사의 통합 역량으로 물류 비용을 줄이고 서비스 품질을 높입니다.',
  primaryCta: '물류 상담 신청',
  driverCta: '차주 전용',
  photo: '삼원 차량이 정렬된 이천 물류센터 전경 (가로형)',
}

export const stats = [
  { value: 34, suffix: '년', label: '물류 운영 역사, 1992년 창립' },
  { value: 870, suffix: '억', label: '그룹 연간 매출, 2024년 기준' },
  { value: 1000, suffix: '대+', label: '자체 영업용 운행 차량' },
  { value: 40, suffix: '개사+', label: '장기 파트너 거래처' },
]

export const certifications = [
  {
    title: '우수물류기업 인증',
    org: '국토교통부',
    desc: '운송 인프라, 안전관리, 정보시스템 전 분야 심사를 통과한 공인 품질 보증입니다.',
  },
  {
    title: 'HACCP 콜드체인 인증',
    org: '식품의약품안전처',
    desc: '신선식품과 의약품의 입고부터 최종 배송까지 온도 이탈 없는 콜드체인을 유지합니다.',
  },
  {
    title: 'ISO 9001 · 14001 · 45001',
    org: '국제표준화기구',
    desc: '품질, 환경, 안전보건 세 가지 국제 표준을 동시에 충족하여 글로벌 거래처 감사에 대응합니다.',
  },
  {
    title: 'ESG 물류 로드맵',
    org: '전기·수소 화물차 30대 도입',
    desc: '친환경 차량 전환과 배출 저감 경로 설계로 고객사의 Scope 3 감축 목표를 함께 달성합니다.',
  },
]

export const businesses = [
  {
    id: 'corporate',
    name: '기업물류',
    en: 'Middle Mile',
    short: '공장과 물류센터 사이 간선 구간을 산업별 전용 차량과 JIT 체계로 무중단 운영합니다.',
    slogan: '공장과 거점 사이, 끊기지 않는 공급망의 심장부를 삼원이 운영합니다',
    overview:
      '생산지에서 물류센터, 혹은 거점 간을 연결하는 미들마일 구간은 공급망 전체의 효율을 결정짓는 핵심 구간입니다. 이 구간의 지연이나 사고는 후속 공정 전체의 차질로 이어집니다.\n\n삼원종합물류는 전자·기기, 의약품, 신선 F&B, 편의점·공산품 등 산업별 특성을 반영한 전용 차량 편성과 JIT 적기 운송 시스템으로 정시 도착률과 화물 무결성을 동시에 보장합니다.',
    strengths: [
      { title: '전자 / 산업기기', desc: '가전·반도체 장비·산업 설비의 진동·충격 방지 정밀 결박 운송, JIT 적기 납품' },
      { title: '의약품 / 유제품', desc: '2~8℃ 정밀 온도 구간 관리, 온도 로거 데이터 화주 실시간 공유' },
      { title: '신선 / F&B', desc: 'HACCP 인증 축산물·식자재 전문 차량 상시 편성, 교차오염 방지 전용 적재함' },
      { title: '편의점 / 공산품', desc: '전국 허브&스포크 거점 네트워크 기반 B2B 대량 간선 수송, 24시간 배차' },
    ],
    quote: '생산 라인이 멈추지 않으려면, 운송이 먼저 멈추지 않아야 합니다.',
    photo: '대형 윙바디 차량 간선 수송 장면',
  },
  {
    id: 'distribution',
    name: '유통물류',
    en: 'Last Mile',
    short: 'SSG·홈플러스 등 대형 유통 전담 인프라로 정시 배송률 98% 이상을 유지합니다.',
    slogan: '고객의 문 앞, 마지막 1미터까지 귀사의 브랜드 경험을 완성합니다',
    overview:
      '라스트마일 배송은 소비자가 브랜드를 직접 체감하는 최종 접점입니다. 배송 지연, 오배송, 파손은 곧바로 고객 이탈과 브랜드 신뢰 하락으로 이어집니다.\n\n삼원종합물류는 SSG.COM·홈플러스 등 국내 대형 유통사 전담 배송 인프라, 현대백화점 프리미엄 퀵커머스, 의약품 GDP 기준 라스트마일 배송 등 채널별 특화 서비스로 정시 배송률 98% 이상을 지속 달성하고 있습니다.',
    strengths: [
      { title: '이커머스 전담 배송', desc: 'SSG.COM·홈플러스 전담 권역 배정, 일 수천 건 규모 B2C 배송 안정 운영' },
      { title: '프리미엄 퀵커머스', desc: '현대백화점 VIP 당일 배송, 명절 선물 배송, 도심 거점 최적화 배송' },
      { title: '의약품 전문 유통', desc: '전국 약국·병원 전용 노선, GDP 준수 실시간 온도 관제 및 수령 확인' },
      { title: '냉장·냉동 전문배송', desc: 'HACCP 인증 냉장·냉동 전용 차량, 최종 배송 단계까지 콜드체인 유지' },
    ],
    quote: '배송이 끝나는 곳에서, 귀사 브랜드의 첫 인상이 결정됩니다.',
    photo: '탑차 라스트마일 배송 장면 (아파트 단지 또는 매장 앞)',
  },
  {
    id: 'brokerage',
    name: '주선 · 에스원퀵',
    en: 'Brokerage & Quick',
    short: '웹 접수부터 실시간 배차, 카카오톡 관제, 월별 통합 정산까지 하나의 디지털 워크플로우로 완결합니다.',
    slogan: '전화 접수와 수기 정산, 레거시 물류의 비효율을 디지털 하나로 해결합니다',
    overview:
      '기존 화물 주선 방식의 근본적인 문제는 불투명성입니다. 전화로 접수하고, 배차 현황을 알 수 없으며, 정산은 건별 현금으로 처리되는 구조에서는 비용 통제도 품질 관리도 어렵습니다.\n\n에스원퀵(S1 Quick) 플랫폼은 웹 기반 즉시 접수, 실시간 배차, 기업 전용 카카오톡 1:1 관제, 월별 통합 세금계산서 정산까지 물류 주선의 전 과정을 하나의 디지털 워크플로우로 완결합니다.',
    strengths: [
      { title: '웹 접수 & 즉시 배차', desc: '간편 오더 입력 즉시 최적 차량 매칭, 전화 접수 대비 대기 시간 80% 이상 단축' },
      { title: '카카오톡 실시간 관제', desc: '기사 위치·배송 상태·수령 확인을 기업 전용 채널로 1:1 실시간 알림' },
      { title: '월별 통합 정산', desc: '건별 현금 정산 탈피, 월 1회 세금계산서 일괄 발행으로 회계 업무 간소화' },
      { title: '부서별 독립 계정', desc: '부서별 ID 발급, 오더 이력·비용 통계·실적 리포트 자동 생성' },
    ],
    quote: '물류의 복잡함은 전화 한 통으로 해결되지 않습니다.',
    photo: '에스원퀵 플랫폼 화면 또는 퀵 배송 차량',
  },
  {
    id: 'warehouse',
    name: '창고운영 · 리스크관리',
    en: 'Warehousing',
    short: 'WMS 자동화와 종합 보험, 24시간 관제의 이중 안전망으로 재고 오차와 손실 리스크를 차단합니다.',
    slogan: '보이지 않는 곳에서 더 철저하게, 시스템과 보험의 이중 안전망을 가동합니다',
    overview:
      '창고에서 발생하는 재고 오차, 피킹 오류, 화물 파손은 화주에게 직접적인 금전 손실입니다. 유통기한 관리가 필수인 식자재·의약품은 단 한 건의 실수가 전체 로트 폐기로 이어질 수 있습니다.\n\n삼원종합물류는 WMS 기반 바코드·RFID 자동 검수 체계로 휴먼 에러를 구조적으로 제거하고, 화물·화재·배상책임 종합 보험과 연중무휴 전담 관제팀의 이중 안전망으로 운영 리스크를 원천 차단합니다.',
    strengths: [
      { title: 'WMS 자동화 운영', desc: '이천 물류센터 및 백화점 내 보관시설, 바코드·RFID 기반 입출고·재고 실사 자동화' },
      { title: '프랜차이즈 전문 3PL', desc: '20개 이상 식자재·F&B 브랜드 전담 보관·분류·배송 통합 위탁 운영' },
      { title: '24시간 상시 관제', desc: '연중무휴 전담 관제실, 온도 이탈·도난·화재 등 돌발 상황 5분 내 초동 대응' },
      { title: '종합 보험 완비', desc: '화물·적재물·화재·배상책임 종합 보험 가입, 사고 시 투명한 보상 절차 즉시 가동' },
    ],
    quote: '안전은 보이지 않을 때 가장 빛나고, 사고는 준비하지 않았을 때 찾아옵니다.',
    photo: '이천 물류센터 내부 랙 및 지게차 작업 장면',
  },
  {
    id: 'consulting',
    name: '물류컨설팅',
    en: 'SCM Consulting',
    short: '34년 현장 데이터와 TMS·WMS 시뮬레이션으로 연간 물류비 10~25% 절감안을 설계합니다.',
    slogan: '34년 현장 노하우와 데이터 분석으로 귀사의 숨은 물류 비용을 찾아냅니다',
    overview:
      '많은 기업이 물류비를 어쩔 수 없는 고정 비용으로 인식합니다. 그러나 운송 거점 재배치, 배차 경로 최적화, 창고 레이아웃 재설계만으로도 연간 물류비의 10~25%를 절감할 수 있습니다.\n\n삼원종합물류의 SCM 컨설팅은 34년간 축적된 현장 운영 데이터와 TMS·WMS 시뮬레이션을 결합하여 공급망 전체를 진단하고 실행 가능한 절감안을 제시합니다. 보고서에 그치지 않고 실제 물류 운영까지 책임지는 실행형 컨설팅입니다.',
    strengths: [
      { title: 'SCM 공급망 진단', desc: '조달·생산·보관·배송 전 구간 물류 흐름 분석, 리드타임 병목과 비효율 도출' },
      { title: '운송 비용 시뮬레이션', desc: '실제 운송 데이터 기반 거점 재배치·경로 최적화, 절감 효과 사전 정량 검증' },
      { title: 'WMS 레이아웃 설계', desc: '제품 특성·회전율에 맞는 적치 방식 재설계, 자동화 설비 도입 ROI 분석' },
      { title: 'ESG 물류 로드맵', desc: '친환경 차량 전환 타당성 분석, 탄소 배출 저감 경로 설계, Scope 3 대응 전략' },
    ],
    quote: '물류 혁신은 보이지 않는 비용을 찾아내는 것부터 시작됩니다.',
    photo: '컨설팅 미팅 또는 관제 모니터링 화면',
  },
]

export const ceoMessage = {
  name: '정종혁',
  title: '대표이사',
  photo: '대표이사 프로필 사진 (세로형)',
  paragraphs: [
    '물류는 단순한 화물의 이동이 아닙니다. 고객의 제품이 최적의 상태로, 약속된 시간에, 정확한 장소에 도달하도록 보장하는 공급망 전체의 설계이자 실행입니다.',
    '1992년 창립 이래 삼원종합물류는 이 원칙 하나에 집중해 왔습니다. 그 결과 6개 전문 계열사를 아우르는 통합 물류 체계를 구축하였고, 연간 870억 원 규모의 물류 서비스를 안정적으로 수행하는 종합물류 기업으로 성장하였습니다.',
    '오늘날 공급망은 그 어느 때보다 복잡하고 불확실합니다. 이커머스의 성장, 콜드체인 규제의 고도화, ESG 경영의 필수화 등 시장이 요구하는 물류 수준은 나날이 높아지고 있습니다. 삼원종합물류는 스마트 WMS·TMS 인프라 투자를 확대하고, 전기·수소 친환경 차량 도입 로드맵을 실행하고 있습니다.',
    '삼원종합물류는 단순한 운송 업체가 아닌, 고객사의 공급망을 함께 설계하고 함께 책임지는 전략적 파트너가 되겠습니다.',
  ],
}

export const history = [
  { year: '2026', events: ['창립 34주년, 전국 스마트 통합 물류 관제 플랫폼 전면 가동', '디지털 배차·관제 솔루션 고도화, 실시간 화물 추적 체계 완성'] },
  { year: '2024', events: ['그룹 연간 매출 870억 원 달성 (자회사 포함)', '기업 신용등급 BB+ 획득', '전기·수소 친환경 화물차 30대 도입 로드맵 수립 및 1차 배치'] },
  { year: '2022', events: ['이천 물류센터 차세대 WMS 고도화, 바코드·RFID 기반 재고 실사 자동화', '전국 물류 배차 네트워크 통합 플랫폼(TMS) 정식 런칭'] },
  { year: '2018', events: ['ISO 9001·14001·45001 글로벌 통합 인증 동시 달성', '대형 제조·유통사 대상 Supply Chain 컨설팅 서비스 개시'] },
  { year: '2015', events: ['SSG.COM·홈플러스 등 대형 이커머스·유통사 전담 배송 파트너십 체결', '백화점 프리미엄 퀵커머스 배송 서비스 론칭'] },
  { year: '2012', events: ['HACCP 획득, 콜드체인 의약품·F&B 전문 운송 서비스 개시', '의약품 GDP 준수 배송 체계 수립'] },
  { year: '2008', events: ['국토교통부 우수물류기업 인증 획득', '계열사 수직·수평 통합 모델 설계 및 그룹 시너지 체계 구축'] },
  { year: '1992', events: ['1992년 2월 1일 삼원종합물류㈜ 설립', '화물 운송 주선 및 물류 컨설팅 사업 개시, 서울 서초구 본사 개소'] },
]

export const subsidiaries = [
  { name: '삼원종합물류㈜', role: '그룹 컨트롤타워', desc: '물류 컨설팅, SCM 전략 수립, 통합 운영 관제' },
  { name: '삼원운수㈜', role: '화물 운송', desc: '자체 영업용 차량 1,000대 이상, 간선·권역 운송, 차주 관리 및 안전교육' },
  { name: '㈜서진물류', role: '라스트마일', desc: '이커머스·B2C 전문 배송, SSG·홈플러스 전담 운영' },
  { name: '동국상운㈜', role: '중량물 · 특수화물', desc: '대형 설비 운송, 항만 컨테이너 연계 수출입 물류' },
  { name: '㈜에스엘맨파워', role: '물류 인력', desc: '물류센터 운영 인력 공급, 입출고·분류·검수 위탁 운영' },
  { name: '㈜에스원글로벌', role: '디지털 플랫폼', desc: '에스원퀵 퀵서비스 플랫폼 운영, 물류창고 위탁 관리(3PL)' },
]

export const fleet = [
  { type: '대형 윙바디 / 카고', count: 120, desc: '11t~25t급 간선 수송, 수출입 컨테이너 셔틀, 대형 제조사 JIT 전용' },
  { type: '중·소형 탑차 / 카고', count: 130, desc: '1t~5t급 B2B 기업 배송, 권역별 허브&스포크 수송' },
  { type: '냉장 / 냉동 특수차량', count: 65, desc: 'HACCP 인증 콜드체인 전용, 식자재·의약품 정밀 온도 관제 장착' },
  { type: '컨테이너 / 특수 트레일러', count: 35, desc: '40ft 컨테이너 운송, 중량물·플랜트 설비 특수 수송' },
]

export const offices = [
  { name: '서울 본사', address: '서울시 서초구 효령로 328 아트리트21 6층', main: true },
  { name: '인천 스마트허브', address: '인천광역시 서구 북항단지로 91 스마트허브센터' },
  { name: '남이천 물류센터', address: '경기도 이천시 모가면 공원로 134 B동' },
  { name: '이천 차고지', address: '경기도 이천시 설성면 설가로 250-29' },
  { name: '부산 사무소', address: '부산광역시 동구' },
  { name: '현대백화점 압구정본점', address: '서울시 강남구 압구정로 165 지하 1층' },
  { name: '현대백화점 신촌점', address: '서울시 서대문구 신촌로 83 지하 5층' },
  { name: '더현대 서울', address: '서울시 영등포구 여의대로 108 지하 3층' },
  { name: '현대백화점 킨텍스점', address: '경기도 고양시 일산서구 호수로 817 지하 3층' },
]

export const directions = {
  subway: '3호선 남부터미널역 3번 출구 도보 5분',
  bus: '서초동예술의전당 정류장 하차 (1500, 3000, 401)',
  parking: '건물 기계식 주차장 이용 가능 (방문 시 무료주차 도장 발급)',
}

export const partners = [
  { name: 'SSG.COM', logo: ssg },
  { name: '홈플러스', logo: homeplus },
  { name: '현대글로비스', logo: glovis },
  { name: '현대백화점', logo: hyundaiDept },
  { name: '해태', logo: haitai },
  { name: '한익스프레스', logo: hanexpress },
  { name: '동원산업', logo: dongwon },
  { name: '농협물류', logo: nonghyup },
  { name: '연세우유', logo: yonsei },
  { name: '지오영', logo: geoyoung },
  { name: '태은물류', logo: taeeun },
  { name: '네추럴웨이', logo: naturalway },
  { name: '크레텍책임', logo: cretec },
  { name: '롯데로지스틱스', logo: lotte },
  { name: '유한킴벌리', logo: yuhanKimberly },
  { name: '유한양행', logo: yuhan },
  { name: '엠즈푸드시스템', logo: msfood },
  { name: 'KCTC', logo: kctc },
  { name: '청십자약품', logo: bluepharm },
  { name: '코웨이', logo: coway },
]

export const caseStudies = [
  { client: '대형 이커머스·마트', service: '유통물류', result: '수도권 전담 권역 일 수천 건 신선식품 라스트마일 배송, 정시 배송률 98% 이상' },
  { client: '백화점 프리미엄 배송', service: '유통물류', result: '현대백화점 4개 점포 지하 물류거점 직영 운영, VIP 당일 배송 및 명절 선물 배송' },
  { client: '제약·의약품 유통', service: '기업물류 · 유통물류', result: '2~8℃ 정밀 온도 관리 차량으로 전국 약국·병원 GDP 준수 배송' },
  { client: '식자재·F&B 프랜차이즈', service: '창고운영', result: '20개 이상 브랜드 보관·분류·배송 통합 3PL 운영, WMS 기반 재고 실사 자동화' },
]

export const recruitment = {
  title: '삼원종합물류의 다음 성장을 함께 이끌 동료를 찾습니다',
  subtitle: '물류는 사람이 만듭니다. 현장의 전문성과 기술 감각을 함께 갖춘 인재와 업계의 기준을 새롭게 세워갑니다.',
  values: [
    { title: '실행력', desc: '치밀한 계획보다 빠른 실행을 중시합니다. 현장에서 즉시 판단하고 결과로 증명합니다.' },
    { title: '파트너십', desc: '고객사·차주·계열사와의 신뢰가 물류의 근간입니다. 약속을 지키고 투명하게 소통합니다.' },
    { title: '기술 감각', desc: 'WMS·TMS·데이터 분석 등 디지털 물류 기술을 현장에 접목하는 실용적 혁신을 추구합니다.' },
    { title: '책임감', desc: '배송 한 건에도 고객의 비즈니스가 달려 있습니다. 맡은 업무에 끝까지 책임집니다.' },
  ],
  process: ['서류전형', '1차 직무면접', '2차 임원면접', '최종 합격'],
  openings: [
    { title: '물류운영 매니저 (WMS/센터 관리)', dept: '물류사업부', type: '정규직' },
    { title: '수도권 배차 운영 담당 (TMS 기반)', dept: '운송사업부', type: '정규직' },
    { title: '이천 물류센터 현장 운영 리더', dept: '창고운영부', type: '정규직' },
    { title: '물류 IT 솔루션 엔지니어', dept: 'IT솔루션팀', type: '정규직' },
  ],
  driverJobs: [
    { title: '14톤 윙바디 대기업 식자재 전담 수도권 간선 수송', type: '차량분양', vehicle: '14톤 윙바디', area: '광주/여주 센터 ~ 수도권 거점', hours: '08:00~17:00 (주 5일)' },
    { title: '1톤 냉동탑차 대형 유통마트 라스트마일 배송', type: '일자리', vehicle: '1톤 냉동탑차 (분양 또는 본인 차량)', area: '서울 서초구·강남구 권역', hours: '06:00~15:00 (주 6일)' },
    { title: '5톤 윙바디 중부권 제조공장 자재 수송 (야간)', type: '일자리', vehicle: '5톤 윙바디', area: '경기 이천 ~ 대전 대덕산단', hours: '21:00~06:00 (주 5일)' },
    { title: '2.5톤 탑차 제약사 의약품 콜드체인 유통', type: '차량분양', vehicle: '2.5톤 탑차 (온도 기록계 장착)', area: '경기 김포 ~ 서울 대형병원·약국', hours: '07:00~16:00 (주 5일)' },
  ],
  driverRequirements: ['화물운송종사자 자격증 소지', '영업용 번호판 보유 또는 회사 차량 분양 신청', '1~2주 동승 교육 후 단독 운행'],
}

export const contactProcess = [
  { title: '상담 접수', desc: '온라인 문의 양식 또는 대표번호 02-598-3001로 접수합니다.' },
  { title: '현장 분석', desc: '전담 컨설턴트가 물동량, 배송 권역, 운송 패턴을 현장에서 확인합니다.' },
  { title: '견적 · 제안', desc: '운송 시뮬레이션으로 최적 단가를 산출하고 비용 절감안을 포함한 견적서를 제출합니다.' },
  { title: '계약 · 운영 개시', desc: 'SLA 협의와 계약 체결 후 전담 차량을 고정 배치하고 WMS·TMS를 연동합니다.' },
]

export const faqs = [
  { q: '기업 맞춤형 물류 제휴 계약은 어떻게 진행되나요?', a: '문의 양식을 작성하시거나 대표번호로 연락 주시면 담당 컨설턴트가 24시간 이내에 연락드려 물동량과 배송 주기를 파악합니다. 현장 실사 후 맞춤 견적서와 운영 컨설팅을 무상으로 제안해 드립니다.' },
  { q: '에스원퀵은 기업 전용 서비스인가요?', a: '기본적으로 기업 고객(B2B)의 월별 통합 정산과 1:1 알림 관제를 중심으로 운영합니다. 다만 일반 단발성 화물 주선과 퀵 오더도 처리해 드립니다.' },
  { q: 'WMS API 연동이 지원되나요?', a: '네. 고객사 사내 ERP 및 주요 쇼핑몰 호스팅사(카페24, 메이크샵 등)와의 API 연동을 지원하며, 입출고 정보와 실시간 재고 현황을 확인하실 수 있습니다.' },
  { q: 'HACCP 기준 콜드체인 차량이 상시 지원되나요?', a: '네. 삼원운수 및 계열사의 냉장·냉동 탑차 네트워크로 신선식품, 식자재, 온도 유지가 필요한 의약품을 수송합니다. 실시간 온도 관제 장치가 장착되어 있습니다.' },
  { q: '배차 정보와 배송 현황을 실시간으로 확인할 수 있나요?', a: '네. 차량 매칭 즉시 기사 정보(성함, 차량번호, 연락처)가 연동되며, 배송 완료 시 카카오톡 알림톡으로 수령인 전자 서명과 완료 현황이 발송됩니다.' },
  { q: '삼원의 차주로 지원하려면 자격 조건이 어떻게 되나요?', a: '화물운송종사자 자격증과 영업용 번호판을 소지하셔야 합니다. 상세 모집 요건은 채용 페이지의 차주 모집 공고를 확인하신 뒤 온라인 또는 유선으로 지원하실 수 있습니다.' },
]
