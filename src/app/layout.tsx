import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const SITE = "https://faizanahmad.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Faizan Ahmad — Senior Software Engineer & Technical Lead",
    template: "%s · Faizan Ahmad",
  },
  description:
    "Senior Software Engineer and Technical Lead. 9+ years shipping real-time systems, scalable frontend architecture, and product-driven engineering across SvelteKit, React, and Next.js.",
  keywords: [
    "Faizan Ahmad",
    "Senior Software Engineer",
    "Technical Lead",
    "SvelteKit",
    "React",
    "Next.js",
    "Real-time systems",
    "MQTT",
    "Kafka",
    "MapLibre",
    "tRPC",
    "TypeScript",
  ],
  authors: [{ name: "Faizan Ahmad" }],
  creator: "Faizan Ahmad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE,
    siteName: "Faizan Ahmad",
    title: "Faizan Ahmad — Senior Software Engineer & Technical Lead",
    description:
      "Real-time systems, scalable frontend architecture, product-driven engineering.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faizan Ahmad — Senior Software Engineer & Technical Lead",
    description:
      "Real-time systems, scalable frontend architecture, product-driven engineering.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('theme');
    var d = t ? t === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (d) document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
