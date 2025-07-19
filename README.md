 
# **D'CENT Discovery**

D'CENT 지갑 내에서 사용자가 다양한 디앱(DApp)을 발견하고 사용할 수 있도록 돕는 디앱 탐색 페이지입니다. 플랫폼(iOS/Android) 및 언어(ko/en)에 따라 맞춤화된 콘텐츠를 제공하여 사용자 경험을 최적화합니다.

[**프로젝트 설계서 바로가기**](https://usiyoung.notion.site/D-CENT-Discovery-2357dc1d1d1e8090b484ff6d71710b75)



## 주요 기능

  - **환경별 설정 분리**: `.env` 파일을 통해 개발, 스테이징, 프로덕션 환경의 API 엔드포인트를 분리하여 관리합니다.
  - **플랫폼 및 언어 전환**: React Context API를 활용하여 앱 전체의 플랫폼(`iOS`/`Android`)과 언어(`ko`/`en`) 상태를 동적으로 변경하고, 이에 맞는 데이터를 렌더링합니다.
  - **배너 캐러셀**: `Swiper.js`를 활용한 자동 재생 캐러셀로 프로모션 배너를 효과적으로 표시하며, 안정적인 UI를 위해 스켈레톤 로딩을 적용했습니다.
  - **디앱 목록 및 즐겨찾기**: `TanStack Query`로 서버 데이터를 효율적으로 캐싱 및 관리하며, 즐겨찾기 목록과 전체 디앱 목록을 분리하여 제공합니다.
  - **스켈레톤 UI**: 데이터 로딩 중 사용자 경험이 저하되지 않도록 배너와 디앱 목록에 스켈레톤 로딩 화면을 적용하여 레이아웃 쉬프트를 방지했습니다.
  - **API 모킹**: `MSW`(Mock Service Worker)를 도입하여 백엔드 API와 독립적인 프론트엔드 개발 및 테스트 환경을 구축했습니다.


<br/>

## 기술 스택

  - **Main**: `React`, `TypeScript`, `Vite`
  - **Styling**: `Tailwind CSS`
  - **State Management & Data Fetching**: `TanStack Query (React Query)`, `React Context`
  - **API & Mocking**: `Axios`, `MSW (Mock Service Worker)`
  - **UI Components**: `Swiper.js`
  - **Linting & Formatting**: `ESLint`, `Prettier`

<br/>

## 설치 방법

### **의존성 설치**

```bash
npm install
```

### **개발 서버 실행**

MSW를 통한 API 모킹이 활성화된 개발 서버를 실행합니다.

```bash
npm run dev
```

### **빌드**
빌드를 진행하기 전, 각 환경에 맞는 .env 파일을 프로젝트 루트에 생성해야 합니다. 예를 들어 Staging 환경 빌드 시에는 .env.staging 파일이, Production 환경에서는 .env.production 파일이 필요합니다.

💡 .env.example 파일을 참고하여 각 환경에 필요한 변수를 설정할 수 있습니다.

  - **Production 환경 빌드**:
    ```bash
    npm run build
    ```
  - **Staging 환경 빌드**:
    ```bash
    npm run build:staging
    ```

### **빌드 결과물 미리보기**

빌드된 파일을 로컬 환경에서 확인할 수 있습니다.

```bash
npm run preview
```

-----

## 디렉토리 구조

```
.
├── public/              // 정적 에셋
├── src/                 // 소스 코드 루트
│   ├── api/             // API 클라이언트 및 요청 로직
│   ├── assets/          // 번들링될 에셋
│   ├── components/      // 재사용 컴포넌트 (ui/, domain/)
│   ├── context/         // React Context (전역 상태 관리)
│   ├── hooks/           // 커스텀 React Hooks
│   ├── i18n/            // 다국어 지원
│   ├── mocks/           // MSW (API 모킹) 핸들러
│   ├── pages/           // 페이지 단위 컴포넌트
│   ├── App.tsx          // 최상위 루트 컴포넌트
│   └── main.tsx         // 애플리케이션 진입점
├── .env.* // 환경별 설정 파일
├── index.html           // HTML 진입점
├── package.json         // 프로젝트 의존성 및 스크립트
└── tsconfig.json        // 타입스크립트 설정
```
