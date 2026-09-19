import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "../src/components/layout/NavbarWrapper";
import Footer from "../src/components/layout/Footer";
import ProvidersWrapper from "./providers-wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mindcraft Studio",
  description: "We create a Feeling of Being at Home: A place full of positive energy and Pride where you can always rely on our expertise to turn any space into something truly unique.",
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
    >
      <body className="min-h-full flex flex-col">
        <ProvidersWrapper>
          <NavbarWrapper />
          {children}
          <Footer />
        </ProvidersWrapper>
      </body>
    </html>
  );
}
