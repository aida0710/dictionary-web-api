import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import {NextFont} from "next/dist/compiled/@next/font";

const inter: NextFont = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Open Dictionary",
  description: "オープン英和辞書を使用したweb apiを提供しています。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
