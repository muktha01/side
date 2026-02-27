import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import CategoryHero from '@/components/sections/services/CategoryHero';
import ServiceShowcase from '@/components/sections/services/ServiceShowcase';
import PricingSection from '@/components/sections/services/PricingSection';
import ProcessTimeline from '@/components/sections/services/ProcessTimeline';
import TestimonialsPreview from '@/components/sections/TestimonialsPreview';
import FinalCTA from '@/components/sections/services/FinalCTA';
import FAQAccordion from '@/components/sections/services/FAQAccordion';
import ComparisonTable from '@/components/sections/services/ComparisonTable';
import LeadCaptureForm from '@/components/sections/services/LeadCaptureForm';
import WebsiteAppDevContent from './WebsiteAppDevContent';

export const metadata = {
  title: "Website & App Development Services | SDEV Solutions",
  description: "Custom website design, mobile app development for iOS & Android, e-commerce solutions, and admin panels. Build digital experiences that convert.",
  keywords: [
    "website development",
    "mobile app development",
    "custom web design",
    "e-commerce development",
    "iOS app development",
    "Android app development",
    "admin panel development"
  ],
};

// Category Data
const categoryData = {
  id: 'website-app-development',
  title: 'Website & App Development',
  description: 'Build digital experiences that convert users into customers with our comprehensive web and mobile development services.',
  benefits: [
    'Custom website design & development',
    'Mobile app development (iOS & Android)',
    'Business websites & e-commerce platforms',
    'Responsive & SEO-friendly solutions',
    'Admin panels & dashboards',
    'Ongoing support & maintenance'
  ],
  services: [
    {
      id: 'static-website',
      name: 'Static Business Website',
      description: '4–6 page professional website ideal for small businesses — clean, fast, and SEO-ready.',
      features: [
        'Home, About, Services, Contact pages',
        'Mobile responsive design',
        'Basic SEO setup',
        'Fast loading speed',
        'WhatsApp / Inquiry form'
      ],
      startingPrice: 10000,
      popular: false
    },
    {
      id: 'dynamic-website',
      name: 'Dynamic Business Website',
      description: 'Admin panel + database-driven website with dynamic content management.',
      features: [
        'Admin panel included',
        'Database integration',
        'Dynamic content management',
        'Custom forms & workflows',
        'Mobile responsive'
      ],
      startingPrice: 35000,
      popular: false
    },
    {
      id: 'restaurant-website',
      name: 'Restaurant Website',
      description: 'Showcase your menu, gallery, and take inquiries — perfect for restaurants & cafes.',
      features: [
        'Menu section & gallery',
        'WhatsApp integration',
        'Inquiry / reservation form',
        'Mobile responsive',
        'SEO optimized'
      ],
      startingPrice: 30000,
      popular: false
    },
    {
      id: 'booking-website',
      name: 'Resort / Hotel Booking Website',
      description: 'Full booking system with room management, availability calendar, and inquiry system.',
      features: [
        'Room management system',
        'Online booking & availability calendar',
        'Inquiry & confirmation system',
        'Gallery & virtual tour section',
        'Admin dashboard'
      ],
      startingPrice: 60000,
      popular: false
    },
    {
      id: 'ecommerce',
      name: 'E-Commerce Website',
      description: 'Complete online store with product management, cart, checkout, and order tracking.',
      features: [
        'Product catalog & categories',
        'Filters, cart & checkout',
        'Order management system',
        'Admin panel',
        'Mobile responsive'
      ],
      startingPrice: 75000,
      popular: false
    },
    {
      id: 'mobile-app',
      name: 'Mobile App Development',
      description: 'Android / cross-platform apps built for real-world business needs.',
      features: [
        'Android & cross-platform (Flutter)',
        'Custom UI/UX design',
        'Backend & database integration',
        'Google Play Store deployment',
        'Lifetime support included'
      ],
      startingPrice: 50000,
      popular: true
    }
  ],
  process: [
    {
      number: 1,
      title: 'Discovery & Planning',
      description: 'We start by understanding your business goals, target audience, and project requirements.',
      duration: '1-2 weeks',
      deliverables: ['Project brief', 'Technical specification', 'Timeline & milestones']
    },
    {
      number: 2,
      title: 'Design & Prototyping',
      description: 'Our designers create stunning mockups and interactive prototypes for your approval.',
      duration: '2-3 weeks',
      deliverables: ['Wireframes', 'UI/UX designs', 'Interactive prototype']
    },
    {
      number: 3,
      title: 'Development',
      description: 'Our developers bring the designs to life with clean, scalable code.',
      duration: '4-8 weeks',
      deliverables: ['Functional website/app', 'Admin panel', 'Documentation']
    },
    {
      number: 4,
      title: 'Testing & QA',
      description: 'Rigorous testing ensures everything works perfectly across all devices and browsers.',
      duration: '1-2 weeks',
      deliverables: ['Test reports', 'Bug fixes', 'Performance optimization']
    },
    {
      number: 5,
      title: 'Launch & Support',
      description: 'We deploy your project and provide ongoing support to ensure smooth operations.',
      duration: '1 week + ongoing',
      deliverables: ['Live deployment', 'Training', '30-day support']
    }
  ],
  pricingPlans: [
    {
      name: 'Static Website',
      price: 10000,
      priceMax: 25000,
      priceAnnual: null,
      savings: null,
      description: 'Ideal for small businesses, professionals & startups',
      features: [
        '4–6 pages (Home, About, Services, Contact)',
        'Mobile responsive design',
        'Basic SEO setup',
        'WhatsApp / inquiry form',
        'Fast loading speed',
        'Lifetime support'
      ],
      cta: 'Get Started'
    },
    {
      name: 'Dynamic Website',
      price: 35000,
      priceMax: 55000,
      priceAnnual: null,
      savings: null,
      description: 'For businesses needing admin control & dynamic content',
      features: [
        'Admin panel included',
        'Database integration',
        'Dynamic content management',
        'Custom forms & workflows',
        'Mobile responsive & SEO ready',
        'Lifetime support'
      ],
      cta: 'Get Started'
    },
    {
      name: 'Restaurant Website',
      price: 30000,
      priceMax: 45000,
      priceAnnual: null,
      savings: null,
      description: 'Perfect for restaurants, cafes & food businesses',
      features: [
        'Menu section & gallery',
        'WhatsApp integration',
        'Inquiry / reservation form',
        'Google Maps integration',
        'Mobile responsive & SEO optimized',
        'Lifetime support'
      ],
      cta: 'Get Started'
    },
    {
      name: 'Booking Website',
      price: 60000,
      priceMax: 90000,
      priceAnnual: null,
      savings: null,
      description: 'Full booking system for resorts, hotels & rental businesses',
      features: [
        'Room / slot management',
        'Online booking & availability calendar',
        'Confirmation & notification system',
        'Gallery & virtual tour',
        'Admin dashboard',
        'Lifetime support'
      ],
      cta: 'Get Quote',
      popular: true
    },
    {
      name: 'E-Commerce Store',
      price: 75000,
      priceMax: 120000,
      priceAnnual: null,
      savings: null,
      description: 'Complete online store with cart, checkout & order management',
      features: [
        'Product catalog, categories & filters',
        'Cart, checkout & payment gateway',
        'Order management system',
        'Admin panel & inventory',
        'Mobile responsive & SEO ready',
        'Lifetime support'
      ],
      cta: 'Get Quote'
    },
    {
      name: 'Mobile App',
      price: 50000,
      priceMax: null,
      priceAnnual: null,
      savings: null,
      description: 'Android / cross-platform app for your business',
      features: [
        'Android + cross-platform (Flutter)',
        'Custom UI/UX design',
        'Backend & database integration',
        'Google Play Store deployment',
        'Admin panel included',
        'Lifetime support'
      ],
      cta: 'Get Quote'
    }
  ],
  faqs: [
    {
      question: 'How long does it take to build a website?',
      answer: 'A basic website typically takes 4-6 weeks, while more complex projects with custom features can take 8-12 weeks. The timeline depends on your specific requirements, content readiness, and revision cycles.'
    },
    {
      question: 'Do you provide hosting and domain services?',
      answer: 'Yes, we can help you with domain registration and hosting setup. We work with reliable hosting providers and can recommend the best solution based on your website\'s needs and traffic expectations.'
    },
    {
      question: 'Will my website be mobile-friendly?',
      answer: 'Absolutely! All our websites are built with responsive design, ensuring they look and function perfectly on all devices - smartphones, tablets, and desktops. Mobile optimization is a standard feature in all our packages.'
    },
    {
      question: 'Can I update the website content myself?',
      answer: 'Yes, we integrate user-friendly Content Management Systems (CMS) like WordPress or custom admin panels that allow you to easily update text, images, and other content without technical knowledge. We also provide training.'
    },
    {
      question: 'What about ongoing maintenance and support?',
      answer: 'All our packages include post-launch support. We offer maintenance plans covering security updates, backups, bug fixes, and technical support. Support duration varies by package - from 3 to 6 months included.'
    },
    {
      question: 'Do you develop mobile apps for both iOS and Android?',
      answer: 'Yes, we develop native apps for both iOS and Android, as well as cross-platform apps using React Native or Flutter. Cross-platform development is often more cost-effective while maintaining high quality.'
    },
    {
      question: 'What is included in the e-commerce package?',
      answer: 'Our e-commerce solutions include product catalog, shopping cart, secure payment gateway integration, order management, inventory tracking, customer accounts, and admin dashboard. We use platforms like WooCommerce, Shopify, or custom solutions.'
    },
    {
      question: 'Can you integrate third-party APIs and services?',
      answer: 'Yes, we specialize in API integrations including payment gateways, shipping providers, CRM systems, email marketing tools, social media platforms, and custom business applications.'
    }
  ],
  comparisonFeatures: [
    { name: 'Pages / Scope', values: ['4–6 Pages', 'Dynamic + Admin', 'Full Store'] },
    { name: 'Mobile Responsive', values: [true, true, true] },
    { name: 'SEO Optimization', values: ['Basic', 'Advanced', 'Advanced'] },
    { name: 'Admin Panel', values: [false, true, true] },
    { name: 'E-Commerce Features', values: [false, false, true] },
    { name: 'WhatsApp / Inquiry Form', values: [true, true, true] },
    { name: 'Payment Gateway', values: [false, false, true] },
    { name: 'Order Management', values: [false, false, true] },
    { name: 'Lifetime Support', values: [true, true, true] },
    { name: 'Starting Price', values: ['₹10,000', '₹35,000', '₹75,000'] }
  ]
};

export default function WebsiteAppDevelopmentPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black">
        <WebsiteAppDevContent categoryData={categoryData} />
      </main>
      <Footer />
    </>
  );
}
