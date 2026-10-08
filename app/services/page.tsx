import Services from '../../src/components/sections/Services';
import type { Metadata } from "next";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does an interior design studio offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Interior design studios typically offer space planning, concept development, lighting design, material selection, styling, and project coordination for residential and commercial spaces.",
      },
    },
    {
      "@type": "Question",
      name: "How much does interior design cost in Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cost depends on project scope, size, customization level, and design complexity. A luxury residential interior project usually begins at a premium consultation and design fee and can scale based on finishes, furnishings, and construction work.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide complete home interior design solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our studio offers end-to-end home interior design services including concept planning, execution guidance, material selection, styling, and project coordination.",
      },
    },
    {
      "@type": "Question",
      name: "Can a studio design both residential and commercial interiors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, interior design studios often work on residential projects, villas, apartments, offices, and commercial spaces with tailored layouts and design strategies for each environment.",
      },
    },
    {
      "@type": "Question",
      name: "How do I start an interior design project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can contact the studio for an initial consultation, share your requirements, budget, and project goals, and then move into concept development and execution planning.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Interior Design Services | Residential & Commercial",
  description:
    "Explore Mindcraft Studio's interior design services for luxury homes, villas, apartments, offices, and commercial spaces with end-to-end design and styling solutions.",
  alternates: {
    canonical: "https://mindcraftstudio.net/services",
  },
  openGraph: {
    title: "Interior Design Services | Residential & Commercial",
    description:
      "Complete interior design solutions for living spaces, corporate interiors, and premium renovation projects.",
    url: "https://mindcraftstudio.net/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Services />
    </>
  );
}