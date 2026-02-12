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
import { Target, Briefcase, GraduationCap, Clock } from 'lucide-react';

export default function RecruitmentPage() {
  const categoryData = {
    id: 'recruitment-staffing',
    title: 'Recruitment & Staffing Solutions',
    description: 'Find the perfect talent fast with our comprehensive recruitment and staffing services.',
    icon: Target,
    gradient: 'from-orange-500 to-red-500',
    benefits: [
      'Access to pre-vetted talent pool',
      'Faster hiring process',
      'Reduced recruitment costs',
      'Flexible staffing solutions',
      '90-day replacement guarantee',
      'Industry-specific expertise'
    ]
  };

  const services = [
    {
      id: 'permanent-recruitment',
      name: 'Permanent Recruitment',
      icon: Briefcase,
      description: 'Find full-time employees who are the perfect fit for your organization.',
      features: [
        'Comprehensive candidate screening',
        'Cultural fit assessment',
        'Technical skills evaluation',
        'Background verification',
        'Interview coordination',
        '90-day replacement guarantee'
      ],
      startingPrice: 2999,
      popular: true
    },
    {
      id: 'contract-staffing',
      name: 'Contract & Temporary Staffing',
      icon: Clock,
      description: 'Flexible staffing solutions for short-term projects and seasonal needs.',
      features: [
        'Quick deployment',
        'Flexible contracts',
        'Project-based staffing',
        'Payroll management',
        'Performance monitoring',
        'Easy scaling'
      ],
      startingPrice: 1499
    },
    {
      id: 'job-support',
      name: 'Job Support & Training',
      icon: GraduationCap,
      description: 'Ongoing support and training for professionals to excel in their roles.',
      features: [
        'On-the-job training',
        'Skill development programs',
        'Mentorship programs',
        'Career counseling',
        'Resume building',
        'Interview preparation'
      ],
      startingPrice: 999
    }
  ];

  const process = [
    {
      number: 1,
      title: 'Requirement Gathering',
      description: 'Understand your hiring needs, company culture, and ideal candidate profile.',
      duration: '2-3 days',
      deliverables: [
        'Job description',
        'Candidate profile',
        'Hiring timeline',
        'Compensation benchmarks'
      ]
    },
    {
      number: 2,
      title: 'Candidate Sourcing',
      description: 'Tap into our talent network and actively source qualified candidates.',
      duration: '1 week',
      deliverables: [
        'Candidate pipeline',
        'Initial screening reports',
        'Shortlisted profiles',
        'Skill assessments'
      ]
    },
    {
      number: 3,
      title: 'Screening & Interviews',
      description: 'Conduct comprehensive screening and coordinate interviews with top candidates.',
      duration: '1-2 weeks',
      deliverables: [
        'Screened candidates',
        'Interview schedules',
        'Assessment reports',
        'Reference checks'
      ]
    },
    {
      number: 4,
      title: 'Selection & Offer',
      description: 'Facilitate the selection process and manage offer negotiations.',
      duration: '3-5 days',
      deliverables: [
        'Final candidate selection',
        'Offer letter preparation',
        'Salary negotiation',
        'Acceptance confirmation'
      ]
    },
    {
      number: 5,
      title: 'Onboarding Support',
      description: 'Provide post-placement support and ensure smooth onboarding.',
      duration: '90 days',
      deliverables: [
        'Onboarding assistance',
        'Regular check-ins',
        'Performance feedback',
        'Replacement if needed'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: 1999,
      priceAnnual: 19990,
      savings: 3998,
      description: 'Perfect for occasional hiring needs',
      features: [
        'Up to 5 positions/year',
        'Basic candidate screening',
        'Job posting assistance',
        'Email support',
        '30-day replacement',
        'Standard turnaround'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: 3999,
      priceAnnual: 39990,
      savings: 7998,
      description: 'Comprehensive recruitment solution',
      features: [
        'Up to 20 positions/year',
        'Advanced screening',
        'Dedicated recruiter',
        'Priority support',
        '90-day replacement',
        'Fast-track hiring',
        'Background verification',
        'Skills assessment'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 7999,
      priceAnnual: 79990,
      savings: 15998,
      description: 'Complete talent acquisition partnership',
      features: [
        'Unlimited positions',
        'Full-cycle recruitment',
        'Dedicated team',
        '24/7 support',
        '180-day replacement',
        'Executive search',
        'Employer branding',
        'Talent pool management',
        'Custom workflows',
        'Onboarding support'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'How quickly can you fill my open positions?',
      answer: 'Our typical placement time ranges from 2-4 weeks for most positions. For specialized or senior roles, it may take 4-6 weeks. We maintain a pre-vetted talent pool which significantly speeds up the recruitment process.'
    },
    {
      question: 'What is your replacement guarantee policy?',
      answer: 'We offer a 90-day replacement guarantee on all permanent placements. If a candidate leaves or doesn\'t work out within 90 days, we\'ll find a replacement at no additional cost. Enterprise clients receive an extended 180-day guarantee.'
    },
    {
      question: 'Do you handle background verification and reference checks?',
      answer: 'Yes, all our Professional and Enterprise packages include comprehensive background verification, reference checks, and skills assessment. We verify employment history, educational credentials, and conduct professional reference calls.'
    },
    {
      question: 'Can you help with contract and temporary staffing?',
      answer: 'Absolutely! We provide flexible contract staffing solutions for short-term projects, seasonal needs, or interim positions. Our contractors are available for durations ranging from a few weeks to several months.'
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We have expertise across multiple industries including technology, finance, healthcare, manufacturing, retail, and professional services. Our recruiters are specialized by industry to ensure they understand your specific needs.'
    },
    {
      question: 'How do you ensure candidate quality and cultural fit?',
      answer: 'We use a multi-stage screening process including technical assessments, behavioral interviews, and cultural fit evaluations. We take time to understand your company culture and values to ensure candidates align with your organization.'
    }
  ];

  const comparisonFeatures = [
    'Number of positions per year',
    'Candidate screening depth',
    'Dedicated recruiter support',
    'Replacement guarantee period',
    'Background verification',
    'Skills & technical assessment',
    'Cultural fit evaluation',
    'Interview coordination',
    'Employer branding support',
    'Onboarding assistance'
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
