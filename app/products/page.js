import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
    categories,
    productsData,
    getProductsByCategory,
} from "../../data/realProducts";

export default function Products() {
    return (
        <div className="min-h-screen bg-gray-900">
            <Header currentPage="products" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-white mb-4">
                        FERROLINK PRODUCT CATALOG
                    </h1>
                    <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Professional-grade industrial tools engineered for
                        excellence. Each product represents decades of
                        manufacturing expertise and commitment to quality.
                    </p>
                </div>

                {/* Dynamic Product Categories */}
                {Object.entries(categories).map(([categoryId, category]) => {
                    const categoryProducts = getProductsByCategory(categoryId);

                    if (Object.keys(categoryProducts).length === 0) return null;

                    return (
                        <section key={categoryId} className="mb-16">
                            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-2xl">
                                <div className="flex items-center mb-8">
                                    <div
                                        className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mr-6`}
                                    >
                                        <span className="text-2xl text-white">
                                            {category.emoji}
                                        </span>
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold text-white mb-2">
                                            {category.name}
                                        </h2>
                                        <p className="text-gray-300 text-lg">
                                            {category.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {Object.values(categoryProducts).map(
                                        (product) => (
                                            <Link
                                                key={product.id}
                                                href={`/products/${product.category}/${product.id}`}
                                                className="group bg-gray-900 border border-gray-600 rounded-xl p-6 hover:border-orange-500 transition-all duration-300 hover:shadow-xl"
                                            >
                                                {/* Product Image */}
                                                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-700 flex items-center justify-center">
                                                    {product.mainImage ? (
                                                        <Image
                                                            src={
                                                                product.mainImage
                                                            }
                                                            alt={product.name}
                                                            width={200}
                                                            height={200}
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                            unoptimized
                                                        />
                                                    ) : (
                                                        <div className="text-gray-500 text-4xl">
                                                            📷
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="flex items-start justify-between mb-4">
                                                    <div className="flex-1">
                                                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                                                            {product.name}
                                                        </h3>
                                                        <p className="text-gray-400 mb-2 text-sm leading-relaxed">
                                                            {
                                                                product.shortDescription
                                                            }
                                                        </p>
                                                    </div>
                                                    <div className="text-lg font-bold text-orange-500 ml-4">
                                                        {product.price}
                                                    </div>
                                                </div>

                                                <div className="mb-4">
                                                    <div className="text-sm text-gray-300 mb-2 font-semibold">
                                                        Key Features:
                                                    </div>
                                                    <ul className="text-sm text-gray-400 space-y-1">
                                                        {product.features
                                                            .slice(0, 3)
                                                            .map(
                                                                (
                                                                    feature,
                                                                    index
                                                                ) => (
                                                                    <li
                                                                        key={
                                                                            index
                                                                        }
                                                                        className="flex items-start"
                                                                    >
                                                                        <span className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                                                                        {
                                                                            feature
                                                                        }
                                                                    </li>
                                                                )
                                                            )}
                                                    </ul>
                                                </div>

                                                <div className="flex items-center justify-between border-t border-gray-700 pt-4">
                                                    <span className="text-sm text-orange-400 font-bold group-hover:text-orange-300 transition-colors">
                                                        VIEW DETAILS →
                                                    </span>
                                                    <div className="text-xs text-gray-500">
                                                        🔧 Professional Grade
                                                    </div>
                                                </div>
                                            </Link>
                                        )
                                    )}
                                </div>
                            </div>
                        </section>
                    );
                })}

                {/* Call to Action */}
                <section className="text-center bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl p-12 shadow-2xl">
                    <h2 className="text-3xl font-bold mb-4">
                        NEED A CUSTOM SOLUTION?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Can&apos;t find exactly what you&apos;re looking for?
                        Our engineering team specializes in creating custom
                        industrial tools tailored to your specific requirements
                        and applications.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-block"
                        >
                            REQUEST CUSTOM QUOTE
                        </Link>
                        <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-orange-600 transition-colors">
                            DOWNLOAD CATALOG
                        </button>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
}
