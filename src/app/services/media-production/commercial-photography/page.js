'use client';

import { motion } from 'framer-motion';
import { 
  Camera, 
  Image, 
  Aperture, 
  Lightbulb, 
  Package, 
  Users,
  Clock,
  CheckCircle2,
  Zap,
  Award,
  Target,
  Palette
} from 'lucide-react';

import ServiceDetailHero from '@/components/sections/services/ServiceDetailHero';
import ServiceFeatures from '@/components/sections/services/ServiceFeatures';
import ProcessTimeline from '@/components/sections/services/ProcessTimeline';
import PricingSection from '@/components/sections/services/PricingSection';
import FAQAccordion from '@/components/sections/services/FAQAccordion';
import TestimonialsPreview from '@/components/sections/TestimonialsPreview';
import LeadCaptureForm from '@/components/sections/services/LeadCaptureForm';
import FinalCTA from '@/components/sections/services/FinalCTA';

export default function CommercialPhotographyPage() {
  const serviceData = {
    id: 'commercial-photography',
    name: 'Commercial Photography',
    category: 'Media Production',
    categoryUrl: '/services/media-production',
    icon: Camera,
    gradient: 'from-violet-600 to-purple-600',
    tagline: 'Professional imagery that sells your story',
    description: 'High-end commercial photography services for brands, products, and corporate needs. We create stunning visuals that elevate your brand and drive conversions.',
    benefits: [
      'Professional studio & on-location shoots',
      'High-resolution image delivery',
      'Expert lighting & composition',
      'Advanced retouching & editing',
      'Fast turnaround (48-72 hours)',
      'Commercial usage rights included'
    ],
    stats: [
      { label: 'Shoots Completed', value: '1,200+' },
      { label: 'Client Satisfaction', value: '99%' },
      { label: 'Images Delivered', value: '50K+' },
      { label: 'Quick Turnaround', value: '48 Hrs' }
    ]
  };

  const features = [
    {
      icon: Package,
      title: 'Product Photography',
      description: 'Studio-quality product images that showcase your products in the best light.',
      details: [
        'White background product shots',
        'Lifestyle product photography',
        '360-degree product views',
        'Detail & macro shots',
        'Product packaging',
        'E-commerce optimized images'
      ]
    },
    {
      icon: Users,
      title: 'Corporate Photography',
      description: 'Professional imagery for corporate communications and branding.',
      details: [
        'Executive headshots',
        'Team portraits',
        'Office & facility photography',
        'Corporate events',
        'Annual report images',
        'LinkedIn profile photos'
      ]
    },
    {
      icon: Target,
      title: 'Advertising Photography',
      description: 'High-impact imagery for marketing campaigns and advertisements.',
      details: [
        'Campaign concept shoots',
        'Billboard & print ads',
        'Digital advertising',
        'Social media content',
        'Catalog photography',
        'Seasonal campaigns'
      ]
    },
    {
      icon: Lightbulb,
      title: 'Lifestyle Photography',
      description: 'Authentic lifestyle images that connect with your audience.',
      details: [
        'Brand lifestyle shoots',
        'People & models',
        'Lifestyle products',
        'Real-life scenarios',
        'Candid moments',
        'Environmental portraits'
      ]
    },
    {
      icon: Aperture,
      title: 'Architectural Photography',
      description: 'Professional photography for real estate, hospitality, and architecture.',
      details: [
        'Interior photography',
        'Exterior shots',
        'Real estate listings',
        'Hotel & restaurant',
        'Construction progress',
        'Aerial drone photography'
      ]
    },
    {
      icon: Palette,
      title: 'Food Photography',
      description: 'Mouth-watering food imagery for restaurants, products, and menus.',
      details: [
        'Menu photography',
        'Food product shots',
        'Recipe content',
        'Restaurant marketing',
        'Beverage photography',
        'Food styling included'
      ]
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Consultation & Planning',
      description: 'We discuss your vision, brand guidelines, and specific requirements to plan the perfect shoot.',
      duration: '1-2 days',
      deliverables: [
        'Creative brief',
        'Shot list',
        'Mood board',
        'Location scouting',
        'Styling recommendations'
      ]
    },
    {
      number: '02',
      title: 'Pre-Production Setup',
      description: 'We prepare the studio or location, arrange props, and coordinate all logistics.',
      duration: '1 day',
      deliverables: [
        'Studio booking',
        'Equipment setup',
        'Props & styling',
        'Model/talent coordination',
        'Schedule confirmation'
      ]
    },
    {
      number: '03',
      title: 'Photo Shoot',
      description: 'Professional photography session with expert lighting, composition, and direction.',
      duration: '4-8 hours',
      deliverables: [
        'Multiple angles & setups',
        'Variety of shots',
        'Different lighting scenarios',
        'Raw image files',
        'On-set previews'
      ]
    },
    {
      number: '04',
      title: 'Selection & Culling',
      description: 'We select the best shots and provide you with a gallery for final image selection.',
      duration: '1 day',
      deliverables: [
        'Curated image gallery',
        'Selection recommendations',
        'Online review system',
        'Feedback collection'
      ]
    },
    {
      number: '05',
      title: 'Retouching & Delivery',
      description: 'Professional editing, color correction, and retouching for final delivery.',
      duration: '2-3 days',
      deliverables: [
        'High-resolution edited images',
        'Multiple file formats',
        'Web-optimized versions',
        'Print-ready files',
        'Usage rights documentation',
        'Cloud storage access'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '799',
      period: 'per session',
      description: 'Perfect for small businesses and startups needing professional product or headshot photography.',
      features: [
        'Half-day studio session (4 hours)',
        'Up to 20 products or 10 headshots',
        '50 edited high-res images',
        'Basic retouching included',
        'White background shots',
        'Web-optimized versions',
        '48-hour turnaround',
        'Online gallery',
        'Commercial usage rights'
      ],
      cta: 'Book Session',
      popular: false
    },
    {
      name: 'Professional',
      price: '1,999',
      period: 'per session',
      description: 'Comprehensive photography for established brands and marketing campaigns.',
      features: [
        'Full-day studio session (8 hours)',
        'Up to 50 products or subjects',
        '150 edited high-res images',
        'Advanced retouching',
        'Multiple backgrounds & setups',
        'Lifestyle shots included',
        'Props & styling',
        'Professional model (if needed)',
        'Same-day previews',
        '24-hour turnaround',
        'All file formats',
        'Priority support'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'tailored solution',
      description: 'Full-service photography for large catalogs, campaigns, and ongoing content needs.',
      features: [
        'Multiple-day shoots',
        'Unlimited subjects',
        '500+ edited images',
        'Professional team',
        'On-location shoots',
        'Complete styling service',
        'Drone photography',
        'Video b-roll included',
        'Rush editing available',
        'Dedicated art director',
        'Brand asset management',
        'Monthly retainer options',
        'Exclusive availability'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'What types of commercial photography do you specialize in?',
      answer: 'We specialize in product photography, corporate headshots, advertising campaigns, lifestyle photography, architectural photography, food photography, and event coverage. Our team has experience across all commercial photography needs, from e-commerce product shots to large-scale advertising campaigns.'
    },
    {
      question: 'Do I need to provide a studio, or do you have one?',
      answer: 'We have access to professional photography studios equipped with the latest lighting, backdrops, and equipment. We can also shoot on-location at your office, facility, or any specified location. Studio rental is included in our Professional and Enterprise packages, while the Basic package uses our partner studio.'
    },
    {
      question: 'How many final images will I receive?',
      answer: 'The number of edited images depends on your package: Basic (50 images), Professional (150 images), Enterprise (500+ images). You\'ll receive all images professionally edited and retouched. We also provide access to all unedited photos from the shoot if you need additional images in the future.'
    },
    {
      question: 'What\'s your turnaround time for edited photos?',
      answer: 'Our standard turnaround is 48-72 hours for basic editing and 5-7 days for advanced retouching. We offer rush services with 24-hour delivery for an additional fee. For Enterprise clients, we can arrange same-day editing for urgent needs. You\'ll receive previews within 24 hours of the shoot.'
    },
    {
      question: 'Can you provide models, stylists, or props?',
      answer: 'Yes! We have a network of professional models, stylists, makeup artists, and prop sources. We can arrange everything you need for your shoot. Our Professional package includes basic styling and props, while the Enterprise package offers complete production services with dedicated stylists and art directors.'
    },
    {
      question: 'What rights do I have to use the images?',
      answer: 'All our packages include full commercial usage rights for the edited images. You can use them across all marketing channels, websites, social media, print materials, and advertising without additional licensing fees. We provide written documentation of usage rights with every project. Raw files and extended licensing for resale can be arranged separately.'
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
        title="Ready to Create Stunning Commercial Photography?"
        description="Let's capture professional images that elevate your brand"
        primaryCTA="Book Your Session"
        secondaryCTA="View Portfolio"
        gradient={serviceData.gradient}
      />
    </div>
  );
}
