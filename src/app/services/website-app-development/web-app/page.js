'use client';

import ServiceDetailHero from '@/components/sections/services/ServiceDetailHero';
import ServiceFeatures from '@/components/sections/services/ServiceFeatures';
import ProcessTimeline from '@/components/sections/services/ProcessTimeline';
import PricingSection from '@/components/sections/services/PricingSection';
import TestimonialsPreview from '@/components/sections/TestimonialsPreview';
import FinalCTA from '@/components/sections/services/FinalCTA';
import FAQAccordion from '@/components/sections/services/FAQAccordion';
import LeadCaptureForm from '@/components/sections/services/LeadCaptureForm';
import { Users, Shield, Zap, Database, Plug, Cloud, Brain } from 'lucide-react';

export default function WebAppPage() {
  const serviceData = {
    id: 'web-app',
    name: 'Web Application Development',
    category: 'Website & App Development',
    categoryUrl: '/services/website-app-development',
    icon: Zap,
    gradient: 'from-purple-500 to-pink-500',
    tagline: 'Complex Web Apps with Advanced Functionality',
    description: 'Build powerful web applications with custom business logic, real-time features, database integration, and scalable architecture. Perfect for SaaS platforms, enterprise tools, and complex business systems.',
    benefits: [
      'Custom business logic & workflows',
      'Real-time data synchronization',
      'Scalable cloud architecture',
      'API development & integration',
      'Role-based access control',
      'Advanced security features'
    ],
    stats: [
      { value: '100+', label: 'Web Apps Built' },
      { value: '99.9%', label: 'Uptime SLA' },
      { value: '10-16 weeks', label: 'Typical Timeline' }
    ]
  };

  const features = [
    {
      title: 'Custom Business Logic',
      description: 'Implement complex workflows and business rules specific to your needs.',
      icon: Brain,
      details: [
        'Custom algorithms',
        'Workflow automation',
        'Business rule engine',
        'Data processing'
      ]
    },
    {
      title: 'Real-time Features',
      description: 'Live updates, notifications, and collaborative features.',
      icon: Zap,
      details: [
        'WebSocket integration',
        'Live notifications',
        'Real-time collaboration',
        'Instant data sync'
      ]
    },
    {
      title: 'Database Design',
      description: 'Optimized database architecture for performance and scalability.',
      icon: Database,
      details: [
        'Schema design',
        'Query optimization',
        'Data migration',
        'Backup strategy'
      ]
    },
    {
      title: 'API Development',
      description: 'RESTful and GraphQL APIs for integrations and mobile apps.',
      icon: Plug,
      details: [
        'REST API',
        'GraphQL API',
        'API documentation',
        'Rate limiting'
      ]
    },
    {
      title: 'User Management',
      description: 'Complete user authentication and authorization system.',
      icon: Users,
      details: [
        'Multi-factor authentication',
        'Role-based access',
        'User permissions',
        'SSO integration'
      ]
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Deploy on AWS, Azure, or Google Cloud with auto-scaling.',
      icon: Cloud,
      details: [
        'Cloud deployment',
        'Auto-scaling',
        'Load balancing',
        'CDN integration'
      ]
    }
  ];

  const process = [
    {
      number: 1,
      title: 'Requirements Analysis',
      description: 'Deep dive into business processes and technical requirements.',
      duration: '2 weeks',
      deliverables: [
        'Requirements document',
        'System architecture',
        'Database schema',
        'API specifications'
      ]
    },
    {
      number: 2,
      title: 'Architecture & Design',
      description: 'Design system architecture and user interface.',
      duration: '2-3 weeks',
      deliverables: [
        'Technical architecture',
        'UI/UX design',
        'Database design',
        'Security plan'
      ]
    },
    {
      number: 3,
      title: 'Backend Development',
      description: 'Build server-side logic, databases, and APIs.',
      duration: '4-6 weeks',
      deliverables: [
        'API endpoints',
        'Database setup',
        'Business logic',
        'Authentication'
      ]
    },
    {
      number: 4,
      title: 'Frontend Development',
      description: 'Create responsive user interfaces with modern frameworks.',
      duration: '3-5 weeks',
      deliverables: [
        'User interface',
        'Interactive features',
        'API integration',
        'Responsive design'
      ]
    },
    {
      number: 5,
      title: 'Testing & Deployment',
      description: 'Comprehensive testing and production deployment.',
      duration: '2 weeks',
      deliverables: [
        'QA testing',
        'Performance optimization',
        'Cloud deployment',
        'Documentation'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Dynamic Web App',
      price: 35000,
      priceAnnual: null,
      savings: null,
      description: 'Database-driven web app with admin panel & custom logic',
      features: [
        'Admin panel included',
        'Database integration',
        'User authentication',
        'Custom forms & workflows',
        'Mobile responsive',
        'Lifetime support'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Business Web App',
      price: 60000,
      priceAnnual: null,
      savings: null,
      description: 'Full-featured web app with booking, dashboard or custom modules',
      features: [
        'Advanced custom modules',
        'Role-based access control',
        'Real-time data & notifications',
        'API integrations',
        'Analytics dashboard',
        'Admin panel',
        'Lifetime support'
      ],
      cta: 'Get Quote',
      popular: true
    }
  ];

  const faqs = [
    {
      question: 'What technologies do you use for web apps?',
      answer: 'We use modern tech stacks including React/Next.js for frontend, Node.js/Python/PHP for backend, PostgreSQL/MongoDB for databases, and AWS/Azure for hosting. We choose technologies based on your specific requirements, scalability needs, and budget.'
    },
    {
      question: 'How long does web app development take?',
      answer: 'Simple web apps take 10-12 weeks, medium complexity apps take 14-18 weeks, and complex enterprise solutions take 20-24 weeks. Timeline depends on features, integrations, custom requirements, and team availability.'
    },
    {
      question: 'Can you migrate my existing application?',
      answer: 'Yes! We specialize in application migration and modernization. We can migrate from legacy systems to modern frameworks, move from on-premise to cloud, or rebuild outdated applications with new technology stacks while preserving your data and functionality.'
    },
    {
      question: 'How do you ensure application security?',
      answer: 'We implement industry-standard security practices including HTTPS/SSL, data encryption, secure authentication (OAuth, JWT), SQL injection prevention, XSS protection, CSRF tokens, regular security audits, and compliance with GDPR/ISO standards.'
    },
    {
      question: 'Will the application scale as my business grows?',
      answer: 'Absolutely! We design applications with scalability in mind using cloud infrastructure, load balancing, database optimization, caching strategies, and microservices architecture. Your app can handle growing user loads and increased data without performance issues.'
    },
    {
      question: 'Do you provide API documentation?',
      answer: 'Yes, we provide comprehensive API documentation using tools like Swagger/OpenAPI. Documentation includes endpoints, request/response formats, authentication methods, error codes, and code examples in multiple programming languages.'
    }
  ];

  return (
    <main className="min-h-screen bg-black">
      <ServiceDetailHero service={serviceData} />
      <ServiceFeatures features={features} />
      <ProcessTimeline steps={process} />
      <PricingSection plans={pricingPlans} />
      <FAQAccordion 
        faqs={faqs}
        categoryName={serviceData.name}
      />
      <TestimonialsPreview />
      <LeadCaptureForm formType="quote" serviceName={serviceData.name} />
      <FinalCTA />
    </main>
  );
}
