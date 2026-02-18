import { next } from '@vercel/edge'

export const config = {
  matcher: '/(.*)',
}

export default function middleware(request) {
  const basicAuth = request.headers.get('authorization')

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [user, pwd] = atob(authValue).split(':')

    if (user === 'kig' && pwd === 'king2010') {
      return next()
    }
  }

  return new Response('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="KIG Website - Staging"',
    },
  })
}
