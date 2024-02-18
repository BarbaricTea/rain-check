import type { Metadata } from "next";
import { Poppins } from "next/font/google"
import "./globals.css";
import Home from "./page";
import React from 'react'

export const metadata: Metadata = {
  title: "Rain check",
  description: "Simple app using open weather API",
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"]
})

export default function RootLayout({
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Home />
      </body>
    </html>
  );
}
