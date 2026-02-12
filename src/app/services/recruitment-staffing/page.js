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
import { Users, Handshake, ClipboardList, Briefcase, Monitor, TrendingUp } from 'lucide-react';

export default function RecruitmentStaffingPage() {
  const categoryData = {
    id: 'recruitment-staffing',
    title: 'Recruitment & Staffing Solutions',
    description: 'Build your dream team with expert recruitment services. Connect with top talent across all industries and roles.',
    icon: Users,
    gradient: 'from-emerald-500 to-teal-500',
    benefits: [
      'Access to 50,000+ qualified candidates',
      'Average 15-day time to hire',
      '95% retention rate after placement',
      'Industry-specific recruitment experts',
      'Comprehensive screening process',
      '90-day replacement guarantee'
    ]
  };

  const services = [
    {
      id: 'permanent-placement',
      name: 'Permanent Placement',
      icon: Handshake,
      description: 'Build lasting teams with comprehensive permanent recruitment services.',
      features: [
        'End-to-end recruitment process',
        'Multi-level candidate screening',
        'Cultural fit assessment',
        'Background & reference checks',
        'Salary negotiation support',
        '90-day replacement guarantee'
      ],
      startingPrice: 'Custom',
      popular: true
    },
    {
      id: 'contract-staffing',
      name: 'Contract Staffing',
      icon: ClipboardList,
      description: 'Flexible staffing solutions for project-based or temporary hiring needs.',
      features: [
        'Pre-vetted candidate pool',
        'Quick turnaround (1-2 weeks)',
        'Flexible contract terms',
        'Payroll & compliance management',
        'Performance monitoring',
        '30-day replacement guarantee'
      ],
      startingPrice: 'Custom'
    },
    {
      id: 'executive-search',
      name: 'Executive Search',
      icon: Briefcase,
      description: 'Strategic leadership recruitment for C-suite and senior management positions.',
      features: [
        'Confidential search process',
        'C-suite & VP level specialists',
        'Industry network access',
        'Competency-based interviews',
        'Executive assessment tools',
        'Post-placement integration'
      ],
      startingPrice: 'Custom'
    },
    {
      id: 'technical-recruitment',
      name: 'Technical Recruitment',
      icon: Monitor,
      description: 'Specialized recruitment for IT, engineering, and technical positions.',
      features: [
        'Technical skill assessment',
        'Coding tests & evaluations',
        'Technology stack matching',
        'Remote & on-site candidates',
        'Niche skill specialization',
        'Portfolio review process'
      ],
      startingPrice: 'Custom'
    },
    {
      id: 'volume-hiring',
      name: 'Volume Hiring',
      icon: TrendingUp,
      description: 'Scale your workforce rapidly with high-volume recruitment campaigns.',
      features: [
        'Bulk recruitment campaigns',
        'Streamlined screening process',
        'Campus recruitment services',
        'Walk-in interview coordination',
        'Onboarding coordination',
        'Scalable hiring solutions'
      ],
      startingPrice: 'Custom'
    }
  ];

  const process = [
    {
      number: 1,
      title: 'Requirements Analysis',
      description: 'Understand your hiring needs, company culture, and ideal candidate profile through detailed consultation.',
      duration: '1-3 days',
      deliverables: [
        'Job description optimization',
        'Candidate persona document',
        'Competency framework',
        'Recruitment strategy plan'
      ]
    },
    {
      number: 2,
      title: 'Candidate Sourcing',
      description: 'Leverage our extensive network and advanced tools to identify and attract top talent.',
      duration: '1-2 weeks',
      deliverables: [
        'Candidate pipeline',
        'Initial screening reports',
        'Shortlist of candidates',
        'Market intelligence report'
      ]
    },
    {
      number: 3,
      title: 'Screening & Assessment',
      description: 'Comprehensive evaluation including technical tests, behavioral assessments, and cultural fit analysis.',
      duration: '1-2 weeks',
      deliverables: [
        'Assessment reports',
        'Video interview recordings',
        'Technical test results',
        'Reference check reports'
      ]
    },
    {
      number: 4,
      title: 'Interview Coordination',
      description: 'Facilitate interviews between your team and top candidates with full scheduling support.',
      duration: '1-2 weeks',
      deliverables: [
        'Interview schedules',
        'Candidate feedback',
        'Interview scorecards',
        'Final candidate presentation'
      ]
    },
    {
      number: 5,
      title: 'Offer & Onboarding',
      description: 'Support salary negotiation, offer acceptance, and smooth onboarding process.',
      duration: '1-2 weeks',
      deliverables: [
        'Offer letter assistance',
        'Negotiation support',
        'Onboarding documentation',
        '90-day follow-up reports'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Contract Staffing',
      price: 'Custom',
      priceAnnual: null,
      savings: null,
      description: 'Flexible staffing for short-term projects',
      features: [
        'Pre-screened candidate pool',
        'Quick turnaround (1-2 weeks)',
        'Flexible contract terms',
        'Payroll & benefits management',
        'Compliance handling',
        '30-day replacement guarantee',
        'Dedicated account manager'
      ],
      cta: 'Get Quote',
      popular: false
    },
    {
      name: 'Permanent Placement',
      price: 'Custom',
      priceAnnual: null,
      savings: null,
      description: 'Build your core team with permanent hires',
      features: [
        'Comprehensive candidate search',
        'Multi-level screening process',
        'Cultural fit assessment',
        'Background verification',
        'Salary negotiation support',
        '90-day replacement guarantee',
        'Onboarding assistance',
        'Post-placement follow-up'
      ],
      cta: 'Get Quote',
      popular: true
    },
    {
      name: 'Executive Search',
      price: 'Custom',
      priceAnnual: null,
      savings: null,
      description: 'Leadership recruitment for critical roles',
      features: [
        'Confidential search process',
        'C-suite & VP level focus',
        'Industry expert network',
        'Executive assessment tools',
        'Competency-based interviews',
        'Reference & background checks',
        'Offer negotiation support',
        '90-day guarantee',
        'Integration coaching'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'What is your average time to fill a position?',
      answer: 'Our average time to hire is 15 days for mid-level positions. Contract staffing typically takes 1-2 weeks, permanent placement 3-4 weeks, and executive search 4-6 weeks. Timeline varies based on role complexity and market conditions.'
    },
    {
      question: 'How do you source candidates?',
      answer: 'We use a multi-channel approach including our proprietary database of 50,000+ candidates, job boards, social media, employee referrals, campus recruitment, and direct headhunting. We also leverage AI-powered matching technology.'
    },
    {
      question: 'What is included in your screening process?',
      answer: 'Our comprehensive screening includes resume verification, phone interviews, skill assessments, behavioral interviews, cultural fit evaluation, background checks, and reference verification. Technical roles include coding tests and portfolio reviews.'
    },
    {
      question: 'What is your replacement guarantee?',
      answer: 'We offer a 90-day replacement guarantee for permanent placements and executive search, and 30 days for contract staffing. If a candidate leaves or underperforms within the guarantee period, we\'ll find a replacement at no additional cost.'
    },
    {
      question: 'How do you determine cultural fit?',
      answer: 'We conduct detailed discovery sessions to understand your company culture, values, and team dynamics. Candidates go through behavioral assessments, situational interviews, and we evaluate their work style, communication preferences, and alignment with your values.'
    },
    {
      question: 'Do you handle international recruitment?',
      answer: 'Yes, we have experience with international recruitment including visa sponsorship support, relocation assistance, and compliance with immigration regulations. We can source talent globally or help with local hiring in multiple countries.'
    }
  ];

  const comparisonFeatures = [
    { name: 'Candidate Sourcing', values: [true, true, true] },
    { name: 'Screening & Assessment', values: [true, true, true] },
    { name: 'Background Verification', values: [true, true, true] },
    { name: 'Interview Coordination', values: [true, true, true] },
    { name: 'Salary Negotiation', values: [false, true, true] },
    { name: 'Onboarding Support', values: [false, true, true] },
    { name: 'Post-Placement Follow-up', values: [false, true, true] },
    { name: 'Replacement Guarantee', values: ['30 days', '90 days', '90 days'] },
    { name: 'Average Timeline', values: ['1-2 weeks', '3-4 weeks', '4-6 weeks'] },
    { name: 'Payroll Management', values: [true, false, false] }
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
        categoryName="Recruitment & Staffing"
      />
      <TestimonialsPreview />
      <LeadCaptureForm formType="quote" />
      <FinalCTA />
    </main>
  );
}
