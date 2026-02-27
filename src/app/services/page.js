import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import ServiceCategoriesHero from '@/components/sections/services/ServiceCategoriesHero';
import CategoryGrid from '@/components/sections/services/CategoryGrid';
import TrustIndicators from '@/components/sections/services/TrustIndicators';
import TestimonialsPreview from '@/components/sections/TestimonialsPreview';
import FinalCTA from '@/components/sections/services/FinalCTA';
import PortfolioShowcase from '@/components/sections/services/PortfolioShowcase';
import ClientLogoMarquee from '@/components/sections/services/ClientLogoMarquee';

export const metadata = {
  title: "Our Services - Complete Digital Solutions | SDEV Solutions",
  description: "Explore our comprehensive range of services including web & app development, digital marketing, AI tools, business automation, recruitment, loans, real estate, and professional training.",
  keywords: [
    "digital services",
    "web development services",
    "app development",
    "digital marketing",
    "AI automation",
    "business tools",
    "recruitment services",
    "training programs"
  ],
};

// Real portfolio projects
const portfolioProjects = [
  {
    id: 1,
    title: 'Malik Restaurant',
    category: 'website',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    description: 'Full-featured restaurant website with menu, gallery and online enquiry',
    fullDescription: 'A modern, mobile-responsive restaurant website featuring an interactive menu, photo gallery, customer reviews and enquiry form — designed to drive footfall and online orders.',
    client: 'Malik Restaurant',
    technologies: ['Next.js', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://malik-restarent-website.vercel.app/home',
  },
  {
    id: 2,
    title: 'Resort Booking Platform',
    category: 'website',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
    description: 'Online resort booking platform with room listings and availability',
    fullDescription: 'A conversion-focused resort booking platform with room gallery, amenities showcase, availability enquiry, and WhatsApp booking integration.',
    client: 'Resort Client',
    technologies: ['React', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://resortbooking-web-7m71.vercel.app/',
  },
  {
    id: 3,
    title: "Rita's Designer Studio",
    category: 'website',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    description: 'Fashion designer portfolio & studio website with collections showcase',
    fullDescription: 'A premium fashion designer website featuring curated collections, studio story, client gallery, and appointment booking — crafted to elevate brand identity.',
    client: "Rita's Designer Studio",
    technologies: ['React', 'CSS3', 'Custom Design'],
    liveUrl: 'https://ritasdesignerstudio.com/',
  },
  {
    id: 4,
    title: 'Apollo Clinic Guwahati',
    category: 'website',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    description: 'Healthcare clinic website with doctor profiles and appointment system',
    fullDescription: 'Professional healthcare website for Apollo Clinic featuring doctor listings, speciality pages, appointment booking, and patient information — built for trust and conversions.',
    client: 'Apollo Clinic Guwahati',
    technologies: ['Next.js', 'Tailwind CSS', 'CMS'],
    liveUrl: 'https://apolloclinicguwahati.com/',
  },
  {
    id: 5,
    title: 'Medionn',
    category: 'website',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    description: 'Medical platform with services and healthcare information',
    fullDescription: 'A clean, professional medical services website with service listings, team profiles, patient resources, and appointment request functionality.',
    client: 'Medionn',
    technologies: ['React', 'Tailwind CSS', 'Node.js'],
    liveUrl: 'https://medionn.com/',
  },
  {
    id: 6,
    title: 'Pushkar Pharmaceutical',
    category: 'website',
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80',
    description: 'Pharma company website with product catalogue and enquiry',
    fullDescription: 'A professional pharmaceutical company website with complete product catalogue, company overview, regulatory information, and business enquiry forms.',
    client: 'Pushkar Pharmaceutical',
    technologies: ['Next.js', 'Tailwind CSS', 'CMS'],
    liveUrl: 'https://pushkarpharmaceutical.com/',
  },
  {
    id: 7,
    title: 'Grace Market',
    category: 'e-commerce',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80',
    description: 'Full e-commerce store with product management and checkout',
    fullDescription: 'A complete e-commerce platform with product categories, filters, shopping cart, order management, and conversion-optimised checkout flow.',
    client: 'Grace Market',
    technologies: ['React', 'Node.js', 'MongoDB', 'Vercel'],
    liveUrl: 'https://grace-market.vercel.app/',
  },
  {
    id: 8,
    title: 'Organic Products Store',
    category: 'e-commerce',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80',
    description: 'Organic products e-commerce with categories and cart system',
    fullDescription: 'An e-commerce store for organic products with product listings, category filters, add-to-cart, and a clean checkout experience designed to maximise conversions.',
    client: 'Organic Products',
    technologies: ['Next.js', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://organic-products-website.vercel.app/',
  },
  {
    id: 9,
    title: 'Ambo Retail',
    category: 'e-commerce',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80',
    description: 'Retail e-commerce platform with full product and order management',
    fullDescription: 'A fully-functional retail e-commerce solution with product management, inventory tracking, order processing, and a modern UI designed for high conversion rates.',
    client: 'Ambo Retail',
    technologies: ['React', 'Node.js', 'MySQL'],
    liveUrl: 'https://amboretail.com/',
  },
  {
    id: 10,
    title: 'New Upasam App',
    category: 'mobile app',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    description: 'Religious & community Android application on Google Play',
    fullDescription: 'A feature-rich religious and community Android app serving devotees with content, events, notifications, and community engagement features. Live on Google Play Store.',
    client: 'New Upasam',
    technologies: ['Android', 'Java', 'Firebase'],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.newupasam.app',
  },
  {
    id: 11,
    title: 'Royal Educare App',
    category: 'mobile app',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
    description: 'Educational Android app for students and coaching institutes',
    fullDescription: 'An educational Android application serving students with course content, assessments, progress tracking, and live classes. Published and active on Google Play Store.',
    client: 'Royal Educare',
    technologies: ['Android', 'Java', 'Firebase', 'REST API'],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.royaleducare.app',
  },
  {
    id: 12,
    title: 'Digital Health Record App',
    category: 'mobile app',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80',
    description: 'Healthcare digital record management app on Google Play',
    fullDescription: 'An Android health record management app enabling patients to store, access and share medical records digitally. Fully live and available on Google Play Store.',
    client: 'Digital Health Record',
    technologies: ['Android', 'Java', 'SQLite', 'Cloud Storage'],
    liveUrl: 'https://play.google.com/store/apps/details?id=app.digitalhealthrecord.in',
  },
  {
    id: 13,
    title: 'Local Service Box',
    category: 'mobile app',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    description: 'Local service booking Android app connecting customers to providers',
    fullDescription: 'A service booking Android app connecting local customers with service providers for home services, repairs, and more. Live on Google Play Store with real users.',
    client: 'Local Service Box',
    technologies: ['Android', 'Java', 'Firebase', 'Google Maps API'],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.arun03.localServiceBox',
  },
];

// Client logos — text only (no local image files needed)
const clientLogos = [
  { name: 'Malik Restaurant' },
  { name: 'Apollo Clinic Guwahati' },
  { name: 'Medionn' },
  { name: 'Pushkar Pharmaceutical' },
  { name: 'Ambo Retail' },
  { name: "Rita's Designer Studio" },
  { name: 'New Upasam' },
  { name: 'Royal Educare' },
  { name: 'Grace Market' },
  { name: 'Organic Products Store' },
  { name: 'Resort Booking' },
  { name: 'Local Service Box' },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black">
        <ServiceCategoriesHero />
        <CategoryGrid />
        <ClientLogoMarquee logos={clientLogos} />
        <PortfolioShowcase projects={portfolioProjects} />
        <TrustIndicators />
        <TestimonialsPreview />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
