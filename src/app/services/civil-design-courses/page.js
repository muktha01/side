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
import { Construction, Ruler, HardHat, GraduationCap, Building } from 'lucide-react';

export default function RealEstatePage() {
  const categoryData = {
    id: 'real-estate',
    title: 'Real Estate & Construction Services',
    description: 'From planning to execution - complete solutions for your construction and real estate projects.',
    icon: Construction,
    gradient: 'from-slate-500 to-zinc-500',
    benefits: [
      'End-to-end project management',
      'Expert architectural design',
      'Quality construction standards',
      'Licensed contractors',
      'Transparent pricing',
      'Timely project delivery'
    ]
  };

  const services = [
    {
      id: 'architectural-design',
      name: 'Architectural Design & Planning',
      icon: Ruler,
      description: 'Professional architectural design services for residential and commercial projects.',
      features: [
        '2D & 3D design',
        'Floor plan creation',
        'Elevation design',
        'Interior planning',
        'Permit assistance',
        'Unlimited revisions'
      ],
      startingPrice: 2499,
      popular: true
    },
    {
      id: 'construction-management',
      name: 'Construction & Project Management',
      icon: HardHat,
      description: 'Complete construction services with experienced contractors and project managers.',
      features: [
        'Site management',
        'Quality control',
        'Material procurement',
        'Labor management',
        'Progress tracking',
        'Budget management'
      ],
      startingPrice: 'Custom'
    },
    {
      id: 'civil-training',
      name: 'Civil Engineering Training',
      icon: GraduationCap,
      description: 'Professional training programs for civil engineers and design professionals.',
      features: [
        'AutoCAD training',
        'Revit & BIM',
        'Structural design',
        'Site surveying',
        'Project management',
        'Certification programs'
      ],
      startingPrice: 999
    },
    {
      id: 'real-estate-consulting',
      name: 'Real Estate Consulting',
      icon: Building,
      description: 'Expert guidance for property investment and real estate development.',
      features: [
        'Market analysis',
        'Investment advice',
        'Property valuation',
        'Legal assistance',
        'Documentation support',
        'ROI projections'
      ],
      startingPrice: 1499
    }
  ];

  const process = [
    {
      number: 1,
      title: 'Consultation & Site Visit',
      description: 'Initial consultation to understand requirements and site visit for assessment.',
      duration: '1 week',
      deliverables: [
        'Requirement analysis',
        'Site assessment report',
        'Feasibility study',
        'Preliminary budget'
      ]
    },
    {
      number: 2,
      title: 'Design & Planning',
      description: 'Create detailed architectural designs and obtain necessary approvals.',
      duration: '2-4 weeks',
      deliverables: [
        'Architectural drawings',
        '3D visualizations',
        'Structural plans',
        'Permit applications'
      ]
    },
    {
      number: 3,
      title: 'Approval & Contracting',
      description: 'Finalize designs, get approvals, and sign construction contracts.',
      duration: '2-3 weeks',
      deliverables: [
        'Approved plans',
        'Signed contracts',
        'Work schedule',
        'Material specifications'
      ]
    },
    {
      number: 4,
      title: 'Construction & Supervision',
      description: 'Execute construction with regular quality checks and progress monitoring.',
      duration: '6-12 months',
      deliverables: [
        'Construction execution',
        'Quality inspections',
        'Progress reports',
        'Change orders'
      ]
    },
    {
      number: 5,
      title: 'Handover & Warranty',
      description: 'Final inspection, project handover, and warranty documentation.',
      duration: '1-2 weeks',
      deliverables: [
        'Final inspection',
        'Completion certificate',
        'As-built drawings',
        'Warranty documents'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Design Package',
      price: 2499,
      priceAnnual: 24990,
      description: 'Complete architectural design services',
      features: [
        'Site analysis',
        '2D floor plans',
        '3D visualizations',
        'Elevation designs',
        'Interior layouts',
        '3 revision rounds',
        'Permit assistance'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Design + Build',
      price: 'Custom',
      priceAnnual: 'Custom',
      description: 'End-to-end construction solution',
      features: [
        'Complete design services',
        'Construction management',
        'Quality materials',
        'Licensed contractors',
        'Project supervision',
        'Progress tracking',
        '12-month warranty',
        'Post-construction support'
      ],
      cta: 'Get Quote',
      popular: true
    },
    {
      name: 'Training Program',
      price: 999,
      priceAnnual: 9990,
      savings: 1998,
      description: 'Professional civil engineering courses',
      features: [
        'AutoCAD training',
        'Revit & BIM',
        'Structural design',
        'Live projects',
        'Certification',
        'Job assistance',
        'Lifetime access',
        'Industry mentorship'
      ],
      cta: 'Enroll Now',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'Do you provide both design and construction services?',
      answer: 'Yes, we offer comprehensive end-to-end solutions. You can choose our design-only package for architectural plans and visualizations, or opt for our complete Design + Build package which includes construction management, contractor coordination, and project execution.'
    },
    {
      question: 'How long does it take to complete an architectural design?',
      answer: 'Typical design timelines are 2-4 weeks for residential projects and 4-8 weeks for commercial projects. This includes initial consultations, conceptual designs, detailed drawings, and revisions. Complex projects may require additional time.'
    },
    {
      question: 'What software and tools do you use for design?',
      answer: 'We use industry-standard tools including AutoCAD for 2D drawings, Revit for BIM modeling, 3ds Max and SketchUp for 3D visualizations, and Lumion for realistic renderings. All deliverables are provided in commonly used file formats.'
    },
    {
      question: 'Do you help with building permits and approvals?',
      answer: 'Absolutely! Our design packages include permit assistance. We prepare all necessary documentation, drawings, and reports required for municipal approvals. We can also liaise with local authorities on your behalf to streamline the approval process.'
    },
    {
      question: 'What is included in the civil design training program?',
      answer: 'Our training program covers AutoCAD 2D/3D, Revit Architecture & Structure, BIM fundamentals, structural design basics, quantity estimation, and project management. Students work on live projects and receive industry-recognized certification upon completion.'
    },
    {
      question: 'Do you provide warranty on construction work?',
      answer: 'Yes, all our construction projects come with a comprehensive 12-month warranty covering structural work, finishes, and installations. We also offer post-construction support for any adjustments or concerns that arise after project completion.'
    }
  ];

  const comparisonFeatures = [
    'Design deliverables',
    'Number of revisions',
    '3D visualization quality',
    'Construction management',
    'Project timeline',
    'Contractor quality',
    'Permit assistance',
    'Post-completion warranty',
    'Training & certification',
    'Job placement support'
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
        categoryName="Real Estate & Construction"
      />
      <TestimonialsPreview />
      <LeadCaptureForm formType="quote" />
      <FinalCTA />
    </main>
  );
}
