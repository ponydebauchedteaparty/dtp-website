"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="w-full bg-white bg-opacity-90 px-2 sm:px-4 py-0 flex items-center justify-center gap-2 sm:gap-6 text-base sm:text-lg font-semibold sticky top-0 z-20 min-h-[100px]">
          <div className="flex items-center gap-2 sm:gap-3 absolute left-2 sm:left-4 h-full">
            <Image src="/logo.png" alt="DTP Logo" height={150} width={150} className="h-[150px] w-auto" />
          </div>
          {/* Hamburger menu for mobile */}
          <div className="sm:hidden absolute right-4">
            <button
              onClick={() => setMenuOpen((open) => !open)}
              className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
              aria-label="Open menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            {/* Dropdown menu */}
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-50 flex flex-col">
                <Link href="/" className="px-4 py-3 hover:bg-gray-100 text-black" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link href="/about" className="px-4 py-3 hover:bg-gray-100 text-black" onClick={() => setMenuOpen(false)}>About</Link>
                <Link href="/radio" className="px-4 py-3 hover:bg-gray-100 text-black" onClick={() => setMenuOpen(false)}>Radio</Link>
                <Link href="/webchat" className="px-4 py-3 hover:bg-gray-100 text-black" onClick={() => setMenuOpen(false)}>Web Chat</Link>
                <Link href="/blog" className="px-4 py-3 hover:bg-gray-100 text-black" onClick={() => setMenuOpen(false)}>Blog</Link>
              </div>
            )}
          </div>
          {/* Inline menu for desktop */}
          <div className="hidden sm:flex flex-wrap sm:flex-nowrap gap-2 sm:gap-6 ml-[160px]">
            <Link href="/" className="hover:underline text-black transition">Home</Link>
            <Link href="/about" className="hover:underline text-black transition">About</Link>
            <Link href="/radio" className="hover:underline text-black transition">Radio</Link>
            <Link href="/webchat" className="hover:underline text-black transition">Web Chat</Link>
            <Link href="/blog" className="hover:underline text-black transition">Blog</Link>
          </div>
        </nav>
        <div className="w-full h-[120px] sm:h-[200px] md:h-[300px] relative mb-0">
          <Image src="/background.png" alt="Header Banner" fill style={{ objectFit: 'cover' }} priority />
        </div>
        {children}
      </body>
    </html>
  );
}
