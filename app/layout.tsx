import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "BharatNiti AI | The Digital Brain for Indian Asset Managers",
  description: "Automate research, find stocks with natural language, and preserve institutional knowledge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${lora.variable} font-sans antialiased bg-[#F9FAFB] text-[#1F2937]`}
      >
        {children}
      </body>
    </html>
  );
}
