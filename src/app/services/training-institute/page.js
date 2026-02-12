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
import { GraduationCap, Monitor, Building2, Target, FileText } from 'lucide-react';

export default function TrainingPage() {
  const categoryData = {
    id: 'training-education',
    title: 'Training & Education Programs',
    description: 'Learn, grow, and succeed with industry-leading training programs and certifications.',
    icon: GraduationCap,
    gradient: 'from-indigo-500 to-purple-500',
    benefits: [
      'Industry-expert instructors',
      'Hands-on practical training',
      'Internationally recognized certifications',
      '100% job assistance',
      'Flexible learning schedules',
      'Lifetime course access'
    ]
  };

  const services = [
    {
      id: 'technical-training',
      name: 'Technical Skills Training',
      icon: Monitor,
      description: 'Master in-demand technical skills with comprehensive training programs.',
      features: [
        'Programming languages',
        'Web & mobile development',
        'Cloud computing',
        'DevOps practices',
        'Database management',
        'Live projects'
      ],
      startingPrice: 999,
      popular: true
    },
    {
      id: 'professional-certifications',
      name: 'Professional Certifications',
      icon: FileText,
      description: 'Get certified in industry-recognized programs to boost your career.',
      features: [
        'AWS certifications',
        'Google Cloud certifications',
        'Microsoft certifications',
        'Project management (PMP)',
        'Agile & Scrum',
        'Exam preparation'
      ],
      startingPrice: 1499
    },
    {
      id: 'corporate-training',
      name: 'Corporate Training Programs',
      icon: Building2,
      description: 'Customized training solutions for teams and organizations.',
      features: [
        'Custom curriculum',
        'On-site/online training',
        'Flexible scheduling',
        'Team assessments',
        'Progress tracking',
        'Certification support'
      ],
      startingPrice: 4999
    },
    {
      id: 'placement-assistance',
      name: 'Placement & Career Support',
      icon: Target,
      description: 'Comprehensive career support to help you land your dream job.',
      features: [
        'Resume building',
        'Interview preparation',
        'Mock interviews',
        'Job portal access',
        'Company referrals',
        'Salary negotiation coaching'
      ],
      startingPrice: 499
    }
  ];

  const process = [
    {
      number: 1,
      title: 'Course Selection & Enrollment',
      description: 'Choose the right course based on your career goals and learning objectives.',
      duration: '1 day',
      deliverables: [
        'Course selection guidance',
        'Career counseling',
        'Enrollment confirmation',
        'Course materials'
      ]
    },
    {
      number: 2,
      title: 'Learning & Practice',
      description: 'Engage in interactive sessions with hands-on projects and assignments.',
      duration: '8-12 weeks',
      deliverables: [
        'Video lectures',
        'Live sessions',
        'Practice assignments',
        'Project work'
      ]
    },
    {
      number: 3,
      title: 'Assessments & Projects',
      description: 'Complete assessments and work on real-world projects to apply your learning.',
      duration: '2-4 weeks',
      deliverables: [
        'Module assessments',
        'Capstone project',
        'Code reviews',
        'Performance feedback'
      ]
    },
    {
      number: 4,
      title: 'Certification',
      description: 'Receive your course completion certificate and prepare for industry certifications.',
      duration: '1 week',
      deliverables: [
        'Completion certificate',
        'Skill badges',
        'LinkedIn endorsement',
        'Certification exam prep'
      ]
    },
    {
      number: 5,
      title: 'Job Placement Support',
      description: 'Get personalized support to find and secure job opportunities.',
      duration: 'Ongoing',
      deliverables: [
        'Resume optimization',
        'Interview coaching',
        'Job referrals',
        'Placement support'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Individual Course',
      price: 999,
      priceAnnual: 9990,
      savings: 1998,
      description: 'Single course with certification',
      features: [
        '1 technical course',
        '8-12 weeks duration',
        'Live sessions',
        'Hands-on projects',
        'Course certificate',
        'Lifetime access',
        'Community support'
      ],
      cta: 'Enroll Now',
      popular: false
    },
    {
      name: 'Learning Path',
      price: 1999,
      priceAnnual: 19990,
      savings: 3998,
      description: 'Complete skill development track',
      features: [
        '3-5 related courses',
        '6 months access',
        'Live mentorship',
        'Real-world projects',
        'Industry certifications',
        'Job placement assistance',
        'Interview preparation',
        'Dedicated support'
      ],
      cta: 'Enroll Now',
      popular: true
    },
    {
      name: 'Corporate Package',
      price: 4999,
      priceAnnual: 49990,
      savings: 9998,
      description: 'Team training solutions',
      features: [
        'Unlimited team members',
        'Custom curriculum',
        'Dedicated trainer',
        'On-site/remote options',
        'Progress tracking',
        'Performance reports',
        'Team certifications',
        'Ongoing support',
        'LMS access',
        'Custom integrations'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'Are your courses suitable for complete beginners?',
      answer: 'Yes! We offer courses for all skill levels from absolute beginners to advanced professionals. Our instructors tailor the pace and content to match your experience level, ensuring everyone can follow along and achieve their learning goals.'
    },
    {
      question: 'What certifications will I receive upon completion?',
      answer: 'You\'ll receive our industry-recognized course completion certificate. For professional certification programs, you\'ll be prepared for exams like AWS, Azure, Google Cloud, PMP, and others. We also provide exam vouchers and preparation support for these certifications.'
    },
    {
      question: 'Do you provide job placement assistance?',
      answer: 'Yes, all our Learning Path and Corporate packages include 100% job placement assistance. This includes resume building, interview preparation, mock interviews, portfolio development, and direct referrals to our 500+ hiring partner companies.'
    },
    {
      question: 'Are classes live or pre-recorded?',
      answer: 'We offer both options! Our programs include live instructor-led sessions for real-time interaction and doubt clearing. Additionally, all sessions are recorded and available for lifetime access, so you can review content anytime at your own pace.'
    },
    {
      question: 'Can I switch between courses or learning paths?',
      answer: 'Absolutely! If you\'ve enrolled in a Learning Path and want to explore different courses, you can switch tracks with guidance from our career counselors. We want to ensure you\'re learning skills that align with your career goals.'
    },
    {
      question: 'Do you offer corporate training for teams?',
      answer: 'Yes, our Corporate Package is designed specifically for team training. We provide custom curriculum, dedicated trainers, flexible on-site or remote training options, progress tracking, and team certifications. Perfect for upskilling your entire workforce.'
    }
  ];

  const comparisonFeatures = [
    'Number of courses included',
    'Program duration & access',
    'Live instructor sessions',
    'Hands-on projects',
    'Certification type',
    'Job placement assistance',
    'Interview preparation',
    'Dedicated support level',
    'Custom curriculum option',
    'Team management features'
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
        categoryName="Training & Education"
      />
      <TestimonialsPreview />
      <LeadCaptureForm formType="quote" />
      <FinalCTA />
    </main>
  );
}
