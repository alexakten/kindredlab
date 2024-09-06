import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
// import ShortcutListener from "./components/ShortcutListener";

export const metadata: Metadata = {
  title: "Kindred Laboratory",
  description: "Design partner for startups",
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
        {/* <ShortcutListener /> */}
        <Analytics />
        {children}
      </body>
    </html>
  );
}
