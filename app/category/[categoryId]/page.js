import Link from "next/link";
import Image from "next/image";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import {
    categories,
    productsData,
    getProductsByCategory,
} from "../../../data/realProducts";

// Generate static params for all categories
export async function generateStaticParams() {
    return Object.keys(categories).map((categoryId) => ({
        categoryId: categoryId,
    }));
}

export default async function CategoryPage({ params }) {
    const { categoryId } = await params;
    const category = categories[categoryId];
    const categoryProducts = getProductsByCategory(categoryId);

    if (!category) {
        return (
            <div className="min-h-screen bg-gray-900 text-white">
                <Header />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                    <h1 className="text-4xl font-bold mb-4">
                        Category Not Found
                    </h1>
                    <p className="text-gray-400 mb-8">
                        The category you&apos;re looking for doesn&apos;t exist.
                    </p>
                    <Link
                        href="/products"
                        className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-lg font-bold hover:from-orange-700 hover:to-red-700 transition-all duration-300"
                    >
                        Back to Products
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    const productList = Object.values(categoryProducts);

    return (
        <div className="min-h-screen bg-gray-900">
            <Header currentPage="products" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Breadcrumb */}
                <div className="flex items-center text-sm text-gray-400 mb-8">
                    <Link
                        href="/"
                        className="hover:text-orange-400 transition-colors"
                    >
                        Home
                    </Link>
                    <span className="mx-2">/</span>
                    <Link
                        href="/products"
                        className="hover:text-orange-400 transition-colors"
                    >
                        Products
                    </Link>
                    <span className="mx-2">/</span>
                    <span className="text-orange-400">{category.name}</span>
                </div>

                {/* Category Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center mb-6">
                        <div
                            className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mr-6`}
                        >
                            <span className="text-3xl text-white">
                                {category.emoji}
                            </span>
                        </div>
                        <div className="text-left">
                            <h1 className="text-4xl font-bold text-white mb-2">
                                {category.name}
                            </h1>
                            <p className="text-xl text-gray-300">
                                {category.description}
                            </p>
                        </div>
                    </div>

                    <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-6"></div>

                    <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <div>
                                <div className="text-2xl font-bold text-orange-500 mb-2">
                                    {productList.length}
                                </div>
                                <div className="text-gray-400">
                                    Available Products
                                </div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-orange-500 mb-2">
                                    Professional
                                </div>
                                <div className="text-gray-400">
                                    Grade Quality
                                </div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-orange-500 mb-2">
                                    Industry
                                </div>
                                <div className="text-gray-400">
                                    Leading Tools
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Products Grid */}
                <section className="mb-16">
                    {productList.length > 0 ? (
                        <>
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-bold text-white">
                                    All {category.name} ({productList.length})
                                </h2>

                                {/* Sort/Filter options could go here */}
                                <div className="flex items-center space-x-4">
                                    <select className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-orange-500">
                                        <option>Sort by: Featured</option>
                                        <option>
                                            Sort by: Price (Low to High)
                                        </option>
                                        <option>
                                            Sort by: Price (High to Low)
                                        </option>
                                        <option>Sort by: Name (A-Z)</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {productList.map((product) => (
                                    <Link
                                        key={product.id}
                                        href={`/products/${product.category}/${product.id}`}
                                        className="group bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-orange-500 transition-all duration-300 hover:shadow-xl"
                                    >
                                        {/* Product Image */}
                                        <div className="w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-700 flex items-center justify-center">
                                            {product.mainImage ? (
                                                <Image
                                                    src={product.mainImage}
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
                                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors line-clamp-2">
                                                    {product.name}
                                                </h3>
                                                <p className="text-gray-400 mb-2 text-sm line-clamp-2">
                                                    {product.shortDescription}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <div className="text-sm text-gray-300 mb-2 font-semibold">
                                                Key Features:
                                            </div>
                                            <ul className="text-sm text-gray-400 space-y-1">
                                                {product.features
                                                    .slice(0, 2)
                                                    .map((feature, index) => (
                                                        <li
                                                            key={index}
                                                            className="flex items-start"
                                                        >
                                                            <span className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                                                            <span className="line-clamp-1">
                                                                {feature}
                                                            </span>
                                                        </li>
                                                    ))}
                                            </ul>
                                        </div>

                                        <div className="flex items-center justify-between border-t border-gray-700 pt-4">
                                            <div className="text-lg font-bold text-orange-500">
                                                {product.price}
                                            </div>
                                            <div className="text-sm text-orange-400 font-bold group-hover:text-orange-300 transition-colors">
                                                VIEW DETAILS →
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="text-center py-12">
                            <div className="text-6xl text-gray-600 mb-4">
                                🔧
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">
                                No Products Available
                            </h3>
                            <p className="text-gray-400 mb-8">
                                Products in this category are coming soon. Check
                                back later for updates.
                            </p>
                            <Link
                                href="/products"
                                className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-lg font-bold hover:from-orange-700 hover:to-red-700 transition-all duration-300"
                            >
                                Browse Featured Products
                            </Link>
                        </div>
                    )}
                </section>

                {/* Related Categories */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-white mb-6 text-center">
                        EXPLORE OTHER CATEGORIES
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {Object.entries(categories)
                            .filter(([id]) => id !== categoryId)
                            .slice(0, 4)
                            .map(([id, cat]) => {
                                const catProducts = getProductsByCategory(id);
                                return (
                                    <Link
                                        key={id}
                                        href={`/category/${id}`}
                                        className="group bg-gray-800 border border-gray-700 rounded-xl p-4 hover:border-orange-500 transition-all duration-300 text-center"
                                    >
                                        <div
                                            className={`w-12 h-12 bg-gradient-to-br ${cat.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}
                                        >
                                            <span className="text-lg text-white">
                                                {cat.emoji}
                                            </span>
                                        </div>
                                        <h3 className="text-sm font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">
                                            {cat.name}
                                        </h3>
                                        <p className="text-xs text-gray-400">
                                            {Object.keys(catProducts).length}{" "}
                                            products
                                        </p>
                                    </Link>
                                );
                            })}
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
}
