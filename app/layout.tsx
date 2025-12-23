import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
// import { Analytics } from '@vercel/analytics/next'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dock-dredge.com"),
  title: {
    default: "Dock & Dredge | Marine Construction Southwest Florida",
    template: "%s | Dock & Dredge",
  },
  description:
    "Premier dredging and marine construction services in Southwest Florida. Professional dock construction, seawall installation, and waterway dredging services. Owned and operated by Nick Delrocini and Anthony Carlo.",
  keywords: [
    "dredging services",
    "marine construction",
    "dock construction",
    "seawall installation",
    "Southwest Florida",
    "Cape Coral",
    "waterfront construction",
    "boat lift installation",
    "canal dredging",
    "residential dredging",
    "commercial dredging",
    "Florida marine services",
  ],
  authors: [{ name: "Dock & Dredge" }],
  creator: "Dock & Dredge",
  publisher: "Dock & Dredge",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dock-dredge.com",
    title: "Dock & Dredge | Marine Construction Southwest Florida",
    description:
      "Premier dredging and marine construction services in Southwest Florida. Professional dock construction, seawall installation, and waterway dredging services.",
    siteName: "Dock & Dredge",
    images: [
      {
        url: "/dock-dredge-logo.svg",
        width: 1200,
        height: 630,
        alt: "Dock & Dredge Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dock & Dredge | Marine Construction Southwest Florida",
    description:
      "Premier dredging and marine construction services in Southwest Florida.",
    images: ["/dock-dredge-logo.svg"],
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
    canonical: "https://dock-dredge.com",
  },
  category: "Marine Construction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
