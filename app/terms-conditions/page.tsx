import TermsAndConditions from '@/components/layout/terms-conditions/TermsAndConditions';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Mindcraft Studio',
  description:
    'Review the terms and conditions for Mindcraft Studio services, project scope, payments, liabilities, and responsibilities before starting a design engagement.',
  alternates: {
    canonical: 'https://mindcraftstudio.net/terms-conditions',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsAndConditionsPage() {
  return <TermsAndConditions />;
}