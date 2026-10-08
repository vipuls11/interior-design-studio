import PrivacyPolicy from "@/components/sections/Privacy-Policy/PrivacyPolicy";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy Policy | Mindcraft Studio",
  description:
    "Read the privacy policy for Mindcraft Studio to understand how we collect, use, and protect personal information from clients and website visitors.",
  alternates: {
    canonical: "https://mindcraftstudio.net/privacy-policy",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}