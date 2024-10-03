import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

// Define the locales you support
const locales = ["en", "sv"];
const defaultLocale = "sv"; // Default to Swedish

// Function to get the user's preferred locale
function getLocale(request: NextRequest): string {
  const negotiator = new Negotiator({
    headers: {
      "accept-language": request.headers.get("accept-language") || "",
    },
  });

  // Get the preferred languages from the request
  const languages = negotiator.languages();

  // Match the user's preferred languages to the available locales
  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Exclude paths for static assets (like images)
  const isStaticAsset = pathname.startsWith("/images/");

  // Check if the request already includes a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  // If the path does not contain a locale and is not a static asset, redirect to the preferred locale
  if (!pathnameHasLocale && !isStaticAsset) {
    const locale = getLocale(request); // Get the preferred or default locale
    const url = new URL(`/${locale}${pathname}`, request.url);
    return NextResponse.redirect(url);
  }

  // Allow request to proceed if it already contains a locale or is a static asset
  return NextResponse.next();
}

// Apply the middleware to all routes, including the root `/` path
export const config = {
  matcher: [
    "/((?!_next).*)", // Apply middleware to all paths, excluding Next.js internals (_next/*)
  ],
};
