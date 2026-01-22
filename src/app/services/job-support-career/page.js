'use client';

import { useState } from 'react';

export default function JobSupportCareerPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const stats = [
    { value: '500+', label: 'Professionals Supported' },
    { value: '95%', label: 'Success Rate' },
    { value: '50+', label: 'Technologies Covered' }
  ];

  const services = [
    {
      title: 'Job Support Services',
      description: 'Expert technical support for professionals working on live projects.',
      features: [
        'Daily job support sessions',
        'Real-time problem solving',
        'Project assistance',
        'Code reviews and debugging'
      ],
      image: 'https://placehold.co/500x400/0f172a/06b6d4?text=Job+Support',
      pricing: 'Starting from ₹15,000/month'
    },
    {
      title: 'Career Guidance & Mentorship',
      description: 'Personalized career guidance to help you achieve your professional goals.',
      features: [
        'Career path planning',
        'Resume and LinkedIn optimization',
        'Interview preparation',
        'Skill development roadmap'
      ],
      image: 'https://placehold.co/500x400/0f172a/3b82f6?text=Career+Guidance',
      pricing: 'Starting from ₹10,000'
    },
    {
      title: 'Technical Training & Placement',
      description: 'Comprehensive training programs with placement assistance for IT professionals.',
      features: [
        'Hands-on technical training',
        'Real-world project experience',
        'Mock interviews and assessments',
        'Placement assistance and referrals'
      ],
      image: 'https://placehold.co/500x400/0f172a/8b5cf6?text=Training+Placement',
      pricing: 'Starting from ₹25,000'
    }
  ];

  const faqs = [
    {
      question: 'What is job support exactly?',
      answer: 'Job support is one-on-one assistance from experienced professionals who help you with your daily work tasks, projects, and technical challenges. It\'s ideal for professionals who need guidance on live projects or are transitioning to new roles.'
    },
    {
      question: 'What technologies do you provide support for?',
      answer: 'We provide support for a wide range of technologies including Java, Python, React, Node.js, AWS, Azure, Data Science, Machine Learning, DevOps, Salesforce, SAP, and many more. Contact us for specific technology requirements.'
    },
    {
      question: 'How are support sessions conducted?',
      answer: 'Support sessions are conducted online via screen sharing and video calls at mutually convenient times. We offer flexible scheduling including early morning, evening, and weekend slots to accommodate different time zones.'
    },
    {
      question: 'What about confidentiality?',
      answer: 'We maintain strict confidentiality and sign NDAs if required. All project information, code, and company details shared during support sessions are kept completely confidential and secure.'
    },
    {
      question: 'Do you provide placement assistance?',
      answer: 'Yes, we offer placement assistance as part of our training programs. This includes resume building, interview preparation, referrals to our partner companies, and guidance throughout the job search process.'
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
              <span className="gradient-text">Job Support & Career Services</span>
              <br />
              Your Success Partner
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mt-8">
              Expert technical support, career guidance, and training to accelerate your professional growth
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="#contact" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50">
                Get Support
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Support Services</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive career and technical support to help you succeed
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
              Everything you need to know about our job support services
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Accelerate Your Career?</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Get expert support and guidance to overcome challenges and achieve your career goals
          </p>
          <a href="#contact" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Book Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
