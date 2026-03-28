import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
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
    default: "Vikas Marwadi — AI Developer",
    template: "%s | Vikas Marwadi",
  },
  description:
    "AI Developer building intelligent solutions at the intersection of AI and enterprise technology. Specializing in AI agents, RAG pipelines, and modern web development.",
  metadataBase: new URL("https://vikas-marwadi.github.io/portfolio"),
  openGraph: {
    title: "Vikas Marwadi — AI Developer",
    description:
      "AI Developer building intelligent solutions at the intersection of AI and enterprise technology.",
    url: "https://vikas-marwadi.github.io/portfolio",
    siteName: "Vikas Marwadi",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikas Marwadi — AI Developer",
    description:
      "AI Developer building intelligent solutions at the intersection of AI and enterprise technology.",
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
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
