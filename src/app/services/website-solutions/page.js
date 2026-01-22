'use client';

import { useState } from 'react';

export default function WebsiteSolutionsPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const stats = [
    { value: '200+', label: 'Websites Delivered' },
    { value: '95+', label: 'Average PageSpeed Score' },
    { value: '3x', label: 'Faster Load Times' }
  ];

  const services = [
    {
      title: 'Corporate Websites',
      description: 'Professional corporate websites that establish your brand presence and credibility online.',
      features: [
        'Responsive design for all devices',
        'SEO-optimized architecture',
        'Content management system',
        'Performance optimization'
      ],
      image: 'https://placehold.co/500x400/0f172a/06b6d4?text=Corporate+Website',
      pricing: 'Starting from ₹50,000'
    },
    {
      title: 'E-Commerce Websites',
      description: 'Full-featured online stores with secure payment integration and inventory management.',
      features: [
        'Product catalog management',
        'Payment gateway integration',
        'Shopping cart functionality',
        'Order management system'
      ],
      image: 'https://placehold.co/500x400/0f172a/3b82f6?text=E-Commerce',
      pricing: 'Starting from ₹1,50,000'
    },
    {
      title: 'Landing Pages',
      description: 'High-converting landing pages designed to capture leads and drive conversions.',
      features: [
        'Conversion-focused design',
        'A/B testing capabilities',
        'Form integration',
        'Analytics setup'
      ],
      image: 'https://placehold.co/500x400/0f172a/8b5cf6?text=Landing+Page',
      pricing: 'Starting from ₹25,000'
    }
  ];

  const faqs = [
    {
      question: 'What makes your website solutions different?',
      answer: 'We focus on creating high-performance, SEO-optimized websites with modern design principles. Every website is built with scalability, security, and user experience in mind, ensuring your online presence drives business results.'
    },
    {
      question: 'How long does it take to build a website?',
      answer: 'A basic corporate website takes 2-4 weeks, while complex e-commerce sites can take 8-12 weeks. The timeline depends on features, content, and design requirements. We provide a detailed project schedule during planning.'
    },
    {
      question: 'Will my website be mobile-friendly?',
      answer: 'Absolutely! All our websites are fully responsive and optimized for mobile devices. We follow mobile-first design principles to ensure your site looks and performs great on all screen sizes.'
    },
    {
      question: 'Do you provide website maintenance?',
      answer: 'Yes, we offer comprehensive maintenance packages including regular updates, security patches, content updates, performance monitoring, and technical support to keep your website running smoothly.'
    },
    {
      question: 'Can you help with website redesign?',
      answer: 'Yes, we specialize in website redesigns. We analyze your current site, identify areas for improvement, and create a modern, high-performing website while preserving your SEO rankings and migrating all important content.'
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
              <span className="gradient-text">Website Solutions</span>
              <br />
              That Drive Business Growth
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mt-8">
              Professional website design and development services for businesses of all sizes
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="#contact" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50">
                Get Started
              </a>
              <a href="#services" className="bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-cyan-500">
                View Services
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Website Solutions</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From corporate websites to e-commerce platforms, we build digital experiences that convert
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
              Common questions about our website solutions
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Launch Your Website?</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Let's create a stunning website that represents your brand and drives results
          </p>
          <a href="#contact" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Request a Quote
          </a>
        </div>
      </section>
    </div>
  );
}
