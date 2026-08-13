import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeScript } from "@/components/theme-script";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Cursor } from "@/components/cursor";
import { profile } from "@/content/profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const siteUrl = "https://fauzanabyandani.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} - Software Engineer`,
    template: `%s - ${profile.name}`,
  },
  description:
    "Portfolio of Muhammad Fauzan Abyandani, a software engineer building mobile, web, and backend systems, automated testing, infrastructure, and machine learning applications.",
  keywords: [
    "Muhammad Fauzan Abyandani",
    "Software Engineer",
    "Frontend Developer",
    "React Native Developer",
    "Mobile Developer",
    "Jakarta Software Engineer",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} - Software Engineer`,
    description:
      "Building software across mobile, web, backend systems, and intelligent applications.",
    siteName: `${profile.name} - Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} - Software Engineer`,
    description:
      "Building software across mobile, web, backend systems, and intelligent applications.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: profile.email,
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Central Jakarta",
    addressRegion: "Jakarta",
    addressCountry: "ID",
  },
  sameAs: [profile.github, profile.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <Cursor />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
