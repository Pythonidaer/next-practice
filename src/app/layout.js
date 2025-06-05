// app/layout.js
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'My Blog',
  description: 'A simple Next.js App Router demo'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}