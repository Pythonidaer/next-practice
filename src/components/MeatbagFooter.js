import Link from 'next/link';

export default function MeatbagFooter() {
  return (
    <footer className="meatbag-footer">
        <Link href="/">About Meatbag</Link>
        <Link href="/">Contact</Link>
    </footer>
  );
}