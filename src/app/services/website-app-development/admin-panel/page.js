'use client';

import ServiceDetailHero from '@/components/sections/services/ServiceDetailHero';
import ServiceFeatures from '@/components/sections/services/ServiceFeatures';
import ProcessTimeline from '@/components/sections/services/ProcessTimeline';
import PricingSection from '@/components/sections/services/PricingSection';
import TestimonialsPreview from '@/components/sections/TestimonialsPreview';
import FinalCTA from '@/components/sections/services/FinalCTA';
import FAQAccordion from '@/components/sections/services/FAQAccordion';
import LeadCaptureForm from '@/components/sections/services/LeadCaptureForm';
import { Users, BarChart3, Lock, FileText, Settings, ClipboardList, TrendingUp, File } from 'lucide-react';

export default function AdminPanelPage() {
  const serviceData = {
    id: 'admin-panel',
    name: 'Admin Panel & Dashboard',
    category: 'Website & App Development',
    categoryUrl: '/services/website-app-development',
    icon: BarChart3,
    gradient: 'from-orange-500 to-red-500',
    tagline: 'Powerful Admin Interfaces for Business Management',
    description: 'Custom admin panels and dashboards for managing your business operations efficiently. Beautiful data visualizations, user management, reporting, and complete control over your systems.',
    benefits: [
      'Intuitive user management',
      'Real-time data visualization',
      'Custom report generation',
      'Role-based permissions',
      'Activity logging & audit trail',
      'Mobile-responsive design'
    ],
    stats: [
      { value: '80+', label: 'Dashboards Built' },
      { value: '100K+', label: 'Users Managed' },
      { value: '4-6 weeks', label: 'Delivery Time' }
    ]
  };

  const features = [
    {
      title: 'User Management',
      description: 'Complete user administration with roles, permissions, and access control.',
      icon: Users,
      details: [
        'Add/edit/delete users',
        'Role management',
        'Permission control',
        'User activity tracking'
      ]
    },
    {
      title: 'Data Visualization',
      description: 'Beautiful charts and graphs to visualize your business data.',
      icon: TrendingUp,
      details: [
        'Interactive charts',
        'Real-time dashboards',
        'Custom metrics',
        'Export capabilities'
      ]
    },
    {
      title: 'Report Generation',
      description: 'Generate custom reports with filtering, sorting, and export options.',
      icon: File,
      details: [
        'Custom reports',
        'PDF/Excel export',
        'Scheduled reports',
        'Email delivery'
      ]
    },
    {
      title: 'Content Management',
      description: 'Manage website content, products, blog posts, and media.',
      icon: FileText,
      details: [
        'Content editor',
        'Media library',
        'Version control',
        'Bulk operations'
      ]
    },
    {
      title: 'Activity Logging',
      description: 'Track all system activities and changes for audit purposes.',
      icon: ClipboardList,
      details: [
        'Action logs',
        'Change history',
        'User audit trail',
        'Security monitoring'
      ]
    },
    {
      title: 'Settings & Configuration',
      description: 'Configure system settings, integrations, and preferences.',
      icon: Settings,
      details: [
        'System settings',
        'Email configuration',
        'Payment settings',
        'API management'
      ]
    }
  ];

  const process = [
    {
      number: 1,
      title: 'Requirements Gathering',
      description: 'Understand your business operations and admin needs.',
      duration: '1 week',
      deliverables: [
        'Feature list',
        'User roles defined',
        'Workflow mapping',
        'UI mockups'
      ]
    },
    {
      number: 2,
      title: 'UI/UX Design',
      description: 'Design intuitive and user-friendly admin interface.',
      duration: '1-2 weeks',
      deliverables: [
        'Dashboard layouts',
        'Navigation structure',
        'Chart designs',
        'Responsive mockups'
      ]
    },
    {
      number: 3,
      title: 'Development',
      description: 'Build admin panel with all features and integrations.',
      duration: '2-3 weeks',
      deliverables: [
        'User management',
        'Data visualization',
        'Report generation',
        'Settings panel'
      ]
    },
    {
      number: 4,
      title: 'Testing & Launch',
      description: 'Test all functionalities and deploy to production.',
      duration: '1 week',
      deliverables: [
        'QA testing',
        'Performance optimization',
        'Security audit',
        'Deployment'
      ]
    },
    {
      number: 5,
      title: 'Training & Support',
      description: 'Train your team and provide ongoing support.',
      duration: 'Ongoing',
      deliverables: [
        'Admin training',
        'User manual',
        'Video tutorials',
        '3-month support'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic Dashboard',
      price: 1499,
      priceAnnual: null,
      savings: null,
      description: 'Simple admin panel',
      features: [
        'User management',
        'Basic dashboard',
        'Data tables',
        'Search & filter',
        'Export to CSV',
        'Activity logs',
        '3-month support'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Business Panel',
      price: 2999,
      priceAnnual: null,
      savings: null,
      description: 'Feature-rich admin system',
      features: [
        'Advanced dashboard',
        'Data visualization',
        'Custom reports',
        'Role-based access',
        'PDF/Excel export',
        'Email notifications',
        'API integration',
        '6-month support'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 5999,
      priceAnnual: null,
      savings: null,
      description: 'Complex admin solution',
      features: [
        'Custom features',
        'Real-time analytics',
        'Advanced permissions',
        'Audit trail',
        'Multi-language',
        'White-label option',
        'Priority support',
        '12-month support'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'Can you customize an existing admin template?',
      answer: 'Yes! We can customize popular admin templates like AdminLTE, CoreUI, or Material Dashboard to match your needs. However, we often recommend building custom admin panels for better performance, security, and exact fit to your requirements.'
    },
    {
      question: 'What technologies do you use?',
      answer: 'We use modern frameworks like React, Vue.js, or Angular for the frontend, with chart libraries like Chart.js or D3.js for visualizations. Backend can be Node.js, PHP, or Python based on your existing infrastructure.'
    },
    {
      question: 'Can you integrate with our existing database?',
      answer: 'Absolutely! We can connect to your existing databases (MySQL, PostgreSQL, MongoDB, etc.) and build an admin panel that works with your current data structure. We ensure data integrity and security throughout the integration.'
    },
    {
      question: 'How secure is the admin panel?',
      answer: 'We implement enterprise-grade security including encrypted passwords, session management, CSRF protection, SQL injection prevention, XSS protection, role-based access control, and activity logging. SSL/HTTPS is mandatory.'
    },
    {
      question: 'Can multiple admins use the panel simultaneously?',
      answer: 'Yes! The admin panel supports multiple concurrent users with different roles and permissions. You can have super admins, managers, and staff members with specific access rights to different sections.'
    },
    {
      question: 'Will it work on mobile devices?',
      answer: 'Yes, all our admin panels are fully responsive and work seamlessly on tablets and mobile devices. Admins can manage operations on-the-go using any device with a modern web browser.'
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
