import Link from "next/link";

export default function Header({ currentPage = "home" }) {
    return (
        <header className="bg-gray-900 border-b border-gray-700 shadow-2xl relative">
            <div className="absolute inset-0 metal-texture opacity-20"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex justify-between items-center py-6">
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">
                                F
                            </span>
                        </div>
                        <div>
                            <Link
                                href="/"
                                className="text-3xl font-bold text-white hover:text-orange-400 transition-colors"
                            >
                                FERROLINK
                            </Link>
                            <div className="text-xs text-orange-400 font-semibold tracking-wider">
                                INDUSTRIAL TOOLS
                            </div>
                        </div>
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        <Link
                            href="/"
                            className={`font-bold text-sm tracking-wide transition-colors relative group ${
                                currentPage === "home"
                                    ? "text-orange-400"
                                    : "text-gray-300 hover:text-orange-400"
                            }`}
                        >
                            HOME
                            {currentPage === "home" && (
                                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-orange-400"></div>
                            )}
                        </Link>
                        <Link
                            href="/products"
                            className={`font-bold text-sm tracking-wide transition-colors relative group ${
                                currentPage === "products"
                                    ? "text-orange-400"
                                    : "text-gray-300 hover:text-orange-400"
                            }`}
                        >
                            PRODUCTS
                            {currentPage === "products" && (
                                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-orange-400"></div>
                            )}
                        </Link>
                        <Link
                            href="/about"
                            className={`font-bold text-sm tracking-wide transition-colors relative group ${
                                currentPage === "about"
                                    ? "text-orange-400"
                                    : "text-gray-300 hover:text-orange-400"
                            }`}
                        >
                            ABOUT
                            {currentPage === "about" && (
                                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-orange-400"></div>
                            )}
                        </Link>
                        <Link
                            href="/contact"
                            className={`font-bold text-sm tracking-wide transition-colors relative group ${
                                currentPage === "contact"
                                    ? "text-orange-400"
                                    : "text-gray-300 hover:text-orange-400"
                            }`}
                        >
                            CONTACT
                            {currentPage === "contact" && (
                                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-orange-400"></div>
                            )}
                        </Link>
                    </nav>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button className="text-gray-300 hover:text-orange-400 transition-colors">
                            <svg
                                className="w-7 h-7"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth={2.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
