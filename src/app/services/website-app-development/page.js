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
      id: 'custom-website',
      name: 'Custom Website Development',
      description: 'Professional website design and development tailored to your brand and business needs.',
      features: [
        'Responsive design for all devices',
        'SEO-optimized structure',
        'Fast loading speeds',
        'CMS integration',
        'Custom functionality'
      ],
      startingPrice: 999,
      popular: false
    },
    {
      id: 'mobile-app',
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android devices.',
      features: [
        'iOS & Android development',
        'Cross-platform solutions',
        'App Store optimization',
        'Push notifications',
        'Offline functionality'
      ],
      startingPrice: 2999,
      popular: true
    },
    {
      id: 'ecommerce',
      name: 'E-commerce Solutions',
      description: 'Full-featured online stores with payment integration and inventory management.',
      features: [
        'Product catalog management',
        'Secure payment gateway',
        'Order tracking system',
        'Customer accounts',
        'Analytics dashboard'
      ],
      startingPrice: 1999,
      popular: false
    },
    {
      id: 'web-app',
      name: 'Web Application Development',
      description: 'Complex web applications with advanced functionality and user interactions.',
      features: [
        'Custom business logic',
        'Real-time features',
        'Database integration',
        'API development',
        'Scalable architecture'
      ],
      startingPrice: 3999,
      popular: false
    },
    {
      id: 'admin-panel',
      name: 'Admin Panel & Dashboard',
      description: 'Powerful admin interfaces for managing your business operations efficiently.',
      features: [
        'User management',
        'Data visualization',
        'Report generation',
        'Role-based access',
        'Activity logging'
      ],
      startingPrice: 1499,
      popular: false
    },
    {
      id: 'maintenance',
      name: 'Website Maintenance & Support',
      description: 'Ongoing support, updates, and optimization for your existing websites and apps.',
      features: [
        'Regular updates',
        'Security patches',
        'Performance optimization',
        'Bug fixes',
        '24/7 support'
      ],
      startingPrice: 299,
      popular: false
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
      name: 'Starter',
      price: 999,
      priceAnnual: 899,
      savings: 100,
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5 pages',
        'Responsive design',
        'Basic SEO setup',
        'Contact form',
        '1 month support',
        'Social media integration'
      ],
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      price: 2499,
      priceAnnual: 2199,
      savings: 300,
      description: 'Ideal for growing businesses',
      features: [
        'Up to 15 pages',
        'Advanced animations',
        'SEO optimization',
        'Blog/News section',
        'Email integration',
        '3 months support',
        'Analytics setup',
        'Content updates'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 4999,
      priceAnnual: 4499,
      savings: 500,
      description: 'Complete solution for large businesses',
      features: [
        'Unlimited pages',
        'Custom functionality',
        'Advanced SEO',
        'E-commerce features',
        'API integrations',
        '6 months support',
        'Priority support',
        'Training sessions',
        'Dedicated manager'
      ],
      cta: 'Contact Sales'
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
    { name: 'Number of Pages', values: ['Up to 5', 'Up to 15', 'Unlimited'] },
    { name: 'Responsive Design', values: [true, true, true] },
    { name: 'SEO Optimization', values: ['Basic', 'Advanced', 'Advanced'] },
    { name: 'Content Management System', values: [true, true, true] },
    { name: 'E-commerce Features', values: [false, 'Optional', true] },
    { name: 'Custom Functionality', values: [false, 'Limited', 'Unlimited'] },
    { name: 'API Integrations', values: [false, 'Up to 3', 'Unlimited'] },
    { name: 'Support Duration', values: ['3 months', '6 months', '6 months'] },
    { name: 'Training Sessions', values: [false, '1 session', '3 sessions'] },
    { name: 'Priority Support', values: [false, false, true] }
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
