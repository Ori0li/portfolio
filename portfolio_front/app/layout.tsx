import type { Metadata } from "next";
import "./globals.css";
import Navigator from "@/components/layouts/Navigator";

export const metadata: Metadata = {
  title: "포트폴리오",
  description: "개발자 포트폴리오 웹사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Navigator />
        {children}
      </body>
    </html>
  );
}
