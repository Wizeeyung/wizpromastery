import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  title: "Wiz Mastery",
  description: "Wiz NextJs Mastery",
  other: {
    'theme-color': '#0d1117',
    'color-scheme': 'dark only',
    "twitter:image": 'https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg',
    "twitter:card": "summary_large_image",
    "og:url": "wizpromastery.vercel.app",
    "og:image": 'https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg',
    "og:type": "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100">
        {children}
      </body>
    </html>
  );
}
