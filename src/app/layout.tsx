import type { Metadata } from "next";
import "./globals.css";
import { Lato } from 'next/font/google'
import Header from "@/components/base/Header";
import Footer from "@/components/base/Footer"
import WhatsaapConnect from "@/components/common/WhatsaapConnect";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Quick Tv Solutions",
  description: "Quick Tv Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.className}`}
      >
        <Header/>
        <main>
            {children}
            <WhatsaapConnect/>
        </main>
        <Footer/>
      </body>
    </html>
  );
}
