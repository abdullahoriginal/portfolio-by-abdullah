import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdullah — E-Commerce Specialist & Graphic Designer",
  description: "Full-stack e-commerce specialist and graphic designer building profitable marketplaces from product sourcing to marketplace optimization to premium design execution.",
  keywords: [
    "Abdullah Portfolio",
    "E-commerce Specialist",
    "Amazon A+ Content",
    "Noon Marketplace",
    "PPC Management",
    "Listing Optimization",
    "Graphic Designer",
    "builtbyabdullah.me"
  ],
  authors: [{ name: "Abdullah" }],
  openGraph: {
    title: "Abdullah | Full-Stack E-Commerce Builder & Designer",
    description: "From product sourcing to marketplace optimization to premium design execution. 136% ROI & 130k+ SAR revenue.",
    url: "https://builtbyabdullah.me",
    siteName: "Abdullah Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${dmSans.variable} ${spaceGrotesk.variable} scroll-smooth dark`}>
      <body className="min-h-screen bg-[#0a0a0a] text-[#ffffff] font-sans antialiased selection:bg-[#e63946] selection:text-white">
        {children}
      </body>
    </html>
  );
}
