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
    "freelance software engineer UK",
    "freelance web developer London",
    "freelance web developer UK",
    "web developer UK",
    "full stack developer Brighton",
    "full stack developer London",
    "full stack developer UK",
    "freelance full stack developer",
    "Next.js developer UK",
    "Sam ames",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${playfairDisplay.variable} antialiased flex bg-[var(--color-light)] flex-col min-h-screen`}
      >
        <Header />
        <div className="grow-1">{children}</div>
        <Toaster position="top-center" richColors theme="light" />
        <Footer />
      </body>
    </html>
  );
}
