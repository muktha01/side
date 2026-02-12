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
import { GraduationCap, Monitor, Building2, Trophy, Handshake, Rocket } from 'lucide-react';

export default function TrainingPage() {
  const categoryData = {
    id: 'training',
    title: 'Professional Training & Development',
    description: 'Transform your career with industry-leading training programs. Expert instructors, hands-on projects, and job placement support.',
    icon: GraduationCap,
    gradient: 'from-violet-500 to-purple-500',
    benefits: [
      '5000+ professionals trained successfully',
      '95% job placement rate',
      '50+ expert industry instructors',
      'Live projects & hands-on experience',
      'Industry-recognized certifications',
      'Lifetime access to course materials'
    ]
  };

  const services = [
    {
      id: 'technology-training',
      name: 'Technology Training',
      icon: Monitor,
      description: 'Master cutting-edge technologies including AI, cloud computing, full-stack development, and data science.',
      features: [
        'Full-stack web development',
        'AI & machine learning',
        'Cloud computing (AWS, Azure)',
        'Data science & analytics',
        'Mobile app development',
        'DevOps & CI/CD'
      ],
      startingPrice: 15000,
      popular: true
    },
    {
      id: 'corporate-training',
      name: 'Corporate Training',
      icon: Building2,
      description: 'Customized training programs designed for your organization\'s specific needs and goals.',
      features: [
        'Customized curriculum',
        'On-site or remote training',
        'Flexible scheduling',
        'Progress tracking & reports',
        'Dedicated training coordinator',
        'Post-training assessments'
      ],
      startingPrice: 'Custom'
    },
    {
      id: 'certification-programs',
      name: 'Certification Programs',
      icon: Trophy,
      description: 'Industry-recognized certifications from top providers including AWS, Azure, Google, and Oracle.',
      features: [
        'AWS certifications',
        'Azure certifications',
        'Google Cloud certifications',
        'PMP & Agile certifications',
        'Exam preparation support',
        'Practice tests included'
      ],
      startingPrice: 25000
    },
    {
      id: 'soft-skills-training',
      name: 'Soft Skills Development',
      icon: Handshake,
      description: 'Leadership, communication, and team management skills for career advancement.',
      features: [
        'Leadership development',
        'Communication skills',
        'Team management',
        'Presentation skills',
        'Time management',
        'Conflict resolution'
      ],
      startingPrice: 10000
    },
    {
      id: 'bootcamp-programs',
      name: 'Intensive Bootcamps',
      icon: Rocket,
      description: 'Intensive bootcamp programs designed to take you from beginner to job-ready in 12-16 weeks.',
      features: [
        'Full-time immersive learning',
        'Job-ready in 12-16 weeks',
        'Industry mentors',
        'Portfolio projects',
        'Mock interviews',
        'Guaranteed job placement'
      ],
      startingPrice: 50000
    }
  ];

  const process = [
    {
      number: 1,
      title: 'Career Assessment',
      description: 'Free consultation to understand your goals, current skills, and create a personalized learning path.',
      duration: '1-2 days',
      deliverables: [
        'Skills assessment report',
        'Personalized learning roadmap',
        'Career guidance consultation',
        'Course recommendations'
      ]
    },
    {
      number: 2,
      title: 'Course Enrollment',
      description: 'Choose your program, complete enrollment, and get access to learning platform and materials.',
      duration: '1 day',
      deliverables: [
        'Platform access credentials',
        'Course materials & resources',
        'Welcome kit',
        'Batch schedule'
      ]
    },
    {
      number: 3,
      title: 'Learning & Practice',
      description: 'Attend live sessions, complete assignments, work on projects, and build your portfolio.',
      duration: '2-6 months',
      deliverables: [
        'Live instructor sessions',
        'Recorded video lectures',
        'Practice assignments',
        'Real-world projects',
        'Progress reports'
      ]
    },
    {
      number: 4,
      title: 'Certification & Assessment',
      description: 'Complete final projects, take assessments, and earn your certification.',
      duration: '1-2 weeks',
      deliverables: [
        'Final project completion',
        'Skills assessment',
        'Course completion certificate',
        'Industry certification prep'
      ]
    },
    {
      number: 5,
      title: 'Job Placement Support',
      description: 'Get resume building, interview preparation, and job placement assistance.',
      duration: 'Ongoing',
      deliverables: [
        'Resume & portfolio review',
        'Mock interview sessions',
        'Job referrals',
        'Career counseling',
        'Alumni network access'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Individual Training',
      price: 15000,
      priceAnnual: null,
      savings: null,
      description: 'Self-paced learning for career growth',
      features: [
        'Access to 100+ courses',
        'Live instructor sessions',
        'Recorded video lectures',
        'Practice assignments',
        'Project work',
        'Career counseling',
        'Job placement assistance',
        'Lifetime course access'
      ],
      cta: 'Enroll Now',
      popular: false
    },
    {
      name: 'Corporate Training',
      price: 'Custom',
      priceAnnual: null,
      savings: null,
      description: 'Tailored programs for organizations',
      features: [
        'Customized curriculum',
        'On-site or remote training',
        'Flexible scheduling',
        'Progress tracking & reports',
        'Dedicated training coordinator',
        'Post-training assessments',
        'Ongoing support',
        'Volume discounts',
        'Certificate of completion'
      ],
      cta: 'Get Quote',
      popular: true
    },
    {
      name: 'Certification Program',
      price: 25000,
      priceAnnual: null,
      savings: null,
      description: 'Industry-recognized certifications',
      features: [
        'Comprehensive curriculum',
        'Expert instructors',
        'Study materials included',
        'Practice exams',
        'Certification exam voucher',
        'Exam preparation support',
        'Job placement assistance',
        'Alumni network access',
        'Retake support'
      ],
      cta: 'Enroll Now',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'What types of training programs do you offer?',
      answer: 'We offer comprehensive training in technology (web development, AI, cloud computing, data science), corporate training programs, industry certifications (AWS, Azure, Google Cloud), soft skills development, and intensive bootcamps. All programs include live instruction, hands-on projects, and job placement support.'
    },
    {
      question: 'How long are the training programs?',
      answer: 'Program duration varies: Individual courses run 2-4 months, certification programs 3-6 months, intensive bootcamps 12-16 weeks, and corporate training is flexible based on your needs. All programs include lifetime access to recorded materials and resources.'
    },
    {
      question: 'Do you provide job placement assistance?',
      answer: 'Yes! We have a 95% job placement rate. Our placement support includes resume building, portfolio development, mock interviews, job referrals to our partner companies, career counseling, and lifetime access to our alumni network. We work with 200+ hiring partners across industries.'
    },
    {
      question: 'Are the certifications industry-recognized?',
      answer: 'Absolutely! We offer preparation for globally recognized certifications from AWS, Microsoft Azure, Google Cloud, Oracle, PMI, and other leading providers. Our programs include exam vouchers, practice tests, and dedicated exam preparation support to ensure you pass on your first attempt.'
    },
    {
      question: 'Can I attend classes remotely?',
      answer: 'Yes, all our programs are available in live online format with interactive sessions. We also offer hybrid options and on-site corporate training. Classes are recorded so you can review them anytime. Our learning platform provides 24/7 access to materials, assignments, and resources.'
    },
    {
      question: 'What is your teaching methodology?',
      answer: 'We follow a practical, project-based learning approach. Each program includes live instructor-led sessions, hands-on coding exercises, real-world projects, peer collaboration, mentor support, and regular assessments. We focus on building job-ready skills, not just theory.'
    }
  ];

  const comparisonFeatures = [
    { name: 'Live Sessions', values: [true, true, true] },
    { name: 'Recorded Lectures', values: [true, true, true] },
    { name: 'Hands-on Projects', values: ['3-5 projects', 'Custom', '5-8 projects'] },
    { name: 'Certification', values: ['Course completion', 'Custom', 'Industry cert'] },
    { name: 'Job Placement', values: [true, false, true] },
    { name: 'Lifetime Access', values: [true, false, true] },
    { name: 'Mentor Support', values: ['Standard', 'Dedicated', 'Premium'] },
    { name: 'Duration', values: ['2-4 months', 'Flexible', '3-6 months'] },
    { name: 'Class Size', values: ['30-40', 'Custom', '25-30'] },
    { name: 'Practice Tests', values: [true, false, true] }
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
        categoryName="Training & Development"
      />
      <TestimonialsPreview />
      <LeadCaptureForm formType="quote" />
      <FinalCTA />
    </main>
  );
}
