import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://vasicodes.dev";

export const metadata: Metadata = {
  title: "Vasi Sayed | Full Stack Developer",
  description: "Emerging Full Stack Developer with expertise in Python, Django, React, and Microservices Architecture. Building enterprise-grade applications.",
  keywords: ["Vasi Sayed", "Full Stack Developer", "Python", "Django", "React", "Mumbai", "Portfolio"],
  authors: [{ name: "Vasi Sayed", url: siteUrl }],
  creator: "Vasi Sayed",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Vasi Sayed | Full Stack Developer",
    description: "Emerging Full Stack Developer with expertise in Python, Django, React, and Microservices Architecture.",
    siteName: "VasiCodes.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vasi Sayed | Full Stack Developer",
    description: "Emerging Full Stack Developer with expertise in Python, Django, React, and Microservices Architecture.",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {/* Global background graphics */}
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="pointer-events-none absolute -top-40 -left-32 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.3),transparent)] blur-3xl" />
            <div className="pointer-events-none absolute top-1/3 -right-40 w-[420px] h-[420px] bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.25),transparent)] blur-3xl" />
            <div className="pointer-events-none absolute bottom-[-120px] left-1/4 w-[460px] h-[460px] bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.25),transparent)] blur-3xl" />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
