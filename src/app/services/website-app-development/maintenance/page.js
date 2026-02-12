'use client';

import ServiceDetailHero from '@/components/sections/services/ServiceDetailHero';
import ServiceFeatures from '@/components/sections/services/ServiceFeatures';
import ProcessTimeline from '@/components/sections/services/ProcessTimeline';
import PricingSection from '@/components/sections/services/PricingSection';
import TestimonialsPreview from '@/components/sections/TestimonialsPreview';
import FinalCTA from '@/components/sections/services/FinalCTA';
import FAQAccordion from '@/components/sections/services/FAQAccordion';
import LeadCaptureForm from '@/components/sections/services/LeadCaptureForm';
import { Wrench, Lock, Save, Zap, Bug, Edit3, Radio } from 'lucide-react';

export default function MaintenancePage() {
  const serviceData = {
    id: 'maintenance',
    name: 'Website Maintenance & Support',
    category: 'Website & App Development',
    categoryUrl: '/services/website-app-development',
    icon: Wrench,
    gradient: 'from-blue-500 to-indigo-500',
    tagline: 'Keep Your Website Running Smoothly 24/7',
    description: 'Comprehensive website maintenance and support services including regular updates, security patches, performance optimization, bug fixes, and 24/7 technical support to keep your website secure and running at peak performance.',
    benefits: [
      'Regular security & plugin updates',
      'Daily backups & disaster recovery',
      'Performance monitoring & optimization',
      'Bug fixes & technical support',
      'Content updates & changes',
      '24/7 uptime monitoring'
    ],
    stats: [
      { value: '200+', label: 'Sites Maintained' },
      { value: '99.9%', label: 'Uptime Guarantee' },
      { value: '<2hrs', label: 'Response Time' }
    ]
  };

  const features = [
    {
      title: 'Security Updates',
      description: 'Regular security patches and updates to protect against vulnerabilities.',
      icon: Lock,
      details: [
        'WordPress/CMS updates',
        'Plugin/theme updates',
        'Security patches',
        'Malware scanning'
      ]
    },
    {
      title: 'Regular Backups',
      description: 'Daily automated backups with quick restore capabilities.',
      icon: Save,
      details: [
        'Daily backups',
        'Off-site storage',
        'Quick restore',
        'Version history'
      ]
    },
    {
      title: 'Performance Optimization',
      description: 'Speed optimization and performance monitoring for better user experience.',
      icon: Zap,
      details: [
        'Speed optimization',
        'Image compression',
        'Cache management',
        'CDN setup'
      ]
    },
    {
      title: 'Bug Fixes',
      description: 'Quick resolution of bugs, errors, and technical issues.',
      icon: Bug,
      details: [
        'Error resolution',
        'Compatibility fixes',
        'Browser testing',
        'Mobile fixes'
      ]
    },
    {
      title: 'Content Updates',
      description: 'Regular content updates, page edits, and minor changes.',
      icon: Edit3,
      details: [
        'Text updates',
        'Image replacement',
        'Page modifications',
        'Menu changes'
      ]
    },
    {
      title: '24/7 Monitoring',
      description: 'Round-the-clock uptime monitoring with instant alerts.',
      icon: Radio,
      details: [
        'Uptime monitoring',
        'Performance tracking',
        'Instant alerts',
        'Monthly reports'
      ]
    }
  ];

  const process = [
    {
      number: 1,
      title: 'Site Audit',
      description: 'Comprehensive audit of your website to identify issues.',
      duration: '1 day',
      deliverables: [
        'Security scan',
        'Performance analysis',
        'Backup check',
        'Update review'
      ]
    },
    {
      number: 2,
      title: 'Setup & Integration',
      description: 'Set up monitoring tools and backup systems.',
      duration: '2 days',
      deliverables: [
        'Monitoring setup',
        'Backup configuration',
        'Security tools',
        'Access setup'
      ]
    },
    {
      number: 3,
      title: 'Regular Maintenance',
      description: 'Ongoing maintenance as per selected plan.',
      duration: 'Monthly',
      deliverables: [
        'Security updates',
        'Backups',
        'Performance reports',
        'Support tickets'
      ]
    },
    {
      number: 4,
      title: 'Emergency Support',
      description: 'Quick response to critical issues and downtime.',
      duration: 'As needed',
      deliverables: [
        'Issue resolution',
        'Site restoration',
        'Security fixes',
        'Incident report'
      ]
    },
    {
      number: 5,
      title: 'Monthly Reporting',
      description: 'Detailed reports on site health and activities.',
      duration: 'Monthly',
      deliverables: [
        'Uptime report',
        'Updates log',
        'Performance metrics',
        'Recommendations'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic Care',
      price: 299,
      priceAnnual: 2990,
      savings: 598,
      description: 'Essential maintenance',
      features: [
        'Monthly updates',
        'Weekly backups',
        'Uptime monitoring',
        'Email support',
        'Security scanning',
        'Performance check',
        '2 hours support/month'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Business Care',
      price: 599,
      priceAnnual: 5990,
      savings: 1198,
      description: 'Complete maintenance',
      features: [
        'Weekly updates',
        'Daily backups',
        '24/7 monitoring',
        'Priority support',
        'Bug fixes',
        'Content updates',
        'Speed optimization',
        '5 hours support/month'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Premium Care',
      price: 999,
      priceAnnual: 9990,
      savings: 1998,
      description: 'White-glove service',
      features: [
        'Daily updates',
        'Real-time backups',
        'Advanced monitoring',
        '24/7 support',
        'Dedicated manager',
        'Unlimited changes',
        'Emergency response',
        '10 hours support/month'
      ],
      cta: 'Get Started',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'What is included in website maintenance?',
      answer: 'Website maintenance includes security updates, plugin/theme updates, regular backups, uptime monitoring, performance optimization, bug fixes, content updates (text, images), security scanning, and technical support based on your selected plan.'
    },
    {
      question: 'How quickly do you respond to issues?',
      answer: 'Basic plan: 24-hour response. Business plan: 4-hour response. Premium plan: 1-hour response with 24/7 availability. Emergency issues like site downtime are prioritized across all plans.'
    },
    {
      question: 'Can you maintain websites built by other developers?',
      answer: 'Yes! We maintain websites built on any platform (WordPress, Shopify, custom PHP, etc.) regardless of who built them. We\'ll conduct an initial audit to understand your site and then provide ongoing maintenance.'
    },
    {
      question: 'Do you provide content updates?',
      answer: 'Yes, all plans include minor content updates like text changes and image replacements. Business and Premium plans include more hours for larger content updates, page additions, and design modifications.'
    },
    {
      question: 'What happens if my site gets hacked?',
      answer: 'We\'ll immediately work to restore your site from clean backups, remove malware, patch security vulnerabilities, and implement additional security measures. Premium plan includes emergency response with higher priority.'
    },
    {
      question: 'Can I cancel the maintenance plan anytime?',
      answer: 'Yes, maintenance plans are flexible with month-to-month billing (or annual for savings). You can cancel anytime with 30 days notice. Annual plans can be cancelled with a prorated refund after 3 months.'
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
