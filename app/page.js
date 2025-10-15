import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import NewsletterForm from "@/components/NewsletterForm";

import { categories, getProductsByCategory } from "@/data/realProducts";

export const metadata = {
  title: "FerroLink Tools - Premium Industrial Hand Tools & CNC Equipment",
  description:
    "Leading manufacturer of professional-grade hand tools, CNC equipment, hammers, axes, and garden tools. Engineering excellence for industrial applications. Quality tools for professionals worldwide.",
  keywords:
    "industrial tools, CNC tools, hand tools, hammers, axes, garden tools, professional tools, tool manufacturer, FerroLink, precision tools",
  openGraph: {
    title: "FerroLink Tools - Premium Industrial Hand Tools & CNC Equipment",
    description:
      "Leading manufacturer of professional-grade hand tools, CNC equipment, hammers, axes, and garden tools. Engineering excellence for industrial applications.",
    url: "https://ferrolink.io",
    siteName: "FerroLink Tools",
    images: [
      {
        url: "/assets/materials/logo.png",
        width: 1200,
        height: 630,
        alt: "FerroLink Industrial Tools Collection",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FerroLink Tools - Premium Industrial Hand Tools & CNC Equipment",
    description:
      "Leading manufacturer of professional-grade hand tools, CNC equipment, hammers, axes, and garden tools.",
    images: ["/assets/materials/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://ferrolink.io",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header currentPage="home" />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden px-4 pt-40 sm:px-6 lg:px-8">
        {/* Industrial Background Pattern */}
        <div className="absolute inset-0 top-36 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <div className="mb-8">
            <span className="mb-6 inline-block rounded-full border border-orange-600/30 bg-orange-600/20 px-4 py-2 text-sm font-semibold text-orange-400">
              🔧 INDUSTRIAL GRADE TOOLS
            </span>
          </div>
          <h1 className="mb-6 text-5xl font-bold sm:text-7xl">
            <span className="mb-2 block text-white">FERROLINK</span>
            <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              PRECISION TOOLS
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-4xl text-xl leading-relaxed text-gray-300">
            Engineering excellence in every tool. From precision CNC cutting
            tools to heavy-duty hammers and axes. Built for professionals who
            demand uncompromising quality and reliability in their work.
          </p>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Link
              href="/products"
              className="group industrial-shadow relative transform rounded-lg bg-gradient-to-r from-orange-600 to-red-600 px-10 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:from-orange-700 hover:to-red-700 hover:shadow-xl"
            >
              <span className="relative z-10">EXPLORE CATALOG</span>
              <div className="absolute inset-0 rounded-lg bg-white/20 opacity-0 transition-opacity group-hover:opacity-100"></div>
            </Link>
            <Link
              href="/contact"
              className="group rounded-lg border-2 border-gray-600 bg-gray-800/50 px-10 py-4 text-lg font-bold text-gray-300 backdrop-blur-sm transition-all duration-300 hover:border-orange-500 hover:text-orange-400"
            >
              REQUEST QUOTE
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-34 left-10 h-20 w-20 border-t-2 border-l-2 border-orange-600/30"></div>
        <div className="absolute right-10 bottom-10 h-20 w-20 border-r-2 border-b-2 border-orange-600/30"></div>
      </section>

      {/* Product Categories */}
      <section id="products" className="relative bg-gray-800 py-20">
        {/* Metal texture overlay */}
        <div className="metal-texture absolute inset-0 opacity-30"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h3 className="mb-4 text-4xl font-bold text-white">
              INDUSTRIAL PRODUCT LINES
            </h3>
            <div className="mx-auto mb-6 h-1 w-24 bg-gradient-to-r from-orange-500 to-red-500"></div>
            <p className="mx-auto max-w-2xl text-lg text-gray-300">
              Professional-grade tools engineered for durability, precision, and
              performance in demanding industrial environments.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {Object.entries(categories).map(([categoryId, category]) => {
              // Get a sample product from each category for display
              const categoryProducts = getProductsByCategory(categoryId);
              const sampleProduct = Object.values(categoryProducts)[0];

              return (
                <Link
                  key={categoryId}
                  href={
                    sampleProduct
                      ? `/products/${sampleProduct.category}/${sampleProduct.id}`
                      : "#"
                  }
                  className="group relative block overflow-hidden rounded-xl border border-gray-700 bg-gray-900 p-6 transition-all duration-300 hover:border-orange-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-red-600/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
                  <div className="relative z-10">
                    {/* Product Image */}
                    <div className="mb-4 flex h-32 w-full items-center justify-center overflow-hidden rounded-lg bg-gray-800">
                      {sampleProduct && sampleProduct.mainImage ? (
                        <Image
                          src={sampleProduct.mainImage}
                          alt={sampleProduct.name}
                          width={120}
                          height={120}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                          unoptimized
                        />
                      ) : (
                        <div
                          className={`h-16 w-16 bg-gradient-to-br ${category.color} flex items-center justify-center rounded-lg transition-transform group-hover:scale-110`}
                        >
                          <span className="text-2xl text-white">
                            {category.emoji}
                          </span>
                        </div>
                      )}
                    </div>

                    <h4 className="mb-3 text-xl font-bold text-white uppercase transition-colors group-hover:text-orange-400">
                      {category.name}
                    </h4>
                    <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-gray-400">
                      {category.description}
                    </p>

                    {/* Product count */}
                    <div className="mb-4 text-sm text-gray-500">
                      {Object.keys(categoryProducts).length} products available
                    </div>

                    <div className="text-sm font-bold text-orange-400 transition-colors group-hover:text-orange-300">
                      EXPLORE PRODUCTS →
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative overflow-hidden bg-black py-20">
        <div className="steel-gradient absolute inset-0 opacity-10"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h3 className="mb-6 text-4xl font-bold text-white">
              ENGINEERED FOR EXCELLENCE
            </h3>
            <div className="mx-auto mb-8 h-1 w-32 bg-gradient-to-r from-orange-500 to-red-500"></div>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-300">
              We combine traditional craftsmanship with cutting-edge technology
              to deliver tools that exceed the highest industry standards and
              professional expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-600">
                <span className="text-2xl">💎</span>
              </div>
              <h4 className="mb-2 text-xl font-semibold">Premium Quality</h4>
              <p className="text-slate-300">
                High-grade materials and precision manufacturing ensure
                long-lasting performance.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-600">
                <span className="text-2xl">🛠️</span>
              </div>
              <h4 className="mb-2 text-xl font-semibold">Expert Engineering</h4>
              <p className="text-slate-300">
                Designed by professionals who understand the demands of serious
                work.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-600">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="mb-2 text-xl font-semibold">Precision Focus</h4>
              <p className="text-slate-300">
                Every tool is crafted to deliver accuracy and reliability in
                demanding applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-6 text-3xl font-bold text-slate-900">
                About FerroLink Tools
              </h3>
              <p className="mb-4 text-slate-600">
                Founded on the principle that quality tools are essential for
                quality work, FerroLink Tools has become a trusted name in the
                hand tools industry. We specialize in Computer Numerical Control
                (CNC) tools and traditional hand tools including hammers, axes,
                and garden implements.
              </p>
              <p className="mb-6 text-slate-600">
                Our commitment to excellence drives us to continuously innovate
                while maintaining the craftsmanship traditions that have made
                our tools the choice of professionals worldwide.
              </p>
              <div className="flex space-x-8">
                <div>
                  <div className="text-2xl font-bold text-orange-600">25+</div>
                  <div className="text-slate-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">
                    1000+
                  </div>
                  <div className="text-slate-600">Product Lines</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">50+</div>
                  <div className="text-slate-600">Countries Served</div>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-slate-100 p-8">
              <h4 className="mb-4 text-xl font-semibold text-slate-900">
                Our Specialties
              </h4>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center">
                  <span className="mr-3 h-2 w-2 rounded-full bg-orange-600"></span>
                  CNC Tool Manufacturing & Distribution
                </li>
                <li className="flex items-center">
                  <span className="mr-3 h-2 w-2 rounded-full bg-orange-600"></span>
                  Professional Grade Hammers & Striking Tools
                </li>
                <li className="flex items-center">
                  <span className="mr-3 h-2 w-2 rounded-full bg-orange-600"></span>
                  Heavy-Duty Axes & Cutting Tools
                </li>
                <li className="flex items-center">
                  <span className="mr-3 h-2 w-2 rounded-full bg-orange-600"></span>
                  Commercial Garden & Landscaping Tools
                </li>
                <li className="flex items-center">
                  <span className="mr-3 h-2 w-2 rounded-full bg-orange-600"></span>
                  Custom Tool Solutions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h3 className="mb-4 text-3xl font-bold text-slate-900">
              Get in Touch
            </h3>
            <p className="text-slate-600">
              Ready to upgrade your toolkit? Contact us for product information,
              custom solutions, or bulk orders.
            </p>
          </div>

          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-600">
                <span className="text-xl text-white">📧</span>
              </div>
              <h4 className="mb-2 font-semibold text-slate-900">Email</h4>
              <p className="text-slate-600">support@ferrolink.io</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-600">
                <span className="text-xl text-white">📞</span>
              </div>
              <h4 className="mb-2 font-semibold text-slate-900">Phone</h4>
              <p className="text-slate-600">1-800-FERRO-LINK</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-600">
                <span className="text-xl text-white">📍</span>
              </div>
              <h4 className="mb-2 font-semibold text-slate-900">Location</h4>
              <p className="text-slate-600">Industrial District, Tool City</p>
            </div>
          </div>

          <QuoteForm />
        </div>
      </section>

      <NewsletterForm />
 

      <Footer />
    </div>
  );
}
