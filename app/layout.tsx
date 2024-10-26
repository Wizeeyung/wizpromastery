import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  title: "Wiz Mastery",
  description: "Wiz NextJs Mastery",
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
