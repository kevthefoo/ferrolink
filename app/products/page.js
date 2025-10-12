import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
    categories,
    getFeaturedProducts,
    getProductsByCategory,
} from "../../data/realProducts";

export default function Products() {
    return (
        <div className="min-h-screen bg-gray-900">
            <Header currentPage="products" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-white mb-4">
                        FEATURED PROFESSIONAL TOOLS
                    </h1>
                    <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Discover our most popular and award-winning professional
                        tools. These industry-leading products represent the
                        pinnacle of engineering excellence and customer
                        satisfaction.
                    </p>
                </div>

                {/* Browse by Category Section */}
                <section className="mb-16">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">
                            BROWSE BY CATEGORY
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Explore our complete product lines organized by
                            application and tool type
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
                        {Object.entries(categories).map(
                            ([categoryId, category]) => {
                                const categoryProducts =
                                    getProductsByCategory(categoryId);
                                const productCount =
                                    Object.keys(categoryProducts).length;

                                return (
                                    <Link
                                        key={categoryId}
                                        href={`/category/${categoryId}`}
                                        className="group bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-orange-500 transition-all duration-300 text-center"
                                    >
                                        <div
                                            className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                                        >
                                            <span className="text-2xl text-white">
                                                {category.emoji}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                                            {category.name}
                                        </h3>
                                        <p className="text-sm text-gray-400 mb-3">
                                            {productCount} products
                                        </p>
                                        <div className="text-sm text-orange-400 font-bold group-hover:text-orange-300 transition-colors">
                                            VIEW ALL →
                                        </div>
                                    </Link>
                                );
                            }
                        )}
                    </div>
                </section>

                {/* Featured Products Grid */}
                <section className="mb-16">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">
                            OUR MOST POPULAR TOOLS
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Top-rated tools chosen by professionals worldwide
                            for their exceptional performance and reliability
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {getFeaturedProducts().map((product) => (
                            <Link
                                key={`${product.category}-${product.id}`}
                                href={`/products/${product.category}/${product.id}`}
                                className="group bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-orange-500 transition-all duration-300 hover:shadow-xl relative"
                            >
                                {/* Featured Badge */}
                                <div className="absolute z-10 top-4 right-4 bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                                    FEATURED
                                </div>

                                {/* Product Image */}
                                <div className="w-full h-40 mb-4 rounded-lg overflow-hidden bg-gray-700 flex items-center justify-center">
                                    {product.mainImage ? (
                                        <Image
                                            src={product.mainImage}
                                            alt={product.name}
                                            width={160}
                                            height={160}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            unoptimized
                                        />
                                    ) : (
                                        <div className="text-gray-500 text-3xl">
                                            📷
                                        </div>
                                    )}
                                </div>

                                {/* Category Badge */}
                                <div className="inline-block px-3 py-1 bg-gray-700 text-orange-400 text-xs font-semibold rounded-full mb-3 uppercase">
                                    {product.categoryName}
                                </div>

                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                                    {product.name}
                                </h3>

                                <p className="text-gray-400 mb-3 text-sm line-clamp-2">
                                    {product.shortDescription}
                                </p>

                                <div className="flex items-center justify-between mt-4">
                                    <div className="text-sm text-orange-400 font-bold group-hover:text-orange-300 transition-colors">
                                        VIEW →
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

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
