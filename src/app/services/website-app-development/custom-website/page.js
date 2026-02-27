'use client';

import ServiceDetailHero from '@/components/sections/services/ServiceDetailHero';
import ServiceFeatures from '@/components/sections/services/ServiceFeatures';
import ProcessTimeline from '@/components/sections/services/ProcessTimeline';
import PricingSection from '@/components/sections/services/PricingSection';
import TestimonialsPreview from '@/components/sections/TestimonialsPreview';
import FinalCTA from '@/components/sections/services/FinalCTA';
import FAQAccordion from '@/components/sections/services/FAQAccordion';
import LeadCaptureForm from '@/components/sections/services/LeadCaptureForm';
import { Globe, Smartphone, Search, Zap, Edit3, Wrench, Lock } from 'lucide-react';

export default function CustomWebsitePage() {
  const serviceData = {
    id: 'custom-website',
    name: 'Custom Website Development',
    category: 'Website & App Development',
    categoryUrl: '/services/website-app-development',
    icon: Globe,
    gradient: 'from-blue-500 to-cyan-500',
    tagline: 'Professional Websites Tailored to Your Brand',
    description: 'Professional website design and development tailored to your brand and business needs. Build a stunning online presence that converts visitors into customers with responsive design, SEO optimization, and custom functionality.',
    benefits: [
      'Fully responsive design for all devices',
      'SEO-optimized structure & content',
      'Fast loading speeds (90+ PageSpeed)',
      'Custom CMS integration (WordPress, etc.)',
      'Secure & scalable architecture',
      '30-day post-launch support included'
    ],
    stats: [
      { value: '500+', label: 'Websites Delivered' },
      { value: '95%', label: 'Client Satisfaction' },
      { value: '4-6 weeks', label: 'Average Delivery' }
    ]
  };

  const features = [
    {
      title: 'Responsive Design',
      description: 'Beautiful websites that work perfectly on all devices - desktop, tablet, and mobile.',
      icon: Smartphone,
      details: [
        'Mobile-first approach',
        'Tablet optimization',
        'Desktop enhancement',
        'Cross-browser compatibility'
      ]
    },
    {
      title: 'SEO Optimization',
      description: 'Built-in SEO best practices to help your website rank higher in search results.',
      icon: Search,
      details: [
        'On-page SEO setup',
        'Meta tags optimization',
        'XML sitemap generation',
        'Schema markup integration'
      ]
    },
    {
      title: 'Fast Performance',
      description: 'Optimized for speed with lazy loading, caching, and CDN integration.',
      icon: Zap,
      details: [
        'Image optimization',
        'Code minification',
        'Browser caching',
        'CDN integration'
      ]
    },
    {
      title: 'CMS Integration',
      description: 'Easy-to-use content management system for updating your website without coding.',
      icon: Edit3,
      details: [
        'WordPress integration',
        'Custom CMS options',
        'Visual page builders',
        'User-friendly admin panel'
      ]
    },
    {
      title: 'Custom Functionality',
      description: 'Add any features you need - contact forms, galleries, booking systems, and more.',
      icon: Wrench,
      details: [
        'Contact forms',
        'Image galleries',
        'Booking systems',
        'Custom integrations'
      ]
    },
    {
      title: 'Security & Backups',
      description: 'SSL certificates, security hardening, and automated backups for peace of mind.',
      icon: Lock,
      details: [
        'SSL certificate setup',
        'Security hardening',
        'Automated backups',
        'Malware protection'
      ]
    }
  ];

  const process = [
    {
      number: 1,
      title: 'Discovery & Planning',
      description: 'Understanding your business, goals, target audience, and website requirements.',
      duration: '3-5 days',
      deliverables: [
        'Project brief document',
        'Sitemap & structure',
        'Content requirements',
        'Technical specifications'
      ]
    },
    {
      number: 2,
      title: 'Design & Mockups',
      description: 'Creating stunning visual designs and mockups for your approval.',
      duration: '1-2 weeks',
      deliverables: [
        'Homepage design',
        'Internal page designs',
        'Mobile layouts',
        'Style guide'
      ]
    },
    {
      number: 3,
      title: 'Development',
      description: 'Building your website with clean code, CMS integration, and functionality.',
      duration: '2-3 weeks',
      deliverables: [
        'Functional website',
        'CMS integration',
        'Custom features',
        'Admin panel setup'
      ]
    },
    {
      number: 4,
      title: 'Content & Testing',
      description: 'Adding content, testing across devices and browsers, and optimization.',
      duration: '1 week',
      deliverables: [
        'Content population',
        'Cross-browser testing',
        'Performance optimization',
        'SEO setup'
      ]
    },
    {
      number: 5,
      title: 'Launch & Support',
      description: 'Deploying your website live and providing training and support.',
      duration: '2-3 days + 30 days',
      deliverables: [
        'Live deployment',
        'Training session',
        'Documentation',
        '30-day support'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Static Website',
      price: 10000,
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
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Dynamic Website',
      price: 35000,
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
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Restaurant / Specialty',
      price: 30000,
      priceAnnual: null,
      savings: null,
      description: 'Perfect for restaurants, cafes & specialty businesses',
      features: [
        'Menu section & gallery',
        'WhatsApp integration',
        'Inquiry / reservation form',
        'Google Maps integration',
        'Mobile responsive & SEO optimized',
        'Lifetime support'
      ],
      cta: 'Get Quote',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'How long does it take to build a custom website?',
      answer: 'A typical custom website takes 4-6 weeks from start to launch. This includes 3-5 days for discovery, 1-2 weeks for design, 2-3 weeks for development, 1 week for content and testing, and 2-3 days for launch. Complex websites with custom features may take 8-12 weeks.'
    },
    {
      question: 'Will my website be mobile-friendly?',
      answer: 'Absolutely! All our websites are built with a mobile-first approach, ensuring they look and function perfectly on smartphones, tablets, and desktops. We test on multiple devices and browsers to guarantee a seamless experience for all visitors.'
    },
    {
      question: 'Can I update the website content myself?',
      answer: 'Yes! We integrate user-friendly Content Management Systems (usually WordPress or a custom CMS) that allow you to easily update text, images, blog posts, and other content without any technical knowledge. We also provide training and documentation.'
    },
    {
      question: 'What if I need more pages or features later?',
      answer: 'No problem! We build websites with scalability in mind. You can always add more pages, features, or functionality later. We offer ongoing development services and maintenance plans to help you grow your website as your business grows.'
    },
    {
      question: 'Do you provide hosting and domain services?',
      answer: 'Yes, we can handle everything! We help with domain registration, hosting setup, SSL certificates, and email configuration. We work with reliable hosting providers and can recommend the best solution based on your website\'s needs and expected traffic.'
    },
    {
      question: 'What about SEO - will my website rank on Google?',
      answer: 'We implement SEO best practices including optimized site structure, meta tags, fast loading speeds, mobile responsiveness, and schema markup. However, ranking depends on many factors including content quality, competition, and ongoing SEO efforts. We can also provide ongoing SEO services.'
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
