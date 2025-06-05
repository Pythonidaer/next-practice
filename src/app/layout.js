// app/layout.js
import './globals.css';
import MeatbagNavbar from '@/components/MeatbagNavbar';
import MeatbagFooter from '@/components/MeatbagFooter';

export const metadata = {
  title: 'My Blog',
  description: 'A simple Next.js App Router demo'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MeatbagNavbar />
        <main>{children}</main>
        <MeatbagFooter />
      </body>
    </html>
  );
}