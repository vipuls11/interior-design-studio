import Contacts from '../../src/components/sections/Contacts';
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book a Design Consultation | Contact Mindcraft Studio",
  description:
    "Contact Mindcraft Studio for luxury interior design consultations, renovation planning, and design solutions for homes, villas, and commercial spaces in Mumbai.",
  alternates: {
    canonical: "https://mindcraftstudio.net/contacts",
  },
  openGraph: {
    title: "Book a Design Consultation | Contact Mindcraft Studio",
    description:
      "Speak with our interior design team to begin your residential or commercial project in Mumbai.",
    url: "https://mindcraftstudio.net/contacts",
  },
};
export default function ContactsPage() {
  return <Contacts />;
}