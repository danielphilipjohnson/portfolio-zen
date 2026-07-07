import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ZenNavbar from "@/components/layouts/Navbar";
import ZenFooter from "@/components/layouts/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daniel Philip Johnson | Full-stack Developer",
  description: "Full-stack developer specializing in React, Next.js, and modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ZenNavbar />
        <ScrollToTop />
        {children}
        <ZenFooter />
      </body>
    </html>
  );
}
