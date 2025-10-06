import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            <Header currentPage="home" />

            {/* Hero Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">
                        Professional Grade
                        <span className="block text-orange-600">
                            Hand Tools
                        </span>
                    </h2>
                    <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
                        Specializing in Computer Numerical Control (CNC) tools,
                        hammers, axes, and garden tools. Crafted with precision
                        for professionals and enthusiasts who demand excellence.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/products"
                            className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-center"
                        >
                            Browse Products
                        </Link>
                        <Link
                            href="/contact"
                            className="border-2 border-slate-300 text-slate-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors text-center"
                        >
                            Get Quote
                        </Link>
                    </div>
                </div>
            </section>

            {/* Product Categories */}
            <section id="products" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">
                        Our Product Lines
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* CNC Tools */}
                        <Link
                            href="/products/carbide-end-mill-4flute"
                            className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition-shadow block"
                        >
                            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-2xl text-white">⚙️</span>
                            </div>
                            <h4 className="text-xl font-semibold text-slate-900 mb-3">
                                CNC Tools
                            </h4>
                            <p className="text-slate-600 mb-4">
                                Precision Computer Numerical Control tools for
                                machining and manufacturing applications.
                            </p>
                            <ul className="text-sm text-slate-500 space-y-1 mb-3">
                                <li>• End Mills</li>
                                <li>• Drill Bits</li>
                                <li>• Cutting Tools</li>
                                <li>• Tool Holders</li>
                            </ul>
                            <div className="text-sm text-blue-600 font-medium">
                                View 360° Product Details →
                            </div>
                        </Link>

                        {/* Hammers */}
                        <Link
                            href="/products/professional-claw-hammer"
                            className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition-shadow block"
                        >
                            <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-2xl text-white">🔨</span>
                            </div>
                            <h4 className="text-xl font-semibold text-slate-900 mb-3">
                                Hammers
                            </h4>
                            <p className="text-slate-600 mb-4">
                                Professional hammers built for durability and
                                precision in construction and metalworking.
                            </p>
                            <ul className="text-sm text-slate-500 space-y-1 mb-3">
                                <li>• Claw Hammers</li>
                                <li>• Ball Peen Hammers</li>
                                <li>• Sledgehammers</li>
                                <li>• Specialty Hammers</li>
                            </ul>
                            <div className="text-sm text-blue-600 font-medium">
                                View 360° Product Details →
                            </div>
                        </Link>

                        {/* Axes */}
                        {/* Axes */}
                        <Link
                            href="/products/felling-axe-36inch"
                            className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition-shadow block"
                        >
                            <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-2xl text-white">🪓</span>
                            </div>
                            <h4 className="text-xl font-semibold text-slate-900 mb-3">
                                Axes
                            </h4>
                            <p className="text-slate-600 mb-4">
                                Heavy-duty axes designed for forestry,
                                construction, and outdoor applications.
                            </p>
                            <ul className="text-sm text-slate-500 space-y-1 mb-3">
                                <li>• Felling Axes</li>
                                <li>• Splitting Axes</li>
                                <li>• Hatchets</li>
                                <li>• Tactical Axes</li>
                            </ul>
                            <div className="text-sm text-blue-600 font-medium">
                                View 360° Product Details →
                            </div>
                        </Link>

                        {/* Garden Tools */}
                        <Link
                            href="/products/professional-shovel"
                            className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition-shadow block"
                        >
                            <div className="w-16 h-16 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-2xl text-white">🌱</span>
                            </div>
                            <h4 className="text-xl font-semibold text-slate-900 mb-3">
                                Garden Tools
                            </h4>
                            <p className="text-slate-600 mb-4">
                                Essential gardening tools for landscaping
                                professionals and gardening enthusiasts.
                            </p>
                            <ul className="text-sm text-slate-500 space-y-1 mb-3">
                                <li>• Shovels & Spades</li>
                                <li>• Pruning Shears</li>
                                <li>• Garden Hoes</li>
                                <li>• Cultivators</li>
                            </ul>
                            <div className="text-sm text-blue-600 font-medium">
                                View 360° Product Details →
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold mb-4">
                            Why Choose FerroLink Tools?
                        </h3>
                        <p className="text-slate-300 max-w-2xl mx-auto">
                            We combine traditional craftsmanship with modern
                            technology to deliver tools that exceed
                            expectations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">💎</span>
                            </div>
                            <h4 className="text-xl font-semibold mb-2">
                                Premium Quality
                            </h4>
                            <p className="text-slate-300">
                                High-grade materials and precision manufacturing
                                ensure long-lasting performance.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🛠️</span>
                            </div>
                            <h4 className="text-xl font-semibold mb-2">
                                Expert Engineering
                            </h4>
                            <p className="text-slate-300">
                                Designed by professionals who understand the
                                demands of serious work.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🎯</span>
                            </div>
                            <h4 className="text-xl font-semibold mb-2">
                                Precision Focus
                            </h4>
                            <p className="text-slate-300">
                                Every tool is crafted to deliver accuracy and
                                reliability in demanding applications.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-3xl font-bold text-slate-900 mb-6">
                                About FerroLink Tools
                            </h3>
                            <p className="text-slate-600 mb-4">
                                Founded on the principle that quality tools are
                                essential for quality work, FerroLink Tools has
                                become a trusted name in the hand tools
                                industry. We specialize in Computer Numerical
                                Control (CNC) tools and traditional hand tools
                                including hammers, axes, and garden implements.
                            </p>
                            <p className="text-slate-600 mb-6">
                                Our commitment to excellence drives us to
                                continuously innovate while maintaining the
                                craftsmanship traditions that have made our
                                tools the choice of professionals worldwide.
                            </p>
                            <div className="flex space-x-8">
                                <div>
                                    <div className="text-2xl font-bold text-orange-600">
                                        25+
                                    </div>
                                    <div className="text-slate-600">
                                        Years Experience
                                    </div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-orange-600">
                                        1000+
                                    </div>
                                    <div className="text-slate-600">
                                        Product Lines
                                    </div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-orange-600">
                                        50+
                                    </div>
                                    <div className="text-slate-600">
                                        Countries Served
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-100 p-8 rounded-xl">
                            <h4 className="text-xl font-semibold text-slate-900 mb-4">
                                Our Specialties
                            </h4>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                                    CNC Tool Manufacturing & Distribution
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                                    Professional Grade Hammers & Striking Tools
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                                    Heavy-Duty Axes & Cutting Tools
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                                    Commercial Garden & Landscaping Tools
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                                    Custom Tool Solutions
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-slate-900 mb-4">
                            Get in Touch
                        </h3>
                        <p className="text-slate-600">
                            Ready to upgrade your toolkit? Contact us for
                            product information, custom solutions, or bulk
                            orders.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-xl">📧</span>
                            </div>
                            <h4 className="font-semibold text-slate-900 mb-2">
                                Email
                            </h4>
                            <p className="text-slate-600">
                                sales@ferrolinktools.com
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-xl">📞</span>
                            </div>
                            <h4 className="font-semibold text-slate-900 mb-2">
                                Phone
                            </h4>
                            <p className="text-slate-600">1-800-FERRO-LINK</p>
                        </div>

                        <div className="text-center">
                            <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-xl">📍</span>
                            </div>
                            <h4 className="font-semibold text-slate-900 mb-2">
                                Location
                            </h4>
                            <p className="text-slate-600">
                                Industrial District, Tool City
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
                        <h4 className="text-xl font-semibold text-slate-900 mb-6">
                            Request a Quote
                        </h4>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Company Name"
                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                            />
                            <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600">
                                <option>Product Category</option>
                                <option>CNC Tools</option>
                                <option>Hammers</option>
                                <option>Axes</option>
                                <option>Garden Tools</option>
                                <option>Custom Solution</option>
                            </select>
                            <textarea
                                rows="4"
                                placeholder="Tell us about your project or requirements..."
                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                            >
                                Send Quote Request
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
