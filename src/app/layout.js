import "./globals.css";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export const metadata = {
  metadataBase: new URL('https://sdevsolutions.com'),
  title: {
    default: "SDEV Solutions - Leading Software Development Company | Web, Mobile & AI Solutions",
    template: "%s | SDEV Solutions"
  },
  description: "Transform your business with SDEV Solutions - Expert software development services including web applications, mobile apps, AI/ML, cloud solutions, and digital marketing. Trusted by 500+ clients globally.",
  keywords: [
    "software development company",
    "web application development",
    "mobile app development",
    "AI ML solutions",
    "cloud computing services",
    "DevOps services",
    "UI/UX design",
    "digital marketing agency",
    "data analytics solutions",
    "custom software development",
    "enterprise software solutions",
    "IT consulting services",
    "software outsourcing",
    "agile development",
    "full stack development"
  ],
  authors: [{ name: "SDEV Solutions" }],
  creator: "SDEV Solutions",
  publisher: "SDEV Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sdevsolutions.com",
    title: "SDEV Solutions - Leading Software Development Company",
    description: "Transform your business with expert software development services. Web apps, mobile solutions, AI/ML, cloud computing & more. 500+ satisfied clients worldwide.",
    siteName: "SDEV Solutions",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SDEV Solutions - Software Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SDEV Solutions - Leading Software Development Company",
    description: "Expert software development services for web, mobile, AI, and cloud solutions. Transform your business with SDEV Solutions.",
    images: ["/images/twitter-image.jpg"],
    creator: "@sdevsolutions",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://sdevsolutions.com",
  },
  category: "Technology",
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SDEV Solutions",
    "url": "https://sdevsolutions.com",
    "logo": "https://sdevsolutions.com/images/logo.png",
    "description": "Leading software development company providing web, mobile, AI, and cloud solutions",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Global"
    },
    "sameAs": [
      "https://www.linkedin.com/company/sdevsolutions",
      "https://twitter.com/sdevsolutions",
      "https://www.facebook.com/sdevsolutions"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": ["English"]
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="antialiased">
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
