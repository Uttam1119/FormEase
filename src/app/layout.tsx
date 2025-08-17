import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "next-themes";
import { Toaster } from 'react-hot-toast';

const inter = Inter({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "FormEase",
  description: "Form-Builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Toaster/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
