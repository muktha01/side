'use client';

import { motion } from 'framer-motion';
import { 
  Code, 
  Laptop, 
  Database, 
  Cloud, 
  Smartphone, 
  Globe,
  Clock,
  CheckCircle2,
  Award,
  Target,
  Users,
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

export default function TechnologyTrainingPage() {
  const serviceData = {
    id: 'technology-training',
    name: 'Technology Training Programs',
    category: 'Training',
    categoryUrl: '/services/training',
    icon: Code,
    gradient: 'from-blue-600 to-cyan-600',
    tagline: 'Master in-demand tech skills with expert-led training',
    description: 'Comprehensive technology training programs designed to upskill your team or advance your career. From programming to cloud computing, we offer hands-on, practical training that delivers results.',
    benefits: [
      'Industry-expert instructors',
      'Hands-on project-based learning',
      'Flexible online & in-person options',
      'Certification preparation included',
      'Lifetime access to materials',
      'Job placement assistance'
    ],
    stats: [
      { label: 'Students Trained', value: '5,000+' },
      { label: 'Course Completion', value: '92%' },
      { label: 'Job Placement', value: '85%' },
      { label: 'Satisfaction Rate', value: '96%' }
    ]
  };

  const features = [
    {
      icon: Code,
      title: 'Programming & Development',
      description: 'Learn popular programming languages and frameworks from scratch or advance your skills.',
      details: [
        'Python, JavaScript, Java, C++',
        'Web development (React, Node.js)',
        'Mobile app development',
        'API development',
        'Version control (Git)',
        'Best practices & design patterns'
      ]
    },
    {
      icon: Database,
      title: 'Data Science & Analytics',
      description: 'Master data analysis, machine learning, and AI technologies.',
      details: [
        'SQL & database management',
        'Python for data science',
        'Machine learning algorithms',
        'Data visualization',
        'Big data technologies',
        'Statistical analysis'
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Become proficient in AWS, Azure, and Google Cloud platforms.',
      details: [
        'AWS Solutions Architect',
        'Azure Administrator',
        'Google Cloud Engineer',
        'Cloud security',
        'DevOps practices',
        'Infrastructure as Code'
      ]
    },
    {
      icon: Globe,
      title: 'Cybersecurity',
      description: 'Learn to protect systems, networks, and data from cyber threats.',
      details: [
        'Ethical hacking',
        'Network security',
        'Penetration testing',
        'Security compliance',
        'Incident response',
        'Risk management'
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Build native and cross-platform mobile applications.',
      details: [
        'iOS development (Swift)',
        'Android development (Kotlin)',
        'React Native',
        'Flutter',
        'Mobile UI/UX',
        'App store deployment'
      ]
    },
    {
      icon: Zap,
      title: 'DevOps & Automation',
      description: 'Master continuous integration, delivery, and automation tools.',
      details: [
        'CI/CD pipelines',
        'Docker & Kubernetes',
        'Jenkins, GitLab CI',
        'Infrastructure automation',
        'Monitoring & logging',
        'Agile practices'
      ]
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Skills Assessment',
      description: 'We evaluate your current skill level and learning goals to recommend the right program.',
      duration: '1 day',
      deliverables: [
        'Skills assessment test',
        'Learning goals discussion',
        'Personalized curriculum',
        'Study plan',
        'Resource recommendations'
      ]
    },
    {
      number: '02',
      title: 'Foundation Phase',
      description: 'Build strong fundamentals with instructor-led sessions and guided practice.',
      duration: 'Weeks 1-4',
      deliverables: [
        'Core concept lectures',
        'Hands-on exercises',
        'Weekly assignments',
        'Code reviews',
        'Progress assessments'
      ]
    },
    {
      number: '03',
      title: 'Practical Application',
      description: 'Apply your skills through real-world projects and case studies.',
      duration: 'Weeks 5-8',
      deliverables: [
        'Industry projects',
        'Team collaborations',
        'Code repositories',
        'Technical documentation',
        'Peer reviews'
      ]
    },
    {
      number: '04',
      title: 'Advanced Topics',
      description: 'Deep dive into advanced concepts and specialized technologies.',
      duration: 'Weeks 9-10',
      deliverables: [
        'Advanced modules',
        'Specialized workshops',
        'Expert guest sessions',
        'Capstone project',
        'Best practices training'
      ]
    },
    {
      number: '05',
      title: 'Certification & Placement',
      description: 'Prepare for certifications and get assistance with job placement.',
      duration: 'Weeks 11-12',
      deliverables: [
        'Certification prep',
        'Mock exams',
        'Portfolio development',
        'Resume review',
        'Interview preparation',
        'Job referrals'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Self-Paced',
      price: '499',
      period: 'per course',
      description: 'Learn at your own pace with pre-recorded content and community support.',
      features: [
        'Access to course materials',
        'Video lectures (20-30 hours)',
        'Downloadable resources',
        'Practice exercises',
        'Community forum access',
        'Certificate of completion',
        'Lifetime access',
        '30-day money-back guarantee'
      ],
      cta: 'Enroll Now',
      popular: false
    },
    {
      name: 'Instructor-Led',
      price: '1,999',
      period: 'per program',
      description: 'Live classes with expert instructors and personalized mentorship.',
      features: [
        '12-week intensive program',
        'Live online classes (3x/week)',
        'Personal instructor access',
        'Weekly assignments',
        'Code reviews',
        'Real-world projects',
        'Industry certification prep',
        'Job placement assistance',
        'Lifetime material access',
        'Alumni network',
        'Flexible payment plans'
      ],
      cta: 'Start Learning',
      popular: true
    },
    {
      name: 'Corporate',
      price: 'Custom',
      period: 'team training',
      description: 'Customized training programs for organizations looking to upskill their teams.',
      features: [
        'Custom curriculum design',
        'On-site or remote delivery',
        'Flexible scheduling',
        'Dedicated instructor',
        'Team progress tracking',
        'Custom projects',
        'Advanced certifications',
        'Ongoing support',
        'Team assessments',
        'ROI reporting',
        'Volume discounts',
        'Multi-course packages',
        'Annual training roadmap'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'Do I need prior programming experience?',
      answer: 'It depends on the course. We offer programs for all levels from complete beginners to advanced developers. Our beginner courses assume no prior knowledge and start with fundamentals. During enrollment, we conduct a skills assessment to ensure you\'re placed in the right level. If you\'re unsure, our advisors can help you choose the best starting point.'
    },
    {
      question: 'What\'s the difference between self-paced and instructor-led programs?',
      answer: 'Self-paced courses provide pre-recorded content you can complete at your own speed, ideal for busy professionals. Instructor-led programs offer live classes with real-time interaction, personalized feedback, and scheduled sessions for structure and accountability. Instructor-led programs include code reviews, weekly check-ins, and direct access to instructors for questions. Most students find instructor-led programs more effective for complex topics.'
    },
    {
      question: 'Are certifications included, and which ones?',
      answer: 'Our Instructor-Led and Corporate programs include preparation for industry-recognized certifications relevant to your course (e.g., AWS Certified Solutions Architect, Microsoft Azure Administrator, CompTIA Security+, Oracle Java Certification). We provide study materials, practice exams, and exam strategies. Certification exam fees are separate, but we negotiate group discounts for corporate clients. Our pass rate is 87%, well above industry average.'
    },
    {
      question: 'What kind of projects will I work on?',
      answer: 'You\'ll work on real-world projects similar to what you\'d encounter in professional settings. Examples include building full-stack web applications, creating machine learning models, deploying cloud infrastructure, developing mobile apps, and implementing security systems. All projects go into your portfolio. Corporate programs feature custom projects based on your organization\'s actual needs, providing immediate business value.'
    },
    {
      question: 'Do you provide job placement assistance?',
      answer: 'Yes! Our Instructor-Led program includes comprehensive job placement support: resume reviews, LinkedIn profile optimization, interview preparation, mock interviews, and connections to our hiring partners. We work with 200+ companies actively seeking trained talent. 85% of our graduates find employment within 3 months. We also offer ongoing career support even after you\'ve landed a job.'
    },
    {
      question: 'Can I switch between courses or get refunds?',
      answer: 'Self-paced courses include a 30-day money-back guarantee—no questions asked. For Instructor-Led programs, you can switch to a different course within the first 2 weeks if the initial choice isn\'t the right fit. After that, switching is subject to seat availability. We also offer course credits that can be applied to future programs. Corporate programs have custom terms negotiated during contracting.'
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
        title="Ready to Launch Your Tech Career?"
        description="Join thousands of successful graduates who transformed their careers"
        primaryCTA="Enroll Today"
        secondaryCTA="Download Course Catalog"
        gradient={serviceData.gradient}
      />
    </div>
  );
}
