import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
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

const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["InteriorDesignStudio", "LocalBusiness"],
  name: "Mindcraft Studio",
  url: "https://mindcraftstudio.net",
  logo: "https://mindcraftstudio.net/logo.png",
  image: "https://mindcraftstudio.net/og-image.jpg",
  description:
    "Mindcraft Studio creates luxury residential and commercial interiors in Mumbai with refined, functional, and elegant design solutions.",
  telephone: "+91-XXXXXXXXXX",
  email: "hello@mindcraftstudio.net",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Andheri East, Mumbai",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  areaServed: ["Mumbai", "India"],
  priceRange: "₹₹₹₹",
  sameAs: [],
  founder: "Mindcraft Studio",
  openingHours: "Mo-Fr 09:00-18:00",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mindcraftstudio.net"),
  applicationName: "Mindcraft Studio",
  title: {
    default: "Mindcraft Studio | Luxury Interior Design in Mumbai",
    template: "%s | Mindcraft Studio",
  },
  description:
    "Mindcraft Studio designs luxury homes, villas, commercial spaces, and premium interiors in Mumbai with functional layouts, elegant detail, and timeless design solutions.",
  keywords: [
    "interior design Mumbai",
    "luxury interior designers in Mumbai",
    "home interior design",
    "commercial interior design",
    "residential interior design",
    "villa interior design",
    "studio apartment design",
    "mindcraft studio",
    "interior design studio",
  ],
  alternates: {
    canonical: "https://mindcraftstudio.net",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Mindcraft Studio | Luxury Interior Design in Mumbai",
    description:
      "Luxury residences, villas, and commercial interiors crafted with elegance, comfort, and smart functionality.",
    type: "website",
    locale: "en_US",
    url: "https://mindcraftstudio.net",
    siteName: "Mindcraft Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mindcraft Studio | Luxury Interior Design in Mumbai",
    description:
      "Luxury residences, villas, and commercial interiors crafted with elegance, comfort, and smart functionality.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   const gaId = process.env.GA_ID
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${roboto.variable} h-full `}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <ProvidersWrapper>
          <NavbarWrapper />
          {children}
          <Footer />
          <CookieConsent />
        </ProvidersWrapper>
         {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
