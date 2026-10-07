
import About from '../../src/components/sections/About';
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Mindcraft Studio | Interior Design Experts",
  description:
    "Learn about Mindcraft Studio, a luxury interior design studio in Mumbai creating refined homes, villas, and commercial spaces with thoughtful architecture and elegant craftsmanship.",
  alternates: {
    canonical: "https://mindcraftstudio.net/about",
  },
  openGraph: {
    title: "About Mindcraft Studio | Interior Design Experts",
    description:
      "A design studio focused on crafting elevated interiors that balance beauty, comfort, and functionality.",
    url: "https://mindcraftstudio.net/about",
  },
};

export default function AboutPage() {
  return <About />;
}