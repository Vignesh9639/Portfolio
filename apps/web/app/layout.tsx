import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/navigation/navbar";
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
  title: {
    default: "R Vignesh Reddy — Software Engineer",
    template: "%s — R Vignesh Reddy",
  },

  description:
    "Portfolio of R Vignesh Reddy — Programmer Analyst and software engineer building full-stack applications, AI-powered systems, and modern web experiences.",

  applicationName: "R Vignesh Reddy Portfolio",

  authors: [
    {
      name: "R Vignesh Reddy",
    },
  ],

  creator: "R Vignesh Reddy",
  publisher: "R Vignesh Reddy",

  keywords: [
    "R Vignesh Reddy",
    "Vignesh Reddy",
    "Software Engineer",
    "Programmer Analyst",
    "Full-Stack Developer",
    "Java Developer",
    "React Developer",
    "Spring Boot",
    "AI",
    "AWS",
    "Portfolio",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "R Vignesh Reddy — Software Engineer",
    description:
      "Software engineer building full-stack applications, AI-powered systems, and modern web experiences.",
    siteName: "R Vignesh Reddy",
    images: [
      {
        url: "/images/og-image.png",
        width: 1536,
        height: 1024,
        alt: "R Vignesh Reddy — Software Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "R Vignesh Reddy — Software Engineer",
    description:
      "Software engineer building full-stack applications, AI-powered systems, and modern web experiences.",
    images: ["/images/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0d0e",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Navbar />

        <main className="flex-1 pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}