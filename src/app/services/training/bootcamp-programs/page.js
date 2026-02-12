'use client';

import { motion } from 'framer-motion';
import { 
  Zap, 
  Code, 
  Rocket, 
  Users, 
  Target, 
  TrendingUp,
  Clock,
  CheckCircle2,
  Award,
  Briefcase,
  Star,
  Calendar
} from 'lucide-react';

import ServiceDetailHero from '@/components/sections/services/ServiceDetailHero';
import ServiceFeatures from '@/components/sections/services/ServiceFeatures';
import ProcessTimeline from '@/components/sections/services/ProcessTimeline';
import PricingSection from '@/components/sections/services/PricingSection';
import FAQAccordion from '@/components/sections/services/FAQAccordion';
import TestimonialsPreview from '@/components/sections/TestimonialsPreview';
import LeadCaptureForm from '@/components/sections/services/LeadCaptureForm';
import FinalCTA from '@/components/sections/services/FinalCTA';

export default function BootcampProgramsPage() {
  const serviceData = {
    id: 'bootcamp-programs',
    name: 'Intensive Bootcamp Programs',
    category: 'Training',
    categoryUrl: '/services/training',
    icon: Zap,
    gradient: 'from-blue-600 to-cyan-600',
    tagline: 'Launch your tech career in 12-16 weeks',
    description: 'Intensive, immersive bootcamp programs that transform beginners into job-ready professionals. Fast-track your career with our proven curriculum, expert mentorship, and guaranteed job placement support.',
    benefits: [
      'Full-time immersive learning',
      'Real-world project portfolio',
      'Career services & job placement',
      'Industry expert instructors',
      'Small cohorts (max 20 students)',
      'Money-back job guarantee'
    ],
    stats: [
      { label: 'Graduates', value: '2,500+' },
      { label: 'Job Placement', value: '91%' },
      { label: 'Avg Salary Increase', value: '$28K' },
      { label: 'Completion Rate', value: '87%' }
    ]
  };

  const features = [
    {
      icon: Code,
      title: 'Full-Stack Web Development',
      description: 'Become a full-stack developer ready to build modern web applications.',
      details: [
        'HTML, CSS, JavaScript mastery',
        'React & Next.js',
        'Node.js & Express',
        'Database design (SQL & NoSQL)',
        'RESTful APIs & GraphQL',
        'Deployment & DevOps basics'
      ]
    },
    {
      icon: Target,
      title: 'Data Science & AI',
      description: 'Master data analysis, machine learning, and artificial intelligence.',
      details: [
        'Python for data science',
        'Statistics & probability',
        'Machine learning algorithms',
        'Deep learning & neural networks',
        'Data visualization',
        'Real-world ML projects'
      ]
    },
    {
      icon: Briefcase,
      title: 'UX/UI Design',
      description: 'Learn to design beautiful, user-centered digital experiences.',
      details: [
        'User research methods',
        'Wireframing & prototyping',
        'Visual design principles',
        'Figma & design tools',
        'Interaction design',
        'Design systems'
      ]
    },
    {
      icon: Rocket,
      title: 'Digital Marketing',
      description: 'Become a digital marketing expert across all major channels.',
      details: [
        'SEO & content marketing',
        'Google Ads & Facebook Ads',
        'Social media marketing',
        'Email marketing',
        'Analytics & reporting',
        'Marketing automation'
      ]
    },
    {
      icon: Users,
      title: 'Product Management',
      description: 'Learn to lead product development from idea to launch.',
      details: [
        'Product strategy',
        'User research & validation',
        'Roadmap planning',
        'Agile & Scrum',
        'Data-driven decision making',
        'Stakeholder management'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Cybersecurity',
      description: 'Protect organizations from cyber threats with hands-on security training.',
      details: [
        'Network security',
        'Ethical hacking',
        'Security tools & frameworks',
        'Incident response',
        'Compliance & regulations',
        'Security best practices'
      ]
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Application & Prep',
      description: 'Apply to the bootcamp and complete pre-work to prepare for the intensive program.',
      duration: '2-4 weeks',
      deliverables: [
        'Application review',
        'Technical assessment',
        'Admissions interview',
        'Pre-work assignments',
        'Onboarding materials'
      ]
    },
    {
      number: '02',
      title: 'Foundations (Weeks 1-4)',
      description: 'Build a solid foundation with core concepts and fundamental skills.',
      duration: 'Weeks 1-4',
      deliverables: [
        'Daily live lectures',
        'Hands-on coding exercises',
        'Mini projects',
        'Peer programming',
        'Weekly assessments'
      ]
    },
    {
      number: '03',
      title: 'Application (Weeks 5-8)',
      description: 'Apply your skills to real-world projects and start building your portfolio.',
      duration: 'Weeks 5-8',
      deliverables: [
        'Full-stack projects',
        'Team collaboration',
        'Code reviews',
        'Portfolio pieces',
        'Technical presentations'
      ]
    },
    {
      number: '04',
      title: 'Specialization (Weeks 9-12)',
      description: 'Dive deep into advanced topics and specialize in your area of interest.',
      duration: 'Weeks 9-12',
      deliverables: [
        'Advanced concepts',
        'Capstone project',
        'Industry guest speakers',
        'Mock interviews',
        'Career workshops'
      ]
    },
    {
      number: '05',
      title: 'Career Launch',
      description: 'Launch your career with dedicated job search support and placement assistance.',
      duration: 'Weeks 13-24',
      deliverables: [
        'Resume & LinkedIn optimization',
        'Interview coaching',
        'Portfolio review',
        'Job referrals',
        'Salary negotiation',
        'Ongoing support'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Part-Time',
      price: '8,999',
      period: '24-week program',
      description: 'Evening and weekend classes for working professionals.',
      features: [
        '24 weeks (6 months)',
        'Evening classes (6-9pm)',
        'Weekend sessions',
        '15-20 hours per week',
        'Live online instruction',
        'Project-based curriculum',
        'Career services',
        'Lifetime material access',
        'Payment plans available'
      ],
      cta: 'Apply Now',
      popular: false
    },
    {
      name: 'Full-Time',
      price: '14,999',
      period: '12-week program',
      description: 'Immersive full-time program to launch your career fast.',
      features: [
        '12 weeks (3 months)',
        'Monday-Friday (9am-5pm)',
        '40+ hours per week',
        'In-person or online',
        'Small cohorts (max 20)',
        'Daily live instruction',
        'Mentorship included',
        '5+ portfolio projects',
        'Job guarantee',
        'Career coaching',
        'Interview prep',
        'Financing available'
      ],
      cta: 'Apply Now',
      popular: true
    },
    {
      name: 'Corporate',
      price: 'Custom',
      period: 'team training',
      description: 'Custom bootcamps for companies upskilling or reskilling teams.',
      features: [
        'Custom duration & schedule',
        'Private cohorts',
        'On-site delivery available',
        'Tailored curriculum',
        'Your tech stack',
        'Dedicated instructors',
        'Progress reporting',
        'Team projects',
        'Flexible pricing',
        'Volume discounts',
        'Ongoing support',
        'Multiple bootcamps',
        'Skills assessment'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'Do I need prior experience to join a bootcamp?',
      answer: 'Most bootcamps are designed for beginners, though basic computer literacy is expected. You\'ll complete pre-work (typically 20-40 hours) before starting to ensure you have foundational knowledge. Some specialized bootcamps (like Data Science or Cybersecurity) may require basic programming knowledge. During the application process, we assess your readiness and recommend the right bootcamp or suggest preparatory courses if needed. Our pre-bootcamp prep courses help complete beginners get ready for the intensive program.'
    },
    {
      question: 'What\'s the job guarantee, and how does it work?',
      answer: 'Our Full-Time bootcamp includes a job guarantee: if you don\'t land a qualifying job within 6 months of graduating (while actively job searching and following our career services guidance), you\'ll receive a full refund. Qualifying jobs must be in the field you trained for with a minimum salary threshold. The guarantee requires completing all coursework, building a portfolio, attending career workshops, and actively applying to jobs with our support. 91% of our full-time graduates land jobs without needing the guarantee—it\'s there for peace of mind.'
    },
    {
      question: 'How is a bootcamp different from online courses or self-study?',
      answer: 'Bootcamps provide structure, accountability, and community that self-study lacks. You learn with a cohort, building relationships and collaborative skills. Daily live instruction means you can ask questions in real-time. Bootcamps use proven curricula developed by industry experts. Projects are reviewed by instructors, not just auto-graders. Career services include resume reviews, mock interviews, and job referrals—self-study doesn\'t prepare you for the job search. Bootcamps also teach industry best practices and real-world workflows, not just syntax. Completion rates are much higher because of the supportive environment.'
    },
    {
      question: 'Can I work while attending the bootcamp?',
      answer: 'Part-time bootcamps are designed for working professionals—classes are evenings and weekends (15-20 hours/week). You\'ll need to commit additional time for homework and projects. Full-time bootcamps are 40+ hours per week and designed to be your full-time focus. Some students work part-time during full-time bootcamps, but it\'s challenging and not recommended. Consider your financial situation, support system, and ability to focus. The more time you dedicate, the better you\'ll learn and the stronger your portfolio will be.'
    },
    {
      question: 'What kind of salary can I expect after graduating?',
      answer: 'Salaries vary by role, location, and experience, but our graduates average $65K-$85K for their first job. Web developers typically start at $60K-$75K, Data Scientists at $70K-$90K, UX Designers at $60K-$80K, and Digital Marketers at $50K-$65K. Career changers see an average salary increase of $28K. Location matters—major tech hubs pay 20-40% more. Your portfolio quality, interview skills, and job search strategy significantly impact offers. We provide salary negotiation coaching to help you maximize your first offer. Many graduates see substantial salary growth within 2-3 years as they gain experience.'
    },
    {
      question: 'What if I can\'t afford the tuition?',
      answer: 'We offer multiple financing options to make bootcamps accessible: (1) Income Share Agreements (ISAs)—pay nothing upfront, then pay a percentage of your salary only after landing a job above a minimum threshold; (2) Installment plans—split payments over 12-24 months; (3) Scholarships—merit-based and need-based scholarships for underrepresented groups; (4) Partner financing—low-interest loans through our lending partners; (5) Employer sponsorship—many companies pay for employee training. We also offer a few full scholarships per cohort for exceptional candidates with financial need. Financing approval doesn\'t require perfect credit.'
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
        title="Ready to Transform Your Career?"
        description="Join our next bootcamp cohort and launch your tech career in 12 weeks"
        primaryCTA="Apply to Bootcamp"
        secondaryCTA="Download Syllabus"
        gradient={serviceData.gradient}
      />
    </div>
  );
}
