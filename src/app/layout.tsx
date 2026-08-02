import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "REVERB — Professional Live Band",
  description: "Band profesionist pentru evenimente de neuitat. Colaborări cu artiști creștini din România.",
  openGraph: {
    title: "REVERB — Professional Live Band",
    description: "Band profesionist pentru evenimente de neuitat.",
    siteName: "Reverb Project",
    locale: "ro_RO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ro"
      className={`${inter.variable} antialiased`}
    >
      <body className="bg-black font-sans">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
