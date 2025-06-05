// const posts = [
//     { id: '1', title: 'First Post', content: 'Hello world', author: 'Alice' },
//     { id: '2', title: 'Second Post', content: 'Learning Next.js', author: 'Bob' }
//   ];
  
//   export async function GET(req) {
//     const id = req.nextUrl.searchParams.get('id');
//     if (id) {
//       return Response.json(posts.find(p => p.id === id));
//     }
//     return Response.json(posts);
//   }