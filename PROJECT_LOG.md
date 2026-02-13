# BUNTA 프로젝트 작업 기록

## 프로젝트 개요
- **목표**: bunta.co.kr 웹사이트를 theborn.co.kr 스타일 + 2026 트렌드 UI로 리디자인
- **GitHub**: https://github.com/SangKyoungPark/Bunta
- **Live**: https://sangkyoungpark.github.io/Bunta/
- **로컬 경로**: `C:\MyProject\Bunta`
- **바탕화면 백업**: `C:\Users\GLIM\Desktop\bunta-redesign.html` (올인원 버전)

## 파일 구조
```
Bunta/
├── index.html          # 메인 HTML (구조만)
├── css/style.css       # 전체 스타일시트
├── js/main.js          # JS (네비, 스크롤 리빌, 패럴랙스)
├── README.md           # 프로젝트 소개 + Live Demo 링크
└── PROJECT_LOG.md      # 이 파일
```

## 커밋 히스토리 (순서대로)

| # | 커밋 | 내용 |
|---|------|------|
| 1 | `5475f47` | 최초 index.html 생성 (올인원) |
| 2 | `6ab7b22` | Unsplash 이미지 추가 (히어로/스토리/메뉴/가맹/CTA) |
| 3 | `438d4e7` | KEY NUMBERS 섹션 추가 (10Y, 3.3.9, 6Day, 37%) |
| 4 | `f3aa9ce` | 3.3.9 설명 수정 → 3종 육수, 3종 고명, 9가지 토핑 |
| 5 | `44a4cd5` | 전체 컬러 빨간색 → 노란색(베트남풍) |
| 6 | `efcb76a` | 노란색 더 진하게 (#D4A017 → #E6A800) |
| 7 | `4cda97a` | 히어로 BUNTA 타이틀 노란색 + 글로우 |
| 8 | `842e654` | 네비게이션 로고 노란색 |
| 9 | `0e258a9` | 히어로 배경 빨간톤 → 다크 브라운톤 |
| 10 | `c77d8d3` | HTML/CSS/JS 파일 분리 + README 추가 |
| 11 | `a174b6f` | README에 Live Demo 링크 추가 |

## 현재 디자인 설정

### 컬러 테마 (베트남풍 골드)
```css
--primary: #E6A800;      /* 메인 골드 */
--primary-dark: #CC8400; /* 다크 골드 (스크롤 시 로고) */
--accent: #FFD000;       /* 밝은 골드 (히어로 타이틀) */
--warm: #FFFBF0;         /* 따뜻한 배경 */
--dark: #1a1a1a;         /* 다크 섹션 배경 */
--light-gray: #f7f5f0;   /* 연한 배경 */
```

### 사용 이미지 (Unsplash 무료)
| 위치 | URL |
|------|-----|
| 히어로 배경 | `photo-1504674900247-0877df9cc836` |
| 브랜드스토리 | `photo-1582878826629-29b7ad1cdc43` |
| 메뉴-쌀국수 | `photo-1576577445504-6af96477db52` |
| 메뉴-분짜 | `photo-1455619452474-d2be8b1e70cd` |
| 메뉴-반쎄오 | `photo-1547592180-85f173990554` |
| 메뉴-볶음밥 | `photo-1569718212165-3a8278d5f624` |
| 메뉴-사이드 | `photo-1562565652-a0d8f0c59eb4` |
| 가맹안내 | `photo-1414235077428-338989a2e8c0` |
| CTA 배경 | `photo-1496116218417-1a781b1c416c` |

### 핵심 숫자
| 값 | 의미 |
|----|------|
| **10Y** | 10년간 정통 베트남 쌀국수 노하우 |
| **3.3.9** | 3종 육수 + 3종 고명 + 9가지 토핑 |
| **6Day** | 주 6일 매장 직접 조리, 당일 신선 재료 |
| **37%** | 전년 대비 매출 성장률 |

### 섹션 구성 (위→아래)
1. **Navigation** - 투명 → 스크롤 시 화이트 전환
2. **Hero** - 풀스크린 배경 + 패럴랙스 + "BUNTA" 골드 타이틀
3. **Brand Story** - 2컬럼 (이미지 + 텍스트 + 수치)
4. **Key Numbers** - 4개 카드 (10Y / 3.3.9 / 6Day / 37%)
5. **Menu (Bento Grid)** - 5개 메뉴 카드
6. **Philosophy** - 3가지 약속 카드 (다크 배경)
7. **Franchise** - 가맹안내 (매출보증제/교육/상권보호)
8. **CTA** - 창업문의 + 공식사이트 버튼
9. **Footer** - 메뉴/브랜드/가맹 링크 + SNS

### 기술 스택
- HTML5 시맨틱 마크업
- CSS3: Variables, Flexbox, Grid, 애니메이션, 반응형
- Vanilla JS: IntersectionObserver (스크롤 리빌), 패럴랙스
- Google Fonts: Noto Sans KR, Playfair Display
- 이미지: Unsplash CDN (외부 로딩)

## 참고 사이트
- 원본: https://www.bunta.co.kr/ (Wix 기반)
- 참고: https://www.theborn.co.kr/ (더본코리아)
- 분타 정보: 베트남 3대 쌀국수 전문점 프랜차이즈
- 2024 한국소비자베스트브랜드 대상 수상

## 다음에 할 수 있는 것들
- [ ] 실제 분타 매장/음식 사진으로 이미지 교체
- [ ] 매장 찾기 페이지 추가 (카카오맵 연동)
- [ ] 메뉴 상세 페이지 (가격 포함)
- [ ] 창업 문의 폼 구현
- [ ] 모바일 메뉴 햄버거 애니메이션 개선
- [ ] SEO 메타태그 추가
- [ ] favicon 추가
