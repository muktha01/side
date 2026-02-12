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
import { Megaphone, Search, Smartphone, Target, Mail, PenTool } from 'lucide-react';

export default function DigitalMarketingPage() {
  const categoryData = {
    id: 'digital-marketing',
    title: 'Digital Marketing Services',
    description: 'Amplify your reach and maximize ROI with data-driven marketing strategies that deliver measurable results.',
    icon: Megaphone,
    gradient: 'from-purple-500 to-blue-500',
    benefits: [
      'Data-driven campaign strategies',
      'Multi-channel marketing approach',
      'Proven ROI optimization',
      'Expert team with 10+ years experience',
      'Real-time analytics and reporting',
      '24/7 campaign monitoring'
    ]
  };

  const services = [
    {
      id: 'seo-optimization',
      name: 'SEO Optimization',
      icon: Search,
      description: 'Improve your search rankings and drive organic traffic with expert SEO strategies.',
      features: [
        'Keyword research & strategy',
        'On-page & off-page optimization',
        'Technical SEO audits',
        'Link building campaigns',
        'Local SEO optimization',
        'Monthly performance reports'
      ],
      startingPrice: 799,
      popular: true
    },
    {
      id: 'social-media-marketing',
      name: 'Social Media Marketing',
      icon: Smartphone,
      description: 'Build engaged communities and drive conversions across all major social platforms.',
      features: [
        'Content strategy & planning',
        'Multi-platform management',
        'Community engagement',
        'Paid advertising campaigns',
        'Influencer partnerships',
        'Analytics & insights'
      ],
      startingPrice: 699
    },
    {
      id: 'ppc-advertising',
      name: 'PPC Advertising',
      icon: Target,
      description: 'Maximize ROI with targeted pay-per-click campaigns on Google, Facebook, and more.',
      features: [
        'Campaign strategy & setup',
        'Ad copywriting & design',
        'Audience targeting',
        'Bid management',
        'A/B testing',
        'Conversion tracking'
      ],
      startingPrice: 899
    },
    {
      id: 'content-marketing',
      name: 'Content Marketing',
      icon: PenTool,
      description: 'Create compelling content that attracts, engages, and converts your target audience.',
      features: [
        'Content strategy development',
        'Blog writing & management',
        'Video content creation',
        'Email marketing campaigns',
        'Infographic design',
        'Content distribution'
      ],
      startingPrice: 599
    },
    {
      id: 'email-marketing',
      name: 'Email Marketing',
      icon: Mail,
      description: 'Nurture leads and drive sales with personalized email campaigns that convert.',
      features: [
        'Campaign strategy',
        'Email design & templates',
        'List segmentation',
        'Automation workflows',
        'A/B testing',
        'Performance analytics'
      ],
      startingPrice: 499
    }
  ];

  const process = [
    {
      number: 1,
      title: 'Discovery & Audit',
      description: 'We analyze your current marketing efforts, target audience, and competitive landscape to identify opportunities.',
      duration: '1-2 weeks',
      deliverables: [
        'Market research report',
        'Competitor analysis',
        'Audience personas',
        'SWOT analysis'
      ]
    },
    {
      number: 2,
      title: 'Strategy Development',
      description: 'Create a comprehensive marketing strategy tailored to your business goals and budget.',
      duration: '1 week',
      deliverables: [
        'Marketing strategy document',
        'Channel recommendations',
        'Budget allocation plan',
        'KPI framework'
      ]
    },
    {
      number: 3,
      title: 'Campaign Setup',
      description: 'Set up all necessary tools, accounts, and tracking systems for your campaigns.',
      duration: '1-2 weeks',
      deliverables: [
        'Campaign structures',
        'Tracking implementation',
        'Creative assets',
        'Landing pages'
      ]
    },
    {
      number: 4,
      title: 'Launch & Optimization',
      description: 'Launch campaigns and continuously optimize based on performance data.',
      duration: 'Ongoing',
      deliverables: [
        'Campaign launches',
        'Weekly optimizations',
        'A/B test results',
        'Performance reports'
      ]
    },
    {
      number: 5,
      title: 'Reporting & Scaling',
      description: 'Provide detailed analytics and scale successful campaigns for maximum ROI.',
      duration: 'Monthly',
      deliverables: [
        'Monthly performance reports',
        'ROI analysis',
        'Scaling recommendations',
        'Strategy refinements'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 1499,
      priceAnnual: 14990,
      savings: 2998,
      description: 'Perfect for small businesses starting their digital journey',
      features: [
        '2 marketing channels',
        'Basic SEO optimization',
        'Social media management',
        'Monthly reporting',
        'Email support',
        '10 hours/month'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: 2999,
      priceAnnual: 29990,
      savings: 5998,
      description: 'Comprehensive marketing for growing businesses',
      features: [
        '4 marketing channels',
        'Advanced SEO & PPC',
        'Full social media suite',
        'Content marketing',
        'Weekly reporting',
        'Priority support',
        '30 hours/month',
        'Dedicated account manager'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 5999,
      priceAnnual: 59990,
      savings: 11998,
      description: 'Full-scale marketing solutions for large organizations',
      features: [
        'All marketing channels',
        'Enterprise SEO & PPC',
        'Multi-platform campaigns',
        'Video & content production',
        'Real-time reporting',
        '24/7 support',
        'Unlimited hours',
        'Dedicated team',
        'Custom integrations',
        'Quarterly strategy reviews'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'How long does it take to see results from digital marketing?',
      answer: 'SEO typically shows results in 3-6 months, while PPC and social media ads can generate leads within days. Content marketing and social media growth build momentum over 2-3 months. We provide monthly reports to track progress.'
    },
    {
      question: 'What is your approach to ROI tracking?',
      answer: 'We use advanced analytics tools to track every dollar spent. You\'ll receive detailed reports showing leads generated, conversion rates, cost per acquisition, and overall ROI. We set clear KPIs at the start and optimize campaigns continuously.'
    },
    {
      question: 'Do you manage campaigns across all social media platforms?',
      answer: 'Yes, we manage campaigns on Facebook, Instagram, LinkedIn, Twitter, YouTube, TikTok, and Pinterest. We recommend the best platforms based on your target audience and business goals.'
    },
    {
      question: 'Can you work with our existing marketing team?',
      answer: 'Absolutely! We seamlessly integrate with your internal team, providing expertise where needed. We can handle specific channels, provide strategic guidance, or manage your entire digital presence.'
    },
    {
      question: 'What makes your content marketing different?',
      answer: 'Our content is data-driven and SEO-optimized. We research your audience, competitors, and trending topics to create content that ranks well and engages readers. Every piece is designed to move prospects through your sales funnel.'
    },
    {
      question: 'Do you provide ad creatives and copywriting?',
      answer: 'Yes, our team includes designers and copywriters who create high-converting ad creatives, landing pages, and marketing copy. All creative assets are included in our packages.'
    }
  ];

  const comparisonFeatures = [
    { name: 'Monthly Ad Spend Management', values: ['Up to ₹5L', 'Up to ₹20L', 'Unlimited'] },
    { name: 'Social Media Platforms', values: ['2 platforms', '4 platforms', 'All platforms'] },
    { name: 'Content Creation', values: ['4 posts/month', '12 posts/month', '20 posts/month'] },
    { name: 'SEO Optimization', values: ['Basic', 'Advanced', 'Enterprise'] },
    { name: 'Email Campaigns', values: [false, '2/month', 'Unlimited'] },
    { name: 'Analytics & Reports', values: ['Monthly', 'Bi-weekly', 'Weekly'] },
    { name: 'Ad Creative Design', values: [true, true, true] },
    { name: 'Landing Page Creation', values: [false, '1 page', 'Unlimited'] },
    { name: 'A/B Testing', values: [false, true, true] },
    { name: 'Dedicated Account Manager', values: [false, false, true] }
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
        categoryName="Digital Marketing"
      />
      <TestimonialsPreview />
      <LeadCaptureForm formType="quote" />
      <FinalCTA />
    </main>
  );
}
