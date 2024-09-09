import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Windows XP Paint",
  description: "A Windows XP-themed MS Paint clone",
  icons: [{ rel: "icon", url: "/ms-logo.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
