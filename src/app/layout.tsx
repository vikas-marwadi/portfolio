import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CustomCursor } from "@/components/ui/cursor";
import { ScrollProgress } from "@/components/ui/scroll-progress";
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
    default: "Vikas Marwadi — AI Development Lead",
    template: "%s | Vikas Marwadi",
  },
  description:
    "AI Development Lead building multi-agent systems, ETL pipelines, LLM-powered SaaS, and enterprise data platforms. Specializing in cloud architecture, LLM integration, and modern data engineering.",
  metadataBase: new URL("https://vikas-marwadi.github.io/portfolio"),
  openGraph: {
    title: "Vikas Marwadi — AI Development Lead",
    description:
      "AI Development Lead building multi-agent systems, ETL pipelines, and enterprise AI solutions.",
    url: "https://vikas-marwadi.github.io/portfolio",
    siteName: "Vikas Marwadi",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikas Marwadi — AI Development Lead",
    description:
      "AI Development Lead building multi-agent systems, ETL pipelines, and enterprise AI solutions.",
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
