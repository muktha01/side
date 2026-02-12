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

// Sample portfolio projects
const portfolioProjects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'web',
    image: '/images/portfolio/ecommerce.jpg',
    description: 'Full-featured online store with payment integration and inventory management',
    fullDescription: 'Built a scalable e-commerce platform handling 10K+ daily transactions with real-time inventory sync, multiple payment gateways, and advanced analytics dashboard.',
    client: 'RetailCo',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
    challenge: 'Client needed to migrate from legacy system while maintaining uptime during peak season.',
    solution: 'Implemented gradual migration strategy with parallel systems and real-time data sync.',
    results: [
      { label: 'Revenue Increase', value: '+156%' },
      { label: 'Page Load Time', value: '-68%' },
      { label: 'Conversion Rate', value: '+89%' }
    ],
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 2,
    title: 'AI Chatbot Solution',
    category: 'ai',
    image: '/images/portfolio/chatbot.jpg',
    description: 'Intelligent customer support chatbot with natural language processing',
    fullDescription: 'Developed an AI-powered chatbot that handles 80% of customer inquiries automatically, integrating with existing CRM and support systems.',
    client: 'TechSupport Inc',
    technologies: ['Python', 'TensorFlow', 'OpenAI', 'React', 'FastAPI'],
    challenge: 'High support ticket volume causing long response times and customer dissatisfaction.',
    solution: 'Custom NLP model trained on 50K+ historical tickets, multi-language support, seamless handoff to human agents.',
    results: [
      { label: 'Tickets Automated', value: '80%' },
      { label: 'Response Time', value: '-92%' },
      { label: 'Cost Savings', value: '₹45L/mo' }
    ],
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 3,
    title: 'Mobile Banking App',
    category: 'mobile',
    image: '/images/portfolio/banking-app.jpg',
    description: 'Secure mobile banking application with biometric authentication',
    fullDescription: 'Developed iOS and Android banking app with fingerprint/face ID login, instant transfers, bill payments, and real-time notifications.',
    client: 'FinBank',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Firebase', 'Plaid'],
    challenge: 'Stringent security requirements and need for offline functionality.',
    solution: 'Implemented end-to-end encryption, secure offline mode, and passed PCI-DSS compliance audit.',
    results: [
      { label: 'Downloads', value: '500K+' },
      { label: 'App Rating', value: '4.8/5' },
      { label: 'Active Users', value: '85%' }
    ],
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 4,
    title: 'Marketing Analytics Dashboard',
    category: 'marketing',
    image: '/images/portfolio/analytics.jpg',
    description: 'Real-time marketing analytics platform with ROI tracking',
    fullDescription: 'Built comprehensive analytics dashboard aggregating data from Google Ads, Facebook, LinkedIn, and email campaigns with AI-powered insights.',
    client: 'MarketPro Agency',
    technologies: ['Vue.js', 'Python', 'Django', 'D3.js', 'Redis'],
    challenge: 'Data scattered across 12 different platforms, manual reporting taking 8 hours weekly.',
    solution: 'Unified API integration, automated reporting, predictive analytics, and custom alerts.',
    results: [
      { label: 'Time Saved', value: '40hr/mo' },
      { label: 'ROI Improvement', value: '+34%' },
      { label: 'Clients Onboarded', value: '25' }
    ],
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 5,
    title: 'HRM System',
    category: 'business',
    image: '/images/portfolio/hrm.jpg',
    description: 'Complete human resource management system for enterprises',
    fullDescription: 'Comprehensive HRM solution managing 2000+ employees with attendance, payroll, performance reviews, and recruitment modules.',
    client: 'Enterprise Corp',
    technologies: ['Angular', 'Spring Boot', 'MySQL', 'Docker', 'Azure'],
    challenge: 'Replace 5 different systems with unified platform while ensuring zero data loss.',
    solution: 'Phased rollout with data migration scripts, extensive testing, and parallel system operation.',
    results: [
      { label: 'Systems Unified', value: '5 to 1' },
      { label: 'HR Efficiency', value: '+67%' },
      { label: 'Paper Reduced', value: '95%' }
    ],
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 6,
    title: 'Real Estate Portal',
    category: 'web',
    image: '/images/portfolio/realestate.jpg',
    description: 'Property listing platform with virtual tours and mortgage calculator',
    fullDescription: 'Modern real estate platform with 3D virtual tours, advanced search filters, mortgage calculators, and agent matching system.',
    client: 'PropertyHub',
    technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'Mapbox', 'Cloudinary'],
    challenge: 'Need to stand out in competitive market with unique features and excellent UX.',
    solution: '360° virtual tours, AI-powered property recommendations, instant chat with agents.',
    results: [
      { label: 'Listings', value: '15K+' },
      { label: 'Monthly Users', value: '120K' },
      { label: 'Leads Generated', value: '+240%' }
    ],
    liveUrl: '#',
    caseStudyUrl: '#'
  }
];

// Client logos
const clientLogos = [
  { name: 'Google', image: '/images/clients/google.png' },
  { name: 'Microsoft', image: '/images/clients/microsoft.png' },
  { name: 'Amazon', image: '/images/clients/amazon.png' },
  { name: 'Meta', image: '/images/clients/meta.png' },
  { name: 'Apple', image: '/images/clients/apple.png' },
  { name: 'Netflix', image: '/images/clients/netflix.png' },
  { name: 'Spotify', image: '/images/clients/spotify.png' },
  { name: 'Adobe', image: '/images/clients/adobe.png' },
  { name: 'Salesforce', image: '/images/clients/salesforce.png' },
  { name: 'IBM', image: '/images/clients/ibm.png' }
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
