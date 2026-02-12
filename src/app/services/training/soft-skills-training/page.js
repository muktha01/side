'use client';

import { motion } from 'framer-motion';
import { 
  Users, 
  MessageCircle, 
  Heart, 
  Briefcase, 
  TrendingUp, 
  Smile,
  Clock,
  CheckCircle2,
  Target,
  Award,
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

export default function SoftSkillsTrainingPage() {
  const serviceData = {
    id: 'soft-skills-training',
    name: 'Soft Skills Training',
    category: 'Training',
    categoryUrl: '/services/training',
    icon: Users,
    gradient: 'from-blue-600 to-cyan-600',
    tagline: 'Develop the human skills that drive career success',
    description: 'Transform your professional effectiveness with training in communication, leadership, emotional intelligence, and other essential soft skills. Perfect for individuals and teams looking to excel in the modern workplace.',
    benefits: [
      'Interactive, practice-based learning',
      'Real-world scenario training',
      'Personal coaching & feedback',
      'Immediate workplace application',
      'Measurable behavior change',
      'Ongoing reinforcement tools'
    ],
    stats: [
      { label: 'Professionals Trained', value: '12K+' },
      { label: 'Skill Improvement', value: '+75%' },
      { label: 'Career Advancement', value: '68%' },
      { label: 'Client Satisfaction', value: '96%' }
    ]
  };

  const features = [
    {
      icon: MessageCircle,
      title: 'Communication Excellence',
      description: 'Master effective communication in all professional contexts.',
      details: [
        'Active listening skills',
        'Clear & concise messaging',
        'Presentation skills',
        'Written communication',
        'Difficult conversations',
        'Cross-cultural communication'
      ]
    },
    {
      icon: Target,
      title: 'Leadership & Influence',
      description: 'Develop leadership presence and the ability to inspire others.',
      details: [
        'Leadership styles',
        'Motivating teams',
        'Delegation skills',
        'Giving feedback',
        'Conflict resolution',
        'Building influence'
      ]
    },
    {
      icon: Heart,
      title: 'Emotional Intelligence',
      description: 'Increase self-awareness and manage emotions effectively.',
      details: [
        'Self-awareness',
        'Emotional regulation',
        'Empathy development',
        'Social skills',
        'Relationship management',
        'Stress resilience'
      ]
    },
    {
      icon: Users,
      title: 'Teamwork & Collaboration',
      description: 'Excel in team environments and collaborative projects.',
      details: [
        'Team dynamics',
        'Collaboration tools',
        'Building trust',
        'Shared accountability',
        'Virtual team skills',
        'Inclusive practices'
      ]
    },
    {
      icon: Briefcase,
      title: 'Professional Presence',
      description: 'Build credibility and executive presence in the workplace.',
      details: [
        'Professional image',
        'Executive presence',
        'Networking skills',
        'Personal branding',
        'Business etiquette',
        'Confidence building'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Productivity & Time Management',
      description: 'Optimize your effectiveness and manage priorities like a pro.',
      details: [
        'Priority management',
        'Goal setting',
        'Productivity techniques',
        'Overcoming procrastination',
        'Work-life balance',
        'Energy management'
      ]
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Skills Assessment',
      description: 'We evaluate your current soft skills through assessments and 360-degree feedback.',
      duration: '1 week',
      deliverables: [
        '360-degree feedback',
        'Skills assessment',
        'Personality profile',
        'Development plan',
        'Goal setting'
      ]
    },
    {
      number: '02',
      title: 'Interactive Workshops',
      description: 'Engaging workshops with role-plays, simulations, and group activities.',
      duration: '4-6 weeks',
      deliverables: [
        'Workshop sessions',
        'Role-play exercises',
        'Group discussions',
        'Real-world scenarios',
        'Practice assignments'
      ]
    },
    {
      number: '03',
      title: 'Personal Coaching',
      description: 'One-on-one coaching to address individual challenges and goals.',
      duration: '2-3 months',
      deliverables: [
        'Individual coaching sessions',
        'Personalized feedback',
        'Action planning',
        'Accountability check-ins',
        'Progress tracking'
      ]
    },
    {
      number: '04',
      title: 'Application & Practice',
      description: 'Real-world application with feedback and continuous improvement.',
      duration: 'Ongoing',
      deliverables: [
        'On-the-job application',
        'Peer feedback',
        'Manager observations',
        'Practice scenarios',
        'Reflection exercises'
      ]
    },
    {
      number: '05',
      title: 'Reinforcement & Growth',
      description: 'Ongoing support and resources to maintain and advance your skills.',
      duration: '6-12 months',
      deliverables: [
        'Monthly refreshers',
        'Digital learning tools',
        'Community support',
        'Advanced workshops',
        'Progress milestones',
        'Career guidance'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Individual',
      price: '799',
      period: 'per month',
      description: 'Perfect for professionals focused on personal skill development.',
      features: [
        'Choose 2 skill areas',
        'Monthly group workshops',
        'Digital learning resources',
        'Skills assessment',
        'Community forum access',
        'Mobile app access',
        'Practice exercises',
        'Certificate of completion',
        'Cancel anytime'
      ],
      cta: 'Start Learning',
      popular: false
    },
    {
      name: 'Professional',
      price: '2,499',
      period: 'per quarter',
      description: 'Comprehensive soft skills development with coaching support.',
      features: [
        'All skill areas included',
        'Weekly workshops',
        'Monthly 1-on-1 coaching',
        'Personalized development plan',
        '360-degree feedback',
        'Practice simulations',
        'Peer learning groups',
        'Progress tracking',
        'Manager reports',
        'Priority support',
        'Networking events',
        'Flexible payment'
      ],
      cta: 'Enroll Today',
      popular: true
    },
    {
      name: 'Corporate',
      price: 'Custom',
      period: 'team program',
      description: 'Tailored soft skills training for teams and organizations.',
      features: [
        'Unlimited team members',
        'Custom curriculum',
        'On-site or virtual',
        'Team workshops',
        'Individual coaching',
        'Leadership cohorts',
        'Team assessments',
        'Change management support',
        'Executive briefings',
        'ROI measurement',
        'Ongoing support',
        'Multi-year programs',
        'Volume discounts'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'Why are soft skills important for career success?',
      answer: 'Research shows that 85% of career success comes from soft skills, while only 15% comes from technical skills. Soft skills like communication, emotional intelligence, and collaboration are what differentiate high performers from average performers. They\'re essential for leadership roles, client relationships, and team effectiveness. As automation increases, uniquely human skills become even more valuable. Companies increasingly prioritize soft skills in hiring and promotion decisions.'
    },
    {
      question: 'How is soft skills training different from reading a book or watching videos?',
      answer: 'Soft skills require practice, not just knowledge. Our training uses experiential learning—role-plays, simulations, real-world scenarios—where you practice skills and receive immediate feedback. You learn by doing, not just listening. We provide a safe environment to make mistakes and improve. Coaching sessions address your specific challenges. Peer learning allows you to see different approaches. The combination of knowledge, practice, feedback, and coaching creates lasting behavior change that reading alone cannot achieve.'
    },
    {
      question: 'How long does it take to develop soft skills?',
      answer: 'Soft skills develop over time with consistent practice. You\'ll notice improvements within 4-6 weeks of focused training. Significant behavior change typically takes 2-3 months of practice and reinforcement. Mastery develops over 6-12 months of application. Unlike technical skills that can be learned quickly, soft skills require forming new habits and rewiring behavioral patterns. Our programs include reinforcement activities and coaching to ensure skills stick. Most participants report noticeable improvements in professional effectiveness within the first month.'
    },
    {
      question: 'Can introverts develop strong communication and leadership skills?',
      answer: 'Absolutely! Soft skills training is not about changing your personality—it\'s about developing skills that work with your natural style. Introverts often excel at deep listening, thoughtful communication, and one-on-one relationships. We teach strategies that leverage your strengths while expanding your comfort zone. Many successful leaders are introverts who\'ve developed skills in public speaking, networking, and team leadership while staying authentic to who they are. Our approach is personalized to your personality type and preferences.'
    },
    {
      question: 'How do you measure improvement in soft skills?',
      answer: 'We use multiple measurement methods: (1) 360-degree feedback from colleagues, managers, and direct reports at the start and after 3-6 months; (2) Self-assessments and reflection exercises; (3) Behavioral observations during role-plays and simulations; (4) Manager reports on workplace behavior; (5) Performance metrics like presentation quality, team collaboration scores, or client feedback. You receive a personal dashboard tracking progress across skill areas. Corporate clients get aggregate reports showing team-wide improvement and ROI.'
    },
    {
      question: 'Is this training only for leaders, or can anyone benefit?',
      answer: 'Everyone benefits from soft skills training, regardless of role or career stage. Individual contributors need communication, collaboration, and time management skills. Mid-level professionals need leadership, influence, and emotional intelligence as they take on more responsibility. Executives need advanced communication, strategic thinking, and executive presence. New graduates need to transition from academic to professional communication. Even technical experts need to communicate complex ideas, work in teams, and advance their careers. We tailor content to your role and career goals.'
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
        title="Ready to Unlock Your Full Potential?"
        description="Develop the soft skills that will set you apart in your career"
        primaryCTA="Start Your Journey"
        secondaryCTA="Take Skills Assessment"
        gradient={serviceData.gradient}
      />
    </div>
  );
}
