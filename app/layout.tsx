import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Steps from './components/Steps';
import Nav from './components/Nav';
import NavContext from './util/NavContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vacancy Questionaire',
  description:
    'A vacancy questionaire with 3 step registration. STEP 1: Bio data form. STEP 2: Credential upload. STEP 3: Questionaire on gender base.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-5`}>
        {/* Wrap content with context */}
        <NavContext>
          <Steps />
          {children}

          <Nav />
        </NavContext>
      </body>
    </html>
  );
}
