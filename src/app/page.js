import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import AboutSnapshot from '@/components/sections/AboutSnapshot';
import ProductsOverview from '@/components/sections/ProductsOverview';
import WhyChooseSdev from '@/components/sections/WhyChooseSdev';
import TestimonialsPreview from '@/components/sections/TestimonialsPreview';
import CaseStudy from '@/components/sections/CaseStudy';
import WorldwidePresence from '@/components/sections/WorldwidePresence';
import Blog from '@/components/sections/Blog';

export const metadata = {
  title: "SDEV Solutions - Leading Software Development Company | Custom Web & Mobile App Development",
  description: "SDEV Solutions delivers cutting-edge software development services including web applications, mobile apps, AI/ML, cloud solutions, and digital marketing. Transform your business with our expert team. 500+ successful projects delivered globally.",
  keywords: [
    "software development company",
    "custom software development",
    "web application development services",
    "mobile app development company",
    "artificial intelligence solutions",
    "machine learning development",
    "cloud computing services",
    "DevOps consulting",
    "UI/UX design services",
    "digital transformation",
    "enterprise software solutions",
    "full stack development",
    "agile software development",
    "IT outsourcing services",
    "software consulting"
  ],
  openGraph: {
    title: "SDEV Solutions - Expert Software Development Services",
    description: "Transform your business with custom software solutions. Web apps, mobile development, AI/ML, cloud services & more. 500+ clients trust SDEV Solutions.",
    url: "https://sdevsolutions.com",
    type: "website",
    images: [
      {
        url: "/images/home-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SDEV Solutions - Software Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SDEV Solutions - Expert Software Development Services",
    description: "Custom web & mobile app development, AI/ML solutions, cloud services. Transform your business with SDEV Solutions.",
    images: ["/images/home-twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://sdevsolutions.com",
  },
};

export default function Home() {
  return (
    <div className="bg-black">
      <Header />
      <Hero />
      <Services />
      <AboutSnapshot />
      <ProductsOverview />
      <WhyChooseSdev />
      <TestimonialsPreview />
      {/* <CaseStudy /> */}
      {/* <WorldwidePresence /> */}
      <Blog />
    </div>
  );
}
