import "./globals.css";
import type { Metadata, Viewport } from "next";

const SITE_URL = "https://velora-cloud.run4ravish.workers.dev";
const SITE_NAME = "VELORA";
const TITLE = "VELORA - Digital Product Lab by Ravish Chandra Yadav | Tools, SaaS & AI";
const DESCRIPTION = "Velora — Digital Product Lab by Ravish Chandra Yadav. We engineer fast, SEO & AdSense-ready tools, boilerplates, SaaS, websites & apps on Next.js + Cloudflare. Creators of Lorem Pro Tool (26+ Free Tools), ImgBazar & Bazaru. Launch your idea in 7 days. Available for new projects.";

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
  keywords: ["Velora", "Yadav Ravish", "Ravish Chandra Yadav", "Lorem Pro Tool", "Digital Product Lab", "ImgBazar", "Bazaru", "AI Product Studio", "SaaS Builder", "Next.js Developer", "Cloudflare Developer", "Blogger Tools", "Velora cloud", "Free Image Hosting"],
  authors: [{ name: "Ravish Chandra Yadav", url: SITE_URL }],
  creator: "Ravish Chandra Yadav",
  publisher: "Velora",
  category: "Technology",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "tHzWnYfigsQx2oIpH6ncNECnHv-YkI1Dj7D6zA2mbh0",
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
        alt: "VELORA - Digital Product Lab by Ravish Chandra Yadav",
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
