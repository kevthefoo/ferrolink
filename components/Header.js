import Link from "next/link";

export default function Header({ currentPage = "home" }) {
    return (
        <header className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-6">
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="text-3xl font-bold text-slate-900"
                        >
                            FerroLink Tools
                        </Link>
                        <span className="ml-2 text-sm text-orange-600 font-medium">
                            Premium Hand Tools
                        </span>
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        <Link
                            href="/"
                            className={`font-medium transition-colors ${
                                currentPage === "home"
                                    ? "text-orange-600"
                                    : "text-slate-700 hover:text-orange-600"
                            }`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/products"
                            className={`font-medium transition-colors ${
                                currentPage === "products"
                                    ? "text-orange-600"
                                    : "text-slate-700 hover:text-orange-600"
                            }`}
                        >
                            Products
                        </Link>
                        <Link
                            href="/about"
                            className={`font-medium transition-colors ${
                                currentPage === "about"
                                    ? "text-orange-600"
                                    : "text-slate-700 hover:text-orange-600"
                            }`}
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className={`font-medium transition-colors ${
                                currentPage === "contact"
                                    ? "text-orange-600"
                                    : "text-slate-700 hover:text-orange-600"
                            }`}
                        >
                            Contact
                        </Link>
                    </nav>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button className="text-slate-700 hover:text-orange-600">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
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
