import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FaceMeet',
  description: 'WebRTC 기반 화상회의와 감정 분석 회의록',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* 본문 폰트: Pretendard */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
