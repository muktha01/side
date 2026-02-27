'use client';

import ServiceDetailHero from '@/components/sections/services/ServiceDetailHero';
import ServiceFeatures from '@/components/sections/services/ServiceFeatures';
import ProcessTimeline from '@/components/sections/services/ProcessTimeline';
import PricingSection from '@/components/sections/services/PricingSection';
import TestimonialsPreview from '@/components/sections/TestimonialsPreview';
import FinalCTA from '@/components/sections/services/FinalCTA';
import FAQAccordion from '@/components/sections/services/FAQAccordion';
import LeadCaptureForm from '@/components/sections/services/LeadCaptureForm';
import { ShoppingCart, Package, CreditCard, ClipboardList, User, BarChart3, TrendingUp } from 'lucide-react';

export default function EcommercePage() {
  const serviceData = {
    id: 'ecommerce',
    name: 'E-commerce Solutions',
    category: 'Website & App Development',
    categoryUrl: '/services/website-app-development',
    icon: ShoppingCart,
    gradient: 'from-emerald-500 to-green-500',
    tagline: 'Full-featured Online Stores with Secure Payments',
    description: 'Build powerful e-commerce platforms with product catalogs, secure payment gateways, inventory management, and seamless shopping experiences. Perfect for retail businesses, online stores, and marketplaces.',
    benefits: [
      'Product catalog & inventory management',
      'Secure payment gateway integration',
      'Order tracking & fulfillment',
      'Customer accounts & wishlists',
      'Analytics & sales reporting',
      'Mobile-responsive design'
    ],
    stats: [
      { value: '150+', label: 'Online Stores Built' },
      { value: '₹50Cr+', label: 'GMV Processed' },
      { value: '6-8 weeks', label: 'Launch Timeline' }
    ]
  };

  const features = [
    {
      title: 'Product Management',
      description: 'Complete product catalog with categories, variants, images, and descriptions.',
      icon: Package,
      details: [
        'Unlimited products',
        'Product variants (size, color)',
        'Multiple images per product',
        'SEO-optimized listings'
      ]
    },
    {
      title: 'Payment Gateway',
      description: 'Secure payment processing with multiple payment options.',
      icon: CreditCard,
      details: [
        'Razorpay/PayU integration',
        'Credit/Debit cards',
        'UPI, Net banking',
        'Cash on Delivery'
      ]
    },
    {
      title: 'Order Management',
      description: 'Track orders from placement to delivery with status updates.',
      icon: ClipboardList,
      details: [
        'Order tracking system',
        'Status notifications',
        'Invoice generation',
        'Return management'
      ]
    },
    {
      title: 'Customer Accounts',
      description: 'User accounts with order history, wishlists, and saved addresses.',
      icon: User,
      details: [
        'User registration/login',
        'Order history',
        'Wishlist feature',
        'Multiple addresses'
      ]
    },
    {
      title: 'Inventory Management',
      description: 'Real-time inventory tracking with low stock alerts.',
      icon: BarChart3,
      details: [
        'Stock management',
        'Low stock alerts',
        'Product SKUs',
        'Bulk import/export'
      ]
    },
    {
      title: 'Analytics Dashboard',
      description: 'Track sales, revenue, customer behavior, and product performance.',
      icon: TrendingUp,
      details: [
        'Sales analytics',
        'Customer insights',
        'Product performance',
        'Revenue reports'
      ]
    }
  ];

  const process = [
    {
      number: 1,
      title: 'Discovery & Planning',
      description: 'Understand your products, target customers, and business model.',
      duration: '1 week',
      deliverables: [
        'Product catalog structure',
        'Payment flow design',
        'Shipping strategy',
        'Platform selection'
      ]
    },
    {
      number: 2,
      title: 'Design & Branding',
      description: 'Create stunning storefront designs that drive conversions.',
      duration: '2 weeks',
      deliverables: [
        'Homepage design',
        'Product page layouts',
        'Checkout flow',
        'Mobile responsive design'
      ]
    },
    {
      number: 3,
      title: 'Development',
      description: 'Build your online store with all features and integrations.',
      duration: '3-4 weeks',
      deliverables: [
        'Product catalog',
        'Payment integration',
        'Admin dashboard',
        'Customer portal'
      ]
    },
    {
      number: 4,
      title: 'Testing & Launch',
      description: 'Test payment flows, add products, and launch your store.',
      duration: '1 week',
      deliverables: [
        'Payment testing',
        'Product import',
        'SSL certificate',
        'Store launch'
      ]
    },
    {
      number: 5,
      title: 'Training & Support',
      description: 'Learn to manage your store and get ongoing support.',
      duration: 'Ongoing',
      deliverables: [
        'Admin training',
        'Documentation',
        'Video tutorials',
        '6-month support'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Standard E-Commerce',
      price: 75000,
      priceAnnual: null,
      savings: null,
      description: 'Complete online store for retail businesses',
      features: [
        'Product catalog, categories & filters',
        'Cart, checkout & payment gateway',
        'Order management system',
        'Admin panel & inventory',
        'Mobile responsive & SEO ready',
        'Lifetime support'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Advanced E-Commerce',
      price: 120000,
      priceAnnual: null,
      savings: null,
      description: 'Feature-rich store with custom integrations',
      features: [
        'Everything in Standard',
        'Multi-category advanced filtering',
        'Coupon & discount management',
        'Customer accounts & wishlist',
        'Sales analytics dashboard',
        'Third-party API integrations',
        'Lifetime support'
      ],
      cta: 'Get Quote',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'Which e-commerce platform do you recommend?',
      answer: 'We recommend platforms based on your needs: WooCommerce for WordPress users, Shopify for ease of use, custom solutions for unique requirements. For Indian businesses, we integrate with local payment gateways like Razorpay and shipping providers like Shiprocket.'
    },
    {
      question: 'How long does it take to build an online store?',
      answer: 'A basic e-commerce store takes 6-8 weeks including design, development, product setup, and payment integration. More complex stores with custom features or multi-vendor functionality may take 10-14 weeks.'
    },
    {
      question: 'What payment gateways do you integrate?',
      answer: 'We integrate popular Indian payment gateways including Razorpay, PayU, Instamojo, and Cashfree. These support credit/debit cards, UPI, net banking, wallets, and EMI options. We also set up Cash on Delivery if required.'
    },
    {
      question: 'Can I manage the store myself after launch?',
      answer: 'Absolutely! We provide comprehensive training on managing products, processing orders, handling inventory, and running promotions. You\'ll have access to an easy-to-use admin panel and video tutorials for reference.'
    },
    {
      question: 'Do you provide ongoing maintenance?',
      answer: 'Yes, all packages include 3-6 months of support for bug fixes and minor updates. We also offer monthly maintenance plans covering security updates, plugin updates, backup management, and priority support.'
    },
    {
      question: 'Can you help with product photography and content?',
      answer: 'Yes! We can assist with product photography, image editing, product descriptions, SEO optimization, and content creation for your store. These services are available as add-ons to ensure your products look professional.'
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
