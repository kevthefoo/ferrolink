import Image from "next/image";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Product360Viewer from "../../../../components/Product360Viewer";
import {
    getProductById,
    categories,
    productsData,
} from "../../../../data/realProducts";
import Link from "next/link";

// This function generates all possible paths for static generation
export async function generateStaticParams() {
    const paths = [];

    // Generate paths for all products
    Object.keys(productsData).forEach((categoryId) => {
        Object.keys(productsData[categoryId]).forEach((productId) => {
            paths.push({
                category: categoryId,
                productId: productId,
            });
        });
    });

    return paths;
}

export default async function ProductDetail({ params }) {
    const { category, productId } = await params;
    const product = getProductById(category, productId);
    const categoryInfo = categories[category];

    if (!product) {
        return (
            <div className="min-h-screen bg-gray-900 text-white">
                <Header />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                    <h1 className="text-4xl font-bold mb-4">
                        Product Not Found
                    </h1>
                    <p className="text-gray-400 mb-8">
                        The product you&apos;re looking for doesn&apos;t exist
                        or may have been moved.
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

    return (
        <div className="min-h-screen bg-gray-900">
            <Header currentPage="products" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
                    <Link
                        href={`/products#${category}`}
                        className="hover:text-orange-400 transition-colors"
                    >
                        {categoryInfo?.name || category}
                    </Link>
                    <span className="mx-2">/</span>
                    <span className="text-orange-400">{product.name}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    {/* Product Images and 360° Viewer */}
                    <div className="space-y-6">
                        <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                            <h3 className="text-xl font-bold text-white mb-4 text-center">
                                Interactive 360° Product View
                            </h3>
                            <Product360Viewer
                                productName={product.name}
                                images={
                                    product.images360 || [product.mainImage]
                                }
                            />
                        </div>

                        {/* Main Product Image */}
                        {product.mainImage && (
                            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                                <Image
                                    src={product.mainImage}
                                    alt={product.name}
                                    width={600}
                                    height={400}
                                    className="w-full h-64 object-cover rounded-xl"
                                    unoptimized
                                />
                            </div>
                        )}
                    </div>

                    {/* Product Information */}
                    <div className="space-y-8">
                        {/* Header */}
                        <div>
                            <div className="flex items-center mb-4">
                                <div
                                    className={`w-12 h-12 bg-gradient-to-br ${
                                        categoryInfo?.color ||
                                        "from-gray-500 to-gray-700"
                                    } rounded-lg flex items-center justify-center mr-4`}
                                >
                                    <span className="text-xl text-white">
                                        {categoryInfo?.emoji || "🔧"}
                                    </span>
                                </div>
                                <div>
                                    <div className="text-sm text-orange-400 font-semibold uppercase tracking-wide">
                                        {product.categoryName}
                                    </div>
                                    <h1 className="text-3xl font-bold text-white">
                                        {product.name}
                                    </h1>
                                </div>
                            </div>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                {product.shortDescription}
                            </p>
                            <div className="text-3xl font-bold text-orange-500 mt-4">
                                {product.price}
                            </div>
                        </div>

                        {/* Description */}
                        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-white mb-4">
                                Product Description
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        {/* Key Features */}
                        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-white mb-4">
                                Key Features
                            </h3>
                            <ul className="space-y-3">
                                {product.features.map((feature, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start text-gray-300"
                                    >
                                        <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Applications */}
                        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-white mb-4">
                                Applications
                            </h3>
                            <ul className="space-y-2">
                                {product.applications.map(
                                    (application, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start text-gray-300"
                                        >
                                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            {application}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/contact"
                                className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 text-white text-center px-8 py-4 rounded-xl font-bold hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg"
                            >
                                REQUEST QUOTE
                            </Link>
                            <button className="flex-1 border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-xl font-bold hover:bg-orange-600 hover:text-white transition-colors">
                                ADD TO WISHLIST
                            </button>
                        </div>
                    </div>
                </div>

                {/* Technical Specifications */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                        <h3 className="text-2xl font-bold text-white mb-6">
                            Technical Specifications
                        </h3>
                        <div className="space-y-4">
                            {Object.entries(product.specifications).map(
                                ([key, value]) => (
                                    <div
                                        key={key}
                                        className="flex justify-between border-b border-gray-700 pb-2"
                                    >
                                        <span className="text-gray-400 font-medium">
                                            {key}:
                                        </span>
                                        <span className="text-white font-semibold">
                                            {value}
                                        </span>
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    {/* Technical Data (if available) */}
                    {product.technicalData && (
                        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                            <h3 className="text-2xl font-bold text-white mb-6">
                                Technical Data
                            </h3>
                            <div className="space-y-4">
                                {Object.entries(product.technicalData).map(
                                    ([key, value]) => (
                                        <div
                                            key={key}
                                            className="flex justify-between border-b border-gray-700 pb-2"
                                        >
                                            <span className="text-gray-400 font-medium">
                                                {key}:
                                            </span>
                                            <span className="text-white font-semibold">
                                                {value}
                                            </span>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Related Products */}
                {product.relatedProducts &&
                    product.relatedProducts.length > 0 && (
                        <div className="mb-12">
                            <h3 className="text-2xl font-bold text-white mb-8 text-center">
                                RELATED PRODUCTS
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {product.relatedProducts
                                    .slice(0, 3)
                                    .map((relatedId) => {
                                        const relatedProduct = getProductById(
                                            category,
                                            relatedId
                                        );
                                        if (!relatedProduct) return null;

                                        return (
                                            <Link
                                                key={relatedId}
                                                href={`/products/${category}/${relatedId}`}
                                                className="group bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-orange-500 transition-all duration-300"
                                            >
                                                {relatedProduct.mainImage && (
                                                    <div className="w-full h-32 mb-4 rounded-lg overflow-hidden bg-gray-700">
                                                        <Image
                                                            src={
                                                                relatedProduct.mainImage
                                                            }
                                                            alt={
                                                                relatedProduct.name
                                                            }
                                                            width={200}
                                                            height={128}
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                            unoptimized
                                                        />
                                                    </div>
                                                )}
                                                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                                                    {relatedProduct.name}
                                                </h4>
                                                <p className="text-gray-400 text-sm mb-3">
                                                    {
                                                        relatedProduct.shortDescription
                                                    }
                                                </p>
                                                <div className="text-orange-500 font-bold">
                                                    {relatedProduct.price}
                                                </div>
                                            </Link>
                                        );
                                    })}
                            </div>
                        </div>
                    )}
            </div>

            <Footer />
        </div>
    );
}
