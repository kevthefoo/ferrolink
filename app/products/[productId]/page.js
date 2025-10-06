import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Product360Viewer from "../../../components/Product360Viewer";
import { getProductById, getRelatedProducts } from "../../../data/products";

export default async function ProductDetail({ params }) {
    const { productId } = await params;
    const product = getProductById(productId);

    if (!product) {
        notFound();
    }

    const relatedProducts = getRelatedProducts(product.relatedProducts || []);

    return (
        <div className="min-h-screen bg-slate-50">
            <Header currentPage="products" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Breadcrumb */}
                <nav className="flex text-sm text-slate-500 mb-8">
                    <Link href="/" className="hover:text-orange-600">
                        Home
                    </Link>
                    <span className="mx-2">/</span>
                    <Link href="/products" className="hover:text-orange-600">
                        Products
                    </Link>
                    <span className="mx-2">/</span>
                    <span className="text-slate-900">{product.name}</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Product Images - 360 Viewer */}
                    <div className="space-y-6">
                        <Product360Viewer
                            images={product.images360}
                            productName={product.name}
                            width={500}
                            height={500}
                        />

                        {/* Image Info */}
                        <div className="bg-orange-50 p-4 rounded-lg">
                            <p className="text-sm text-orange-800">
                                <strong>Interactive 360° View:</strong> Drag or
                                swipe to rotate the product and examine all
                                angles. Use the thumbnail navigation below for
                                quick access to specific views.
                            </p>
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="space-y-6">
                        {/* Product Header */}
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                    {product.categoryName}
                                </span>
                            </div>
                            <h1 className="text-3xl font-bold text-slate-900 mb-4">
                                {product.name}
                            </h1>
                            <p className="text-xl text-slate-600 mb-4">
                                {product.shortDescription}
                            </p>
                            <div className="text-3xl font-bold text-orange-600 mb-6">
                                {product.price}
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex-1">
                                Add to Quote
                            </button>
                            <button className="border-2 border-slate-300 text-slate-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors">
                                Download Spec Sheet
                            </button>
                        </div>

                        {/* Key Features */}
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-semibold text-slate-900 mb-4">
                                Key Features
                            </h3>
                            <ul className="space-y-2">
                                {product.features.map((feature, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start"
                                    >
                                        <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span className="text-slate-600">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Quick Specifications */}
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-semibold text-slate-900 mb-4">
                                Quick Specifications
                            </h3>
                            <div className="grid grid-cols-1 gap-3">
                                {Object.entries(product.specifications)
                                    .slice(0, 6)
                                    .map(([key, value]) => (
                                        <div
                                            key={key}
                                            className="flex justify-between py-2 border-b border-slate-100 last:border-b-0"
                                        >
                                            <span className="text-slate-600 font-medium">
                                                {key}:
                                            </span>
                                            <span className="text-slate-900">
                                                {value}
                                            </span>
                                        </div>
                                    ))}
                            </div>
                        </div>

                        {/* Contact for Quote */}
                        <div className="bg-slate-900 text-white p-6 rounded-xl">
                            <h3 className="text-lg font-semibold mb-2">
                                Need a Custom Quote?
                            </h3>
                            <p className="text-slate-300 mb-4">
                                Contact our technical team for bulk pricing,
                                custom specifications, or technical support.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-block bg-orange-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors"
                            >
                                Contact Sales Team
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Detailed Information Tabs */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
                        {/* Description */}
                        <div className="md:col-span-3 mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                Product Description
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        {/* Full Specifications */}
                        <div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-4">
                                Complete Specifications
                            </h3>
                            <div className="space-y-3">
                                {Object.entries(product.specifications).map(
                                    ([key, value]) => (
                                        <div
                                            key={key}
                                            className="border-b border-slate-100 pb-2"
                                        >
                                            <div className="text-sm text-slate-500">
                                                {key}
                                            </div>
                                            <div className="text-slate-900 font-medium">
                                                {value}
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        {/* Applications */}
                        <div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-4">
                                Applications
                            </h3>
                            <ul className="space-y-2">
                                {product.applications.map(
                                    (application, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start"
                                        >
                                            <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            <span className="text-slate-600">
                                                {application}
                                            </span>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>

                        {/* Technical Data */}
                        <div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-4">
                                Technical Data
                            </h3>
                            <div className="space-y-3">
                                {Object.entries(
                                    product.technicalData || {}
                                ).map(([key, value]) => (
                                    <div
                                        key={key}
                                        className="border-b border-slate-100 pb-2"
                                    >
                                        <div className="text-sm text-slate-500">
                                            {key}
                                        </div>
                                        <div className="text-slate-900 font-medium">
                                            {value}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                            Related Products
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedProducts.map((relatedProduct) => (
                                <Link
                                    key={relatedProduct.id}
                                    href={`/products/${relatedProduct.id}`}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                                >
                                    <div className="aspect-square bg-slate-100 flex items-center justify-center">
                                        <div className="text-center text-slate-500">
                                            <div className="text-4xl mb-2">
                                                📷
                                            </div>
                                            <p className="text-sm">
                                                360° Preview
                                            </p>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-sm text-blue-600 font-medium mb-1">
                                            {relatedProduct.categoryName}
                                        </div>
                                        <h3 className="text-lg font-semibold text-slate-900 mb-2">
                                            {relatedProduct.name}
                                        </h3>
                                        <p className="text-slate-600 text-sm mb-3">
                                            {relatedProduct.shortDescription}
                                        </p>
                                        <div className="text-xl font-bold text-orange-600">
                                            {relatedProduct.price}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}
            </div>

            <Footer />
        </div>
    );
}
