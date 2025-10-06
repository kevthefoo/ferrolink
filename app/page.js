import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-900">
            <Header currentPage="home" />

            {/* Hero Section */}
            <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Industrial Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                    ></div>
                </div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <div className="mb-8">
                        <span className="inline-block px-4 py-2 bg-orange-600/20 text-orange-400 text-sm font-semibold rounded-full mb-6 border border-orange-600/30">
                            🔧 INDUSTRIAL GRADE TOOLS
                        </span>
                    </div>
                    <h1 className="text-5xl sm:text-7xl font-bold mb-6">
                        <span className="text-white block mb-2">FERROLINK</span>
                        <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                            PRECISION TOOLS
                        </span>
                    </h1>
                    <p className="text-xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
                        Engineering excellence in every tool. From precision CNC
                        cutting tools to heavy-duty hammers and axes. Built for
                        professionals who demand uncompromising quality and
                        reliability in their work.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link
                            href="/products"
                            className="group relative bg-gradient-to-r from-orange-600 to-red-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 industrial-shadow"
                        >
                            <span className="relative z-10">
                                EXPLORE CATALOG
                            </span>
                            <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </Link>
                        <Link
                            href="/contact"
                            className="group border-2 border-gray-600 text-gray-300 px-10 py-4 rounded-lg font-bold text-lg hover:border-orange-500 hover:text-orange-400 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm"
                        >
                            REQUEST QUOTE
                        </Link>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 border-orange-600/30"></div>
                <div className="absolute bottom-10 right-10 w-20 h-20 border-r-2 border-b-2 border-orange-600/30"></div>
            </section>

            {/* Product Categories */}
            <section id="products" className="py-20 bg-gray-800 relative">
                {/* Metal texture overlay */}
                <div className="absolute inset-0 metal-texture opacity-30"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h3 className="text-4xl font-bold text-white mb-4">
                            INDUSTRIAL PRODUCT LINES
                        </h3>
                        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-6"></div>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            Professional-grade tools engineered for durability,
                            precision, and performance in demanding industrial
                            environments.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* CNC Tools */}
                        <Link
                            href="/products/carbide-end-mill-4flute"
                            className="group bg-gray-900 border border-gray-700 p-8 rounded-xl hover:border-orange-500 transition-all duration-300 block relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative z-10">
                                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <span className="text-3xl text-white">
                                        ⚙️
                                    </span>
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                                    CNC TOOLS
                                </h4>
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    Precision Computer Numerical Control tools
                                    for machining and manufacturing
                                    applications.
                                </p>
                                <ul className="text-sm text-gray-500 space-y-2 mb-6">
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                                        End Mills
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                                        Drill Bits
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                                        Cutting Tools
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                                        Tool Holders
                                    </li>
                                </ul>
                                <div className="text-sm text-orange-400 font-bold group-hover:text-orange-300 transition-colors">
                                    EXPLORE 360° VIEW →
                                </div>
                            </div>
                        </Link>

                        {/* Hammers */}
                        <Link
                            href="/products/professional-claw-hammer"
                            className="group bg-gray-900 border border-gray-700 p-8 rounded-xl hover:border-orange-500 transition-all duration-300 block relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative z-10">
                                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <span className="text-3xl text-white">
                                        🔨
                                    </span>
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                                    HAMMERS
                                </h4>
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    Professional hammers built for durability
                                    and precision in construction and
                                    metalworking.
                                </p>
                                <ul className="text-sm text-gray-500 space-y-2 mb-6">
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                                        Claw Hammers
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                                        Ball Peen Hammers
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                                        Sledgehammers
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                                        Specialty Hammers
                                    </li>
                                </ul>
                                <div className="text-sm text-orange-400 font-bold group-hover:text-orange-300 transition-colors">
                                    EXPLORE 360° VIEW →
                                </div>
                            </div>
                        </Link>

                        {/* Axes */}
                        <Link
                            href="/products/felling-axe-36inch"
                            className="group bg-gray-900 border border-gray-700 p-8 rounded-xl hover:border-orange-500 transition-all duration-300 block relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative z-10">
                                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <span className="text-3xl text-white">
                                        🪓
                                    </span>
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                                    AXES
                                </h4>
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    Heavy-duty axes designed for forestry,
                                    construction, and outdoor applications.
                                </p>
                                <ul className="text-sm text-gray-500 space-y-2 mb-6">
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                                        Felling Axes
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                                        Splitting Axes
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                                        Hatchets
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                                        Tactical Axes
                                    </li>
                                </ul>
                                <div className="text-sm text-orange-400 font-bold group-hover:text-orange-300 transition-colors">
                                    EXPLORE 360° VIEW →
                                </div>
                            </div>
                        </Link>

                        {/* Garden Tools */}
                        <Link
                            href="/products/professional-shovel"
                            className="group bg-gray-900 border border-gray-700 p-8 rounded-xl hover:border-orange-500 transition-all duration-300 block relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative z-10">
                                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <span className="text-3xl text-white">
                                        🌱
                                    </span>
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                                    GARDEN TOOLS
                                </h4>
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    Essential gardening tools for landscaping
                                    professionals and gardening enthusiasts.
                                </p>
                                <ul className="text-sm text-gray-500 space-y-2 mb-6">
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                                        Shovels & Spades
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                                        Pruning Shears
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                                        Garden Hoes
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                                        Cultivators
                                    </li>
                                </ul>
                                <div className="text-sm text-orange-400 font-bold group-hover:text-orange-300 transition-colors">
                                    EXPLORE 360° VIEW →
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-black relative overflow-hidden">
                <div className="absolute inset-0 steel-gradient opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h3 className="text-4xl font-bold mb-6 text-white">
                            ENGINEERED FOR EXCELLENCE
                        </h3>
                        <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-8"></div>
                        <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
                            We combine traditional craftsmanship with
                            cutting-edge technology to deliver tools that exceed
                            the highest industry standards and professional
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
