import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Root from './components/Root';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vacancy Questionaire',
  description:
    'A vacancy questionaire with 3 step registration. STEP 1: Bio data form. STEP 2: Credential upload. STEP 3: Questionaire on gender base.',
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {/* Wrap content with context */}
        <Root />
      </body>
    </html>
  );
}
