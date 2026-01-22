'use client';

import { useState } from 'react';

export default function CivilDesignCoursesPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const stats = [
    { value: '1000+', label: 'Students Trained' },
    { value: '25+', label: 'Expert Instructors' },
    { value: '90%', label: 'Placement Rate' }
  ];

  const services = [
    {
      title: 'Civil Engineering Courses',
      description: 'Comprehensive civil engineering training covering structural design, construction management, and more.',
      features: [
        'Structural analysis and design',
        'Construction planning',
        'Site management techniques',
        'Civil engineering software training'
      ],
      image: 'https://placehold.co/500x400/0f172a/06b6d4?text=Civil+Engineering',
      pricing: 'Starting from ₹40,000'
    },
    {
      title: '3D Design & Modeling',
      description: 'Master 3D design tools like AutoCAD, Revit, SketchUp, and 3ds Max for architectural visualization.',
      features: [
        'AutoCAD 2D/3D drafting',
        'Revit BIM modeling',
        'SketchUp architectural design',
        '3ds Max rendering'
      ],
      image: 'https://placehold.co/500x400/0f172a/3b82f6?text=3D+Design',
      pricing: 'Starting from ₹35,000'
    },
    {
      title: 'Interior Design Courses',
      description: 'Professional interior design training with hands-on projects and industry-standard tools.',
      features: [
        'Space planning and layout',
        'Color theory and materials',
        'Interior design software',
        'Portfolio development'
      ],
      image: 'https://placehold.co/500x400/0f172a/8b5cf6?text=Interior+Design',
      pricing: 'Starting from ₹30,000'
    }
  ];

  const faqs = [
    {
      question: 'What courses do you offer in civil and design?',
      answer: 'We offer comprehensive courses in civil engineering, structural design, construction planning, AutoCAD, Revit, SketchUp, 3ds Max, interior design, and architectural visualization. All courses include hands-on training with industry-standard software.'
    },
    {
      question: 'Are these courses suitable for beginners?',
      answer: 'Yes! We offer courses for all levels - from beginners with no prior experience to advanced professionals looking to upgrade their skills. Our instructors adapt the pace and content to match student needs.'
    },
    {
      question: 'What is the course duration?',
      answer: 'Course duration varies: short-term courses run 1-3 months, diploma programs are 6 months, and advanced certification programs can be 9-12 months. We also offer weekend and flexible batches for working professionals.'
    },
    {
      question: 'Do you provide placement assistance?',
      answer: 'Yes, we provide comprehensive placement assistance including resume building, interview preparation, and connections with our industry partners. Our placement team works actively to help students secure relevant positions.'
    },
    {
      question: 'Will I get certification after completion?',
      answer: 'Yes, upon successful completion of the course and final assessment, you\'ll receive an industry-recognized certificate. For software courses, we also help you prepare for official vendor certifications like Autodesk.'
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
              <span className="gradient-text">Civil & Design Courses</span>
              <br />
              Build Your Future in Design
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mt-8">
              Professional training in civil engineering, 3D design, and interior design with placement support
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="#contact" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50">
                Enroll Now
              </a>
              <a href="#services" className="bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-cyan-500">
                View Courses
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Training Programs</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Industry-focused courses designed to make you job-ready
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
              Common questions about our civil and design courses
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Join our courses and get hands-on training from industry experts with placement support
          </p>
          <a href="#contact" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Enroll Today
          </a>
        </div>
      </section>
    </div>
  );
}
