import Portfolio from '../../src/components/sections/Portfolio';
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Interior Design Portfolio | Luxury Homes & Projects",
  description:
    "View Mindcraft Studio's portfolio of luxury home interiors, villa designs, commercial spaces, and modern transformations crafted with elegance and functionality.",
  alternates: {
    canonical: "https://mindcraftstudio.net/portfolio",
  },
  openGraph: {
    title: "Interior Design Portfolio | Luxury Homes & Projects",
    description:
      "See selected residential and commercial projects by Mindcraft Studio, created to elevate how spaces feel and function.",
    url: "https://mindcraftstudio.net/portfolio",
  },
};
export default function PortfolioPage() {
  return <Portfolio />;
}