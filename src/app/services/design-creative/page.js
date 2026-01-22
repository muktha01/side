'use client';

import { useState } from 'react';

export default function DesignCreativePage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const stats = [
    { value: '500+', label: 'Creative Projects Completed' },
    { value: '95%', label: 'Client Satisfaction' },
    { value: '50+', label: 'Brands Transformed' }
  ];

  const services = [
    {
      title: 'Graphic Design',
      description: 'Eye-catching graphic designs that communicate your brand message effectively.',
      features: [
        'Marketing collateral design',
        'Social media graphics',
        'Infographics and illustrations',
        'Print design materials'
      ],
      image: 'https://placehold.co/500x400/0f172a/06b6d4?text=Graphic+Design',
      pricing: 'Starting from ₹15,000'
    },
    {
      title: 'Logo Design & Branding',
      description: 'Create a memorable brand identity with professional logo design and brand guidelines.',
      features: [
        'Custom logo design',
        'Brand identity development',
        'Brand style guide',
        'Business card design'
      ],
      image: 'https://placehold.co/500x400/0f172a/3b82f6?text=Logo+Design',
      pricing: 'Starting from ₹25,000'
    },
    {
      title: 'Creative Content',
      description: 'Engaging creative content that captures attention and drives engagement.',
      features: [
        'Video editing and production',
        'Animation and motion graphics',
        'Photo editing and retouching',
        'Creative copywriting'
      ],
      image: 'https://placehold.co/500x400/0f172a/8b5cf6?text=Creative+Content',
      pricing: 'Starting from ₹20,000'
    }
  ];

  const faqs = [
    {
      question: 'What design services do you offer?',
      answer: 'We offer comprehensive design services including graphic design, logo creation, brand identity development, marketing materials, social media graphics, video editing, animation, and more. Our team handles everything from concept to final delivery.'
    },
    {
      question: 'How long does a typical design project take?',
      answer: 'Logo design typically takes 1-2 weeks, while comprehensive branding projects can take 3-4 weeks. Social media graphics and marketing materials are usually delivered within 3-5 business days. We provide specific timelines based on your project scope.'
    },
    {
      question: 'Can you match our existing brand guidelines?',
      answer: 'Absolutely! We can work within your existing brand guidelines or help develop new ones. Our team ensures all designs are consistent with your brand identity, colors, fonts, and style preferences.'
    },
    {
      question: 'What file formats will I receive?',
      answer: 'You\'ll receive designs in multiple formats suitable for different uses - AI, EPS, PDF for print, PNG, JPG for digital use, and source files. For logos, you\'ll get vector files that can be scaled to any size without quality loss.'
    },
    {
      question: 'Do you provide unlimited revisions?',
      answer: 'Our packages include a specific number of revision rounds (typically 3-5) to refine the designs. Additional revisions beyond the package can be accommodated for an additional fee. We work closely with you to get it right.'
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
              <span className="gradient-text">Design & Creative Services</span>
              <br />
              Bringing Your Vision to Life
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mt-8">
              Professional graphic design, logos, and creative content that makes your brand stand out
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="#contact" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50">
                Start Your Project
              </a>
              <a href="#services" className="bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-cyan-500">
                View Portfolio
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Creative Services</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From logos to complete brand identities, we create designs that leave lasting impressions
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
              Everything you need to know about our design services
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Brand?</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Let's create stunning designs that capture attention and communicate your message
          </p>
          <a href="#contact" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
}
