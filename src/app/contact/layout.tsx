import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a project and get a tailored plan for a premium, performance-led web system.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
