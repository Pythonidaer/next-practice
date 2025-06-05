import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link> |{" "}
      <Link href="/posts">All Posts</Link> |{" "}
      <Link href="/secret">Secret Page</Link>
    </nav>
  );
}