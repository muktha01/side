'use client';

import ServiceDetailHero from '@/components/sections/services/ServiceDetailHero';
import ServiceFeatures from '@/components/sections/services/ServiceFeatures';
import ProcessTimeline from '@/components/sections/services/ProcessTimeline';
import PricingSection from '@/components/sections/services/PricingSection';
import TestimonialsPreview from '@/components/sections/TestimonialsPreview';
import FinalCTA from '@/components/sections/services/FinalCTA';
import FAQAccordion from '@/components/sections/services/FAQAccordion';
import LeadCaptureForm from '@/components/sections/services/LeadCaptureForm';
import { ClipboardList, Users, Clock, FileText, CreditCard, Scale, BarChart3, Zap } from 'lucide-react';

export default function ContractStaffingPage() {
  const serviceData = {
    id: 'contract-staffing',
    name: 'Contract Staffing',
    category: 'Recruitment & Staffing',
    categoryUrl: '/services/recruitment-staffing',
    icon: ClipboardList,
    gradient: 'from-emerald-500 to-teal-500',
    tagline: 'Flexible Staffing Solutions for Your Project Needs',
    description: 'Flexible staffing solutions for project-based or temporary hiring needs. Get pre-vetted professionals quickly with flexible contract terms, full payroll management, and compliance handling.',
    benefits: [
      'Quick turnaround: 1-2 weeks to hire',
      'Pre-vetted candidate pool ready to deploy',
      'Flexible contract terms (3, 6, 12 months)',
      'Full payroll & compliance management',
      'Performance monitoring & reporting',
      '30-day replacement guarantee'
    ],
    stats: [
      { value: '1000+', label: 'Contract Placements' },
      { value: '1-2 weeks', label: 'Time to Deploy' },
      { value: '98%', label: 'Client Satisfaction' }
    ]
  };

  const features = [
    {
      title: 'Pre-Vetted Talent Pool',
      description: 'Access to ready-to-deploy professionals who are already screened and verified.',
      icon: Users,
      details: [
        'Pre-screened candidates',
        'Skills verified professionals',
        'Background-checked contractors',
        'Reference-verified talent'
      ]
    },
    {
      title: 'Quick Deployment',
      description: 'Fast hiring process gets contractors on your project within 1-2 weeks.',
      icon: Zap,
      details: [
        'Rapid candidate matching',
        'Streamlined approval process',
        'Quick onboarding',
        'Immediate availability'
      ]
    },
    {
      title: 'Flexible Contract Terms',
      description: 'Customizable contracts to match your project timeline and budget.',
      icon: FileText,
      details: [
        '3, 6, or 12-month contracts',
        'Contract-to-hire options',
        'Part-time & full-time',
        'Easy extensions'
      ]
    },
    {
      title: 'Payroll Management',
      description: 'We handle all payroll processing, taxes, and benefits administration.',
      icon: CreditCard,
      details: [
        'Weekly/bi-weekly payroll',
        'Tax withholding & filing',
        'Benefits administration',
        'Invoicing & reporting'
      ]
    },
    {
      title: 'Compliance Handling',
      description: 'Full compliance with labor laws, employment regulations, and industry standards.',
      icon: Scale,
      details: [
        'Employment law compliance',
        'Worker classification',
        'Contract management',
        'Insurance coverage'
      ]
    },
    {
      title: 'Performance Monitoring',
      description: 'Regular check-ins and performance tracking throughout the contract.',
      icon: BarChart3,
      details: [
        'Weekly progress updates',
        'Performance reviews',
        'Issue resolution',
        'Client satisfaction surveys'
      ]
    }
  ];

  const process = [
    {
      number: 1,
      title: 'Requirements Definition',
      description: 'Quick consultation to understand your project needs, skills required, and timeline.',
      duration: '1-2 days',
      deliverables: [
        'Project scope document',
        'Skills requirement matrix',
        'Contract terms outline',
        'Timeline & budget plan'
      ]
    },
    {
      number: 2,
      title: 'Candidate Matching',
      description: 'Match pre-vetted contractors from our talent pool to your requirements.',
      duration: '2-3 days',
      deliverables: [
        'Matched candidate profiles',
        'Skills assessment results',
        'Availability confirmation',
        'Rate card & terms'
      ]
    },
    {
      number: 3,
      title: 'Client Review',
      description: 'Review candidates and conduct interviews if needed for final selection.',
      duration: '3-5 days',
      deliverables: [
        'Candidate presentations',
        'Interview coordination',
        'Skills demonstrations',
        'Final candidate selection'
      ]
    },
    {
      number: 4,
      title: 'Contract & Onboarding',
      description: 'Finalize contract terms, complete paperwork, and onboard the contractor.',
      duration: '2-3 days',
      deliverables: [
        'Signed contracts',
        'Payroll setup',
        'Access credentials',
        'Onboarding completion'
      ]
    },
    {
      number: 5,
      title: 'Ongoing Support',
      description: 'Continuous support with payroll, compliance, and performance management.',
      duration: 'Contract duration',
      deliverables: [
        'Bi-weekly payroll processing',
        'Weekly progress reports',
        'Issue resolution',
        'Contract renewal options'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Short-Term Contract',
      price: 'Custom',
      priceAnnual: null,
      savings: null,
      description: '3-6 month contract staffing',
      features: [
        'Pre-vetted contractors',
        '1-2 week deployment',
        'Payroll management',
        'Basic compliance',
        '30-day replacement',
        'Weekly reporting',
        'Email support'
      ],
      cta: 'Get Quote',
      popular: false
    },
    {
      name: 'Long-Term Contract',
      price: 'Custom',
      priceAnnual: null,
      savings: null,
      description: '6-12 month contract staffing',
      features: [
        'Everything in Short-Term',
        'Contract-to-hire option',
        'Performance reviews',
        'Dedicated coordinator',
        '60-day replacement',
        'Monthly strategy calls',
        'Priority support'
      ],
      cta: 'Get Quote',
      popular: true
    },
    {
      name: 'Enterprise Contract',
      price: 'Custom',
      priceAnnual: null,
      savings: null,
      description: 'High-volume contract staffing',
      features: [
        'Everything in Long-Term',
        'Volume discounts',
        'Dedicated team',
        'MSP services available',
        'Custom SLAs',
        'Quarterly business reviews',
        '24/7 support'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'How quickly can you provide contract staff?',
      answer: 'We can typically deploy pre-vetted contract staff within 1-2 weeks. Our talent pool includes immediately available professionals who have already been screened, background-checked, and skills-verified. For urgent needs, we offer expedited placement services with deployment possible within 3-5 business days.'
    },
    {
      question: 'What is included in contract staffing service?',
      answer: 'Our contract staffing service includes candidate sourcing and matching, skills verification, background checks, contract negotiation, payroll processing, tax withholding, benefits administration, compliance management, performance monitoring, and ongoing support throughout the contract period. You also get a 30-day replacement guarantee.'
    },
    {
      question: 'Can contractors be converted to permanent employees?',
      answer: 'Yes! We offer contract-to-hire arrangements where contractors can be converted to permanent employees after a trial period (typically 3-6 months). This allows you to evaluate performance before making a permanent commitment. Conversion fees apply and are discussed upfront.'
    },
    {
      question: 'Who handles payroll and taxes?',
      answer: 'We handle all payroll processing, tax withholding, and filing for contract staff. Contractors are our W-2 employees, and we manage all employment-related responsibilities including workers\' compensation insurance, unemployment insurance, and tax compliance. You receive simple, consolidated invoicing.'
    },
    {
      question: 'What contract lengths do you offer?',
      answer: 'We offer flexible contract terms including short-term (3-6 months), long-term (6-12 months), and extended contracts (12+ months). Contracts can be part-time or full-time. Extensions are easy to arrange, and we also offer contract-to-hire options for candidates you want to convert to permanent.'
    },
    {
      question: 'What happens if a contractor doesn\'t work out?',
      answer: 'We offer a 30-day replacement guarantee. If a contractor leaves or doesn\'t meet performance expectations within the first 30 days, we will provide a replacement at no additional cost. We also conduct regular check-ins to address any issues proactively before they become problems.'
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
