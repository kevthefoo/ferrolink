export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: "https://ferrolink.co/sitemap.xml",
  };
}
