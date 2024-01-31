import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import localFont from "next/font/local"


 const myFont = localFont({ src: './GothamMedium.ttf' })
const inter = Inter({subsets : ['latin']})
 
export const metadata: Metadata = {
  title: 'Spotify Clone',
  description: 'Philkhana Sidharth',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`bg-black text-white ${myFont.className}`}>{children}</body>
    </html>
  );
}
