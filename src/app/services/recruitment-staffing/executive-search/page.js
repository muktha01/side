'use client';

import ServiceDetailHero from '@/components/sections/services/ServiceDetailHero';
import ServiceFeatures from '@/components/sections/services/ServiceFeatures';
import ProcessTimeline from '@/components/sections/services/ProcessTimeline';
import PricingSection from '@/components/sections/services/PricingSection';
import TestimonialsPreview from '@/components/sections/TestimonialsPreview';
import FinalCTA from '@/components/sections/services/FinalCTA';
import FAQAccordion from '@/components/sections/services/FAQAccordion';
import LeadCaptureForm from '@/components/sections/services/LeadCaptureForm';
import { GraduationCap, Globe, BarChart3, Handshake, Briefcase, Lock as LockIcon, FileText } from 'lucide-react';

export default function ExecutiveSearchPage() {
  const serviceData = {
    id: 'executive-search',
    name: 'Executive Search',
    category: 'Recruitment & Staffing',
    categoryUrl: '/services/recruitment-staffing',
    icon: Briefcase,
    gradient: 'from-emerald-500 to-teal-500',
    tagline: 'Strategic Leadership Recruitment for Critical Roles',
    description: 'Strategic leadership recruitment for C-suite and senior management positions. Confidential search process with access to top executives, comprehensive assessment tools, and post-placement integration support.',
    benefits: [
      'Confidential executive search process',
      'Access to passive C-suite candidates',
      'Comprehensive leadership assessment',
      'Industry expert network & insights',
      'Post-placement integration coaching',
      '90-day performance guarantee'
    ],
    stats: [
      { value: '200+', label: 'Executive Placements' },
      { value: '4-6 weeks', label: 'Average Search Time' },
      { value: '92%', label: 'Success Rate' }
    ]
  };

  const features = [
    {
      title: 'Confidential Search',
      description: 'Discreet executive search process protecting both client and candidate confidentiality.',
      icon: LockIcon,
      details: [
        'Confidential job postings',
        'Discreet candidate outreach',
        'NDA protection',
        'Privacy throughout process'
      ]
    },
    {
      title: 'C-Suite Specialists',
      description: 'Dedicated team with expertise in recruiting CEO, CFO, CTO, and VP-level positions.',
      icon: GraduationCap,
      details: [
        'Executive-level expertise',
        'Industry specialization',
        'Board-level experience',
        'Succession planning support'
      ]
    },
    {
      title: 'Industry Network',
      description: 'Extensive network of executive-level professionals across industries.',
      icon: Globe,
      details: [
        'Passive candidate access',
        'Executive databases',
        'Industry connections',
        'Global reach'
      ]
    },
    {
      title: 'Leadership Assessment',
      description: 'Comprehensive evaluation using advanced executive assessment tools.',
      icon: BarChart3,
      details: [
        'Leadership competency tests',
        'Psychometric assessments',
        'Strategic thinking evaluation',
        'Cultural alignment analysis'
      ]
    },
    {
      title: 'Board Presentations',
      description: 'Detailed candidate presentations for board-level decision making.',
      icon: FileText,
      details: [
        'Executive briefing documents',
        'Competency scorecards',
        'Compensation analysis',
        'Board presentation support'
      ]
    },
    {
      title: 'Integration Support',
      description: 'Post-placement support to ensure successful executive transition and integration.',
      icon: Handshake,
      details: [
        '90-day integration plan',
        'Executive coaching',
        'Stakeholder alignment',
        'Performance check-ins'
      ]
    }
  ];

  const process = [
    {
      number: 1,
      title: 'Search Strategy',
      description: 'Develop comprehensive executive search strategy with stakeholder alignment.',
      duration: '1 week',
      deliverables: [
        'Leadership profile document',
        'Competency framework',
        'Search strategy plan',
        'Stakeholder alignment'
      ]
    },
    {
      number: 2,
      title: 'Market Mapping',
      description: 'Identify and map potential executive candidates across industries.',
      duration: '2 weeks',
      deliverables: [
        'Target company list',
        'Candidate long-list',
        'Market intelligence',
        'Compensation benchmarks'
      ]
    },
    {
      number: 3,
      title: 'Candidate Engagement',
      description: 'Discreetly approach and engage passive executive candidates.',
      duration: '2-3 weeks',
      deliverables: [
        'Candidate outreach',
        'Initial discussions',
        'Interest validation',
        'Short-list creation'
      ]
    },
    {
      number: 4,
      title: 'Assessment & Interviews',
      description: 'Comprehensive executive assessment and structured interview process.',
      duration: '2-3 weeks',
      deliverables: [
        'Executive assessments',
        'Board presentations',
        'Reference checks',
        'Final candidate reports'
      ]
    },
    {
      number: 5,
      title: 'Offer & Integration',
      description: 'Negotiate offer, facilitate acceptance, and support executive integration.',
      duration: '2-4 weeks + 90 days',
      deliverables: [
        'Offer negotiation',
        'Contract finalization',
        'Integration plan',
        '90-day follow-up'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'VP-Level Search',
      price: 'Custom',
      priceAnnual: null,
      savings: null,
      description: 'Vice President level executive search',
      features: [
        'Confidential search process',
        'Industry-specific sourcing',
        'Leadership assessment',
        'Board presentations',
        'Offer negotiation',
        '90-day guarantee',
        'Integration support',
        'Dedicated consultant'
      ],
      cta: 'Get Quote',
      popular: false
    },
    {
      name: 'C-Suite Search',
      price: 'Custom',
      priceAnnual: null,
      savings: null,
      description: 'CEO, CFO, CTO, COO executive search',
      features: [
        'Everything in VP-Level',
        'Board-level presentation',
        'Multi-stakeholder alignment',
        'Advanced psychometric testing',
        'Executive coaching support',
        '180-day guarantee',
        'Succession planning advisory',
        'Senior partner engagement'
      ],
      cta: 'Contact Sales',
      popular: true
    }
  ];

  const faqs = [
    {
      question: 'What executive positions do you recruit for?',
      answer: 'We recruit for all C-suite positions (CEO, CFO, CTO, COO, CMO, CHRO) and VP-level roles across functions including operations, technology, finance, sales, marketing, and human resources. We also support board member recruitment and succession planning for critical leadership roles.'
    },
    {
      question: 'How long does executive search take?',
      answer: 'Executive search typically takes 4-6 weeks for VP-level positions and 6-10 weeks for C-suite roles. The timeline includes search strategy (1 week), market mapping (2 weeks), candidate engagement (2-3 weeks), assessment (2-3 weeks), and offer negotiation (2-4 weeks). Urgent searches can be expedited.'
    },
    {
      question: 'How do you ensure confidentiality?',
      answer: 'We maintain strict confidentiality through NDAs with all parties, discreet candidate outreach using blind postings, secure communication channels, and limited information sharing until mutual interest is established. Our consultants are trained in confidential search protocols and have extensive experience with sensitive placements.'
    },
    {
      question: 'How do you assess executive candidates?',
      answer: 'Our executive assessment includes leadership competency evaluations, psychometric testing, strategic thinking assessments, cultural fit analysis, comprehensive background checks, and extensive reference calls with board members and peers. We also evaluate track record, leadership style, change management capability, and strategic vision.'
    },
    {
      question: 'What is your executive search fee structure?',
      answer: 'Executive search fees are typically calculated as a percentage of first-year total compensation (30-35% is industry standard) for the position, paid in installments: retainer upon engagement, progress payment at candidate presentation, and final payment upon placement. All search expenses and assessments are included. Contact us for detailed pricing.'
    },
    {
      question: 'What post-placement support do you provide?',
      answer: 'We provide comprehensive post-placement support including a 90-day (or 180-day for C-suite) integration plan, regular check-ins with both executive and client, stakeholder alignment facilitation, executive coaching referrals, and performance monitoring. If the placement doesn\'t work out during the guarantee period, we conduct a replacement search at no additional fee.'
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
