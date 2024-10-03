import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "../globals.css";
import { Suspense } from "react";
import ShortcutListener from "./components/ShortcutListener";

export const metadata: Metadata = {
  title: "Kindred House",
  description: "Supercharge your design & marketing",

  openGraph: {
    title: "Kindred House",
    description: "Supercharge your design & marketing",
    url: "https://kindredhouse.se/",
    type: "website",
    images: [
      {
        url: "https://kindredhouse.se/open-graph.webp",
        width: 1200,
        height: 630,
        alt: "Supercharge your design & marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kindred House",
    description: "Supercharge your design & marketing",
    images: ["https://kindredhouse.se/open-graph.webp"],
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
      </head>
      <body>
        <Analytics />
        <Suspense>
          <ShortcutListener />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
