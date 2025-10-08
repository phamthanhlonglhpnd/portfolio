import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "./provider";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pham Thanh Long's Portfolio",
  description: "Modern & Minimal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.webp" sizes="any" />
      </head>
      <body className={montserrat.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
