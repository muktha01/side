'use client';

import ServiceDetailHero from '@/components/sections/services/ServiceDetailHero';
import ServiceFeatures from '@/components/sections/services/ServiceFeatures';
import ProcessTimeline from '@/components/sections/services/ProcessTimeline';
import PricingSection from '@/components/sections/services/PricingSection';
import TestimonialsPreview from '@/components/sections/TestimonialsPreview';
import FinalCTA from '@/components/sections/services/FinalCTA';
import FAQAccordion from '@/components/sections/services/FAQAccordion';
import LeadCaptureForm from '@/components/sections/services/LeadCaptureForm';
import { CheckCircle, Target, Search, Users, FileText, TrendingUp, RefreshCw, Handshake, DollarSign, Shield } from 'lucide-react';

export default function PermanentPlacementPage() {
  const serviceData = {
    id: 'permanent-placement',
    name: 'Permanent Placement',
    category: 'Recruitment & Staffing',
    categoryUrl: '/services/recruitment-staffing',
    icon: Handshake,
    gradient: 'from-emerald-500 to-teal-500',
    tagline: 'Build Your Core Team with Quality Permanent Hires',
    description: 'Build lasting teams with our comprehensive permanent recruitment services. We handle end-to-end recruitment, from sourcing to onboarding, ensuring you get the right talent that fits your company culture and drives long-term success.',
    benefits: [
      'Average 95% retention rate after 1 year',
      'Comprehensive 90-day replacement guarantee',
      'Multi-level screening & assessment',
      'Cultural fit analysis included',
      'Background verification & reference checks',
      'Post-placement support & follow-up'
    ],
    stats: [
      { value: '2000+', label: 'Permanent Placements' },
      { value: '95%', label: 'Retention Rate' },
      { value: '3-4 weeks', label: 'Average Hiring Time' }
    ]
  };

  const features = [
    {
      title: 'End-to-End Recruitment',
      description: 'Complete recruitment process management from job posting to offer acceptance.',
      icon: RefreshCw,
      details: [
        'Job description optimization',
        'Multi-channel candidate sourcing',
        'Applicant tracking system',
        'Candidate database management'
      ]
    },
    {
      title: 'Multi-Level Screening',
      description: 'Rigorous screening process to ensure only the best candidates reach you.',
      icon: CheckCircle,
      details: [
        'Resume & application screening',
        'Phone & video interviews',
        'Skills assessment tests',
        'Behavioral interviews'
      ]
    },
    {
      title: 'Cultural Fit Assessment',
      description: 'Evaluate candidates for alignment with your company values and culture.',
      icon: Target,
      details: [
        'Company culture analysis',
        'Personality assessments',
        'Work style evaluation',
        'Team compatibility testing'
      ]
    },
    {
      title: 'Background Verification',
      description: 'Comprehensive background checks and reference verification.',
      icon: Search,
      details: [
        'Employment history verification',
        'Educational credential checks',
        'Professional reference calls',
        'Criminal background checks'
      ]
    },
    {
      title: 'Salary Negotiation Support',
      description: 'Expert assistance with offer negotiation and compensation planning.',
      icon: DollarSign,
      details: [
        'Market salary benchmarking',
        'Offer letter preparation',
        'Negotiation mediation',
        'Benefits package advisory'
      ]
    },
    {
      title: '90-Day Guarantee',
      description: 'If a placed candidate leaves within 90 days, we replace them at no cost.',
      icon: Shield,
      details: [
        'Performance monitoring',
        'Regular check-ins',
        'Issue resolution support',
        'Free replacement service'
      ]
    }
  ];

  const process = [
    {
      number: 1,
      title: 'Requirements Analysis',
      description: 'Detailed consultation to understand your hiring needs, company culture, and ideal candidate profile.',
      duration: '1-2 days',
      deliverables: [
        'Optimized job description',
        'Candidate persona document',
        'Competency framework',
        'Hiring timeline & strategy'
      ]
    },
    {
      number: 2,
      title: 'Candidate Sourcing',
      description: 'Leverage our network and tools to identify and attract top permanent talent.',
      duration: '1-2 weeks',
      deliverables: [
        'Qualified candidate pipeline',
        'Initial screening reports',
        'Shortlisted profiles',
        'Market insights report'
      ]
    },
    {
      number: 3,
      title: 'Screening & Assessment',
      description: 'Comprehensive evaluation including skills tests, interviews, and cultural fit analysis.',
      duration: '1-2 weeks',
      deliverables: [
        'Detailed assessment reports',
        'Interview recordings',
        'Skills test results',
        'Reference check summaries'
      ]
    },
    {
      number: 4,
      title: 'Client Interviews',
      description: 'Coordinate interviews between your team and top candidates with full support.',
      duration: '1-2 weeks',
      deliverables: [
        'Interview schedules',
        'Candidate briefings',
        'Interview feedback forms',
        'Final candidate presentations'
      ]
    },
    {
      number: 5,
      title: 'Offer & Onboarding',
      description: 'Support with offer negotiation, acceptance, and smooth onboarding process.',
      duration: '1-2 weeks',
      deliverables: [
        'Offer letter assistance',
        'Negotiation mediation',
        'Onboarding checklist',
        '90-day follow-up plan'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Standard Placement',
      price: 'Custom',
      priceAnnual: null,
      savings: null,
      description: 'Professional permanent placement service',
      features: [
        'End-to-end recruitment',
        'Multi-channel sourcing',
        'Comprehensive screening',
        'Background verification',
        'Interview coordination',
        'Offer negotiation support',
        '90-day replacement guarantee',
        'Monthly progress reports'
      ],
      cta: 'Get Quote',
      popular: true
    },
    {
      name: 'Premium Placement',
      price: 'Custom',
      priceAnnual: null,
      savings: null,
      description: 'Enhanced placement with extended support',
      features: [
        'Everything in Standard',
        'Priority candidate access',
        'Advanced psychometric testing',
        'Cultural fit deep-dive',
        'Onboarding support',
        '180-day guarantee',
        'Dedicated account manager',
        'Quarterly performance reviews'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'What is included in permanent placement service?',
      answer: 'Our permanent placement service includes complete end-to-end recruitment: job description optimization, candidate sourcing from multiple channels, comprehensive screening (resume, phone, video interviews), skills assessments, background verification, reference checks, interview coordination, salary negotiation support, and 90-day replacement guarantee with post-placement follow-up.'
    },
    {
      question: 'How long does the permanent placement process take?',
      answer: 'The typical permanent placement process takes 3-4 weeks from start to offer acceptance. This includes 1-2 weeks for sourcing, 1-2 weeks for screening and assessments, 1-2 weeks for client interviews, and 1 week for offer negotiation and acceptance. Timeline may vary based on role complexity and urgency.'
    },
    {
      question: 'What is your replacement guarantee?',
      answer: 'We offer a 90-day replacement guarantee (180 days for Premium). If a placed candidate leaves voluntarily or is terminated for performance reasons within the guarantee period, we will find and place a replacement candidate at no additional recruitment fee. This demonstrates our commitment to quality placements.'
    },
    {
      question: 'How do you ensure cultural fit?',
      answer: 'Cultural fit assessment is a key part of our process. We conduct detailed company culture analysis, use personality and work style assessments, evaluate team compatibility, and include behavioral interview questions focused on values alignment. We present candidates with detailed cultural fit scores and justifications.'
    },
    {
      question: 'What types of positions do you fill?',
      answer: 'We handle permanent placements across all levels and functions: entry-level to mid-management positions in IT, engineering, sales, marketing, finance, operations, HR, and other business functions. For C-suite and VP-level positions, please see our Executive Search service.'
    },
    {
      question: 'How is pricing determined?',
      answer: 'Permanent placement fees are typically calculated as a percentage of the candidate\'s first-year salary, usually ranging from 15-25% depending on role complexity, seniority, and search difficulty. We provide transparent pricing based on your specific requirements. Contact us for a detailed quote.'
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
