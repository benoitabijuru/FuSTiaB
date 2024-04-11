import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes:[
    '/',
    '/technology',
    '/business',
    '/game-changers/:id',
    '/science/:id',
    '/api/webhook/clerk',
    '/api/uploadthing',
    '/api/webhook/stripe',
    '/about-us',
    '/affliative',
    '/contact-us',

  ],
  ignoredRoutes:[
    '/api/webhook/clerk',
    '/api/uploadthing',
  ]
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};