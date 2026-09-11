import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Janhavi Hivarekar — Frontend · Full Stack · AI',
  description: 'Personal portfolio of Janhavi Hivarekar, a frontend and full-stack developer exploring AI-powered web experiences.',
  keywords: ['Janhavi Hivarekar','Frontend Developer','MERN','Full Stack Developer','GenAI','React','Next.js'],
  authors: [{ name: 'Janhavi Hivarekar' }],
  openGraph: { title: 'Janhavi Hivarekar — Frontend · Full Stack · AI', description: 'Frontend, full-stack MERN, and AI/GenAI work by Janhavi Hivarekar.', type: 'website' }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
