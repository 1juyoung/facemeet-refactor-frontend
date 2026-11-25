# FaceMeet

### Emotion-aware Video Conferencing Platform

**표정으로 소통을 확장하는 실시간 화상회의 서비스**

FaceMeet은 화상회의 중 참가자의 표정을 분석해 감정 상태를 보여주는 웹 서비스입니다. <br />
2024년 졸업작품으로 시작했고 2025년에 WebRTC 통신 구조를 P2P에서 SFU로 바꿨습니다. <br />
2026년 11월부터는 프론트엔드를 다시 만들고 백엔드 API와 배포 환경을 직접 구축하고 있습니다.

📎 **Backend** [백엔드 리팩토링](https://github.com/1juyoung/facemeet-refactor-backend) · **Original (졸업작품)** [오리지널 코드](https://github.com/1juyoung/facemeet)

---
## Development History
 
### 01. Graduation Project · 2024.10
감정 분석 기반 다자간 화상회의 서비스 개발
 
- WebRTC 기반 다자간 화상회의
- DeepFace 기반 표정 분석과 감정 시각화
- 프론트엔드·백엔드 개발 담당
### 02. WebRTC Architecture Migration · 2025.02
P2P → SFU 전환
 
참가자가 늘수록 각 브라우저가 모든 상대에게 영상을 따로 보내야 하는 P2P 구조의 한계를 줄이기 위해, 서버가 영상을 받아 나눠 주는 SFU 구조로 바꿨습니다.
 
- 참가자 1명당 송신 연결 1개 + 상대별 수신 연결로 구조 변경
- Node.js 서버에서 `wrtc`로 미디어를 받아 다른 참가자에게 전달
### 03. Service Reconstruction · 2026.11 –
프론트엔드 재구축, API 구현, 실제 배포
 
- 화면 설계부터 다시 작성 (대시보드, 회의실)
- 회의실 사용자 경험 개선 (아래 [주요 기능](#features))
- 백엔드 API와 DB 정리, DB 접근을 백엔드로 일원화
- AWS EC2 + Vercel에 배포하고, 서로 다른 네트워크(와이파이 ↔ LTE)에서 통화 확인

---

## Tech Stack

| 영역 | 기술 |
|---|---|
| Frontend | Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, shadcn/ui |
| Backend | Node.js, Express 5, Socket.IO, `@roamhq/wrtc` (SFU) |
| Database | MySQL 8, Prisma |
| Infra | AWS EC2 (Ubuntu), Caddy (HTTPS), coturn (TURN), systemd, Vercel |

## Architecture
<img width="643" height="304" alt="image" src="https://github.com/user-attachments/assets/615e91fa-6022-4952-99c2-3c143c72ef06" />

- 프론트엔드는 화면만 담당하고, 인증과 DB 접근은 모두 백엔드 API를 거칩니다.
- TURN 서버 계정은 고정 비밀번호 대신 백엔드가 만료 시간이 있는 임시 자격 증명을 발급합니다.

### Frontend 폴더 구조
```
app/src
├─ views      # 페이지 단위 화면 (대시보드, 회의실)
├─ features   # 기능 단위 (회의 만들기, WebRTC 연결, 채팅)
├─ entities   # 도메인 데이터와 API (user, meeting, chat)
└─ shared     # 공통 UI, API 클라이언트
```
----
📌 **Demo** [FACEMEET](https://facemeet.jy-portfolio.site/)
