'use client';

import { useState } from 'react';

export default function SoftwareAppDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const stats = [
    { value: '4+', label: 'Live Android Apps' },
    { value: '8+', label: 'Business Websites Delivered' },
    { value: '₹50K', label: 'App Development Starts From' }
  ];

  const services = [
    {
      title: 'Custom Software Development',
      description: 'Tailored software solutions built from scratch to meet your unique business requirements and workflows.',
      features: [
        'Enterprise software development',
        'SaaS application development',
        'Legacy system modernization',
        'Custom business applications'
      ],
      image: 'https://placehold.co/500x400/0f172a/06b6d4?text=Custom+Software',
      pricing: 'Starting from ₹10,000'
    },
    {
      title: 'Mobile App Development',
      description: 'Android & cross-platform mobile apps built with Flutter — deployed to Google Play Store.',
      features: [
        'Android & cross-platform (Flutter)',
        'Custom UI/UX design',
        'Backend & database integration',
        'Google Play Store deployment'
      ],
      image: 'https://placehold.co/500x400/0f172a/3b82f6?text=Mobile+App',
      pricing: 'Starting from ₹50,000'
    },
    {
      title: 'E-Commerce Store Development',
      description: 'Complete online store with product catalog, cart, checkout, and admin panel.',
      features: [
        'Product catalog & categories',
        'Cart, checkout & payment gateway',
        'Order management system',
        'Admin panel included'
      ],
      image: 'https://placehold.co/500x400/0f172a/8b5cf6?text=E-Commerce',
      pricing: 'Starting from ₹75,000'
    }
  ];

  const faqs = [
    {
      question: 'What types of software do you develop?',
      answer: 'We develop a wide range of software including enterprise applications, SaaS platforms, custom business software, CRM systems, ERP solutions, and more. Our team specializes in creating scalable, secure, and user-friendly applications tailored to your business needs.'
    },
    {
      question: 'How long does it take to develop custom software?',
      answer: 'The timeline varies based on project complexity and requirements. A simple application might take 3-4 months, while complex enterprise solutions can take 8-12 months or more. We provide detailed project timelines during the planning phase.'
    },
    {
      question: 'Do you provide post-launch support?',
      answer: 'Yes, we offer comprehensive post-launch support including bug fixes, updates, performance monitoring, and feature enhancements. We have flexible maintenance packages to suit your needs.'
    },
    {
      question: 'What technologies do you use?',
      answer: 'We use modern, proven technologies including React, Node.js, Python, Java, .NET, and various databases. Our technology choices are based on your specific requirements, scalability needs, and long-term maintenance considerations.'
    },
    {
      question: 'How much does custom software development cost?',
      answer: 'Websites start from ₹10,000 and mobile apps start from ₹50,000. E-commerce stores start from ₹75,000. Final cost depends on features and complexity. We provide transparent quotes with no hidden charges — contact us for a free estimate.'
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -right-40 top-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 max-w-6xl mx-auto leading-tight">
              <span className="gradient-text">Software & App Development</span>
              <br />
              Solutions for Modern Business
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mt-8">
              Build scalable, secure, and innovative software solutions that drive business growth
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="#contact" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50">
                Get Free Consultation
              </a>
              <a href="#services" className="bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-cyan-500">
                Explore Services
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-800">
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive software development services to transform your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-900/50 rounded-xl border border-gray-800 overflow-hidden hover:border-cyan-500 transition-all duration-300">
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300">
                        <span className="text-cyan-500 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-cyan-500 font-semibold">{service.pricing}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Find answers to common questions about our software development services
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-900/50 rounded-xl border border-gray-800 overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <span className={`transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-400">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Your Software?</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Let's discuss your project and create a software solution that drives your business forward
          </p>
          <a href="#contact" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
