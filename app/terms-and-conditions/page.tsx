import TermsAndConditions from '@/components/layout/terms-conditions/TermsAndConditions';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Dummy terms and conditions content for Mindcraft Studio.',
};

export default function TermsAndConditionsPage() {
  return <TermsAndConditions />;
}