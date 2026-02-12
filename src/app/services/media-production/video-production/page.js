'use client';

import { motion } from 'framer-motion';
import { 
  Video, 
  Film, 
  Camera, 
  Edit3, 
  Sparkles, 
  Users,
  Clock,
  CheckCircle2,
  Play,
  Zap,
  Award,
  Target
} from 'lucide-react';

import ServiceDetailHero from '@/components/sections/services/ServiceDetailHero';
import ServiceFeatures from '@/components/sections/services/ServiceFeatures';
import ProcessTimeline from '@/components/sections/services/ProcessTimeline';
import PricingSection from '@/components/sections/services/PricingSection';
import FAQAccordion from '@/components/sections/services/FAQAccordion';
import TestimonialsPreview from '@/components/sections/TestimonialsPreview';
import LeadCaptureForm from '@/components/sections/services/LeadCaptureForm';
import FinalCTA from '@/components/sections/services/FinalCTA';

export default function VideoProductionPage() {
  const serviceData = {
    id: 'video-production',
    name: 'Video Production',
    category: 'Media Production',
    categoryUrl: '/services/media-production',
    icon: Video,
    gradient: 'from-violet-600 to-purple-600',
    tagline: 'Cinematic stories that captivate and convert',
    description: 'Professional video production services that bring your vision to life. From concept to final cut, we create compelling visual content that engages audiences and drives results.',
    benefits: [
      'Cinematic 4K/8K production quality',
      'Professional scriptwriting & storyboarding',
      'Expert cinematography & lighting',
      'Advanced post-production & color grading',
      'Fast turnaround times',
      'Unlimited revisions included'
    ],
    stats: [
      { label: 'Videos Produced', value: '500+' },
      { label: 'Client Satisfaction', value: '98%' },
      { label: 'Average ROI', value: '300%' },
      { label: 'Delivery Time', value: '14 Days' }
    ]
  };

  const features = [
    {
      icon: Film,
      title: 'Corporate Videos',
      description: 'Professional corporate content that showcases your brand, culture, and values.',
      details: [
        'Company profile videos',
        'Executive interviews',
        'Training & onboarding content',
        'Internal communications',
        'Investor presentations',
        'Event coverage'
      ]
    },
    {
      icon: Target,
      title: 'Marketing Videos',
      description: 'Conversion-focused videos designed to drive engagement and sales.',
      details: [
        'Product demonstrations',
        'Explainer videos',
        'Testimonial videos',
        'Social media content',
        'Video ads',
        'Landing page videos'
      ]
    },
    {
      icon: Camera,
      title: 'Brand Storytelling',
      description: 'Emotional narratives that connect with your audience and build brand loyalty.',
      details: [
        'Brand documentaries',
        'Customer success stories',
        'Behind-the-scenes content',
        'Founder stories',
        'Company culture videos',
        'Mission & vision content'
      ]
    },
    {
      icon: Edit3,
      title: 'Post-Production Excellence',
      description: 'Advanced editing, color grading, and effects to polish your content.',
      details: [
        'Professional editing',
        'Color correction & grading',
        'Sound design & mixing',
        'Motion graphics',
        'Visual effects',
        'Multi-format delivery'
      ]
    },
    {
      icon: Play,
      title: 'Animation & Motion Graphics',
      description: 'Eye-catching animations that simplify complex ideas.',
      details: [
        '2D/3D animations',
        'Motion graphics',
        'Title sequences',
        'Lower thirds',
        'Animated logos',
        'Infographic videos'
      ]
    },
    {
      icon: Sparkles,
      title: 'Live Production',
      description: 'Professional live streaming and event coverage services.',
      details: [
        'Multi-camera live streaming',
        'Event documentation',
        'Webinar production',
        'Virtual events',
        'Conference coverage',
        'Real-time graphics'
      ]
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your goals, audience, and message. Together, we develop a creative brief and production plan.',
      duration: '3-5 days',
      deliverables: [
        'Creative brief document',
        'Project timeline',
        'Budget breakdown',
        'Location scouting',
        'Talent casting (if needed)'
      ]
    },
    {
      number: '02',
      title: 'Scriptwriting & Storyboarding',
      description: 'Our writers craft compelling scripts and create detailed storyboards to visualize the final product.',
      duration: '5-7 days',
      deliverables: [
        'Professional script',
        'Detailed storyboard',
        'Shot list',
        'Mood board',
        'Visual references'
      ]
    },
    {
      number: '03',
      title: 'Pre-Production',
      description: 'We handle all logistics including equipment prep, crew scheduling, permits, and location setup.',
      duration: '3-5 days',
      deliverables: [
        'Production schedule',
        'Equipment list',
        'Crew assignments',
        'Permits & insurance',
        'Risk assessment'
      ]
    },
    {
      number: '04',
      title: 'Production Day',
      description: 'Professional filming with our experienced crew and state-of-the-art equipment.',
      duration: '1-3 days',
      deliverables: [
        'Raw 4K/8K footage',
        'Multiple camera angles',
        'Professional audio',
        'Behind-the-scenes content',
        'Backup files'
      ]
    },
    {
      number: '05',
      title: 'Post-Production & Delivery',
      description: 'Expert editing, color grading, sound design, and final delivery in multiple formats.',
      duration: '7-10 days',
      deliverables: [
        'Edited video (multiple versions)',
        'Color-graded footage',
        'Mixed audio',
        'Multiple format exports',
        'Source files',
        'Project archive'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Essential',
      price: '2,499',
      period: 'per project',
      description: 'Perfect for startups and small businesses needing professional video content.',
      features: [
        'Up to 2-minute video',
        '1 shooting day',
        'Single location',
        '1 camera setup',
        'Basic editing & color grading',
        'Background music',
        '2 rounds of revisions',
        '1080p delivery',
        'Social media formats'
      ],
      cta: 'Start Project',
      popular: false
    },
    {
      name: 'Professional',
      price: '5,999',
      period: 'per project',
      description: 'Comprehensive video production for established brands and marketing campaigns.',
      features: [
        'Up to 5-minute video',
        '2 shooting days',
        'Multiple locations',
        'Multi-camera setup',
        'Advanced editing & color grading',
        'Professional voiceover',
        'Custom music/sound design',
        'Motion graphics included',
        'Unlimited revisions',
        '4K delivery',
        'All format exports',
        '30-day support'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'tailored solution',
      description: 'Full-service video production for large-scale campaigns and ongoing content needs.',
      features: [
        'Unlimited video length',
        'Multiple shooting days',
        'Nationwide locations',
        'Cinema-grade equipment',
        'Dedicated production team',
        'Professional actors/talent',
        'Advanced VFX & animation',
        'Drone footage',
        '8K delivery option',
        'Content strategy included',
        'Ongoing content support',
        'Dedicated account manager',
        'Priority scheduling'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'What types of videos do you produce?',
      answer: 'We produce a wide range of video content including corporate videos, marketing videos, product demos, explainer videos, testimonials, brand documentaries, training videos, event coverage, and social media content. Our team has expertise across all video formats and can handle projects of any scale.'
    },
    {
      question: 'How long does the production process take?',
      answer: 'Typical turnaround time is 2-4 weeks from kick-off to final delivery, depending on project complexity. Simple videos can be completed in 10-14 days, while complex productions with multiple shooting days may take 4-6 weeks. We also offer rush production for urgent projects with expedited timelines.'
    },
    {
      question: 'What equipment do you use?',
      answer: 'We use professional cinema-grade equipment including RED, ARRI, and Sony cinema cameras, professional lighting packages, stabilization systems (gimbals, steadicams), professional audio equipment, and drones for aerial footage. All our equipment is regularly maintained and updated to ensure the highest quality output.'
    },
    {
      question: 'Can you help with script and concept development?',
      answer: 'Absolutely! Our experienced writers and creative directors work with you to develop compelling scripts and creative concepts. We start with your goals and message, then craft narratives that resonate with your target audience. We provide detailed storyboards and mood boards to visualize the final product before production begins.'
    },
    {
      question: 'Do you provide actors and voiceover talent?',
      answer: 'Yes, we have access to professional actors, presenters, and voiceover artists through our talent network. We handle casting based on your requirements and can arrange auditions if needed. All talent costs are included in our project quotes, and we work with union and non-union talent depending on your budget and needs.'
    },
    {
      question: 'What formats do you deliver, and can you optimize for different platforms?',
      answer: 'We deliver videos in all standard formats and resolutions up to 8K. Each project includes optimized versions for different platforms (YouTube, Instagram, Facebook, LinkedIn, website) with appropriate aspect ratios, file sizes, and specifications. We also provide raw footage and project files upon request for future editing needs.'
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
        title="Ready to Create Stunning Video Content?"
        description="Let's bring your vision to life with professional video production"
        primaryCTA="Start Your Project"
        secondaryCTA="View Portfolio"
        gradient={serviceData.gradient}
      />
    </div>
  );
}
