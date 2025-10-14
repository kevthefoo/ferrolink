import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  categories,
  // productsData,
  getProductsByCategory,
} from "@/data/realProducts";

// Generate dynamic metadata for each category
export async function generateMetadata({ params }) {
  const { categoryId } = await params;
  const category = categories[categoryId];
  const categoryProducts = getProductsByCategory(categoryId);
  const productCount = Object.keys(categoryProducts).length;

  if (!category) {
    return {
      title: "Category Not Found - FerroLink Tools",
      description: "The requested product category could not be found.",
    };
  }

  return {
    title: `${category.name} - Professional ${category.name} Tools | FerroLink Tools`,
    description: `${category.description} Browse our collection of ${productCount} professional-grade ${category.name.toLowerCase()} from FerroLink Tools. Industrial quality tools for professionals.`,
    keywords: `${category.name}, ${categoryId}, professional ${category.name.toLowerCase()}, industrial tools, FerroLink, ${category.name} tools, professional tools`,
    openGraph: {
      title: `Professional ${category.name} Tools - FerroLink Tools`,
      description: `${category.description} Professional-grade ${category.name.toLowerCase()} for industrial applications.`,
      url: `https://ferrolink.io/category/${categoryId}`,
      siteName: "FerroLink Tools",
      images: [
        {
          url: `/assets/categories/${categoryId}-collection.jpg`,
          width: 1200,
          height: 630,
          alt: `${category.name} Tools Collection - FerroLink Tools`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Professional ${category.name} Tools - FerroLink Tools`,
      description: `${category.description}`,
      images: [`/assets/categories/${categoryId}-collection.jpg`],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://ferrolink.io/category/${categoryId}`,
    },
  };
}

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
        <div className="mx-auto flex h-screen max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold">Category Not Found</h1>
          <p className="mb-8 text-gray-400">
            The category you&apos;re looking for doesn&apos;t exist.
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

  const productList = Object.values(categoryProducts);

  return (
    <div className="min-h-screen bg-gray-900">
      <Header currentPage="products" />

      <div className="mx-auto max-w-7xl px-4 pt-32 pb-12 sm:px-6 lg:px-8">
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
          <span className="text-orange-400">{category.name}</span>
        </div>

        {/* Category Header */}
        <div className="mb-12 text-center">
          <div className="mb-6 flex items-center justify-center">
            <div
              className={`h-20 w-20 bg-gradient-to-br ${category.color} mr-6 flex items-center justify-center rounded-lg`}
            >
              <span className="text-3xl text-white">{category.emoji}</span>
            </div>
            <div className="text-left">
              <h1 className="mb-2 text-4xl font-bold text-white">
                {category.name}
              </h1>
              <p className="text-xl text-gray-300">{category.description}</p>
            </div>
          </div>

          <div className="mx-auto mb-6 h-1 w-32 bg-gradient-to-r from-orange-500 to-red-500"></div>

          <div className="mx-auto max-w-4xl rounded-xl border border-gray-700 bg-gray-800 p-6">
            <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-3">
              <div>
                <div className="mb-2 text-2xl font-bold text-orange-500">
                  {productList.length}
                </div>
                <div className="text-gray-400">Available Products</div>
              </div>
              <div>
                <div className="mb-2 text-2xl font-bold text-orange-500">
                  Professional
                </div>
                <div className="text-gray-400">Grade Quality</div>
              </div>
              <div>
                <div className="mb-2 text-2xl font-bold text-orange-500">
                  Industry
                </div>
                <div className="text-gray-400">Leading Tools</div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <section className="mb-16">
          {productList.length > 0 ? (
            <>
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">
                  All {category.name} ({productList.length})
                </h2>

                {/* Sort/Filter options could go here */}
                <div className="flex items-center space-x-4">
                  <select className="rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-white focus:border-orange-500 focus:outline-none">
                    <option>Sort by: Featured</option>
                    <option>Sort by: Name (A-Z)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {productList.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.category}/${product.id}`}
                    className="group rounded-xl border border-gray-700 bg-gray-800 p-6 transition-all duration-300 hover:border-orange-500 hover:shadow-xl"
                  >
                    {/* Product Image */}
                    <div className="mb-4 flex h-48 w-full items-center justify-center overflow-hidden rounded-lg bg-gray-700">
                      {product.mainImage ? (
                        <Image
                          src={product.mainImage}
                          alt={product.name}
                          width={200}
                          height={200}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          unoptimized
                        />
                      ) : (
                        <div className="text-4xl text-gray-500">📷</div>
                      )}
                    </div>

                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="mb-2 line-clamp-2 flex h-16 items-start text-lg font-bold text-white transition-colors group-hover:text-orange-400">
                          {product.name}
                        </h3>
                        <p className="mb-2 line-clamp-2 text-sm text-gray-400">
                          {product.shortDescription}
                        </p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="mb-2 text-sm font-semibold text-gray-300">
                        Key Features:
                      </div>
                      <ul className="space-y-1 text-sm text-gray-400">
                        {product.features.slice(0, 2).map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mt-1.5 mr-2 h-2 w-2 flex-shrink-0 rounded-full bg-orange-500"></span>
                            <span className="line-clamp-1">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between border-t border-gray-700 pt-4">
                      <div className="text-sm font-bold text-orange-400 transition-colors group-hover:text-orange-300">
                        VIEW DETAILS →
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <div className="py-12 text-center">
              <div className="mb-4 text-6xl text-gray-600">🔧</div>
              <h3 className="mb-4 text-2xl font-bold text-white">
                No Products Available
              </h3>
              <p className="mb-8 text-gray-400">
                Products in this category are coming soon. Check back later for
                updates.
              </p>
              <Link
                href="/products"
                className="rounded-lg bg-gradient-to-r from-orange-600 to-red-600 px-8 py-3 font-bold text-white transition-all duration-300 hover:from-orange-700 hover:to-red-700"
              >
                Browse Featured Products
              </Link>
            </div>
          )}
        </section>

        {/* Related Categories */}
        <section className="mb-16">
          <h2 className="mb-6 text-center text-2xl font-bold text-white">
            EXPLORE OTHER CATEGORIES
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {Object.entries(categories)
              .filter(([id]) => id !== categoryId)
              .slice(0, 4)
              .map(([id, cat]) => {
                const catProducts = getProductsByCategory(id);
                return (
                  <Link
                    key={id}
                    href={`/category/${id}`}
                    className="group rounded-xl border border-gray-700 bg-gray-800 p-4 text-center transition-all duration-300 hover:border-orange-500"
                  >
                    <div
                      className={`h-12 w-12 bg-gradient-to-br ${cat.color} mx-auto mb-3 flex items-center justify-center rounded-lg transition-transform group-hover:scale-110`}
                    >
                      <span className="text-lg text-white">{cat.emoji}</span>
                    </div>
                    <h3 className="mb-1 text-sm font-bold text-white transition-colors group-hover:text-orange-400">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-gray-400">
                      {Object.keys(catProducts).length} products
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
