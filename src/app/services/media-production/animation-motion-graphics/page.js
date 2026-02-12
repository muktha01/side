'use client';

import { motion } from 'framer-motion';
import { 
  Layers, 
  Sparkles, 
  Zap, 
  Play, 
  Palette, 
  Wand2,
  Clock,
  CheckCircle2,
  Film,
  Target,
  Award,
  Box
} from 'lucide-react';

import ServiceDetailHero from '@/components/sections/services/ServiceDetailHero';
import ServiceFeatures from '@/components/sections/services/ServiceFeatures';
import ProcessTimeline from '@/components/sections/services/ProcessTimeline';
import PricingSection from '@/components/sections/services/PricingSection';
import FAQAccordion from '@/components/sections/services/FAQAccordion';
import TestimonialsPreview from '@/components/sections/TestimonialsPreview';
import LeadCaptureForm from '@/components/sections/services/LeadCaptureForm';
import FinalCTA from '@/components/sections/services/FinalCTA';

export default function AnimationMotionGraphicsPage() {
  const serviceData = {
    id: 'animation-motion-graphics',
    name: 'Animation & Motion Graphics',
    category: 'Media Production',
    categoryUrl: '/services/media-production',
    icon: Layers,
    gradient: 'from-violet-600 to-purple-600',
    tagline: 'Bring your ideas to life with stunning animation',
    description: 'Professional animation and motion graphics services that transform complex ideas into engaging visual stories. From explainer videos to brand animations, we create motion content that captivates.',
    benefits: [
      '2D & 3D animation expertise',
      'Custom character design',
      'Brand-aligned motion design',
      'Explainer video specialists',
      'Unlimited revisions',
      'Source files included'
    ],
    stats: [
      { label: 'Animations Created', value: '800+' },
      { label: 'Happy Clients', value: '95%' },
      { label: 'Avg Engagement', value: '+250%' },
      { label: 'Quick Delivery', value: '10 Days' }
    ]
  };

  const features = [
    {
      icon: Play,
      title: 'Explainer Videos',
      description: 'Animated videos that simplify complex concepts and drive understanding.',
      details: [
        '60-90 second explainer videos',
        'Custom character animation',
        'Script writing included',
        'Professional voiceover',
        'Background music',
        'Multiple revisions'
      ]
    },
    {
      icon: Sparkles,
      title: 'Logo Animation',
      description: 'Bring your brand to life with professional logo animations.',
      details: [
        'Dynamic logo reveals',
        'Multiple animation styles',
        'Brand color integration',
        '5-10 second animations',
        'Various format exports',
        'Social media versions'
      ]
    },
    {
      icon: Box,
      title: '3D Animation',
      description: 'Realistic 3D animations for products, architecture, and concepts.',
      details: [
        'Product visualization',
        'Architectural walkthroughs',
        'Technical animations',
        'Character animation',
        'Photorealistic rendering',
        'Interactive 3D models'
      ]
    },
    {
      icon: Film,
      title: 'Motion Graphics',
      description: 'Eye-catching motion graphics for videos and presentations.',
      details: [
        'Title sequences',
        'Lower thirds',
        'Info graphics',
        'Data visualization',
        'Transition effects',
        'Social media graphics'
      ]
    },
    {
      icon: Palette,
      title: 'Character Animation',
      description: 'Custom character design and animation for brand storytelling.',
      details: [
        'Character concept design',
        'Rigging & animation',
        'Emotion & expression',
        'Walk cycles & actions',
        'Character mascots',
        'Style guide creation'
      ]
    },
    {
      icon: Wand2,
      title: 'Visual Effects',
      description: 'Professional VFX to enhance your video content.',
      details: [
        'Compositing',
        'Green screen removal',
        'Particle effects',
        'Light effects',
        'Transitions',
        'Title animation'
      ]
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Brief & Concept Development',
      description: 'We understand your goals and develop creative concepts that align with your brand.',
      duration: '2-3 days',
      deliverables: [
        'Creative brief document',
        'Style exploration',
        '3 concept options',
        'Mood board',
        'Timeline proposal'
      ]
    },
    {
      number: '02',
      title: 'Script & Storyboard',
      description: 'Professional scriptwriting and detailed storyboarding to visualize the animation.',
      duration: '3-5 days',
      deliverables: [
        'Polished script',
        'Scene-by-scene storyboard',
        'Character sketches',
        'Style frames',
        'Voice-over script'
      ]
    },
    {
      number: '03',
      title: 'Design & Asset Creation',
      description: 'Creating all visual assets, characters, and design elements.',
      duration: '5-7 days',
      deliverables: [
        'Character designs',
        'Background art',
        'Asset library',
        'Color palette',
        'Style guide'
      ]
    },
    {
      number: '04',
      title: 'Animation Production',
      description: 'Bringing everything to life with professional animation and motion design.',
      duration: '7-10 days',
      deliverables: [
        'Animated sequences',
        'Motion graphics',
        'Transitions & effects',
        'Preview versions',
        'Feedback integration'
      ]
    },
    {
      number: '05',
      title: 'Post-Production & Delivery',
      description: 'Final polish with sound design, voiceover, and delivery in all formats.',
      duration: '3-5 days',
      deliverables: [
        'Final animation',
        'Sound design & music',
        'Professional voiceover',
        'Multiple format exports',
        'Source files',
        'Usage guidelines'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '1,999',
      period: 'per animation',
      description: 'Perfect for simple animations and logo reveals for startups and small businesses.',
      features: [
        'Up to 30 seconds',
        'Logo animation or simple motion graphics',
        '2D animation',
        'Basic character design',
        'Background music',
        '3 rounds of revisions',
        'HD 1080p export',
        'Web & social formats',
        '10-day delivery'
      ],
      cta: 'Start Project',
      popular: false
    },
    {
      name: 'Professional',
      price: '4,999',
      period: 'per animation',
      description: 'Comprehensive animation for explainer videos and marketing content.',
      features: [
        'Up to 90 seconds',
        'Explainer video or motion graphics',
        '2D/2.5D animation',
        'Custom character design',
        'Scriptwriting included',
        'Professional voiceover',
        'Original music composition',
        'Unlimited revisions',
        '4K export',
        'All format delivery',
        '15-day delivery',
        'Dedicated animator'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'tailored solution',
      description: 'Full-service animation for complex 3D projects and ongoing content needs.',
      features: [
        'Unlimited length',
        '3D animation & VFX',
        'Complex character rigging',
        'Multiple characters',
        'Advanced cinematics',
        'Celebrity voiceover options',
        'Orchestra-quality music',
        'Dedicated animation team',
        'Brand integration',
        'Multiple language versions',
        'Priority production',
        'Ongoing support',
        'Asset library creation'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'What types of animation do you create?',
      answer: 'We specialize in 2D animation, 3D animation, motion graphics, explainer videos, logo animations, character animation, whiteboard animation, and kinetic typography. Our team uses industry-standard tools like After Effects, Cinema 4D, Blender, and Adobe Animate to create professional animations for any need.'
    },
    {
      question: 'How long does it take to create an animated video?',
      answer: 'Timeline depends on complexity and length. A simple 30-second logo animation takes 7-10 days, while a 90-second explainer video typically takes 3-4 weeks. Complex 3D animations may require 6-8 weeks. We provide detailed timelines during the consultation phase and can accommodate rush projects with expedited services.'
    },
    {
      question: 'Do you provide scriptwriting and voiceover services?',
      answer: 'Yes! Our Professional and Enterprise packages include professional scriptwriting. We work with you to craft compelling narratives that effectively communicate your message. We also provide professional voiceover services with a selection of voice talents to choose from, available in multiple languages and accents.'
    },
    {
      question: 'Can you match our existing brand style?',
      answer: 'Absolutely! We excel at creating animations that seamlessly integrate with your existing brand identity. During the concept phase, we study your brand guidelines, color palette, typography, and visual style to ensure the animation feels like a natural extension of your brand. We can also help evolve your brand\'s visual direction if needed.'
    },
    {
      question: 'What software do you use, and will I receive source files?',
      answer: 'We use industry-standard software including Adobe After Effects, Cinema 4D, Blender, Adobe Animate, and Adobe Illustrator. All packages include final rendered videos in multiple formats. Source files (project files, AI files, etc.) can be included upon request and are standard in our Enterprise package. This allows you to make future edits or create variations.'
    },
    {
      question: 'How many revisions are included, and what if I need changes later?',
      answer: 'Our Starter package includes 3 revision rounds, Professional includes unlimited revisions during production, and Enterprise includes unlimited revisions plus 30 days of post-delivery changes. We work iteratively, providing previews at each stage (storyboard, design, animation) to ensure alignment before moving forward. Additional changes after project completion can be arranged at hourly rates.'
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
        title="Ready to Create Amazing Animations?"
        description="Let's bring your ideas to life with professional animation"
        primaryCTA="Start Your Animation"
        secondaryCTA="View Showreel"
        gradient={serviceData.gradient}
      />
    </div>
  );
}
