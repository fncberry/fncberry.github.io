import type { Project } from "./types";

// 프로젝트를 추가하려면 이 배열에 하나 더 넣으면 됨.
// shots의 이미지는 public/assets/에 두고, 파일이 아직 없으면 빌드할 때 자동으로 빠짐.
export const projects: Project[] = [
  {
    id: "project-taxi",
    layout: "feature",
    index: "PROJECT 01 / TAXI TOGETHER",
    title: "택시투게더",
    tagline: "함께 타되, 탄 만큼만.",
    theme: "taxi",
    role: "기획 · 전체 개발",
    badge: { label: "해커톤 데모" },
    summary: "구간별 정산 택시 동승 · 기획·전체 개발",
    lead: "같은 방향으로 가는 사람을 연결하고, 각자 탑승한 구간에 맞춰 요금을 나누는 택시 동승 서비스입니다.",
    highlights: [
      { title: "구간별 정산", text: "승하차 지점으로 경로를 나눠 구간 요금을 탑승 인원으로 분담" },
      { title: "3단계 매칭", text: "시간·경로·방향으로 거른 뒤 실제 우회율까지 확인" },
      { title: "검증된 로직", text: "정산·매칭을 순수 함수로 분리하고 회귀 테스트로 검증" },
    ],
    tags: ["Next.js · React", "TypeScript", "Supabase", "Kakao API", "Vercel"],
    links: [
      { label: "데모 보기", href: "https://taxi-share-kappa.vercel.app", primary: true },
      { label: "GitHub 코드", href: "https://github.com/NBTking/taxi-share" },
    ],
    details: [
      { title: "동승의 불편을 서비스로", text: "같은 방향의 동승자를 찾고, 탑승 구간에 맞춰 비용을 나누는 서비스를 기획했습니다. 매칭 결과에서 부담금을 확인하고 동승방에 합류하는 흐름으로 연결합니다." },
      { title: "납득할 수 있는 정산", text: "승하차 지점별로 경로를 나누고 탑승 인원에 따라 요금을 배분했습니다. 개인별 합계가 총요금과 일치하도록 차액을 처리하고, 정산 확정 후에는 금액을 고정합니다." },
      { title: "가는 길에 태우는 매칭", text: "시간·경로·방향으로 후보를 먼저 좁힌 뒤 실제 우회율을 확인하는 3단계 매칭을 구현했습니다. 저장한 경로를 재사용해 후보당 길찾기 호출을 줄였습니다." },
      { title: "화면부터 데이터까지", text: "출발·도착 검색, 동승방 생성·합류, 실시간 갱신을 연결했습니다. 정산·매칭 로직은 순수 함수로 분리하고 회귀 테스트로 검증합니다." },
    ],
    note: "데모의 동승자는 시연용 샘플이며, 실제 결제는 연동하지 않았습니다.",
    shots: [
      { src: "/assets/taxi-1-route.webp", width: 674, height: 1210, caption: "출발·도착 지정", alt: "택시투게더 메인 화면. 지도에 출발지 고려대와 도착지 강남역이 표시되고, 빠른 장소 선택과 출발 시간 옵션이 있다." },
      { src: "/assets/taxi-2-match.webp", width: 674, height: 1210, caption: "후보별 부담금 비교", alt: "매칭 결과 화면. 혼자 타면 15,900원인 경로에 동승 가능한 택시 5대가 내 부담금, 절약률, 우회 시간, 동승 인원과 함께 나열된다." },
      { src: "/assets/taxi-3-fare.webp", width: 674, height: 1210, caption: "구간별 정산 근거", alt: "요금 계산 펼침 화면. 승하차 지점으로 나눈 4개 구간의 거리와 요금을 구간 탑승 인원으로 나누고, 동승자별 금액 합계가 총요금 17,000원과 일치한다." },
    ],
  },
  {
    id: "project-quest",
    layout: "feature",
    index: "PROJECT 02 / LOCAL QUEST",
    title: "로컬퀘스트",
    tagline: "한산한 곳일수록, 보상은 크게.",
    theme: "quest",
    role: "프론트엔드 · 서비스 기획",
    badge: { label: "원스토어 출시", live: true },
    summary: "원스토어 출시 여행 앱 · 프론트엔드·기획",
    lead: "덜 붐비는 곳을 걸어서 찾아가는 관광 퀘스트 앱입니다. 한산한 장소일수록 보상이 커지도록 설계해, 여행객의 발길을 도시 곳곳으로 나눕니다.",
    highlights: [
      { title: "지도 중심 탐색", text: "마커로 주변 퀘스트를 고르고, 바텀시트에서 상세 확인 후 수락" },
      { title: "위치 기반 인증", text: "목적지 반경 안에 들어오면 도착 인증, 사진 미션으로 완료" },
      { title: "혼잡도 보상", text: "기본 경험치에 혼잡도·비피크·연속 방문 배율을 곱해 지급" },
    ],
    tags: ["Android", "Frontend", "Service Planning"],
    links: [{ label: "원스토어에서 보기", href: "https://m.onestore.co.kr/v2/ko-kr/app/0001009332", primary: true }],
    details: [
      { title: "여행 시작부터 보상까지", text: "가입과 여행 스타일 설문부터 지역 선택, 퀘스트 수락·수행·보상까지 하나의 흐름으로 이어지도록 화면을 설계하고 구현했습니다." },
      { title: "필요한 만큼 보여주는 지도", text: "지도 마커에서 퀘스트 요약을 확인하고, 바텀시트를 펼쳐 관광지 상세를 보는 흐름으로 지도를 가리지 않고 정보를 전달합니다." },
      { title: "다시 탐험하게 하는 경험", text: "홈·지도·업적·배지를 중심으로 탐색하고, 경험치와 레벨, 배지 수집으로 다음 여행의 동기를 만듭니다." },
    ],
    shots: [
      { src: "/assets/localquest-1.webp", width: 731, height: 1300, caption: "지도에서 퀘스트 발견", alt: "로컬퀘스트 지도 화면. 수원 행궁동 일대에 퀘스트 마커가 표시되고, 바텀시트에 '행궁동 벽화마을 한 컷' 사진 퀘스트가 한산 보너스 700 EXP와 함께 열려 있다." },
      { src: "/assets/localquest-2.webp", width: 731, height: 1300, caption: "반경 기반 도착 인증", alt: "도착 인증 화면. 목적지 주변의 인증 반경이 원으로 표시되고, 반경 안에 들어오면 도착 인증하기 버튼이 활성화된다." },
      { src: "/assets/localquest-3.webp", width: 731, height: 1300, caption: "혼잡도 반영 보상", alt: "퀘스트 완료 화면. 기본 110 × 혼잡도 1.4 × 비피크 1.2 × 스트릭 1.05로 계산된 194 EXP 보상과 레벨 진행도, 배지 진행 상황이 표시된다." },
    ],
  },
  {
    id: "project-english",
    layout: "compact",
    index: "PROJECT 03 / ENGLISH LEARNING",
    title: "문장 단위 영어 독해 프로그램",
    shortTitle: "문장 단위 영어 독해",
    workingTitle: "(가칭)",
    tagline: "한 문장씩, 이해를 쌓아가다.",
    theme: "english",
    role: "개발",
    badge: { label: "테스터 빌드" },
    summary: "교육 프로그램 · 테스터 빌드 개발",
    lead: "영어 문장을 단위로 독해를 연습하는 교육 프로그램입니다. 학습자가 문장을 직접 입력할 수 있는 테스터 빌드를 개발했습니다.",
    highlights: [
      { title: "직접 입력", text: "사용자가 원하는 영어 문장을 넣어 바로 학습" },
      { title: "확장 방향", text: "학습 수준에 맞는 문장을 무작위로 제시하는 기능 계획" },
    ],
    tags: ["Education", "English Reading", "Prototype"],
    links: [{ label: "GitHub 코드", href: "https://github.com/fncberry/KSAT_ENG_LEARNING_Testing" }],
    concept: { label: "문장 단위 학습", sample: ["Every sentence", "is a new beginning."], caption: "학습 단위를 보여주는 예시 문장", lang: "en" },
    // 가로 화면 스크린샷 자리. public/assets/english-1.webp, english-2.webp를 넣으면 자동으로 표시됨 (1280×800 권장)
    wideShots: true,
    shots: [
      { src: "/assets/english-1.webp", width: 1280, height: 800, caption: "학습할 영어 문장 직접 입력", alt: "영어 독해 프로그램의 문장 입력 화면." },
      { src: "/assets/english-2.webp", width: 1280, height: 800, caption: "문장 단위로 독해 연습", alt: "영어 독해 프로그램의 문장 단위 학습 화면." },
    ],
  },
];
