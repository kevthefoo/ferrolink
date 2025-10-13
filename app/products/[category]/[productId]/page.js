import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getProductById, categories, productsData } from "@/data/realProducts";

// Generate dynamic metadata for each product
export async function generateMetadata({ params }) {
  const { category, productId } = await params;
  const product = getProductById(category, productId);
  const categoryInfo = categories[category];

  if (!product) {
    return {
      title: "Product Not Found - FerroLink Tools",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: `${product.name} - ${categoryInfo?.name || "Professional Tools"} | FerroLink Tools`,
    description: `${product.shortDescription} ${product.description.substring(0, 100)}... Professional-grade ${categoryInfo?.name?.toLowerCase() || "tools"} from FerroLink Tools.`,
    keywords: `${product.name}, ${categoryInfo?.name}, ${category}, professional tools, industrial tools, FerroLink, ${Object.keys(product.specifications).join(", ")}`,
    openGraph: {
      title: `${product.name} - Professional ${categoryInfo?.name || "Tools"}`,
      description: product.shortDescription,
      url: `https://ferrolink.io/products/${category}/${productId}`,
      siteName: "FerroLink Tools",
      images: product.mainImage
        ? [
            {
              url: product.mainImage,
              width: 800,
              height: 600,
              alt: `${product.name} - ${categoryInfo?.name || "Professional Tool"}`,
            },
          ]
        : [],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} - Professional ${categoryInfo?.name || "Tools"}`,
      description: product.shortDescription,
      images: product.mainImage ? [product.mainImage] : [],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://ferrolink.io/products/${category}/${productId}`,
    },
  };
}

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
        <div className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold">Product Not Found</h1>
          <p className="mb-8 text-gray-400">
            The product you&apos;re looking for doesn&apos;t exist or may have
            been moved.
          </p>
          <Link
            href="/products"
            className="rounded-lg bg-gradient-to-r from-orange-600 to-red-600 px-8 py-3 font-bold text-white transition-all duration-300 hover:from-orange-700 hover:to-red-700"
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

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center text-sm text-gray-400">
          <Link href="/" className="transition-colors hover:text-orange-400">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link
            href="/products"
            className="transition-colors hover:text-orange-400"
          >
            Products
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={`/products#${category}`}
            className="transition-colors hover:text-orange-400"
          >
            {categoryInfo?.name || category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-orange-400">{product.name}</span>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Product Images and 360° Viewer */}
          <div className="space-y-6">
            {/* Main Product Image */}
            {product.mainImage && (
              <div className="rounded-2xl border border-gray-700 bg-gray-800 p-3 sm:p-4 md:p-6">
                <Image
                  src={product.mainImage}
                  alt={product.name}
                  width={600}
                  height={400}
                  className="h-48 w-full rounded-xl object-cover sm:h-64 md:h-72 lg:h-80"
                  unoptimized
                />
              </div>
            )}

            {/* Technical Specifications */}
            <div className="mb-12 w-full rounded-xl border border-gray-700 bg-gray-800 p-4 sm:p-6">
              <h3 className="mb-4 text-xl font-bold text-white sm:mb-6 sm:text-2xl">
                Technical Specifications
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex flex-col gap-1 border-b border-gray-700 pb-3 sm:flex-row sm:justify-between sm:pb-2"
                  >
                    <span className="text-sm font-medium text-gray-400 sm:text-base">
                      {key}:
                    </span>
                    <span className="text-sm font-semibold text-white sm:text-right sm:text-base">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="mb-4 flex items-center">
                <div
                  className={`h-12 w-12 bg-gradient-to-br ${
                    categoryInfo?.color || "from-gray-500 to-gray-700"
                  } mr-4 flex items-center justify-center rounded-lg`}
                >
                  <span className="text-xl text-white">
                    {categoryInfo?.emoji || "🔧"}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-semibold tracking-wide text-orange-400 uppercase">
                    {product.categoryName}
                  </div>
                  <h1 className="text-3xl font-bold text-white">
                    {product.name}
                  </h1>
                </div>
              </div>
              <p className="text-xl leading-relaxed text-gray-300">
                {product.shortDescription}
              </p>
            </div>

            {/* Description */}
            <div className="mt-12 rounded-xl border border-gray-700 bg-gray-800 p-6">
              <h3 className="mb-4 text-xl font-bold text-white">
                Product Description
              </h3>
              <p className="leading-relaxed text-gray-300">
                {product.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="rounded-xl border border-gray-700 bg-gray-800 p-6">
              <h3 className="mb-4 text-xl font-bold text-white">
                Key Features
              </h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-orange-500"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications */}
            <div className="rounded-xl border border-gray-700 bg-gray-800 p-6">
              <h3 className="mb-4 text-xl font-bold text-white">
                Applications
              </h3>
              <ul className="space-y-2">
                {product.applications.map((application, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-green-500"></span>
                    {application}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="flex-1 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 px-8 py-4 text-center font-bold text-white shadow-lg transition-all duration-300 hover:from-orange-700 hover:to-red-700"
              >
                REQUEST QUOTE
              </Link>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {product.relatedProducts && product.relatedProducts.length > 0 && (
          <div className="mb-12">
            <h3 className="mb-8 text-center text-2xl font-bold text-white">
              RELATED PRODUCTS
            </h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {product.relatedProducts.slice(0, 3).map((relatedId) => {
                const relatedProduct = getProductById(category, relatedId);
                if (!relatedProduct) return null;

                return (
                  <Link
                    key={relatedId}
                    href={`/products/${category}/${relatedId}`}
                    className="group rounded-xl border border-gray-700 bg-gray-800 p-6 transition-all duration-300 hover:border-orange-500"
                  >
                    {relatedProduct.mainImage && (
                      <div className="mb-4 h-48 w-full overflow-hidden rounded-lg bg-gray-700">
                        <Image
                          src={relatedProduct.mainImage}
                          alt={relatedProduct.name}
                          width={200}
                          height={128}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          unoptimized
                        />
                      </div>
                    )}
                    <h4 className="mb-2 line-clamp-2 flex h-16 items-start text-lg font-bold text-white transition-colors group-hover:text-orange-400">
                      {relatedProduct.name}
                    </h4>
                    <p className="mb-3 line-clamp-3 text-sm text-gray-400">
                      {relatedProduct.shortDescription}
                    </p>
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
