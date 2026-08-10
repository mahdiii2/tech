import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Run on localized pages, but leave APIs, Next internals and metadata/image
  // routes untouched. Generated OG images use an extensionless route.
  matcher: ["/((?!api|_next|_vercel|opengraph-image|.*\\..*).*)"],
};
