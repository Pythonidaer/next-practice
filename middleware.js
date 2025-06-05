export function middleware(request) {
    console.log('🚨 Middleware running for:', request.nextUrl.pathname);
  
    const url = request.nextUrl;
    if (url.pathname.startsWith('/secret')) {
      return NextResponse.redirect(new URL('/', request.url));
    }
    return NextResponse.next();
  }