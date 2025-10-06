import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { productsData } from "../../data/products";

export default function Products() {
    return (
        <div className="min-h-screen bg-slate-50">
            <Header currentPage="products" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">
                        Our Product Catalog
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Explore our comprehensive range of professional-grade
                        hand tools, designed and manufactured for the most
                        demanding applications.
                    </p>
                </div>

                {/* CNC Tools Section */}
                <section className="mb-16">
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                                <span className="text-2xl text-white">⚙️</span>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900">
                                    CNC Tools
                                </h2>
                                <p className="text-slate-600">
                                    Computer Numerical Control Tools for
                                    Precision Manufacturing
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            {Object.values(productsData["cnc-tools"] || {}).map(
                                (product) => (
                                    <Link
                                        key={product.id}
                                        href={`/products/${product.id}`}
                                        className="border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow hover:border-orange-300"
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex-1">
                                                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                                                    {product.name}
                                                </h3>
                                                <p className="text-slate-600 mb-2">
                                                    {product.shortDescription}
                                                </p>
                                            </div>
                                            <div className="text-lg font-bold text-orange-600 ml-4">
                                                {product.price}
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <div className="text-sm text-slate-500 mb-2">
                                                Key Features:
                                            </div>
                                            <ul className="text-sm text-slate-500 space-y-1">
                                                {product.features
                                                    .slice(0, 3)
                                                    .map((feature, index) => (
                                                        <li key={index}>
                                                            • {feature}
                                                        </li>
                                                    ))}
                                            </ul>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-blue-600 font-medium">
                                                View 360° Details →
                                            </span>
                                            <div className="text-xs text-slate-400">
                                                📷 Interactive View Available
                                            </div>
                                        </div>
                                    </Link>
                                )
                            )}
                        </div>
                    </div>
                </section>

                {/* Hammers Section */}
                <section className="mb-16">
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mr-4">
                                <span className="text-2xl text-white">🔨</span>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900">
                                    Professional Hammers
                                </h2>
                                <p className="text-slate-600">
                                    Durable and Precise Striking Tools for Every
                                    Application
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            {Object.values(productsData["hammers"] || {}).map(
                                (product) => (
                                    <Link
                                        key={product.id}
                                        href={`/products/${product.id}`}
                                        className="border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow hover:border-orange-300"
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex-1">
                                                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                                                    {product.name}
                                                </h3>
                                                <p className="text-slate-600 mb-2">
                                                    {product.shortDescription}
                                                </p>
                                            </div>
                                            <div className="text-lg font-bold text-orange-600 ml-4">
                                                {product.price}
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <div className="text-sm text-slate-500 mb-2">
                                                Key Features:
                                            </div>
                                            <ul className="text-sm text-slate-500 space-y-1">
                                                {product.features
                                                    .slice(0, 3)
                                                    .map((feature, index) => (
                                                        <li key={index}>
                                                            • {feature}
                                                        </li>
                                                    ))}
                                            </ul>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-blue-600 font-medium">
                                                View 360° Details →
                                            </span>
                                            <div className="text-xs text-slate-400">
                                                📷 Interactive View Available
                                            </div>
                                        </div>
                                    </Link>
                                )
                            )}
                        </div>
                    </div>
                </section>

                {/* Axes Section */}
                <section className="mb-16">
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                                <span className="text-2xl text-white">🪓</span>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900">
                                    Heavy-Duty Axes
                                </h2>
                                <p className="text-slate-600">
                                    Professional Cutting Tools for Forestry and
                                    Construction
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                            <div className="border border-slate-200 rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                                    Felling Axes
                                </h3>
                                <p className="text-slate-600 mb-4">
                                    Professional tree felling and limbing axes
                                </p>
                                <ul className="text-sm text-slate-500 space-y-1">
                                    <li>• 3-6 lb head weights</li>
                                    <li>• 28-36 inch handle lengths</li>
                                    <li>• Premium steel construction</li>
                                    <li>• Balanced weight distribution</li>
                                </ul>
                            </div>

                            <div className="border border-slate-200 rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                                    Splitting Axes
                                </h3>
                                <p className="text-slate-600 mb-4">
                                    Designed for splitting firewood and logs
                                </p>
                                <ul className="text-sm text-slate-500 space-y-1">
                                    <li>• Wide wedge design</li>
                                    <li>• 6-8 lb head options</li>
                                    <li>• Composite handles available</li>
                                    <li>• Anti-stick coating</li>
                                </ul>
                            </div>

                            <div className="border border-slate-200 rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                                    Hatchets
                                </h3>
                                <p className="text-slate-600 mb-4">
                                    Compact axes for camping and light work
                                </p>
                                <ul className="text-sm text-slate-500 space-y-1">
                                    <li>• 1-2 lb weight range</li>
                                    <li>• 12-16 inch handles</li>
                                    <li>• Leather sheath included</li>
                                    <li>• Multi-purpose design</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Garden Tools Section */}
                <section className="mb-16">
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-16 bg-emerald-600 rounded-lg flex items-center justify-center mr-4">
                                <span className="text-2xl text-white">🌱</span>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900">
                                    Garden Tools
                                </h2>
                                <p className="text-slate-600">
                                    Professional Landscaping and Gardening
                                    Equipment
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                            <div className="border border-slate-200 rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                                    Shovels & Spades
                                </h3>
                                <p className="text-slate-600 mb-4">
                                    Professional digging and earth-moving tools
                                </p>
                                <ul className="text-sm text-slate-500 space-y-1">
                                    <li>• Round and square point options</li>
                                    <li>• Fiberglass and wood handles</li>
                                    <li>• Heat-treated steel blades</li>
                                    <li>• Comfortable grip design</li>
                                </ul>
                            </div>

                            <div className="border border-slate-200 rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                                    Pruning Shears
                                </h3>
                                <p className="text-slate-600 mb-4">
                                    Precision cutting tools for plant care
                                </p>
                                <ul className="text-sm text-slate-500 space-y-1">
                                    <li>• Bypass and anvil styles</li>
                                    <li>• Carbon steel blades</li>
                                    <li>• Ergonomic handles</li>
                                    <li>• Replaceable blade systems</li>
                                </ul>
                            </div>

                            <div className="border border-slate-200 rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                                    Garden Hoes
                                </h3>
                                <p className="text-slate-600 mb-4">
                                    Cultivating and weeding implements
                                </p>
                                <ul className="text-sm text-slate-500 space-y-1">
                                    <li>• Various blade configurations</li>
                                    <li>• Long and short handle options</li>
                                    <li>• Stainless steel construction</li>
                                    <li>• Lightweight aluminum models</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center bg-orange-600 text-white rounded-2xl p-12">
                    <h2 className="text-3xl font-bold mb-4">
                        Need a Custom Solution?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Can&apos;t find exactly what you&apos;re looking for?
                        Our team specializes in creating custom tools tailored
                        to your specific requirements.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
                            Request Custom Quote
                        </button>
                        <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                            Download Catalog
                        </button>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
}
