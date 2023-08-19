import Navbar from "@/components/common/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flipkart - Compliance Dashboard",
  description: "Compliance monitoring dashboard for Flipkart",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " dark"}>
        <Navbar />
        <div className="px-12 py-4 w-full">{children}</div>
      </body>
    </html>
  );
}
