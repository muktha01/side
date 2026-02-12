'use client';

import CategoryHero from '@/components/sections/services/CategoryHero';
import ServiceShowcase from '@/components/sections/services/ServiceShowcase';
import ProcessTimeline from '@/components/sections/services/ProcessTimeline';
import PricingSection from '@/components/sections/services/PricingSection';
import TestimonialsPreview from '@/components/sections/TestimonialsPreview';
import FinalCTA from '@/components/sections/services/FinalCTA';
import FAQAccordion from '@/components/sections/services/FAQAccordion';
import ComparisonTable from '@/components/sections/services/ComparisonTable';
import LeadCaptureForm from '@/components/sections/services/LeadCaptureForm';
import { Briefcase, Users, Handshake, Building2, BarChart3 } from 'lucide-react';

export default function BusinessToolsPage() {
  const categoryData = {
    id: 'business-tools',
    title: 'HRM, CRM & Business Tools',
    description: 'Streamline operations and boost productivity with powerful business management solutions.',
    icon: Briefcase,
    gradient: 'from-emerald-500 to-teal-500',
    benefits: [
      'Centralized business management',
      'Automated workflows & processes',
      'Real-time reporting & analytics',
      'Scalable cloud-based solutions',
      'Custom integrations available',
      'Dedicated implementation support'
    ]
  };

  const services = [
    {
      id: 'hrm-solutions',
      name: 'Human Resource Management',
      icon: Users,
      description: 'Comprehensive HRM software to manage your entire employee lifecycle.',
      features: [
        'Employee database management',
        'Attendance & leave tracking',
        'Payroll processing',
        'Performance reviews',
        'Recruitment management',
        'Employee self-service portal'
      ],
      startingPrice: 1299,
      popular: true
    },
    {
      id: 'crm-solutions',
      name: 'Customer Relationship Management',
      icon: Handshake,
      description: 'Powerful CRM to manage leads, customers, and sales pipeline effectively.',
      features: [
        'Lead & contact management',
        'Sales pipeline tracking',
        'Email integration',
        'Task automation',
        'Reporting & analytics',
        'Mobile app access'
      ],
      startingPrice: 999
    },
    {
      id: 'erp-solutions',
      name: 'Enterprise Resource Planning',
      icon: Building2,
      description: 'Integrated ERP system for complete business process management.',
      features: [
        'Financial management',
        'Inventory control',
        'Supply chain management',
        'Project management',
        'Multi-location support',
        'Custom modules'
      ],
      startingPrice: 2499
    },
    {
      id: 'project-management',
      name: 'Project Management Tools',
      icon: BarChart3,
      description: 'Collaborative project management software for teams of all sizes.',
      features: [
        'Task & milestone tracking',
        'Team collaboration tools',
        'Time tracking',
        'Resource allocation',
        'Gantt charts',
        'Client portal'
      ],
      startingPrice: 699
    }
  ];

  const process = [
    {
      number: 1,
      title: 'Requirements Analysis',
      description: 'Understand your business processes and identify the right tools and features needed.',
      duration: '1 week',
      deliverables: [
        'Business process mapping',
        'Requirements document',
        'Tool recommendations',
        'Implementation roadmap'
      ]
    },
    {
      number: 2,
      title: 'Customization & Setup',
      description: 'Configure and customize the software to match your specific business needs.',
      duration: '2-3 weeks',
      deliverables: [
        'System configuration',
        'Custom workflows',
        'User roles & permissions',
        'Data migration plan'
      ]
    },
    {
      number: 3,
      title: 'Data Migration',
      description: 'Safely migrate your existing data to the new system with zero data loss.',
      duration: '1-2 weeks',
      deliverables: [
        'Data extraction',
        'Data cleaning',
        'Data import',
        'Validation reports'
      ]
    },
    {
      number: 4,
      title: 'Training & Go-Live',
      description: 'Train your team and launch the system for production use.',
      duration: '1 week',
      deliverables: [
        'User training sessions',
        'Admin training',
        'Documentation',
        'Go-live support'
      ]
    },
    {
      number: 5,
      title: 'Support & Optimization',
      description: 'Ongoing support and system optimization for maximum efficiency.',
      duration: 'Ongoing',
      deliverables: [
        'Technical support',
        'Performance monitoring',
        'Feature updates',
        'System optimization'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 999,
      priceAnnual: 9990,
      savings: 1998,
      description: 'Essential tools for small teams',
      features: [
        '1 business tool (HRM or CRM)',
        'Up to 25 users',
        'Basic features',
        'Email support',
        'Monthly backups',
        '99.5% uptime SLA'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: 1999,
      priceAnnual: 19990,
      savings: 3998,
      description: 'Complete business management suite',
      features: [
        '2 business tools',
        'Up to 100 users',
        'Advanced features',
        'Priority support',
        'Daily backups',
        'Custom integrations',
        '99.9% uptime SLA',
        'Dedicated account manager'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 3999,
      priceAnnual: 39990,
      savings: 7998,
      description: 'Enterprise-grade solutions with unlimited scalability',
      features: [
        'All business tools',
        'Unlimited users',
        'Enterprise features',
        '24/7 support',
        'Real-time backups',
        'Custom development',
        '99.99% uptime SLA',
        'Dedicated support team',
        'On-premise option',
        'White-label solution'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'Can the software be customized for our specific workflows?',
      answer: 'Yes, all our business tools are highly customizable. We configure the system to match your existing processes and can develop custom modules or features specific to your business requirements.'
    },
    {
      question: 'Is our data secure in your cloud-based systems?',
      answer: 'Absolutely. We use bank-grade encryption, regular security audits, automated backups, and comply with GDPR and data protection regulations. Enterprise plans also offer on-premise deployment options for maximum security.'
    },
    {
      question: 'How long does implementation take?',
      answer: 'Basic implementations take 2-4 weeks, while enterprise solutions with extensive customization may take 8-12 weeks. We provide a detailed implementation roadmap and assign a dedicated project manager.'
    },
    {
      question: 'Do you provide employee training?',
      answer: 'Yes, comprehensive training is included in all packages. We offer video tutorials, documentation, live training sessions, and ongoing support to ensure your team is comfortable using the system.'
    },
    {
      question: 'Can the system integrate with our existing software?',
      answer: 'Yes, our systems integrate with popular tools like accounting software, email platforms, payment gateways, and custom applications via APIs. We handle all integration work during implementation.'
    },
    {
      question: 'What happens if we need to scale as our business grows?',
      answer: 'All our solutions are built to scale. You can easily upgrade your plan, add more users, or enable additional features. The cloud infrastructure automatically handles increased load without downtime.'
    }
  ];

  const comparisonFeatures = [
    { name: 'Number of Users', values: ['Up to 10', 'Up to 50', 'Unlimited'] },
    { name: 'Storage Space', values: ['50 GB', '500 GB', 'Unlimited'] },
    { name: 'Custom Modules', values: [false, '2 modules', 'Unlimited'] },
    { name: 'API Access', values: ['Limited', 'Full', 'Full'] },
    { name: 'Integrations', values: ['5 apps', '15 apps', 'Unlimited'] },
    { name: 'Automated Workflows', values: ['10 workflows', '50 workflows', 'Unlimited'] },
    { name: 'Reports & Analytics', values: ['Basic', 'Advanced', 'Custom'] },
    { name: 'Mobile Apps', values: [true, true, true] },
    { name: 'Priority Support', values: [false, true, true] },
    { name: 'Dedicated Manager', values: [false, false, true] }
  ];

  return (
    <main className="min-h-screen bg-black">
      <CategoryHero category={categoryData} />
      <ServiceShowcase 
        services={services}
        categoryName={categoryData.title}
      />
      <ProcessTimeline steps={process} />
      <ComparisonTable 
        services={pricingPlans}
        features={comparisonFeatures}
      />
      <PricingSection plans={pricingPlans} />
      <FAQAccordion 
        faqs={faqs}
        categoryName="Business Tools"
      />
      <TestimonialsPreview />
      <LeadCaptureForm formType="quote" />
      <FinalCTA />
    </main>
  );
}
