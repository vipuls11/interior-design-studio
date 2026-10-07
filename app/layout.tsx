import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "../src/components/layout/NavbarWrapper";
import Footer from "../src/components/layout/Footer";
import ProvidersWrapper from "./providers-wrapper";
import CookieConsent from "@/components/common/CookieConsent";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
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
      suppressHydrationWarning
      className={`${poppins.variable} ${roboto.variable} h-full `}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <ProvidersWrapper>
          <NavbarWrapper />
          {children}
          <Footer />
          <CookieConsent />
        </ProvidersWrapper>
      </body>
    </html>
  );
}
