import type { Metadata } from "next";
import { Playfair_Display, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samuel Ames | Full-Stack Developer",
  description:
    "Freelance Full-Stack Developer based on the coast (near London and Brighton) in the UK",
  keywords: [
    "freelance web developer UK",
    "freelance web developer London",
    "freelance web developer UK",
    "fullstack",
    "next.js developer",
    "freelance developer",
    "fullstack developer",
    "freelance web developer",
    "website developer",
    "Sam ames",
  ],

  icons: {
    // default favicon.ico
    icon: [
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      "/favicon.ico",
    ],

    // apple-touch-icon
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],

    // manifest.json
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
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
        className={`${openSans.variable} ${playfairDisplay.variable} antialiased bg-white`}
      >
        <div className="flex-1 flex flex-col min-h-screen">
          <Header />
          <div className="grow-1 flex justify-center items-center">
            {children}
          </div>
          <Toaster position="top-center" richColors theme="light" />
          <Footer />
        </div>
      </body>
    </html>
  );
}
