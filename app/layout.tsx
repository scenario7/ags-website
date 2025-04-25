import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AGS Formula 1",
  description: "Founded in 1969 by racing driver Henri Julien, Automobiles Gonfaronnaises Sportives (AGS) is a motor racing institution, having competed in the Formula 1 World Championship alongside the likes of Gabriele Tarquini, Yannick Dalmas and Philippe Streiff.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  const locale = await getLocale();

  return (
    <html lang={locale} data-theme="light">
      <NextIntlClientProvider messages={messages}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F6F9FF]`}
        >
          {children}
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
