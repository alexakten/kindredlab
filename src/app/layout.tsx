import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Suspense } from "react";
import ShortcutListener from "./components/ShortcutListener";

export const metadata: Metadata = {
  title: "Kindred House",
  description: "Supercharge your design & marketing",
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
