// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { pb } from './pb';

export async function middleware(request: NextRequest) {
  const authCookie = request.cookies.get('pb_auth');

  if (authCookie) {
    const parsedAuthData = JSON.parse(authCookie.value);
    pb.authStore.save(parsedAuthData.token, parsedAuthData.record);
  }

  const isAuthenticated = pb.authStore.isValid;
  

  if (!isAuthenticated) {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
