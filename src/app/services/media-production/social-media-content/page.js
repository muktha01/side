'use client';

import { motion } from 'framer-motion';
import { 
  Share2, 
  Heart, 
  TrendingUp, 
  Camera, 
  Video, 
  Zap,
  Clock,
  CheckCircle2,
  Users,
  Target,
  Award,
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

export default function SocialMediaContentPage() {
  const serviceData = {
    id: 'social-media-content',
    name: 'Social Media Content Creation',
    category: 'Media Production',
    categoryUrl: '/services/media-production',
    icon: Share2,
    gradient: 'from-violet-600 to-purple-600',
    tagline: 'Scroll-stopping content that drives engagement',
    description: 'Professional social media content creation services that help your brand stand out. From Instagram reels to TikTok videos, we create platform-optimized content that gets results.',
    benefits: [
      'Platform-optimized content',
      'Trending format expertise',
      'High-volume production',
      'Fast turnaround (24-48 hours)',
      'Consistent posting schedule',
      'Performance analytics included'
    ],
    stats: [
      { label: 'Content Pieces', value: '10K+' },
      { label: 'Avg Engagement', value: '+320%' },
      { label: 'Client Retention', value: '94%' },
      { label: 'Daily Delivery', value: '24 Hrs' }
    ]
  };

  const features = [
    {
      icon: Video,
      title: 'Short-Form Video',
      description: 'Engaging short videos for Instagram Reels, TikTok, and YouTube Shorts.',
      details: [
        'Trending format videos',
        'Hook-focused content',
        'Captions & subtitles',
        'Trending audio integration',
        'Platform optimization',
        'Story sequences'
      ]
    },
    {
      icon: Camera,
      title: 'Photo Content',
      description: 'Eye-catching photos and carousels for Instagram and Facebook.',
      details: [
        'Feed-optimized photos',
        'Carousel posts',
        'Product photography',
        'Lifestyle content',
        'Behind-the-scenes',
        'UGC-style content'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Content Strategy',
      description: 'Data-driven content strategy aligned with your brand goals.',
      details: [
        'Content calendar planning',
        'Platform strategy',
        'Trending topic research',
        'Competitor analysis',
        'Hashtag strategy',
        'Posting schedule'
      ]
    },
    {
      icon: Zap,
      title: 'Viral Content',
      description: 'Trend-jacking and viral-worthy content that gets shares.',
      details: [
        'Trending format adaptation',
        'Challenge participation',
        'Meme marketing',
        'Interactive content',
        'Share-worthy posts',
        'Engagement bait'
      ]
    },
    {
      icon: Target,
      title: 'Brand Storytelling',
      description: 'Authentic stories that build community and loyalty.',
      details: [
        'Brand narrative content',
        'Customer stories',
        'Day-in-the-life videos',
        'Educational content',
        'Value-driven posts',
        'Community engagement'
      ]
    },
    {
      icon: Users,
      title: 'Influencer-Style Content',
      description: 'Authentic, relatable content that doesn\'t feel like advertising.',
      details: [
        'UGC-style videos',
        'Authentic testimonials',
        'Product reviews',
        'Unboxing videos',
        'Tutorial content',
        'Haul videos'
      ]
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Brand Discovery & Strategy',
      description: 'We learn your brand voice, audience, and goals to create a customized content strategy.',
      duration: '3-5 days',
      deliverables: [
        'Brand audit',
        'Competitor analysis',
        'Content strategy doc',
        '30-day content calendar',
        'Platform recommendations'
      ]
    },
    {
      number: '02',
      title: 'Content Planning',
      description: 'We plan your content themes, topics, and formats for consistent posting.',
      duration: 'Ongoing',
      deliverables: [
        'Weekly content themes',
        'Content briefs',
        'Shooting schedules',
        'Trending topics list',
        'Hashtag sets'
      ]
    },
    {
      number: '03',
      title: 'Content Production',
      description: 'Professional creation of photos, videos, and graphics optimized for each platform.',
      duration: 'Daily/Weekly',
      deliverables: [
        'Platform-specific videos',
        'Feed photos',
        'Story content',
        'Carousel designs',
        'Reels & TikToks',
        'Thumbnail graphics'
      ]
    },
    {
      number: '04',
      title: 'Editing & Optimization',
      description: 'Expert editing with captions, effects, and platform-specific optimizations.',
      duration: '24-48 hours',
      deliverables: [
        'Edited videos',
        'Captions & subtitles',
        'Trending effects',
        'Sound integration',
        'Format optimization',
        'Preview versions'
      ]
    },
    {
      number: '05',
      title: 'Delivery & Performance Tracking',
      description: 'Scheduled delivery with performance analytics and ongoing optimization.',
      duration: 'Ongoing',
      deliverables: [
        'Content files',
        'Captions & hashtags',
        'Posting schedule',
        'Performance reports',
        'Optimization insights',
        'Monthly strategy reviews'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '999',
      period: 'per month',
      description: 'Perfect for small businesses starting their social media presence.',
      features: [
        '12 posts per month (3/week)',
        '1 platform focus',
        'Mix of photos & videos',
        'Caption writing',
        'Hashtag research',
        'Basic editing',
        'Stock music library',
        'Monthly content calendar',
        'Email support'
      ],
      cta: 'Start Creating',
      popular: false
    },
    {
      name: 'Growth',
      price: '2,499',
      period: 'per month',
      description: 'Comprehensive content for growing brands across multiple platforms.',
      features: [
        '30 posts per month (daily+)',
        '3 platforms (IG, TikTok, FB)',
        'Reels & short videos',
        'Stories (15/month)',
        'Professional editing',
        'Trending audio & effects',
        'Captions & CTAs',
        'Hashtag strategy',
        'Weekly content batches',
        'Performance reports',
        'Priority support',
        'Quarterly strategy calls'
      ],
      cta: 'Scale Your Content',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'tailored solution',
      description: 'Full-service content creation for brands serious about social media dominance.',
      features: [
        'Unlimited posts',
        'All major platforms',
        'Daily content delivery',
        'Live coverage',
        'Influencer collaborations',
        'UGC campaigns',
        'Dedicated content team',
        'Same-day turnaround',
        'A/B testing',
        'Advanced analytics',
        '24/7 support',
        'Weekly strategy calls',
        'Brand ambassador program'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'What platforms do you create content for?',
      answer: 'We create optimized content for all major platforms including Instagram (Feed, Reels, Stories), TikTok, Facebook, YouTube Shorts, LinkedIn, Twitter/X, and Pinterest. Each platform has unique requirements and best practices, and we ensure your content is tailored for maximum performance on each channel.'
    },
    {
      question: 'How quickly can you produce content?',
      answer: 'Our standard turnaround is 24-48 hours for edited content. For Growth and Enterprise clients, we can provide same-day editing for urgent posts. We work in weekly or bi-weekly content batches to maintain consistent quality and allow for strategic planning. Rush orders and breaking news content can be accommodated with our priority production service.'
    },
    {
      question: 'Do you stay on top of trending formats and sounds?',
      answer: 'Absolutely! Our team monitors social media trends daily, tracking viral formats, trending sounds, and emerging content styles. We have a dedicated trend research process and can quickly adapt popular formats to fit your brand. We also provide weekly trend reports and recommendations for timely content opportunities.'
    },
    {
      question: 'Can you help with content strategy and planning?',
      answer: 'Yes! All our packages include content strategy and planning. We create monthly content calendars aligned with your business goals, industry trends, and seasonal events. We research your audience, analyze competitors, and develop a posting strategy that maximizes reach and engagement. Enterprise clients receive comprehensive quarterly strategies with detailed performance forecasting.'
    },
    {
      question: 'Do I need to provide the footage, or can you shoot it?',
      answer: 'We offer both options! You can provide raw footage, product samples, or brand assets, and we\'ll handle editing and optimization. Alternatively, we can arrange professional shoots (photos or videos) as part of your package or as add-on services. Many clients use a hybrid approach: we shoot hero content monthly and create daily content from their own footage.'
    },
    {
      question: 'How do you ensure content matches our brand voice?',
      answer: 'We start every partnership with a comprehensive brand discovery process where we learn your brand voice, values, visual style, and audience. We create detailed brand guidelines and content templates that ensure consistency. You\'ll review and approve content before it\'s finalized, and we iterate based on your feedback. After the first month, we typically achieve 95%+ approval rates as we internalize your brand identity.'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <ServiceDetailHero service={serviceData} />
      <ServiceFeatures features={features} gradient={serviceData.gradient} />
      <ProcessTimeline steps={process} gradient={serviceData.gradient} />
      <PricingSection plans={pricingPlans} gradient={serviceData.gradient} />
      <FAQAccordion faqs={faqs} />
      <TestimonialsPreview category="media-production" />
      <LeadCaptureForm service={serviceData.name} gradient={serviceData.gradient} />
      <FinalCTA 
        title="Ready to Dominate Social Media?"
        description="Let's create scroll-stopping content that grows your audience"
        primaryCTA="Start Your Content Strategy"
        secondaryCTA="View Sample Content"
        gradient={serviceData.gradient}
      />
    </div>
  );
}
