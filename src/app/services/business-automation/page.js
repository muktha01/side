'use client';

import { useState } from 'react';

export default function BusinessAutomationPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const stats = [
    { value: '80%', label: 'Average Time Savings' },
    { value: '150+', label: 'Automation Projects' },
    { value: '99.5%', label: 'System Uptime' }
  ];

  const services = [
    {
      title: 'CRM Systems',
      description: 'Customer Relationship Management systems to streamline your sales and customer interactions.',
      features: [
        'Lead and pipeline management',
        'Customer data management',
        'Sales automation',
        'Analytics and reporting'
      ],
      image: 'https://placehold.co/500x400/0f172a/06b6d4?text=CRM+System',
      pricing: 'Starting from ₹8,00,000'
    },
    {
      title: 'HRM Solutions',
      description: 'Human Resource Management systems for efficient employee management and HR operations.',
      features: [
        'Employee database management',
        'Attendance and leave tracking',
        'Payroll automation',
        'Performance management'
      ],
      image: 'https://placehold.co/500x400/0f172a/3b82f6?text=HRM+System',
      pricing: 'Starting from ₹10,00,000'
    },
    {
      title: 'ERP Systems',
      description: 'Enterprise Resource Planning solutions to integrate and automate core business processes.',
      features: [
        'Inventory management',
        'Financial management',
        'Supply chain automation',
        'Business intelligence'
      ],
      image: 'https://placehold.co/500x400/0f172a/8b5cf6?text=ERP+System',
      pricing: 'Starting from ₹25,00,000'
    }
  ];

  const faqs = [
    {
      question: 'What is business automation?',
      answer: 'Business automation uses technology to streamline repetitive tasks and processes, reducing manual effort and human error. This includes CRM for sales, HRM for HR operations, ERP for enterprise-wide processes, and workflow automation tools.'
    },
    {
      question: 'How long does implementation take?',
      answer: 'Implementation time varies by system complexity. CRM systems typically take 2-3 months, HRM systems 3-4 months, and comprehensive ERP solutions 6-12 months. We provide detailed timelines during the planning phase.'
    },
    {
      question: 'Can you integrate with our existing systems?',
      answer: 'Yes, we specialize in system integration. We can connect your new automation systems with existing databases, accounting software, communication tools, and other business applications to ensure seamless data flow.'
    },
    {
      question: 'Do you provide training for our team?',
      answer: 'Absolutely! We provide comprehensive training for your team, including user manuals, video tutorials, hands-on workshops, and ongoing support to ensure smooth adoption of the new systems.'
    },
    {
      question: 'What ROI can we expect?',
      answer: 'Most businesses see 30-50% reduction in manual work, 20-40% improvement in productivity, and significant cost savings within 6-12 months. The specific ROI depends on your processes and how extensively you implement automation.'
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
              <span className="gradient-text">Business Automation Systems</span>
              <br />
              CRM, HRM & ERP Solutions
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mt-8">
              Streamline operations and boost productivity with intelligent automation systems
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="#contact" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50">
                Schedule Demo
              </a>
              <a href="#services" className="bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-cyan-500">
                Explore Solutions
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Automation Solutions</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Powerful systems to automate and optimize your business operations
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
              Learn more about our business automation solutions
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Automate Your Business?</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Transform your operations with intelligent automation systems designed for growth
          </p>
          <a href="#contact" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Request Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
