import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BlobCursor from "@/components/ui/BlobCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Developer Portfolio",
  description:
    "Portfolio showcasing frontend development skills, projects, and experiences",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={inter.className}>
        <BlobCursor />
        {children}
      </body>
    </html>
  );
}
