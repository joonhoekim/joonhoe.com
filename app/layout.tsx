import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joonhoe.com - Personal Website Hub",
  description: "A modern, responsive website hub that provides easy navigation to all my personal websites and projects.",
  keywords: ["joonhoe", "website hub", "portfolio", "personal websites", "projects"],
  authors: [{ name: "Joonhoe Kim", url: "https://github.com/joonhoekim" }],
  creator: "Joonhoe Kim",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://joonhoe.com",
    title: "Joonhoe.com - Personal Website Hub",
    description: "A modern, responsive website hub that provides easy navigation to all my personal websites and projects.",
    siteName: "Joonhoe.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joonhoe.com - Personal Website Hub",
    description: "A modern, responsive website hub that provides easy navigation to all my personal websites and projects.",
    creator: "@joonhoekim",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
