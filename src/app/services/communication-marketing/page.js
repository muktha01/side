'use client';

import { useState } from 'react';

export default function CommunicationMarketingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const stats = [
    { value: '10M+', label: 'Messages Delivered Monthly' },
    { value: '99.9%', label: 'Delivery Success Rate' },
    { value: '200+', label: 'Active Clients' }
  ];

  const services = [
    {
      title: 'WhatsApp Business Solutions',
      description: 'Powerful WhatsApp automation and marketing tools for customer engagement.',
      features: [
        'WhatsApp API integration',
        'Automated messaging campaigns',
        'Chatbot development',
        'Broadcast and bulk messaging'
      ],
      image: 'https://placehold.co/500x400/0f172a/06b6d4?text=WhatsApp+Business',
      pricing: 'Starting from ₹30,000/month'
    },
    {
      title: 'Email Marketing Tools',
      description: 'Professional email marketing solutions to reach and engage your audience effectively.',
      features: [
        'Email campaign management',
        'Template design and customization',
        'List segmentation and targeting',
        'Analytics and performance tracking'
      ],
      image: 'https://placehold.co/500x400/0f172a/3b82f6?text=Email+Marketing',
      pricing: 'Starting from ₹20,000/month'
    },
    {
      title: 'SMS Marketing Platform',
      description: 'Reliable SMS marketing solutions for instant customer communication.',
      features: [
        'Bulk SMS campaigns',
        'Transactional SMS',
        'Two-way SMS communication',
        'Delivery reports and analytics'
      ],
      image: 'https://placehold.co/500x400/0f172a/8b5cf6?text=SMS+Marketing',
      pricing: 'Starting from ₹15,000/month'
    }
  ];

  const faqs = [
    {
      question: 'What communication tools do you offer?',
      answer: 'We provide comprehensive communication and marketing tools including WhatsApp Business API integration, email marketing platforms, SMS marketing solutions, and multi-channel campaign management systems to help you reach your customers effectively.'
    },
    {
      question: 'Can you integrate with our existing CRM?',
      answer: 'Yes, our communication tools can integrate seamlessly with popular CRM systems, marketing automation platforms, and custom applications through APIs. We ensure smooth data flow between your systems.'
    },
    {
      question: 'How do WhatsApp Business solutions work?',
      answer: 'Our WhatsApp Business solutions use the official WhatsApp Business API to enable automated messaging, chatbots, broadcast campaigns, and customer support. We handle the technical setup, integration, and ongoing management.'
    },
    {
      question: 'What kind of analytics do you provide?',
      answer: 'We provide comprehensive analytics including message delivery rates, open rates, click-through rates, conversion tracking, customer engagement metrics, and ROI analysis for all your communication channels.'
    },
    {
      question: 'Is there a minimum commitment period?',
      answer: 'We offer flexible plans starting from 3 months for basic services. Enterprise solutions typically have 6-12 month commitments. We also provide custom packages based on your specific needs and volume requirements.'
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
              <span className="gradient-text">Communication & Marketing Tools</span>
              <br />
              WhatsApp, Email & SMS Solutions
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mt-8">
              Powerful communication platforms to engage customers and drive business growth
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="#contact" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50">
                Get Started
              </a>
              <a href="#services" className="bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-cyan-500">
                View Solutions
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Communication Solutions</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Multi-channel marketing tools to reach and engage your customers
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
              Common questions about our communication and marketing tools
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Boost Your Marketing?</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Connect with customers through WhatsApp, Email, and SMS with our powerful tools
          </p>
          <a href="#contact" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Start Free Trial
          </a>
        </div>
      </section>
    </div>
  );
}
