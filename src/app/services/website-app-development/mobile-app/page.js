'use client';

import ServiceDetailHero from '@/components/sections/services/ServiceDetailHero';
import ServiceFeatures from '@/components/sections/services/ServiceFeatures';
import ProcessTimeline from '@/components/sections/services/ProcessTimeline';
import PricingSection from '@/components/sections/services/PricingSection';
import TestimonialsPreview from '@/components/sections/TestimonialsPreview';
import FinalCTA from '@/components/sections/services/FinalCTA';
import FAQAccordion from '@/components/sections/services/FAQAccordion';
import LeadCaptureForm from '@/components/sections/services/LeadCaptureForm';
import { Smartphone, Target, RefreshCw, Bell, WifiOff, Plug } from 'lucide-react';

export default function MobileAppPage() {
  const serviceData = {
    id: 'mobile-app',
    name: 'Mobile App Development',
    category: 'Website & App Development',
    categoryUrl: '/services/website-app-development',
    icon: Smartphone,
    gradient: 'from-blue-500 to-cyan-500',
    tagline: 'Native & Cross-Platform Apps for iOS and Android',
    description: 'Professional mobile app development for iOS and Android. Build engaging mobile experiences with native performance, beautiful UI, push notifications, and offline functionality using React Native, Flutter, or native development.',
    benefits: [
      'Native iOS & Android development',
      'Cross-platform solutions (save 40% cost)',
      'App Store & Play Store optimization',
      'Push notifications & deep linking',
      'Offline functionality support',
      'Ongoing maintenance & updates'
    ],
    stats: [
      { value: '200+', label: 'Apps Launched' },
      { value: '4.8★', label: 'Average App Rating' },
      { value: '8-12 weeks', label: 'Typical Timeline' }
    ]
  };

  const features = [
    {
      title: 'Native Development',
      description: 'Build truly native apps for iOS (Swift) and Android (Kotlin) for best performance.',
      icon: Target,
      details: [
        'Swift for iOS apps',
        'Kotlin for Android apps',
        'Platform-specific UI/UX',
        'Maximum performance'
      ]
    },
    {
      title: 'Cross-Platform Apps',
      description: 'Single codebase for both iOS and Android using React Native or Flutter.',
      icon: RefreshCw,
      details: [
        'React Native development',
        'Flutter development',
        'Shared codebase (save 40%)',
        'Near-native performance'
      ]
    },
    {
      title: 'App Store Optimization',
      description: 'Get your app approved and optimized for maximum visibility in app stores.',
      icon: Smartphone,
      details: [
        'App Store submission',
        'Play Store publishing',
        'ASO optimization',
        'App icon & screenshots'
      ]
    },
    {
      title: 'Push Notifications',
      description: 'Engage users with timely push notifications and in-app messaging.',
      icon: Bell,
      details: [
        'Firebase Cloud Messaging',
        'Apple Push Notification',
        'Scheduled notifications',
        'Personalized messages'
      ]
    },
    {
      title: 'Offline Functionality',
      description: 'Apps that work seamlessly even without internet connection.',
      icon: WifiOff,
      details: [
        'Offline data storage',
        'Background sync',
        'Cached content',
        'Smooth offline experience'
      ]
    },
    {
      title: 'API Integration',
      description: 'Connect your app to backend services, payment gateways, and third-party APIs.',
      icon: Plug,
      details: [
        'RESTful API integration',
        'GraphQL support',
        'Payment gateways',
        'Social media integration'
      ]
    }
  ];

  const process = [
    {
      number: 1,
      title: 'Discovery & Strategy',
      description: 'Define app concept, target audience, features, and technical approach.',
      duration: '1 week',
      deliverables: [
        'Product requirements',
        'User stories',
        'Technical architecture',
        'Platform recommendation'
      ]
    },
    {
      number: 2,
      title: 'UI/UX Design',
      description: 'Create stunning app designs following iOS and Android design guidelines.',
      duration: '2-3 weeks',
      deliverables: [
        'Wireframes',
        'High-fidelity mockups',
        'Interactive prototype',
        'Design system'
      ]
    },
    {
      number: 3,
      title: 'App Development',
      description: 'Build your app with clean code, integrations, and all required features.',
      duration: '4-6 weeks',
      deliverables: [
        'Functional iOS app',
        'Functional Android app',
        'Backend integration',
        'API connections'
      ]
    },
    {
      number: 4,
      title: 'Testing & QA',
      description: 'Comprehensive testing on real devices and different OS versions.',
      duration: '1-2 weeks',
      deliverables: [
        'Device testing',
        'Performance testing',
        'Bug fixes',
        'OS compatibility'
      ]
    },
    {
      number: 5,
      title: 'Launch & Support',
      description: 'Submit to app stores, handle review process, and provide post-launch support.',
      duration: '1 week + ongoing',
      deliverables: [
        'App Store submission',
        'Play Store submission',
        'App approval',
        '3-month support'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Cross-Platform MVP',
      price: 2999,
      priceAnnual: null,
      savings: null,
      description: 'Perfect for startups & MVPs',
      features: [
        'React Native or Flutter',
        'iOS & Android apps',
        'Up to 10 screens',
        'Basic features',
        'Push notifications',
        'App Store submission',
        '3-month support',
        'Bug fixes'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Business App',
      price: 4999,
      priceAnnual: null,
      savings: null,
      description: 'Full-featured business app',
      features: [
        'Native or cross-platform',
        'iOS & Android apps',
        'Up to 20 screens',
        'Advanced features',
        'API integrations',
        'Payment gateway',
        'Analytics integration',
        '6-month support'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Enterprise App',
      price: 9999,
      priceAnnual: null,
      savings: null,
      description: 'Complex enterprise solution',
      features: [
        'Native development',
        'iOS & Android apps',
        'Unlimited screens',
        'Complex features',
        'Custom backend',
        'Advanced security',
        'Dedicated team',
        '12-month support',
        'Priority updates'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'Should I build a native or cross-platform app?',
      answer: 'Cross-platform (React Native/Flutter) is recommended for MVPs and standard apps, offering 40% cost savings and faster time to market. Native development (Swift/Kotlin) is best for apps requiring maximum performance, complex features, or platform-specific functionality. We\'ll recommend the best approach based on your requirements.'
    },
    {
      question: 'How long does mobile app development take?',
      answer: 'A typical mobile app takes 8-12 weeks: 1 week for discovery, 2-3 weeks for design, 4-6 weeks for development, 1-2 weeks for testing, and 1 week for app store submission. Complex apps with custom features may take 16-24 weeks. MVP versions can be delivered faster in 6-8 weeks.'
    },
    {
      question: 'How much does it cost to build a mobile app?',
      answer: 'Mobile app costs vary based on complexity. Simple MVP apps start at ₹2,999 for cross-platform development. Business apps with advanced features cost ₹4,999-7,999. Complex enterprise apps with custom backends cost ₹9,999+. Native development for both platforms costs 40-60% more than cross-platform.'
    },
    {
      question: 'Will you help submit the app to app stores?',
      answer: 'Yes! We handle the entire app store submission process including creating developer accounts, preparing app store listings with screenshots and descriptions, submitting for review, and addressing any feedback from Apple or Google. We ensure your app meets all guidelines and gets approved.'
    },
    {
      question: 'What happens after the app is launched?',
      answer: 'We provide 3-6 months of post-launch support (depending on package) including bug fixes, performance monitoring, crash reporting, and minor updates. We also offer ongoing maintenance plans for continued updates, new features, OS upgrades, and technical support.'
    },
    {
      question: 'Can the app work offline?',
      answer: 'Yes! We implement offline functionality using local data storage, caching, and background sync. Users can access cached content and perform actions offline, which sync automatically when internet connection is restored. The extent of offline features depends on your app\'s requirements.'
    }
  ];

  return (
    <main className="min-h-screen bg-black">
      <ServiceDetailHero service={serviceData} />
      <ServiceFeatures features={features} />
      <ProcessTimeline steps={process} />
      <PricingSection plans={pricingPlans} />
      <FAQAccordion 
        faqs={faqs}
        categoryName={serviceData.name}
      />
      <TestimonialsPreview />
      <LeadCaptureForm formType="quote" serviceName={serviceData.name} />
      <FinalCTA />
    </main>
  );
}
