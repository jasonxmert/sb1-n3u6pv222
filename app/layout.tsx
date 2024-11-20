"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Search By Postcode</title>
        <meta name="description" content="Search Postcodes Worldwide" />
      </head>
      <body className={`${inter.className} theme-transition`}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="bw"
          enableSystem={false}
          themes={["bw", "dark"]}
          disableTransitionOnChange={false}
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}