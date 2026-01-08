import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Tyrone Brooks",
  description: "UX/UI Designer specializing in modern web experiences. View my portfolio of selected projects and get in touch.",
  keywords: ["portfolio", "UX designer", "UI designer", "web design", "product design"],
  authors: [{ name: "Tyrone Brooks" }],
  openGraph: {
    title: "Portfolio | Tyrone Brooks",
    description: "UX/UI Designer specializing in modern web experiences",
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
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
