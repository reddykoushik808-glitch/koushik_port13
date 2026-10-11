import type { Metadata } from "next";
import { Inter, Syne, Caveat, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-caveat",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Koushik Reddy | Full Stack Developer & Data Analyst",
  description:
    "Personal portfolio of Koushik Reddy — B.Tech Computer Science (Data Science) undergraduate building practical applications and turning data into meaningful insights.",
  keywords: [
    "Koushik Reddy",
    "Full Stack Developer",
    "Data Analyst",
    "Machine Learning",
    "Portfolio",
    "Data Science",
    "HITAM",
    "Next.js"
  ],
  authors: [{ name: "Koushik Reddy" }],
  openGraph: {
    title: "Koushik Reddy | Full Stack Developer & Data Analyst",
    description:
      "Full Stack Developer & Data Analyst building practical applications and turning data into meaningful insights.",
    url: "https://koushik-portfolio.vercel.app",
    siteName: "Koushik Reddy Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${syne.variable} ${caveat.variable} ${jetbrainsMono.variable} antialiased bg-[#FAF9F5] text-[#141714] min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
