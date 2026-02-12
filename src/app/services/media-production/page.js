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
import { Clapperboard, Video, Camera, Sparkles, Smartphone, Radio } from 'lucide-react';

export default function MediaProductionPage() {
  const categoryData = {
    id: 'media-production',
    title: 'Media Production Services',
    description: 'Create stunning visual content that captivates audiences. Professional video, photography, and multimedia production services.',
    icon: Clapperboard,
    gradient: 'from-pink-500 to-rose-500',
    benefits: [
      '1000+ projects completed successfully',
      '100M+ views generated across platforms',
      'Professional crew & equipment',
      '24-hour quick turnaround available',
      'Full-service production capabilities',
      'Multi-format content delivery'
    ]
  };

  const services = [
    {
      id: 'video-production',
      name: 'Video Production',
      icon: Video,
      description: 'Professional video production for corporate, commercial, and social media content.',
      features: [
        'Concept development & scripting',
        'Professional filming crew',
        '4K/8K video quality',
        'Multi-location shoots',
        'Drone & aerial footage',
        'Post-production editing'
      ],
      startingPrice: 75000,
      popular: true
    },
    {
      id: 'commercial-photography',
      name: 'Commercial Photography',
      icon: Camera,
      description: 'High-quality photography for products, corporate events, and advertising campaigns.',
      features: [
        'Product photography',
        'Corporate event coverage',
        'Professional retouching',
        'Studio & on-location shoots',
        'Commercial licensing',
        'Fast turnaround delivery'
      ],
      startingPrice: 15000
    },
    {
      id: 'animation-motion-graphics',
      name: 'Animation & Motion Graphics',
      icon: Sparkles,
      description: 'Engaging 2D/3D animations and motion graphics for explainer videos and advertisements.',
      features: [
        '2D/3D animation',
        'Motion graphics design',
        'Explainer videos',
        'Character animation',
        'Logo animation',
        'Visual effects (VFX)'
      ],
      startingPrice: 50000
    },
    {
      id: 'social-media-content',
      name: 'Social Media Content',
      icon: Smartphone,
      description: 'Short-form content optimized for Instagram, TikTok, YouTube Shorts, and other platforms.',
      features: [
        'Short-form video creation',
        'Platform-specific optimization',
        'Trending format adaptation',
        'Quick turnaround (24-48hrs)',
        'Content strategy consultation',
        'Engagement-focused editing'
      ],
      startingPrice: 25000
    },
    {
      id: 'live-streaming',
      name: 'Live Streaming & Events',
      icon: Radio,
      description: 'Professional live streaming services for events, webinars, conferences, and virtual experiences.',
      features: [
        'Multi-camera setup',
        'Real-time streaming',
        'Interactive features',
        'Platform integration',
        'Recording & archiving',
        'Technical support team'
      ],
      startingPrice: 40000
    }
  ];

  const process = [
    {
      number: 1,
      title: 'Concept & Planning',
      description: 'Collaborate on creative vision, develop concepts, and plan production logistics.',
      duration: '3-5 days',
      deliverables: [
        'Creative brief',
        'Storyboard/shot list',
        'Production schedule',
        'Location scouting report'
      ]
    },
    {
      number: 2,
      title: 'Pre-Production',
      description: 'Finalize scripts, secure locations, arrange equipment, and coordinate talent.',
      duration: '5-7 days',
      deliverables: [
        'Final script/storyboard',
        'Cast & crew confirmed',
        'Equipment checklist',
        'Call sheets'
      ]
    },
    {
      number: 3,
      title: 'Production Day',
      description: 'Professional filming or photography with expert crew and state-of-the-art equipment.',
      duration: '1-3 days',
      deliverables: [
        'Raw footage/photos',
        'Behind-the-scenes content',
        'On-set previews',
        'Production notes'
      ]
    },
    {
      number: 4,
      title: 'Post-Production',
      description: 'Expert editing, color grading, sound design, and visual effects to create polished content.',
      duration: '7-14 days',
      deliverables: [
        'First draft/rough cut',
        'Edited video/retouched photos',
        'Color graded footage',
        'Sound mixing'
      ]
    },
    {
      number: 5,
      title: 'Delivery & Distribution',
      description: 'Final revisions, multiple format exports, and content delivery across platforms.',
      duration: '2-3 days',
      deliverables: [
        'Final high-res files',
        'Multiple format versions',
        'Distribution-ready assets',
        'Source files & backups'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Social Media Package',
      price: 25000,
      priceAnnual: null,
      savings: null,
      description: 'Perfect for social media content creators',
      features: [
        '5 short-form videos (30-60 sec)',
        'Concept development',
        'Professional filming',
        'Basic editing & effects',
        'Platform optimization',
        'Background music included',
        '1 round of revisions',
        '5-day delivery'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Corporate Video',
      price: 75000,
      priceAnnual: null,
      savings: null,
      description: 'Professional corporate video production',
      features: [
        '1 corporate video (3-5 min)',
        'Full concept & scripting',
        'Professional crew & equipment',
        'Multiple location shoots',
        'Interviews & b-roll footage',
        'Advanced editing & color grading',
        'Music & voiceover',
        '2 rounds of revisions',
        '14-day delivery'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Premium Production',
      price: 'Custom',
      priceAnnual: null,
      savings: null,
      description: 'Full-scale media production campaigns',
      features: [
        'Multiple videos/content pieces',
        'Full creative production team',
        'Multi-day shoots',
        'Professional actors/models',
        'Animation & VFX',
        'Multiple formats & versions',
        'Unlimited revisions',
        'Dedicated project manager',
        'Priority 24/7 support'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'What types of video production do you offer?',
      answer: 'We offer comprehensive video production including corporate videos, commercials, product videos, explainer animations, social media content, event coverage, documentary-style videos, training videos, and promotional content. We handle everything from concept to final delivery.'
    },
    {
      question: 'How long does a typical video production take?',
      answer: 'Timeline varies by project complexity. Social media content takes 5-7 days, corporate videos 2-3 weeks, and larger campaigns 4-6 weeks. We offer 24-48 hour rush service for urgent social media content at an additional cost.'
    },
    {
      question: 'Do you provide the crew and equipment?',
      answer: 'Yes, we have an in-house team of directors, cinematographers, editors, and colorists, along with professional equipment including 4K/8K cameras, drones, lighting, audio gear, and post-production facilities. We handle all technical aspects of production.'
    },
    {
      question: 'Can you shoot at our location or do you have a studio?',
      answer: 'We offer both! We have a fully-equipped studio with lighting, green screen, and controlled environment. We also provide on-location shoots anywhere you need, including multiple locations in a single day. Location scouting is included in our service.'
    },
    {
      question: 'What is included in post-production?',
      answer: 'Post-production includes video editing, color grading, sound design and mixing, music licensing, motion graphics, visual effects, subtitle/caption creation, and format optimization for different platforms. We provide 2 rounds of revisions as standard.'
    },
    {
      question: 'Do you offer live streaming services for events?',
      answer: 'Yes, we provide complete live streaming solutions including multi-camera setup, real-time streaming to platforms like YouTube, Facebook, LinkedIn, custom platforms, interactive features, chat moderation, recording, and post-event video delivery.'
    }
  ];

  const comparisonFeatures = [
    { name: 'Concept Development', values: [true, true, true] },
    { name: 'Professional Crew', values: ['Basic', 'Full', 'Premium'] },
    { name: 'Filming Days', values: ['1 day', '2-3 days', 'Multiple'] },
    { name: 'Video Duration', values: ['0.5-1 min', '3-5 min', 'Unlimited'] },
    { name: 'Locations', values: ['Single', 'Multiple', 'Unlimited'] },
    { name: 'Post-Production', values: ['Basic', 'Advanced', 'Premium'] },
    { name: 'Revisions', values: ['1 round', '2 rounds', 'Unlimited'] },
    { name: 'Delivery Time', values: ['5-7 days', '14 days', 'Custom'] },
    { name: 'Format Versions', values: ['2 formats', '4 formats', 'All formats'] },
    { name: 'Source Files', values: [false, true, true] }
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
        categoryName="Media Production"
      />
      <TestimonialsPreview />
      <LeadCaptureForm formType="quote" />
      <FinalCTA />
    </main>
  );
}
