export const dynamic = 'force-dynamic'; // SSR

export default async function HomePage() {
  const currentTime = new Date().toLocaleString();
  const res = await fetch('http://localhost:3000/api/posts');
  const posts = await res.json();

  return (
    <div>
      <h1>Welcome!</h1>
      <p>Current time: {currentTime}</p>
      <ul>
        {posts.map(post => (
          <li key={post.id}><a href={`/posts/${post.id}`}>{post.title}</a></li>
        ))}
      </ul>
    </div>
  );
}