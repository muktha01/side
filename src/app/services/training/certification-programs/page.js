'use client';

import { motion } from 'framer-motion';
import { 
  Award, 
  BookOpen, 
  Trophy, 
  CheckCircle, 
  FileCheck, 
  GraduationCap,
  Clock,
  CheckCircle2,
  Target,
  Shield,
  Star,
  Zap
} from 'lucide-react';

import ServiceDetailHero from '@/components/sections/services/ServiceDetailHero';
import ServiceFeatures from '@/components/sections/services/ServiceFeatures';
import ProcessTimeline from '@/components/sections/services/ProcessTimeline';
import PricingSection from '@/components/sections/services/PricingSection';
import FAQAccordion from '@/components/sections/services/FAQAccordion';
import TestimonialsPreview from '@/components/sections/TestimonialsPreview';
import LeadCaptureForm from '@/components/sections/services/LeadCaptureForm';
import FinalCTA from '@/components/sections/services/FinalCTA';

export default function CertificationProgramsPage() {
  const serviceData = {
    id: 'certification-programs',
    name: 'Certification Programs',
    category: 'Training',
    categoryUrl: '/services/training',
    icon: Award,
    gradient: 'from-blue-600 to-cyan-600',
    tagline: 'Earn industry-recognized certifications that advance your career',
    description: 'Comprehensive certification preparation programs for all major industry certifications. Our proven methodology and expert instructors ensure you pass on your first attempt.',
    benefits: [
      'Expert-led preparation courses',
      'Practice exams & study materials',
      'Pass guarantee or retake free',
      'Hands-on lab environments',
      'Flexible study schedules',
      'Career advancement support'
    ],
    stats: [
      { label: 'Pass Rate', value: '94%' },
      { label: 'Certified Professionals', value: '8,000+' },
      { label: 'Certifications Offered', value: '50+' },
      { label: 'Satisfaction', value: '98%' }
    ]
  };

  const features = [
    {
      icon: Shield,
      title: 'IT Certifications',
      description: 'Prepare for top IT certifications from Cisco, Microsoft, CompTIA, and more.',
      details: [
        'CompTIA A+, Network+, Security+',
        'Cisco CCNA, CCNP',
        'Microsoft Azure (AZ-900, AZ-104)',
        'AWS Solutions Architect',
        'Google Cloud Professional',
        'VMware VCP'
      ]
    },
    {
      icon: Trophy,
      title: 'Project Management',
      description: 'Master project management with PMP, CAPM, and Agile certifications.',
      details: [
        'PMP (Project Management Professional)',
        'CAPM (Certified Associate)',
        'PMI-ACP (Agile)',
        'PRINCE2',
        'Certified ScrumMaster (CSM)',
        'SAFe Agilist'
      ]
    },
    {
      icon: Target,
      title: 'Data & Analytics',
      description: 'Become certified in data science, analytics, and business intelligence.',
      details: [
        'Google Data Analytics',
        'Microsoft Power BI',
        'Tableau Desktop Specialist',
        'IBM Data Science',
        'SAS Certified Specialist',
        'Cloudera Data Analyst'
      ]
    },
    {
      icon: CheckCircle,
      title: 'Cybersecurity',
      description: 'Earn respected security certifications to advance in cybersecurity.',
      details: [
        'CISSP (Certified Information Systems)',
        'CEH (Certified Ethical Hacker)',
        'CISM (Security Manager)',
        'Security+ (CompTIA)',
        'OSCP (Offensive Security)',
        'CISA (Certified Information Systems Auditor)'
      ]
    },
    {
      icon: FileCheck,
      title: 'Quality & Process',
      description: 'Get certified in quality management and process improvement.',
      details: [
        'Six Sigma (Green Belt, Black Belt)',
        'Lean Management',
        'ITIL Foundation',
        'ISO Lead Auditor',
        'ASQ Certifications',
        'Business Process Management'
      ]
    },
    {
      icon: BookOpen,
      title: 'Professional Development',
      description: 'Advance your career with professional certifications in various fields.',
      details: [
        'HR certifications (SHRM, PHR)',
        'Accounting (CPA, CMA)',
        'Digital Marketing (Google, HubSpot)',
        'Salesforce Administrator',
        'Financial certifications (CFA)',
        'Supply chain (CSCP, CPIM)'
      ]
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Certification Selection',
      description: 'We help you choose the right certification based on your career goals and current skills.',
      duration: '1 week',
      deliverables: [
        'Career consultation',
        'Certification roadmap',
        'Study plan',
        'Resource recommendations',
        'Timeline estimate'
      ]
    },
    {
      number: '02',
      title: 'Foundation Training',
      description: 'Comprehensive coverage of all exam objectives with expert instruction.',
      duration: '4-8 weeks',
      deliverables: [
        'Video lectures',
        'Study guides',
        'Chapter quizzes',
        'Lab exercises',
        'Progress tracking'
      ]
    },
    {
      number: '03',
      title: 'Hands-On Practice',
      description: 'Real-world labs and simulations to build practical skills.',
      duration: '2-4 weeks',
      deliverables: [
        'Lab environments',
        'Scenario-based exercises',
        'Troubleshooting practice',
        'Configuration tasks',
        'Performance feedback'
      ]
    },
    {
      number: '04',
      title: 'Exam Preparation',
      description: 'Intensive exam prep with practice tests and exam strategies.',
      duration: '2-3 weeks',
      deliverables: [
        'Full-length practice exams',
        'Weak area identification',
        'Exam tips & strategies',
        'Time management practice',
        'Final review sessions'
      ]
    },
    {
      number: '05',
      title: 'Certification & Beyond',
      description: 'Exam scheduling support and career advancement guidance.',
      duration: 'Ongoing',
      deliverables: [
        'Exam voucher (if included)',
        'Scheduling assistance',
        'Post-certification support',
        'Career guidance',
        'Continuing education',
        'Alumni community access'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Self-Study',
      price: '399',
      period: 'per certification',
      description: 'Self-paced preparation with comprehensive study materials.',
      features: [
        'Complete video course',
        'Digital study guides',
        'Practice questions (500+)',
        '2 full practice exams',
        'Community forum access',
        'Mobile app access',
        '6-month course access',
        'Certificate of completion',
        'Study planner tool'
      ],
      cta: 'Start Studying',
      popular: false
    },
    {
      name: 'Instructor-Led',
      price: '1,499',
      period: 'per certification',
      description: 'Live classes with expert instructors and hands-on labs.',
      features: [
        '8-week live program',
        'Expert instructor',
        'Live Q&A sessions',
        'Hands-on lab access',
        'Practice exams (5+)',
        'Study materials included',
        'Small class sizes',
        'Exam voucher included',
        'Pass guarantee',
        '1-year material access',
        'Career coaching',
        'Alumni network'
      ],
      cta: 'Enroll Now',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'team certification',
      description: 'Certification programs for teams with dedicated support.',
      features: [
        'Unlimited team members',
        'Custom training schedule',
        'On-site or virtual',
        'Dedicated instructor',
        'All study materials',
        'Bulk exam vouchers',
        'Progress tracking dashboard',
        'Manager reporting',
        'Pass guarantee for all',
        'Lifetime material access',
        'Ongoing cert management',
        'Volume discounts',
        'Multi-cert pathways'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'What is your pass rate, and do you offer a pass guarantee?',
      answer: 'Our overall pass rate is 94%, significantly higher than the industry average. Our Instructor-Led and Enterprise programs include a pass guarantee—if you don\'t pass on your first attempt after completing all coursework and scoring 80%+ on practice exams, you can retake the course for free. The guarantee ensures you have the support needed to succeed without additional financial risk.'
    },
    {
      question: 'How long does it take to prepare for a certification?',
      answer: 'Preparation time varies by certification complexity and your existing knowledge. Entry-level certifications (CompTIA A+, CAPM) typically require 8-12 weeks. Intermediate certifications (CCNA, Azure Administrator) need 12-16 weeks. Advanced certifications (CISSP, PMP, AWS Solutions Architect Professional) require 16-20 weeks. We provide personalized timelines during your initial assessment and offer accelerated paths for experienced professionals.'
    },
    {
      question: 'Are exam vouchers included in the price?',
      answer: 'Exam vouchers are included in our Instructor-Led program and all Enterprise packages. Self-Study packages do not include vouchers, but we provide access to discounted vouchers through our partnership with certification bodies. For certifications requiring multiple exams (like CCNP), we clearly outline which vouchers are included. Some packages include retake vouchers at no additional cost.'
    },
    {
      question: 'Do you provide hands-on lab environments?',
      answer: 'Yes! Instructor-Led and Enterprise programs include access to cloud-based lab environments with real equipment and software. Labs are available 24/7 for practice. For AWS, Azure, and GCP certifications, you get sandbox accounts with credit for hands-on practice. Networking certifications include virtual labs with routers, switches, and full topology. Labs stay accessible for 6-12 months depending on your package.'
    },
    {
      question: 'Can I switch to a different certification if I change my mind?',
      answer: 'Yes, within the first 2 weeks of enrollment, you can switch to any certification of equal or lesser value at no charge. If switching to a more expensive certification, you\'ll pay the difference. After 2 weeks, switching is subject to a small administrative fee. We also offer multi-certification pathways where credits can be applied across related certifications (e.g., Azure Fundamentals → Administrator → Architect).'
    },
    {
      question: 'What happens after I get certified?',
      answer: 'Certification is just the beginning! We provide ongoing support including: career advancement guidance, resume optimization, job placement assistance, access to our certified professional network, notifications about recertification requirements, continuing education opportunities, and discounts on advanced certifications. Many certifications require periodic renewal—we send reminders and offer renewal courses. You also join our alumni community with exclusive networking events and job opportunities.'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <ServiceDetailHero service={serviceData} />
      <ServiceFeatures features={features} gradient={serviceData.gradient} />
      <ProcessTimeline steps={process} gradient={serviceData.gradient} />
      <PricingSection plans={pricingPlans} gradient={serviceData.gradient} />
      <FAQAccordion faqs={faqs} />
      <TestimonialsPreview category="training" />
      <LeadCaptureForm service={serviceData.name} gradient={serviceData.gradient} />
      <FinalCTA 
        title="Ready to Get Certified?"
        description="Join thousands who advanced their careers with our certification programs"
        primaryCTA="Choose Your Certification"
        secondaryCTA="Talk to an Advisor"
        gradient={serviceData.gradient}
      />
    </div>
  );
}
