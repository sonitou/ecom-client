import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Danh sách các route yêu cầu đăng nhập
const privatePaths = ['/profile']

// Danh sách các route dành cho người dùng chưa đăng nhập
const authPaths = ['/login', '/register']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Lấy token từ cookie
  const accessToken = request.cookies.get('accessToken')?.value

  // 1. Người dùng chưa đăng nhập và cố gắng truy cập trang private
  if (privatePaths.some((path) => pathname.startsWith(path)) && !accessToken) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // 2. Người dùng đã đăng nhập và cố gắng truy cập trang login/register
  if (authPaths.some((path) => pathname.startsWith(path)) && accessToken) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // Các trường hợp khác thì cho phép truy cập
  return NextResponse.next()
}

// Cấu hình matcher để middleware chỉ chạy trên các route cần thiết
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
}
