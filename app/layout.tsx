import type { Metadata } from 'next';
import './globals.css';
import { profile } from '@/data/profile';

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: 'Papineni Sai Sharan | Associate Database Engineer · AI/ML · Cybersecurity',
  description: 'Papineni Sai Sharan is an Associate Database Engineer working across database systems, AI/ML, cybersecurity, and published research in cross-domain threat detection.',
  alternates: { canonical: '/' },
  openGraph: { title: 'Papineni Sai Sharan | Associate Database Engineer · AI/ML · Cybersecurity', description: profile.summary, type: 'website', url: profile.siteUrl, siteName: profile.name },
  twitter: { card: 'summary', title: 'Papineni Sai Sharan | Associate Database Engineer · AI/ML · Cybersecurity', description: 'Database engineering, AI/ML, cybersecurity, and published research.' },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structured = { '@context': 'https://schema.org', '@type': 'Person', name: profile.name, jobTitle: profile.title, email: profile.email, address: { '@type': 'PostalAddress', addressLocality: 'Bengaluru', addressCountry: 'IN' }, sameAs: [profile.github, profile.linkedin, profile.kaggle] };
  return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structured) }} /></body></html>;
}
