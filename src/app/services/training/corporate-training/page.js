'use client';

import { motion } from 'framer-motion';
import { 
  Building2, 
  Users, 
  Target, 
  TrendingUp, 
  MessageSquare, 
  Lightbulb,
  Clock,
  CheckCircle2,
  Award,
  Shield,
  BarChart,
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

export default function CorporateTrainingPage() {
  const serviceData = {
    id: 'corporate-training',
    name: 'Corporate Training Solutions',
    category: 'Training',
    categoryUrl: '/services/training',
    icon: Building2,
    gradient: 'from-blue-600 to-cyan-600',
    tagline: 'Transform your workforce with customized training programs',
    description: 'Tailored corporate training solutions that boost employee performance, enhance skills, and drive business growth. From leadership development to technical skills, we deliver results.',
    benefits: [
      'Customized curriculum for your business',
      'Flexible on-site or virtual delivery',
      'Measurable ROI tracking',
      'Expert facilitators & coaches',
      'Scalable for teams of any size',
      'Post-training support included'
    ],
    stats: [
      { label: 'Companies Trained', value: '300+' },
      { label: 'Employees Upskilled', value: '15K+' },
      { label: 'Client Retention', value: '93%' },
      { label: 'Satisfaction Rate', value: '97%' }
    ]
  };

  const features = [
    {
      icon: Target,
      title: 'Leadership Development',
      description: 'Build strong leaders who can drive your organization forward.',
      details: [
        'Executive coaching',
        'Management fundamentals',
        'Strategic thinking',
        'Decision making',
        'Change management',
        'Team building'
      ]
    },
    {
      icon: MessageSquare,
      title: 'Communication Skills',
      description: 'Enhance workplace communication and collaboration effectiveness.',
      details: [
        'Effective presentations',
        'Business writing',
        'Active listening',
        'Conflict resolution',
        'Negotiation skills',
        'Cross-cultural communication'
      ]
    },
    {
      icon: Users,
      title: 'Team Performance',
      description: 'Optimize team dynamics and boost collective productivity.',
      details: [
        'Team building workshops',
        'Collaboration techniques',
        'Agile methodologies',
        'Project management',
        'Problem solving',
        'Innovation workshops'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Sales & Customer Service',
      description: 'Drive revenue growth with enhanced sales and service skills.',
      details: [
        'Sales techniques',
        'Customer relationship management',
        'Negotiation mastery',
        'Service excellence',
        'Objection handling',
        'Account management'
      ]
    },
    {
      icon: Shield,
      title: 'Compliance & Safety',
      description: 'Ensure regulatory compliance and workplace safety standards.',
      details: [
        'Workplace safety training',
        'Harassment prevention',
        'Data privacy (GDPR, HIPAA)',
        'Ethics training',
        'Risk management',
        'Industry regulations'
      ]
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Strategy',
      description: 'Foster innovation and strategic thinking across your organization.',
      details: [
        'Design thinking',
        'Creative problem solving',
        'Strategic planning',
        'Market analysis',
        'Competitive intelligence',
        'Business model innovation'
      ]
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Needs Analysis',
      description: 'We conduct comprehensive analysis to understand your business challenges and training needs.',
      duration: '1-2 weeks',
      deliverables: [
        'Stakeholder interviews',
        'Skills gap analysis',
        'Performance assessment',
        'Training needs report',
        'ROI projections'
      ]
    },
    {
      number: '02',
      title: 'Custom Curriculum Design',
      description: 'We design a tailored training program aligned with your business objectives.',
      duration: '2-3 weeks',
      deliverables: [
        'Learning objectives',
        'Custom curriculum',
        'Training materials',
        'Assessment tools',
        'Implementation timeline'
      ]
    },
    {
      number: '03',
      title: 'Pilot Program',
      description: 'We test the training with a small group and refine based on feedback.',
      duration: '1-2 weeks',
      deliverables: [
        'Pilot training session',
        'Participant feedback',
        'Content refinements',
        'Trainer calibration',
        'Final curriculum'
      ]
    },
    {
      number: '04',
      title: 'Full Rollout',
      description: 'We deliver training to your entire team with expert facilitators.',
      duration: '4-12 weeks',
      deliverables: [
        'Training sessions',
        'Workshop materials',
        'Online resources',
        'Coaching sessions',
        'Progress tracking'
      ]
    },
    {
      number: '05',
      title: 'Measurement & Support',
      description: 'We measure impact and provide ongoing support to ensure lasting results.',
      duration: 'Ongoing',
      deliverables: [
        'Performance metrics',
        'ROI analysis',
        'Follow-up sessions',
        'Refresher training',
        'Continuous improvement',
        'Annual review'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Workshop',
      price: '2,999',
      period: 'per session',
      description: 'Single-topic workshops perfect for addressing specific skill gaps.',
      features: [
        'Half-day or full-day session',
        'Up to 25 participants',
        'Pre-designed curriculum',
        'Expert facilitator',
        'Participant materials',
        'Digital resources',
        'Certificate of completion',
        'Post-training survey',
        'Virtual or on-site delivery'
      ],
      cta: 'Book Workshop',
      popular: false
    },
    {
      name: 'Program',
      price: '15,999',
      period: 'per program',
      description: 'Multi-session training programs for comprehensive skill development.',
      features: [
        '4-8 week program',
        'Multiple training modules',
        'Up to 50 participants',
        'Custom curriculum',
        'Dedicated trainer',
        'Assessments & coaching',
        'Progress tracking',
        'Management dashboards',
        'Flexible scheduling',
        'Hybrid delivery options',
        '90-day post-training support',
        'ROI measurement'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'annual partnership',
      description: 'Comprehensive training solutions for large organizations with ongoing needs.',
      features: [
        'Unlimited participants',
        'Multiple locations',
        'Fully customized programs',
        'Dedicated account team',
        'On-demand training',
        'Train-the-trainer',
        'E-learning platform',
        'Leadership academies',
        'Certification programs',
        'Global delivery',
        'Quarterly strategy reviews',
        'Priority scheduling',
        'Multi-year discounts'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'How do you customize training for our specific industry?',
      answer: 'We start with a comprehensive needs analysis including stakeholder interviews, industry research, and performance gap assessment. Our instructional designers work with your subject matter experts to incorporate industry-specific scenarios, terminology, regulations, and challenges into the curriculum. All case studies and examples are tailored to your business context, ensuring immediate relevance and applicability.'
    },
    {
      question: 'Can training be delivered virtually, or must it be on-site?',
      answer: 'We offer flexible delivery: fully on-site, fully virtual, or hybrid. Virtual training uses interactive platforms with breakout rooms, polls, and collaborative tools to maintain engagement. Many clients prefer hybrid models—foundational content delivered virtually with hands-on workshops on-site. We can also provide self-paced e-learning combined with live sessions. The delivery method is customized based on your workforce distribution, budget, and learning objectives.'
    },
    {
      question: 'How do you measure training effectiveness and ROI?',
      answer: 'We use Kirkpatrick\'s four-level evaluation model: (1) Reaction—participant satisfaction surveys; (2) Learning—pre/post assessments; (3) Behavior—manager observations and 360-degree feedback; (4) Results—business metrics like productivity, quality, sales, or retention. We establish baseline metrics before training and track improvements 30, 60, and 90 days post-training. You receive detailed ROI reports showing cost-benefit analysis and business impact.'
    },
    {
      question: 'What if our team has varying skill levels?',
      answer: 'We address mixed skill levels through tiered learning paths, pre-training assessments, and differentiated instruction. Beginners get foundational modules while advanced learners skip to complex topics. During live sessions, we use breakout groups for level-appropriate activities. We also offer role-based training tracks (e.g., manager track vs. individual contributor track) and provide supplementary resources for those needing extra support or wanting to go deeper.'
    },
    {
      question: 'How long does it take to see results from corporate training?',
      answer: 'Timeline varies by program type. Immediate results (knowledge gain, attitude shifts) are visible right after training. Behavioral changes typically emerge within 2-4 weeks with proper reinforcement. Business impact (improved metrics) usually manifests within 2-3 months. We provide 90-day post-training support including refresher sessions and coaching to ensure knowledge transfer and sustained behavior change. Long-term programs show compounding benefits over 6-12 months.'
    },
    {
      question: 'What post-training support do you provide?',
      answer: 'All programs include 30-90 days of post-training support depending on package tier. This includes: access to online resources and materials, email/chat support for questions, manager coaching guides, reinforcement microlearning, follow-up webinars, and performance tracking dashboards. Enterprise clients receive quarterly strategy reviews, ongoing content updates, and dedicated account management. We believe training is a journey, not an event, and provide tools to ensure lasting impact.'
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
        title="Ready to Transform Your Workforce?"
        description="Let's design a training program that drives real business results"
        primaryCTA="Schedule Consultation"
        secondaryCTA="View Case Studies"
        gradient={serviceData.gradient}
      />
    </div>
  );
}
