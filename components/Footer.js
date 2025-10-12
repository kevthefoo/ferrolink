import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t-2 border-gray-800 bg-black py-16 text-white">
      <div className="metal-texture absolute inset-0 opacity-20"></div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <div className="mb-6 flex items-center space-x-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-red-600">
                <span className="text-2xl font-bold text-white">F</span>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white">FERROLINK</h4>
                <div className="text-xs font-semibold tracking-wider text-orange-400">
                  INDUSTRIAL TOOLS
                </div>
              </div>
            </div>
            <p className="mb-6 leading-relaxed text-gray-400">
              Engineering precision tools for professionals who demand
              uncompromising quality and reliability.
            </p>
            <p className="text-sm font-semibold text-gray-500">
              © 2025 FERROLINK TOOLS. ALL RIGHTS RESERVED.
            </p>
          </div>

          <div>
            <h5 className="mb-6 text-lg font-bold tracking-wider text-orange-400">
              PRODUCT LINES
            </h5>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link
                  href="/products#cnc-tools"
                  className="group flex items-center transition-colors hover:text-orange-400"
                >
                  <span className="mr-3 h-2 w-2 rounded-full bg-orange-500 transition-colors group-hover:bg-orange-400"></span>
                  CNC TOOLS
                </Link>
              </li>
              <li>
                <Link
                  href="/products#hammers"
                  className="group flex items-center transition-colors hover:text-orange-400"
                >
                  <span className="mr-3 h-2 w-2 rounded-full bg-orange-500 transition-colors group-hover:bg-orange-400"></span>
                  HAMMERS
                </Link>
              </li>
              <li>
                <Link
                  href="/products#axes"
                  className="group flex items-center transition-colors hover:text-orange-400"
                >
                  <span className="mr-3 h-2 w-2 rounded-full bg-orange-500 transition-colors group-hover:bg-orange-400"></span>
                  AXES
                </Link>
              </li>
              <li>
                <Link
                  href="/products#garden-tools"
                  className="group flex items-center transition-colors hover:text-orange-400"
                >
                  <span className="mr-3 h-2 w-2 rounded-full bg-orange-500 transition-colors group-hover:bg-orange-400"></span>
                  GARDEN TOOLS
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="mb-3 font-semibold">Support</h5>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link
                  href="/catalog"
                  className="transition-colors hover:text-white"
                >
                  Product Catalog
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="transition-colors hover:text-white"
                >
                  Technical Support
                </Link>
              </li>
              <li>
                <Link
                  href="/warranty"
                  className="transition-colors hover:text-white"
                >
                  Warranty
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="transition-colors hover:text-white"
                >
                  Returns
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="mb-3 font-semibold">Company</h5>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/quality"
                  className="transition-colors hover:text-white"
                >
                  Quality Standards
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-700 pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 flex space-x-6 md:mb-0">
              <a
                href="#"
                className="text-slate-400 transition-colors hover:text-white"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-slate-400 transition-colors hover:text-white"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-slate-400 transition-colors hover:text-white"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
            <div className="text-sm text-slate-400">
              <p>Built for professionals who demand excellence</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
