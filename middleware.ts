import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import Upcoming from './app/(root)/(home)/upcoming/page';

const protectedRoute = createRouteMatcher([
  '/',
  '/upcoming',
  '/previous',
  '/recordings',
  '/personal-room',
  '/meeting(.*)'
])

export default clerkMiddleware((auth, req) => {
  if(protectedRoute(req)) auth().protect()
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};