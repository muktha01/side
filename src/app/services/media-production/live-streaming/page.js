'use client';

import { motion } from 'framer-motion';
import { 
  Radio, 
  Video, 
  Users, 
  Wifi, 
  Camera, 
  Mic,
  Clock,
  CheckCircle2,
  Monitor,
  Target,
  Award,
  Globe
} from 'lucide-react';

import ServiceDetailHero from '@/components/sections/services/ServiceDetailHero';
import ServiceFeatures from '@/components/sections/services/ServiceFeatures';
import ProcessTimeline from '@/components/sections/services/ProcessTimeline';
import PricingSection from '@/components/sections/services/PricingSection';
import FAQAccordion from '@/components/sections/services/FAQAccordion';
import TestimonialsPreview from '@/components/sections/TestimonialsPreview';
import LeadCaptureForm from '@/components/sections/services/LeadCaptureForm';
import FinalCTA from '@/components/sections/services/FinalCTA';

export default function LiveStreamingPage() {
  const serviceData = {
    id: 'live-streaming',
    name: 'Live Streaming & Event Coverage',
    category: 'Media Production',
    categoryUrl: '/services/media-production',
    icon: Radio,
    gradient: 'from-violet-600 to-purple-600',
    tagline: 'Professional live streaming that connects you with the world',
    description: 'End-to-end live streaming solutions for events, webinars, and broadcasts. We handle everything from multi-camera production to audience engagement, ensuring a flawless live experience.',
    benefits: [
      'Multi-camera HD/4K streaming',
      'Professional audio & lighting',
      'Real-time graphics & overlays',
      'Interactive audience features',
      'Multi-platform simulcasting',
      '24/7 technical support'
    ],
    stats: [
      { label: 'Events Streamed', value: '600+' },
      { label: 'Total Viewers', value: '2M+' },
      { label: 'Uptime Rate', value: '99.9%' },
      { label: 'Avg Satisfaction', value: '97%' }
    ]
  };

  const features = [
    {
      icon: Video,
      title: 'Multi-Camera Production',
      description: 'Professional multi-camera setups with live switching and direction.',
      details: [
        '2-8 camera configurations',
        'Professional switchers',
        'Live camera direction',
        'Instant replay capability',
        'Picture-in-picture',
        'Dynamic shot composition'
      ]
    },
    {
      icon: Globe,
      title: 'Multi-Platform Streaming',
      description: 'Simulcast to multiple platforms simultaneously.',
      details: [
        'YouTube Live',
        'Facebook Live',
        'LinkedIn Live',
        'Twitch',
        'Custom RTMP destinations',
        'Private streaming platforms'
      ]
    },
    {
      icon: Monitor,
      title: 'Real-Time Graphics',
      description: 'Professional graphics, lower thirds, and visual enhancements.',
      details: [
        'Animated lower thirds',
        'Speaker introductions',
        'Brand overlays',
        'Live polls & Q&A graphics',
        'Countdown timers',
        'Custom transitions'
      ]
    },
    {
      icon: Users,
      title: 'Interactive Features',
      description: 'Engage your audience with interactive streaming elements.',
      details: [
        'Live Q&A management',
        'Polls & surveys',
        'Chat moderation',
        'Viewer reactions',
        'Hand-raise features',
        'Breakout sessions'
      ]
    },
    {
      icon: Mic,
      title: 'Professional Audio',
      description: 'Crystal-clear audio with multi-source mixing and backup systems.',
      details: [
        'Wireless microphones',
        'Multi-track audio mixing',
        'Acoustic treatment',
        'Audio backup systems',
        'Music integration',
        'Sound effect library'
      ]
    },
    {
      icon: Wifi,
      title: 'Reliable Connectivity',
      description: 'Enterprise-grade internet with multiple backup connections.',
      details: [
        'Bonded internet connections',
        '4G/5G backup',
        'Load balancing',
        'Redundant systems',
        'Network monitoring',
        'Failover protection'
      ]
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Pre-Event Planning',
      description: 'Comprehensive planning session to understand your event requirements and goals.',
      duration: '1-2 weeks before',
      deliverables: [
        'Event runsheet',
        'Technical requirements',
        'Equipment list',
        'Camera placement plan',
        'Graphics package',
        'Contingency plans'
      ]
    },
    {
      number: '02',
      title: 'Technical Setup',
      description: 'On-site setup and testing of all equipment, connectivity, and streaming platforms.',
      duration: '4-8 hours before',
      deliverables: [
        'Camera positioning',
        'Lighting setup',
        'Audio testing',
        'Internet connection',
        'Streaming platform config',
        'Graphics integration'
      ]
    },
    {
      number: '03',
      title: 'Rehearsal & Testing',
      description: 'Full technical rehearsal to ensure everything works perfectly.',
      duration: '1-2 hours before',
      deliverables: [
        'Sound checks',
        'Camera tests',
        'Graphics testing',
        'Connectivity verification',
        'Team briefing',
        'Backup system checks'
      ]
    },
    {
      number: '04',
      title: 'Live Production',
      description: 'Professional live streaming with real-time direction and audience engagement.',
      duration: 'Event duration',
      deliverables: [
        'Multi-camera switching',
        'Live graphics',
        'Audio mixing',
        'Engagement management',
        'Real-time monitoring',
        'Issue resolution'
      ]
    },
    {
      number: '05',
      title: 'Post-Stream Delivery',
      description: 'Edited recording and performance analytics delivered after the event.',
      duration: '2-5 days after',
      deliverables: [
        'Full event recording',
        'Highlight clips',
        'Viewer analytics',
        'Engagement metrics',
        'Performance report',
        'Archived stream files'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic Webinar',
      price: '1,299',
      period: 'per event',
      description: 'Perfect for webinars, virtual meetings, and small online events.',
      features: [
        'Up to 2 hours streaming',
        'Single camera setup',
        'Basic graphics package',
        '1 platform streaming',
        'Wireless microphone',
        'Q&A management',
        'HD 1080p quality',
        'Recording included',
        'Up to 500 viewers'
      ],
      cta: 'Book Event',
      popular: false
    },
    {
      name: 'Professional Event',
      price: '3,999',
      period: 'per event',
      description: 'Comprehensive streaming for conferences, product launches, and major events.',
      features: [
        'Up to 4 hours streaming',
        '3-4 camera setup',
        'Professional graphics',
        'Multi-platform simulcast',
        'Multiple microphones',
        'Live chat moderation',
        'Interactive features',
        'On-site technical team',
        '4K streaming quality',
        'Edited highlights',
        'Unlimited viewers',
        'Backup systems'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'tailored solution',
      description: 'Full-service production for large-scale events and ongoing streaming needs.',
      features: [
        'Full-day coverage',
        '8+ camera cinematic setup',
        'Custom graphics package',
        'All platforms',
        'Complete audio solution',
        'Dedicated production team',
        'Advanced interactivity',
        'Virtual green room',
        'Breakout sessions',
        'White-label solution',
        'Unlimited viewers',
        'Post-production suite',
        'Monthly retainer available'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'What types of events can you live stream?',
      answer: 'We stream all types of events including corporate conferences, product launches, webinars, workshops, concerts, sports events, religious services, weddings, fundraisers, panel discussions, and virtual trade shows. Our team has experience with events ranging from intimate 50-person webinars to large-scale conferences with thousands of viewers.'
    },
    {
      question: 'What platforms can you stream to simultaneously?',
      answer: 'We can simulcast to all major platforms including YouTube Live, Facebook Live, LinkedIn Live, Twitch, Vimeo Live, and Twitter/X. We also support custom RTMP destinations for private platforms, corporate intranets, and membership sites. Our Enterprise package supports unlimited simultaneous destinations with platform-specific optimizations.'
    },
    {
      question: 'What internet speed do I need for live streaming?',
      answer: 'We recommend minimum 25 Mbps upload speed for HD streaming and 50 Mbps for 4K. However, we bring our own bonded internet solutions that combine multiple connections (fiber, cable, 4G/5G) to ensure reliability. For critical events, we deploy redundant internet with automatic failover, guaranteeing uninterrupted streaming even if one connection fails.'
    },
    {
      question: 'Can you handle technical issues during the live stream?',
      answer: 'Yes! Our team includes experienced technical directors who monitor all systems in real-time. We have backup systems for cameras, audio, internet, and streaming servers. If any issue occurs, we can switch to backups instantly without viewers noticing. We also have contingency plans for every possible scenario, from power outages to equipment failures.'
    },
    {
      question: 'Do you provide audience engagement features?',
      answer: 'Absolutely! We offer live Q&A management, polls, surveys, chat moderation, virtual hand-raising, emoji reactions, and on-screen comments. Our team can manage audience interaction, filter questions, and display selected content on stream. For virtual events, we can also set up breakout rooms, networking lounges, and virtual exhibition spaces.'
    },
    {
      question: 'Will I receive a recording of the live stream?',
      answer: 'Yes, all packages include a full recording of your event. We provide the raw stream recording plus an edited version with any technical issues removed. Enterprise clients receive multi-camera source files, allowing for full post-production editing. We can also create highlight reels, social media clips, and timestamped chapters for easy navigation. All files are delivered via secure cloud storage within 48-72 hours.'
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
        title="Ready to Go Live?"
        description="Let's create a flawless streaming experience for your next event"
        primaryCTA="Book Your Event"
        secondaryCTA="See Past Streams"
        gradient={serviceData.gradient}
      />
    </div>
  );
}
