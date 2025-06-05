export const dynamic = 'force-static'; // SSG

export default async function PostsPage() {
  const res = await fetch('http://localhost:3000/api/posts');
  const posts = await res.json();

  return (
    <div>
      <h1>All Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}><a href={`/posts/${post.id}`}>{post.title}</a></li>
        ))}
      </ul>
    </div>
  );
}