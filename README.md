# 삼원종합물류 홈페이지 (2026 리뉴얼)

React + Vite 기반 반응형 회사 홈페이지. GitHub Pages로 배포합니다.

## 로컬 실행
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # dist/ 생성 (GitHub Pages용)
```

## GitHub Pages 배포
1. GitHub에서 `samwon-website` 저장소를 만들고 이 폴더를 `main` 브랜치에 푸시합니다.
2. 저장소 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 선택합니다.
3. 이후 `main`에 푸시할 때마다 `.github/workflows/deploy.yml`이 자동으로 빌드·배포합니다.
4. 주소: `https://jong1231.github.io/samwon-website/`

저장소 이름을 바꾸면 `vite.config.js`의 `REPO_NAME`과 `index.html`의 `og:image` 주소도 같이 바꿔야 합니다.

## 내용 수정
- 모든 문구·수치·연혁·고객사: `src/data/content.js`
- 메뉴 구성: `src/components/nav.js`
- 색상·글자·간격: `src/styles.css` 상단 `:root` 토큰
- 로고: `public/samwon_logo.svg` (헤더·푸터), `public/og-image.png` (링크 공유 이미지)

## 사진 넣기
회색 박스([사진: …])가 있는 자리에 이미지를 넣으려면 `src/assets/` 에 파일을 두고
해당 페이지에서 `<Placeholder src={이미지} … />` 처럼 `src`를 넘기면 됩니다.

## 차주 전용 기능 (2차 개발)
`/driver` 라우트(`src/pages/Driver.jsx`)가 안내 페이지로 자리를 잡고 있습니다.
로그인·운송료내역서 조회 기능은 이 라우트 하위에 추가하면 헤더·모바일 하단바의 "차주 전용" 버튼이 그대로 연결됩니다.
