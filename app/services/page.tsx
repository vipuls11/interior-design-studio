import Services from '../../src/components/sections/Services';
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Mindcraft Studio",
  description: "We create a Feeling of Being at Home: A place full of positive energy and Pride where you can always rely on our expertise to turn any space into something truly unique.",
};
export default function ServicesPage() {
  return <Services />;
}