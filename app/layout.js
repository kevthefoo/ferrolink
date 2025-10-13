import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://ferrolink.io"),
  title: {
    default: "FerroLink Tools - Premium Industrial Hand Tools & CNC Equipment",
    template: "%s | FerroLink Tools",
  },
  description:
    "Leading manufacturer of professional-grade hand tools, CNC equipment, hammers, axes, and garden tools. Engineering excellence for industrial applications since 1998.",
  keywords:
    "industrial tools, CNC tools, hand tools, hammers, axes, garden tools, professional tools, tool manufacturer, FerroLink, precision tools, Taiwan tools",
  authors: [{ name: "FerroLink Tools" }],
  creator: "FerroLink Tools",
  publisher: "FerroLink Tools",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "FerroLink Tools",
    title: "FerroLink Tools - Premium Industrial Hand Tools & CNC Equipment",
    description:
      "Leading manufacturer of professional-grade hand tools, CNC equipment, and precision instruments.",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@FerroLinkTools",
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
  verification: {
    google: "your-google-verification-code", // Replace with actual code
    yandex: "your-yandex-verification-code", // Replace with actual code
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
