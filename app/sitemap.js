import { categories, productsData } from "@/data/realProducts";

export default function sitemap() {
  const baseUrl = "https://ferrolink.io";

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Category pages
  const categoryPages = Object.keys(categories).map((categoryId) => ({
    url: `${baseUrl}/category/${categoryId}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Product pages
  const productPages = [];
  Object.keys(productsData).forEach((categoryId) => {
    Object.keys(productsData[categoryId]).forEach((productId) => {
      productPages.push({
        url: `${baseUrl}/products/${categoryId}/${productId}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    });
  });

  return [...staticPages, ...categoryPages, ...productPages];
}
