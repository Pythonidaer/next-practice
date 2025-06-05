import Image from 'next/image';

export const metadata = {
    title: 'Post Detail',
    description: 'Read a full blog post.'
  };

export async function generateStaticParams() {
  const res = await fetch('http://localhost:3000/api/posts');
  const posts = await res.json();
  return posts.map(post => ({ id: post.id }));
}

export default async function PostPage({ params }) {
  const res = await fetch(`http://localhost:3000/api/posts?id=${params.id}`);
  const post = await res.json();

  return (
    <div className={post}>
      <h1>{post.title}</h1>
      <Image src="/profile.png" alt="Author" width={50} height={50} />
      <p>{post.content}</p>
      <p><em>— {post.author}</em></p>
    </div>
  );
}