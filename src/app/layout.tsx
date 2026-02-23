import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Noor Ul Amin | Full Stack Developer",
  description:
    "Full-Stack Engineer with 5+ years of experience building scalable SaaS and AI-powered web applications using React, Next.js, Node.js, PostgreSQL, and TypeScript.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript",
    "Next.js",
    "Web Developer",
    "Software Engineer",
    "Noor Ul Amin",
  ],
  authors: [{ name: "Noor Ul Amin" }],
  creator: "Noor Ul Amin",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Noor Ul Amin | Full Stack Developer",
    description:
      "Full-Stack Engineer with 5+ years of experience building scalable SaaS and AI-powered web applications.",
    siteName: "Noor Ul Amin Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noor Ul Amin | Full Stack Developer",
    description:
      "Full-Stack Engineer with 5+ years of experience building scalable SaaS and AI-powered web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-dark-950 text-dark-900 dark:text-white transition-colors duration-300`}
      >
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
