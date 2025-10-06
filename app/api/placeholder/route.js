import { NextResponse } from "next/server";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const width = searchParams.get("width") || "400";
    const height = searchParams.get("height") || "400";
    const text = searchParams.get("text") || "Product Image";

    // Create a simple SVG placeholder
    const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f1f5f9"/>
      <rect x="10" y="10" width="${width - 20}" height="${
        height - 20
    }" fill="white" stroke="#e2e8f0" stroke-width="2" rx="8"/>
      <text x="50%" y="40%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="#64748b">
        FerroLink Tools
      </text>
      <text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#94a3b8">
        ${text}
      </text>
    </svg>
  `;

    return new NextResponse(svg, {
        headers: {
            "Content-Type": "image/svg+xml",
            "Cache-Control": "public, max-age=86400", // Cache for 1 day
        },
    });
}
