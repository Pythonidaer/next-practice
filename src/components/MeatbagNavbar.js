import Link from 'next/link';

export default function MeatbagNavbar() {
  return (
    <nav className="meatbag-navbar" style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Link href="/" className="meatbag-logo">MEATBAG</Link>
      <div className="meatbag-nav-links">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/components">Components Page</Link>
        <Link href="/workout/1/edit">Edit Workout #1</Link>
      </div>
    </nav>
  );
}