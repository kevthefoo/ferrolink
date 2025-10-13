import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  categories,
  getFeaturedProducts,
  getProductsByCategory,
} from "../../data/realProducts";

export const metadata = {
  title: "Professional Hand Tools & CNC Equipment - FerroLink Products Catalog",
  description:
    "Browse our extensive collection of professional-grade hand tools, CNC equipment, hammers, axes, garden tools, and precision instruments. Featured products from industry-leading manufacturer.",
  keywords:
    "professional hand tools, CNC tools catalog, industrial hammers, precision axes, garden tools, tool handles, professional tools catalog, FerroLink products",
  openGraph: {
    title:
      "Professional Hand Tools & CNC Equipment - FerroLink Products Catalog",
    description:
      "Browse our extensive collection of professional-grade hand tools, CNC equipment, and precision instruments.",
    url: "https://ferrolink.co/products",
    siteName: "FerroLink Tools",
    images: [
      {
        url: "/assets/products/featured-tools-collection.jpg",
        width: 1200,
        height: 630,
        alt: "FerroLink Featured Tools Collection",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Hand Tools & CNC Equipment - FerroLink Products",
    description:
      "Browse our extensive collection of professional-grade hand tools and CNC equipment.",
    images: ["/assets/products/featured-tools-collection.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ferrolink.co/products",
  },
};

export default function Products() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header currentPage="products" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white">
            FEATURED PROFESSIONAL TOOLS
          </h1>
          <div className="mx-auto mb-6 h-1 w-32 bg-gradient-to-r from-orange-500 to-red-500"></div>
          <p className="mx-auto max-w-3xl text-xl text-gray-300">
            Discover our most popular and award-winning professional tools.
            These industry-leading products represent the pinnacle of
            engineering excellence and customer satisfaction.
          </p>
        </div>

        {/* Browse by Category Section */}
        <section className="mb-16">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white">
              BROWSE BY CATEGORY
            </h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              Explore our complete product lines organized by application and
              tool type
            </p>
          </div>

          <div className="mb-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {Object.entries(categories).map(([categoryId, category]) => {
              const categoryProducts = getProductsByCategory(categoryId);
              const productCount = Object.keys(categoryProducts).length;

              return (
                <Link
                  key={categoryId}
                  href={`/category/${categoryId}`}
                  className="group rounded-xl border border-gray-700 bg-gray-800 p-6 text-center transition-all duration-300 hover:border-orange-500"
                >
                  <div
                    className={`h-16 w-16 bg-gradient-to-br ${category.color} mx-auto mb-4 flex items-center justify-center rounded-lg transition-transform group-hover:scale-110`}
                  >
                    <span className="text-2xl text-white">
                      {category.emoji}
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-orange-400">
                    {category.name}
                  </h3>
                  <p className="mb-3 text-sm text-gray-400">
                    {productCount} products
                  </p>
                  <div className="text-sm font-bold text-orange-400 transition-colors group-hover:text-orange-300">
                    VIEW ALL →
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Featured Products Grid */}
        <section className="mb-16">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white">
              OUR MOST POPULAR TOOLS
            </h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              Top-rated tools chosen by professionals worldwide for their
              exceptional performance and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {getFeaturedProducts().map((product) => (
              <Link
                key={`${product.category}-${product.id}`}
                href={`/products/${product.category}/${product.id}`}
                className="group relative rounded-xl border border-gray-700 bg-gray-800 p-6 transition-all duration-300 hover:border-orange-500 hover:shadow-xl"
              >
                {/* Featured Badge */}
                <div className="absolute top-4 right-4 z-10 rounded-full bg-orange-600 px-2 py-1 text-xs font-bold text-white">
                  FEATURED
                </div>

                {/* Product Image */}
                <div className="mb-4 flex h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-gray-700">
                  {product.mainImage ? (
                    <Image
                      src={product.mainImage}
                      alt={product.name}
                      width={160}
                      height={160}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      unoptimized
                    />
                  ) : (
                    <div className="text-3xl text-gray-500">📷</div>
                  )}
                </div>

                {/* Category Badge */}
                <div className="mb-3 inline-block rounded-full bg-gray-700 px-3 py-1 text-xs font-semibold text-orange-400 uppercase">
                  {product.categoryName}
                </div>

                <h3 className="mb-2 line-clamp-2 flex h-16 items-start text-lg font-bold text-white transition-colors group-hover:text-orange-400">
                  {product.name}
                </h3>

                <p className="mb-3 line-clamp-2 text-sm text-gray-400">
                  {product.shortDescription}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm font-bold text-orange-400 transition-colors group-hover:text-orange-300">
                    VIEW →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="rounded-2xl bg-gradient-to-r from-orange-600 to-red-600 p-12 text-center text-white shadow-2xl">
          <h2 className="mb-4 text-3xl font-bold">NEED A CUSTOM SOLUTION?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl">
            Can&apos;t find exactly what you&apos;re looking for? Our
            engineering team specializes in creating custom industrial tools
            tailored to your specific requirements and applications.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-3 font-bold text-orange-600 transition-colors hover:bg-gray-100"
            >
              REQUEST CUSTOM QUOTE
            </Link>
            <button className="cursor-pointer rounded-lg border-2 border-white px-8 py-3 font-bold text-white transition-colors hover:bg-white hover:text-orange-600">
              DOWNLOAD CATALOG
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
