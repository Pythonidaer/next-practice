const comments = {
    '1': [{ id: 1, text: 'Great post!' }],
    '2': [{ id: 2, text: 'Very helpful!' }]
  };
  
  export async function GET(req) {
    const postId = req.nextUrl.searchParams.get('postId');
    return Response.json(comments[postId] || []);
  }