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
    title: 'Digital Marketing & Performance Growth',
    description: 'Complete digital marketing solutions focused on ROI — Social Media Handling, Creative Production, Brand Awareness, Lead Generation and Paid Ads.',
    icon: Megaphone,
    gradient: 'from-purple-500 to-blue-500',
    benefits: [
      '16 creative posters per month',
      '4 promotional videos / reels',
      '2 brand awareness campaigns',
      'Lead generation setup & management',
      'Facebook & Instagram ads setup',
      'Ad optimisation & performance monitoring'
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
      startingPrice: 10000,
      popular: true
    },
    {
      id: 'social-media-marketing',
      name: 'Social Media Marketing',
      icon: Smartphone,
      description: 'Build engaged communities and drive conversions — Facebook, Instagram, and more.',
      features: [
        '16 creative posters / month',
        '4 promotional videos / reels',
        'Social media page handling',
        'Community engagement',
        'Audience targeting & growth',
        'Monthly analytics report'
      ],
      startingPrice: 10000
    },
    {
      id: 'ppc-advertising',
      name: 'Paid Ads (FB / IG / Google)',
      icon: Target,
      description: 'ROI-driven paid ad campaigns on Facebook, Instagram and Google — leads from day one.',
      features: [
        'Campaign strategy & setup',
        'Ad creative design',
        'Audience targeting',
        'Bid management & optimisation',
        'A/B testing',
        'Conversion tracking & reporting'
      ],
      startingPrice: 10000
    },
    {
      id: 'content-marketing',
      name: 'Content & Brand Campaigns',
      icon: PenTool,
      description: '2 brand awareness campaigns per month with creative posters and video content.',
      features: [
        '2 brand campaigns / month',
        'Creative poster design',
        'Promotional reels & videos',
        'Caption & hashtag strategy',
        'Scheduling & publishing',
        'Engagement monitoring'
      ],
      startingPrice: 10000
    },
    {
      id: 'lead-generation',
      name: 'Lead Generation',
      icon: Mail,
      description: 'Structured lead generation setup to bring real enquiries and potential buyers to your business.',
      features: [
        'Lead gen form setup',
        'Landing page integration',
        'WhatsApp / call CTA setup',
        'Audience retargeting',
        'Lead tracking & reporting',
        'Monthly optimisation'
      ],
      startingPrice: 10000
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
      name: 'Starter Package',
      price: 10000,
      priceAnnual: null,
      savings: null,
      description: 'Essential digital marketing to build your online presence and generate leads',
      features: [
        '8 Creative Posters / month',
        '2 Promotional Videos / Reels',
        '1 Brand Awareness Campaign',
        'Social Media Page Handling',
        'Facebook & Instagram Ads Setup',
        'Performance Reporting'
      ],
      cta: 'Get Started',
      popular: false,
      note: 'Ad budget is separate and depends on client requirements'
    },
    {
      name: 'Growth Package',
      price: 16000,
      priceAnnual: null,
      savings: null,
      description: 'Complete digital marketing solution with creative production, social handling and lead generation',
      features: [
        '16 Creative Posters / month',
        '4 Promotional Videos / Reels',
        '2 Brand Awareness Campaigns',
        'Lead Generation Setup',
        'Social Media Page Handling',
        'Facebook & Instagram Ads Setup',
        'Ad Optimisation & Monitoring',
        'Performance Reporting'
      ],
      cta: 'Get Started',
      popular: true,
      note: 'Ad budget is separate and depends on client requirements'
    },
    {
      name: 'Website + Marketing Bundle',
      price: null,
      priceAnnual: null,
      savings: null,
      description: 'Get 1 month digital marketing FREE with every website development project',
      features: [
        'Social Media Page Handling',
        'Basic SEO Setup',
        '3 Months Server Maintenance FREE',
        'Lifetime Technical Support FREE',
        'Included with all website projects',
        'No extra charge'
      ],
      cta: 'Claim with Website',
      popular: false,
      isFree: true
    },
    {
      name: 'App + Full Ecosystem Bundle',
      price: null,
      priceAnnual: null,
      savings: null,
      description: 'App clients get a FREE website + 1 month marketing + 3 months server maintenance',
      features: [
        '1 Business Website FREE',
        'Complete Admin Dashboard',
        '1 Month Digital Marketing FREE',
        'Social Media Handling',
        'Basic SEO Setup',
        '3 Months Server Maintenance FREE',
        'Lifetime Technical Support FREE'
      ],
      cta: 'Claim with App',
      popular: false,
      isFree: true
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
