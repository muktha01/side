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
import { Settings, MessageCircle, Bot, Brain } from 'lucide-react';

export default function AIToolsPage() {
  const categoryData = {
    id: 'ai-automation',
    title: 'AI Tools & Automation',
    description: 'Transform your business with intelligent automation and cutting-edge AI solutions that save time and reduce costs.',
    icon: Bot,
    gradient: 'from-cyan-500 to-blue-500',
    benefits: [
      'Custom AI model development',
      'Process automation solutions',
      'Machine learning integration',
      '50% reduction in manual tasks',
      'Predictive analytics & insights',
      'Ongoing AI model optimization'
    ]
  };

  const services = [
    {
      id: 'custom-ai-solutions',
      name: 'Custom AI Solutions',
      icon: Brain,
      description: 'Tailored AI models and solutions built specifically for your business needs.',
      features: [
        'Custom machine learning models',
        'Natural language processing',
        'Computer vision applications',
        'Predictive analytics',
        'AI model training & deployment',
        'Continuous model improvement'
      ],
      startingPrice: 2999,
      popular: true
    },
    {
      id: 'business-automation',
      name: 'Business Process Automation',
      icon: Settings,
      description: 'Automate repetitive tasks and workflows to increase efficiency and reduce errors.',
      features: [
        'Workflow automation design',
        'RPA implementation',
        'Data entry automation',
        'Document processing',
        'Email & communication automation',
        'Integration with existing systems'
      ],
      startingPrice: 1999
    },
    {
      id: 'chatbot-development',
      name: 'AI Chatbots & Virtual Assistants',
      icon: MessageCircle,
      description: 'Intelligent chatbots that provide 24/7 customer support and engagement.',
      features: [
        'Custom chatbot development',
        'Multi-language support',
        'Natural conversation flow',
        'CRM integration',
        'Analytics & reporting',
        'Continuous learning capabilities'
      ],
      startingPrice: 1499
    }
  ];

  const process = [
    {
      number: 1,
      title: 'Discovery & Assessment',
      description: 'Analyze your business processes to identify automation opportunities and AI use cases.',
      duration: '1-2 weeks',
      deliverables: [
        'Process analysis report',
        'AI opportunity assessment',
        'ROI projections',
        'Technical feasibility study'
      ]
    },
    {
      number: 2,
      title: 'Solution Design',
      description: 'Design custom AI solutions and automation workflows tailored to your needs.',
      duration: '2-3 weeks',
      deliverables: [
        'Solution architecture',
        'Workflow diagrams',
        'Data requirements',
        'Integration plan'
      ]
    },
    {
      number: 3,
      title: 'Development & Training',
      description: 'Build and train AI models, develop automation scripts, and integrate with your systems.',
      duration: '4-8 weeks',
      deliverables: [
        'Custom AI models',
        'Automation scripts',
        'Integration modules',
        'Testing results'
      ]
    },
    {
      number: 4,
      title: 'Deployment & Training',
      description: 'Deploy solutions to production and train your team on usage and maintenance.',
      duration: '1-2 weeks',
      deliverables: [
        'Production deployment',
        'User documentation',
        'Team training sessions',
        'Support resources'
      ]
    },
    {
      number: 5,
      title: 'Optimization & Support',
      description: 'Monitor performance, optimize models, and provide ongoing support and improvements.',
      duration: 'Ongoing',
      deliverables: [
        'Performance reports',
        'Model updates',
        'Feature enhancements',
        '24/7 technical support'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 2499,
      priceAnnual: 24990,
      savings: 4998,
      description: 'Perfect for small businesses starting with AI',
      features: [
        '1 AI solution or automation',
        'Basic model training',
        'Standard integration',
        'Monthly performance reports',
        'Email support',
        '3 months support'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: 4999,
      priceAnnual: 49990,
      savings: 9998,
      description: 'Comprehensive AI solutions for growing businesses',
      features: [
        '3 AI solutions or automations',
        'Advanced model training',
        'Full system integration',
        'Real-time monitoring',
        'Priority support',
        '12 months support',
        'Quarterly optimization',
        'Dedicated AI consultant'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 9999,
      priceAnnual: 99990,
      savings: 19998,
      description: 'Enterprise-scale AI transformation',
      features: [
        'Unlimited AI solutions',
        'Custom model development',
        'Enterprise integrations',
        'Real-time analytics',
        '24/7 support',
        'Lifetime support',
        'Monthly optimization',
        'Dedicated AI team',
        'On-premise deployment option',
        'Custom SLA'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'What types of AI solutions do you develop?',
      answer: 'We develop custom machine learning models, natural language processing systems, computer vision applications, predictive analytics tools, chatbots, recommendation engines, and process automation solutions tailored to your business needs.'
    },
    {
      question: 'How long does it take to implement an AI solution?',
      answer: 'Basic AI implementations take 6-8 weeks, while complex custom solutions may require 3-6 months. Timeline depends on data availability, model complexity, and integration requirements. We provide a detailed timeline during initial consultation.'
    },
    {
      question: 'Do we need to have our own data for AI models?',
      answer: 'Ideally yes, but not always required. We can work with your existing data, help you collect relevant data, or use transfer learning with pre-trained models. We\'ll assess your data during discovery and recommend the best approach.'
    },
    {
      question: 'How do you ensure AI model accuracy?',
      answer: 'We use rigorous testing methodologies, cross-validation, A/B testing, and continuous monitoring. Models are trained on diverse datasets and regularly retrained with new data to maintain and improve accuracy over time.'
    },
    {
      question: 'Can AI solutions integrate with our existing systems?',
      answer: 'Yes, we specialize in seamless integrations. Our AI solutions connect with CRMs, ERPs, databases, and custom applications via APIs. We ensure minimal disruption to your existing workflows.'
    },
    {
      question: 'What ongoing support do you provide for AI systems?',
      answer: 'We provide model monitoring, performance optimization, retraining with new data, bug fixes, security updates, and technical support. Our Enterprise plan includes dedicated AI engineers for ongoing enhancements.'
    }
  ];

  const comparisonFeatures = [
    { name: 'Custom AI Models', values: ['1 model', '3 models', 'Unlimited'] },
    { name: 'Data Processing', values: ['Basic', 'Advanced', 'Enterprise'] },
    { name: 'Model Training', values: ['Initial only', 'Quarterly', 'Monthly'] },
    { name: 'Integration Support', values: ['2 systems', '5 systems', 'Unlimited'] },
    { name: 'API Access', values: [true, true, true] },
    { name: 'Real-time Processing', values: [false, true, true] },
    { name: 'Model Monitoring', values: ['Basic', 'Advanced', 'Real-time'] },
    { name: 'Support Hours', values: ['Business hours', 'Extended', '24/7'] },
    { name: 'Dedicated AI Team', values: [false, false, true] },
    { name: 'On-premise Deployment', values: [false, false, true] }
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
        categoryName="AI Tools & Automation"
      />
      <TestimonialsPreview />
      <LeadCaptureForm formType="quote" />
      <FinalCTA />
    </main>
  );
}
