"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header({ currentPage = "home" }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);
  return (
    <header className="fixed z-50000 w-full border-b border-gray-700 bg-gray-900 shadow-2xl">
      {/* <div className="metal-texture absolute inset-0 opacity-20"></div> */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center space-x-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-red-600">
              <span className="text-xl font-bold text-white select-none">
                F
              </span>
            </div>
            <div>
              <Link
                href="/"
                className="text-3xl font-bold text-white transition-colors select-none hover:text-orange-400"
              >
                FERROLINK
              </Link>
              <div className="text-xs font-semibold tracking-wider text-orange-400 select-none">
                INDUSTRIAL TOOLS
              </div>
            </div>
          </div>
          <nav className="hidden space-x-8 md:flex">
            <Link
              href="/"
              className={`group relative text-sm font-bold tracking-wide transition-colors select-none ${
                currentPage === "home"
                  ? "text-orange-400"
                  : "text-gray-300 hover:text-orange-400"
              }`}
            >
              HOME
              {currentPage === "home" && (
                <div className="absolute right-0 -bottom-2 left-0 h-0.5 bg-orange-400"></div>
              )}
            </Link>
            <Link
              href="/products"
              className={`group relative text-sm font-bold tracking-wide transition-colors select-none ${
                currentPage === "products"
                  ? "text-orange-400"
                  : "text-gray-300 hover:text-orange-400"
              }`}
            >
              PRODUCTS
              {currentPage === "products" && (
                <div className="absolute right-0 -bottom-2 left-0 h-0.5 bg-orange-400"></div>
              )}
            </Link>
            <Link
              href="/about"
              className={`group relative text-sm font-bold tracking-wide transition-colors select-none ${
                currentPage === "about"
                  ? "text-orange-400"
                  : "text-gray-300 hover:text-orange-400"
              }`}
            >
              ABOUT
              {currentPage === "about" && (
                <div className="absolute right-0 -bottom-2 left-0 h-0.5 bg-orange-400"></div>
              )}
            </Link>
            <Link
              href="/contact"
              className={`group relative text-sm font-bold tracking-wide transition-colors select-none ${
                currentPage === "contact"
                  ? "text-orange-400"
                  : "text-gray-300 hover:text-orange-400"
              }`}
            >
              CONTACT
              {currentPage === "contact" && (
                <div className="absolute right-0 -bottom-2 left-0 h-0.5 bg-orange-400"></div>
              )}
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="rounded p-1 text-gray-300 transition-colors hover:text-orange-400 focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <svg
                className={`h-7 w-7 transition-transform duration-200 ${isMobileMenuOpen ? "rotate-90" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`absolute top-full left-0 h-screen w-full overflow-hidden bg-gray-900/95 backdrop-blur-sm transition-all duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen
              ? "max-h-screen opacity-100 shadow-2xl"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-gray-700">
            <nav className="space-y-2 px-6 py-8">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className={`flex items-center space-x-4 rounded-xl px-4 py-4 text-lg font-bold transition-all duration-200 ${
                  currentPage === "home"
                    ? "bg-orange-500/20 text-orange-400 shadow-lg"
                    : "text-gray-300 hover:bg-gray-800/50 hover:text-orange-400"
                }`}
              >
                <span className="text-2xl">🏠</span>
                <span>HOME</span>
              </Link>

              <Link
                href="/products"
                onClick={closeMobileMenu}
                className={`flex items-center space-x-4 rounded-xl px-4 py-4 text-lg font-bold transition-all duration-200 ${
                  currentPage === "products"
                    ? "bg-orange-500/20 text-orange-400 shadow-lg"
                    : "text-gray-300 hover:bg-gray-800/50 hover:text-orange-400"
                }`}
              >
                <span className="text-2xl">🛠️</span>
                <span>PRODUCTS</span>
              </Link>

              <Link
                href="/about"
                onClick={closeMobileMenu}
                className={`flex items-center space-x-4 rounded-xl px-4 py-4 text-lg font-bold transition-all duration-200 ${
                  currentPage === "about"
                    ? "bg-orange-500/20 text-orange-400 shadow-lg"
                    : "text-gray-300 hover:bg-gray-800/50 hover:text-orange-400"
                }`}
              >
                <span className="text-2xl">ℹ️</span>
                <span>ABOUT</span>
              </Link>

              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className={`flex items-center space-x-4 rounded-xl px-4 py-4 text-lg font-bold transition-all duration-200 ${
                  currentPage === "contact"
                    ? "bg-orange-500/20 text-orange-400 shadow-lg"
                    : "text-gray-300 hover:bg-gray-800/50 hover:text-orange-400"
                }`}
              >
                <span className="text-2xl">📞</span>
                <span>CONTACT</span>
              </Link>

              {/* Mobile CTA Button */}
              <div className="mt-6 border-t border-gray-700 pt-6">
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="flex w-full items-center justify-center space-x-3 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 px-8 py-4 font-bold text-white shadow-xl transition-all duration-300 hover:from-orange-700 hover:to-red-700"
                >
                  <span>💬</span>
                  <span>GET QUOTE</span>
                </Link>

                <div className="mt-4 text-center">
                  <div className="flex justify-center space-x-4 text-sm text-gray-400">
                    <span>📞 +886 47766093</span>
                    <span>📧 support@ferrolink.io</span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
