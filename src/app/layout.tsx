import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Suspense } from "react";
import ShortcutListener from "./[lang]/components/ShortcutListener";

export const metadata: Metadata = {
  title: "Kindred House",
  description: "Creative Partner for Ambitious Brands",

  openGraph: {
    title: "Kindred House",
    description: "Creative Partner for Ambitious Brands",
    url: "https://kindredhouse.se/",
    type: "website",
    images: [
      {
        url: "https://kindredhouse.se/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Creative Partner for Ambitious Brands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kindred House",
    description: "Creative Partner for Ambitious Brands",
    images: ["https://kindredhouse.se/opengraph-image.png"], // Local reference
  },
  icons: {
    icon: "/favicon.png", // Local reference to favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/zhy0giy.css" />
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body>
        <Analytics />
        {/* <Suspense>
          <ShortcutListener />
        </Suspense> */}
        {children}
      </body>
    </html>
  );
}
