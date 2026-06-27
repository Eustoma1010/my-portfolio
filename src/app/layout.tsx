import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Phan Phuoc Quoc Thien | Portfolio",
  description: "Personal website and Curriculum Vitae.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        {/* Antigravity signature spectrum bar */}
        <div className="spectrum-bar" />
        
        <nav className="navbar">
          <div className="nav-container">
            <Link href="/" className="nav-brand hover-spectrum">Quoc Thien</Link>
            <div className="nav-links">
              <Link href="/" className="nav-link hover-spectrum">About</Link>
              <Link href="/cv" className="nav-link hover-spectrum">Resume</Link>
              <Link href="/projects" className="nav-link hover-spectrum">Projects</Link>
              <Link href="/awards" className="nav-link hover-spectrum">Education & Awards</Link>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
