"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header({ currentPage = "home" }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <header className="relative border-b border-gray-700 bg-gray-900 shadow-2xl">
      <div className="metal-texture absolute inset-0 opacity-20"></div>
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
              className="text-gray-300 transition-colors hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-gray-900 p-1 rounded"
              aria-label="Toggle mobile menu"
            >
              <svg
                className={`h-7 w-7 transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
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
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t border-gray-700 bg-gray-800/95 backdrop-blur-sm">
            <nav className="px-4 py-6 space-y-4">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className={`block text-base font-bold tracking-wide transition-colors select-none ${
                  currentPage === "home"
                    ? "text-orange-400 bg-orange-400/10 px-3 py-2 rounded-lg"
                    : "text-gray-300 hover:text-orange-400 hover:bg-gray-700/50 px-3 py-2 rounded-lg"
                }`}
              >
                🏠 HOME
              </Link>
              <Link
                href="/products"
                onClick={closeMobileMenu}
                className={`block text-base font-bold tracking-wide transition-colors select-none ${
                  currentPage === "products"
                    ? "text-orange-400 bg-orange-400/10 px-3 py-2 rounded-lg"
                    : "text-gray-300 hover:text-orange-400 hover:bg-gray-700/50 px-3 py-2 rounded-lg"
                }`}
              >
                🛠️ PRODUCTS
              </Link>
              <Link
                href="/about"
                onClick={closeMobileMenu}
                className={`block text-base font-bold tracking-wide transition-colors select-none ${
                  currentPage === "about"
                    ? "text-orange-400 bg-orange-400/10 px-3 py-2 rounded-lg"
                    : "text-gray-300 hover:text-orange-400 hover:bg-gray-700/50 px-3 py-2 rounded-lg"
                }`}
              >
                ℹ️ ABOUT
              </Link>
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className={`block text-base font-bold tracking-wide transition-colors select-none ${
                  currentPage === "contact"
                    ? "text-orange-400 bg-orange-400/10 px-3 py-2 rounded-lg"
                    : "text-gray-300 hover:text-orange-400 hover:bg-gray-700/50 px-3 py-2 rounded-lg"
                }`}
              >
                📞 CONTACT
              </Link>
              
              {/* Mobile CTA Button */}
              <div className="pt-4 mt-4 border-t border-gray-600">
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="block w-full text-center rounded-lg bg-gradient-to-r from-orange-600 to-red-600 px-6 py-3 font-bold text-white transition-all duration-300 hover:from-orange-700 hover:to-red-700 shadow-lg"
                >
                  GET QUOTE
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
