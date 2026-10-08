# fncberry.github.io

김민서(fncberry)의 포트폴리오. Next.js(App Router) + TypeScript, 정적 HTML로 내보내서 GitHub Pages에 올림.

## 실행

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 정적 파일이 out/ 에 생김
npm start        # out/ 을 로컬에서 띄워 확인
```

## 구조

```
src/
  app/
    layout.tsx     메타데이터(제목, 링크 미리보기), 폰트
    page.tsx       섹션 순서
    globals.css    스타일 (섹션별 주석으로 구분)
  components/      섹션별 컴포넌트
    Header         따라오는 헤더 (스크롤하면 얇아짐)
    Hero, Pipeline 첫 화면과 기획→배포 띠
    Projects       프로젝트 카드 (ProjectSlider: 가운데 카드 캐러셀)
    Career         활동과 수상 (두 열)
    About          개발 역량 (AI-native 카드, 역량 카드)
    Learning       배움과 가르침 (NCS 그래프·능력단위 목록, 강의, 학력)
    Contact        연락처와 푸터
  data/            사이트에 들어가는 모든 글·숫자·링크
    profile.ts     이름, 히어로 문구, 메뉴, 파이프라인, 연락처, 학력
    projects.ts    프로젝트
    career.ts      활동, 수상
    about.ts       AI 카드, 역량 카드, NCS 이수 내역(능력단위 코드·분야), 강의
  lib/assets.ts    public/에 없는 스크린샷은 빌드할 때 자동으로 빼는 함수
public/assets/     이미지 (og.png는 링크 미리보기, 바꾸면 layout.tsx의 ?v= 숫자도 올리기)
```

- 내용만 바꿀 때는 `src/data/` 파일만 고치면 됨.
- NCS 그래프의 분야별 시간과 능력단위 수는 `about.ts`의 이수 내역에서 자동으로 계산됨.
- 스크린샷 자리는 데이터에 먼저 적어두고, 이미지를 `public/assets/`에 넣으면 그때부터 화면에 나옴.
- 디자인 개편은 `globals.css`와 `components/`를 바꾸면 되고, `data/`는 그대로 재사용 가능.

## 배포

`main`에 푸시하면 `.github/workflows/deploy.yml`이 빌드해서 GitHub Pages에 올림.
처음 한 번은 저장소 **Settings → Pages → Source**를 **GitHub Actions**로 바꿔야 함.
