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
import { DollarSign, Building2, User, BarChart3 } from 'lucide-react';

export default function LoansPage() {
  const categoryData = {
    id: 'loans-financial',
    title: 'Loans & Financial Services',
    description: 'Quick approvals and trusted financial solutions to help your business grow.',
    icon: DollarSign,
    gradient: 'from-yellow-500 to-amber-500',
    benefits: [
      'Fast approval process',
      'Competitive interest rates',
      'Flexible repayment options',
      'Minimal documentation',
      'Transparent fee structure',
      'Dedicated relationship manager'
    ]
  };

  const services = [
    {
      id: 'business-loans',
      name: 'Business Loans',
      icon: Building2,
      description: 'Flexible business loans to fuel your company growth and expansion.',
      features: [
        'Up to ₹5Cr loan amount',
        'Competitive interest rates',
        'Quick approval (48-72 hours)',
        'Flexible tenure (1-5 years)',
        'Minimal documentation',
        'No hidden charges'
      ],
      startingPrice: 'Custom',
      popular: true
    },
    {
      id: 'personal-loans',
      name: 'Personal Loans',
      icon: User,
      description: 'Personal loans for your immediate financial needs with easy repayment.',
      features: [
        'Up to ₹1Cr loan amount',
        'Instant approval',
        'Same-day disbursal',
        'Flexible repayment',
        'Online application',
        'No collateral required'
      ],
      startingPrice: 'Custom'
    },
    {
      id: 'financial-consulting',
      name: 'Financial Consulting',
      icon: BarChart3,
      description: 'Expert financial advice and planning for individuals and businesses.',
      features: [
        'Financial planning',
        'Investment advice',
        'Tax planning',
        'Risk assessment',
        'Debt management',
        'Retirement planning'
      ],
      startingPrice: 499
    }
  ];

  const process = [
    {
      number: 1,
      title: 'Application',
      description: 'Submit your loan application online with basic information and documents.',
      duration: '15 minutes',
      deliverables: [
        'Online application form',
        'Document checklist',
        'Application acknowledgment',
        'Reference number'
      ]
    },
    {
      number: 2,
      title: 'Verification',
      description: 'Our team verifies your documents and assesses your eligibility.',
      duration: '24-48 hours',
      deliverables: [
        'Document verification',
        'Credit assessment',
        'Eligibility confirmation',
        'Loan amount approval'
      ]
    },
    {
      number: 3,
      title: 'Approval',
      description: 'Get loan approval with terms and conditions clearly stated.',
      duration: '24 hours',
      deliverables: [
        'Approval letter',
        'Loan terms document',
        'Interest rate details',
        'Repayment schedule'
      ]
    },
    {
      number: 4,
      title: 'Documentation',
      description: 'Complete the final documentation and loan agreement signing.',
      duration: '1-2 days',
      deliverables: [
        'Loan agreement',
        'Signed documents',
        'NACH/ECS mandate',
        'Insurance documents'
      ]
    },
    {
      number: 5,
      title: 'Disbursal',
      description: 'Loan amount disbursed directly to your bank account.',
      duration: 'Same day',
      deliverables: [
        'Disbursal confirmation',
        'Bank transfer',
        'Loan account details',
        'Welcome kit'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal Loan',
      price: 'Custom',
      priceAnnual: 'Custom',
      description: 'Quick personal loans for immediate needs',
      features: [
        'Loan up to ₹1Cr',
        'Interest from 10% p.a.',
        'Tenure: 1-5 years',
        'Minimal documentation',
        'Quick approval',
        'Flexible EMI options'
      ],
      cta: 'Apply Now',
      popular: false
    },
    {
      name: 'Business Loan',
      price: 'Custom',
      priceAnnual: 'Custom',
      description: 'Fuel your business growth',
      features: [
        'Loan up to ₹5Cr',
        'Interest from 12% p.a.',
        'Tenure: 1-7 years',
        'No collateral for under ₹50L',
        'Working capital support',
        'Overdraft facility',
        'Fast processing',
        'Dedicated RM'
      ],
      cta: 'Apply Now',
      popular: true
    },
    {
      name: 'Financial Consulting',
      price: 499,
      priceAnnual: 4990,
      savings: 998,
      description: 'Expert financial advice and planning',
      features: [
        'Personalized consultation',
        'Investment planning',
        'Tax optimization',
        'Debt management',
        'Retirement planning',
        'Risk assessment',
        'Ongoing support',
        'Monthly reviews'
      ],
      cta: 'Get Started',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'What is the minimum credit score required for a business loan?',
      answer: 'For business loans, we typically require a credit score of 650 or higher. However, we evaluate applications holistically, considering your business revenue, cash flow, and time in business. Start-ups with strong business plans may qualify with lower scores.'
    },
    {
      question: 'How fast can I get loan approval and disbursement?',
      answer: 'Our streamlined process ensures approval within 48-72 hours for most business loans. Personal loans can be approved within 24 hours. Once approved, funds are typically disbursed within 2-3 business days directly to your account.'
    },
    {
      question: 'Are there any hidden fees or prepayment penalties?',
      answer: 'We maintain complete transparency with no hidden charges. All fees including processing fees, administrative charges, and interest rates are clearly disclosed upfront. Most of our loan products have no prepayment penalties, allowing you to pay off early without extra costs.'
    },
    {
      question: 'What collateral is required for business loans?',
      answer: 'For business loans under ₹50,00,000, no collateral is required. For larger amounts, we may require business assets, real estate, or personal guarantees. The specific collateral requirements depend on the loan amount and your business profile.'
    },
    {
      question: 'Can I get a loan if my business is less than 2 years old?',
      answer: 'Yes, we offer specialized loan products for start-ups and young businesses. While established businesses may get better rates, we evaluate start-ups based on business plan, revenue projections, founder experience, and market opportunity.'
    },
    {
      question: 'What documents do I need to apply for a loan?',
      answer: 'Basic requirements include business registration documents, tax returns (last 2 years), bank statements (6 months), financial statements, and ID proof. Our team will guide you through the specific documentation based on your loan type and amount.'
    }
  ];

  const comparisonFeatures = [
    'Maximum loan amount',
    'Interest rate range',
    'Loan tenure options',
    'Approval timeline',
    'Documentation requirements',
    'Collateral requirements',
    'Prepayment flexibility',
    'Dedicated relationship manager',
    'Financial advisory support',
    'Additional services'
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
        categoryName="Loans & Financial Services"
      />
      <TestimonialsPreview />
      <LeadCaptureForm formType="quote" />
      <FinalCTA />
    </main>
  );
}
