import "./globals.css";
import type { Metadata, Viewport } from "next";

const SITE_URL = "https://velora-cloud.run4ravish.workers.dev";
const SITE_NAME = "VELORA";
const TITLE = "VELORA - Founded by Yadav Ravish | AI Product Studio";
const DESCRIPTION = "Velora is a product studio founded by Yadav Ravish. We build fast, modern tools like Lorem Pro Tool (11-in-1 suite), SaaS, websites & AI automation for founders. Available for new projects.";

export const viewport: Viewport = {
  themeColor: "#FF7A1A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: ["Velora", "Yadav Ravish", "Ravish Chandra Yadav", "Lorem Pro Tool", "AI Product Studio", "SaaS Builder", "Next.js Developer", "Blogger Tools", "Velora cloud"],
  authors: [{ name: "Ravish Chandra Yadav", url: SITE_URL }],
  creator: "Ravish Chandra Yadav",
  publisher: "Velora",
  category: "Technology",
  alternates: {
    canonical: "/",
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
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "VELORA - Founded by Yadav Ravish",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/opengraph-image.png`],
    creator: "@yadavravish",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
