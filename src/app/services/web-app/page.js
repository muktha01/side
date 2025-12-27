'use client';

import { useState } from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import Image from 'next/image';

export default function WebAppDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeCase, setActiveCase] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  const stats = [
    { value: '70+', label: 'Custom Web Applications Delivered' },
    { value: '99%', label: 'Uptime Guarantee' },
    { value: '50%', label: 'Improved Conversion Rates' }
  ];

  const technologies = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' }
  ];

  const caseStudies = [
    {
      title: 'Property Management Solution',
      description: 'Developed a comprehensive property management platform with real-time booking, tenant management, and financial tracking.',
      metrics: [
        { label: 'Faster Load Time', value: '50%' },
        { label: 'Code Coverage', value: '100%' },
        { label: 'User Satisfaction', value: '92%' }
      ],
      image: 'https://placehold.co/600x400/1e293b/06b6d4?text=Property+Management+Dashboard',
      client: 'RealEstate Pro'
    },
    {
      title: 'Financial Analytics Dashboard',
      description: 'Built an enterprise-grade analytics platform with real-time data visualization and predictive insights.',
      metrics: [
        { label: 'Data Processing Speed', value: '3x' },
        { label: 'System Uptime', value: '99.9%' },
        { label: 'User Adoption', value: '85%' }
      ],
      image: 'https://placehold.co/600x400/1e293b/3b82f6?text=Analytics+Platform',
      client: 'FinTech Solutions'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Created a scalable e-commerce solution with advanced inventory management and payment integration.',
      metrics: [
        { label: 'Conversion Rate', value: '45%' },
        { label: 'Page Speed', value: '95/100' },
        { label: 'Revenue Growth', value: '120%' }
      ],
      image: 'https://placehold.co/600x400/1e293b/8b5cf6?text=E-Commerce+Store',
      client: 'ShopMaster'
    }
  ];

  const services = [
    {
      title: 'Enterprise Integration & Customization',
      description: 'Seamlessly integrate your web applications with existing systems and customize every aspect to match your business needs.',
      features: [
        'Custom integrations with CRM, ERP, and payment gateways',
        'API development and third-party service integration',
        'Legacy system modernization and migration',
        'Microservices architecture implementation'
      ],
      image: 'https://placehold.co/500x400/0f172a/06b6d4?text=API+Integration',
      pricing: 'Starting from ₹20,00,000'
    },
    {
      title: 'Architecture Design',
      description: 'Build robust, scalable architectures that grow with your business while maintaining security and performance.',
      features: [
        'Scalable and maintainable architecture patterns',
        'Cloud-native solutions (AWS, Azure, GCP)',
        'Database design and optimization strategies',
        'Security best practices and compliance'
      ],
      image: 'https://placehold.co/500x400/0f172a/3b82f6?text=Cloud+Architecture',
      pricing: 'Starting from ₹24,00,000'
    },
    {
      title: 'Progressive Web Apps & Features',
      description: 'Leverage modern web technologies to deliver app-like experiences with enhanced performance and capabilities.',
      features: [
        'Progressive Web Apps (PWA) development',
        'Real-time features with WebSockets',
        'Performance optimization and caching',
        'Comprehensive testing and quality assurance'
      ],
      image: 'https://placehold.co/500x400/0f172a/8b5cf6?text=PWA+Features',
      pricing: 'Starting from ₹16,00,000'
    }
  ];

  const faqs = [
    {
      question: 'What is web app development?',
      answer: 'Web app development is the process of creating application programs that reside on remote servers and are delivered to users through web browsers. Unlike traditional websites, web applications are interactive and allow users to perform complex tasks, store data, and have personalized experiences.'
    },
    {
      question: 'How do web apps differ from websites?',
      answer: 'While websites are primarily informational and static, web applications are interactive platforms that allow users to manipulate data and perform specific tasks. Web apps offer features like user authentication, data processing, real-time updates, and complex workflows that traditional websites don\'t provide.'
    },
    {
      question: 'What technologies do you use for web app development?',
      answer: 'We use a modern tech stack including React, Next.js, Node.js, TypeScript, Python, and various databases like MongoDB and PostgreSQL. We also leverage cloud platforms like AWS, containerization with Docker, and implement GraphQL APIs for efficient data management.'
    },
    {
      question: 'Do you provide web app maintenance and support?',
      answer: 'Yes, we offer comprehensive maintenance and support services including regular updates, security patches, performance monitoring, bug fixes, and feature enhancements. We ensure your web application remains secure, performant, and up-to-date with the latest technologies.'
    },
    {
      question: 'How much does it cost to develop a web app?',
      answer: 'The cost varies based on complexity, features, integrations, and design requirements. A basic web app might start from ₹12,00,000-₹24,00,000, while enterprise-level applications can range from ₹40,00,000-₹1,60,00,000+. We provide detailed estimates after understanding your specific requirements.'
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -right-40 top-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 max-w-6xl mx-auto leading-tight">
              <span className="gradient-text">Web App Development</span> Agency
              <br />
              Delivering Scalable and Secure
              <br />
              Solutions
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mt-8">
              Web Application Development Services Tailored for Business Growth
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="#contact" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50">
                Get Free Consultation
              </a>
              <a href="#case-studies" className="bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-cyan-500">
                View Our Work
              </a>
            </div>
          </div>

          {/* Dashboard Mockup */}
          <div className="max-w-6xl mx-auto mt-16">
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">
              {/* Browser Header */}
              <div className="bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-gray-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-gray-900 rounded px-3 py-1 text-xs text-gray-400">
                    https://your-webapp.com
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 md:p-8">
                <div className="relative w-full h-96 mb-6 rounded-xl overflow-hidden">
                  <img 
                    src="https://placehold.co/1200x600/0f172a/06b6d4?text=Modern+Web+Dashboard+Interface" 
                    alt="Web Application Dashboard Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {/* Stat Cards */}
                  <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-6 rounded-xl border border-cyan-500/20">
                    <div className="text-3xl mb-2">📊</div>
                    <div className="text-2xl font-bold">₹36,18,480</div>
                    <div className="text-sm text-gray-400">Total Revenue</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20">
                    <div className="text-3xl mb-2">👥</div>
                    <div className="text-2xl font-bold">1,429</div>
                    <div className="text-sm text-gray-400">Active Users</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-6 rounded-xl border border-green-500/20">
                    <div className="text-3xl mb-2">📈</div>
                    <div className="text-2xl font-bold">+23%</div>
                    <div className="text-sm text-gray-400">Growth Rate</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Chart Area */}
                  <div className="lg:col-span-2 bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                    <h3 className="font-semibold mb-4">Analytics Overview</h3>
                    <div className="h-48 flex items-end justify-between gap-2">
                      {[40, 65, 45, 80, 55, 75, 60, 85, 70, 90, 75, 95].map((height, i) => (
                        <div key={i} className="flex-1 bg-gradient-to-t from-cyan-500 to-blue-500 rounded-t opacity-80" style={{ height: `${height}%` }}></div>
                      ))}
                    </div>
                  </div>

                  {/* Calendar */}
                  <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                    <h3 className="font-semibold mb-4">Schedule</h3>
                    <div className="grid grid-cols-7 gap-2 text-center text-xs">
                      {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                        <div key={i} className="text-gray-500 font-medium">{day}</div>
                      ))}
                      {Array.from({ length: 28 }, (_, i) => (
                        <div key={i} className={`p-2 rounded ${i === 15 ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:bg-gray-700'}`}>
                          {i + 1}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold gradient-text mb-4">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 relative overflow-hidden border-y border-gray-800">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-gray-400 text-sm uppercase tracking-wider mb-8">
            Trusted by Leading Companies Worldwide
          </h3>
          <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap opacity-60 hover:opacity-100 transition-opacity duration-300">
            {[
              { name: 'Company 1', url: 'https://placehold.co/150x60/1e293b/06b6d4?text=TechCorp' },
              { name: 'Company 2', url: 'https://placehold.co/150x60/1e293b/06b6d4?text=InnovateLabs' },
              { name: 'Company 3', url: 'https://placehold.co/150x60/1e293b/06b6d4?text=GlobalSoft' },
              { name: 'Company 4', url: 'https://placehold.co/150x60/1e293b/06b6d4?text=DataPro' },
              { name: 'Company 5', url: 'https://placehold.co/150x60/1e293b/06b6d4?text=CloudBase' },
              { name: 'Company 6', url: 'https://placehold.co/150x60/1e293b/06b6d4?text=SmartTech' }
            ].map((client, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
                <img 
                  src={client.url}
                  alt={client.name}
                  className="h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
            Web App Development Tools We Are <span className="gradient-text">Specialized In</span>
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center hover:border-cyan-500/50 hover:bg-gray-800/50 transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <img 
                      src={tech.logo} 
                      alt={`${tech.name} logo`}
                      className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110"
                    />
                  </div>
                  <div className="text-sm font-medium text-gray-300">
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute left-0 top-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute right-0 top-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            Success Stories — Real Impact of Our <span className="gradient-text">Web Developers</span>
          </h2>
          <p className="text-center text-gray-400 text-lg max-w-3xl mx-auto mb-8">
            Discover how we've helped businesses transform their digital presence with custom web applications
          </p>

          <div className="max-w-6xl mx-auto mt-16" id="case-studies">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12">
                {/* Case Study Content */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {caseStudies[activeCase].title}
                  </h3>
                  <p className="text-gray-400 mb-8">
                    {caseStudies[activeCase].description}
                  </p>

                  <div className="grid grid-cols-3 gap-4">
                    {caseStudies[activeCase].metrics.map((metric, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl font-bold gradient-text mb-2">
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-400">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Case Study Visual */}
                <div className="flex items-center justify-center">
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl overflow-hidden border border-cyan-500/30">
                    <img 
                      src={caseStudies[activeCase].image}
                      alt={caseStudies[activeCase].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-8">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCase(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeCase === index ? 'bg-cyan-500 w-8' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Let's Innovate Together */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[300px] relative">
            {/* Portal Effect */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-cyan-500/30 rounded-full blur-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
              
              {/* Arch Lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 300">
                <path
                  d="M 50 300 Q 50 150 300 50 Q 550 150 550 300"
                  fill="none"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                  opacity="0.5"
                />
                <path
                  d="M 100 300 Q 100 180 300 100 Q 500 180 500 300"
                  fill="none"
                  stroke="url(#gradient2)"
                  strokeWidth="2"
                  opacity="0.3"
                />
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                    <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center gradient-text">
            Let's Innovate Together
          </h2>
        </div>
      </section>

      {/* Services Details Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            Web App Development Services Designed for
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-16 gradient-text">
            Scalability, Security & Seamless Integration
          </h3>

          <div className="max-w-6xl mx-auto space-y-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <span className="text-green-500 mt-1">✓</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-cyan-500 font-semibold">{service.pricing}</span>
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute left-0 top-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute right-0 top-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-center text-gray-400 text-lg max-w-2xl mx-auto mb-16">
            Don't just take our word for it - hear from businesses we've helped transform
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {
              [
                {
                  name: 'Sarah Johnson',
                  role: 'CTO',
                  company: 'TechVentures Inc.',
                  avatar: 'https://i.pravatar.cc/150?img=1',
                  testimonial: 'The web application they built exceeded our expectations. The performance is outstanding, and the user experience is seamless. Our customer engagement increased by 85%.'
                },
                {
                  name: 'Michael Chen',
                  role: 'Product Manager',
                  company: 'FinanceHub',
                  avatar: 'https://i.pravatar.cc/150?img=12',
                  testimonial: 'Professional team with deep technical expertise. They delivered our complex financial dashboard on time and within budget. The scalability they built in has been crucial for our growth.'
                },
                {
                  name: 'Emily Rodriguez',
                  role: 'CEO',
                  company: 'ShopSmart',
                  avatar: 'https://i.pravatar.cc/150?img=5',
                  testimonial: 'Outstanding e-commerce platform development. The integration with our existing systems was flawless. Sales increased by 120% in the first quarter after launch.'
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                  <div className="flex items-center gap-4 mb-6">
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full border-2 border-cyan-500"
                    />
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                      <div className="text-sm text-cyan-500">{testimonial.company}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    "{testimonial.testimonial}"
                  </p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-500">★</span>
                    ))}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Start Your Journey</span>
              <br />
              To Better Business
            </h2>
            <p className="text-2xl md:text-3xl text-gray-300">Let's Connect</p>
            <p className="text-gray-400 mt-4">Get a free consultation and project estimate within 24 hours</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-gray-900/50 border border-gray-700 rounded-lg px-6 py-4 focus:outline-none focus:border-cyan-500 transition-colors"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-gray-900/50 border border-gray-700 rounded-lg px-6 py-4 focus:outline-none focus:border-cyan-500 transition-colors"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-gray-900/50 border border-gray-700 rounded-lg px-6 py-4 focus:outline-none focus:border-cyan-500 transition-colors"
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="bg-gray-900/50 border border-gray-700 rounded-lg px-6 py-4 focus:outline-none focus:border-cyan-500 transition-colors"
                  required
                >
                  <option value="">Select Service</option>
                  <option value="web-app">Web App Development</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="cloud">Cloud & DevOps</option>
                  <option value="ai">AI Solutions</option>
                  <option value="data">Data Analytics</option>
                </select>
              </div>

              <textarea
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleInputChange}
                rows="6"
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-6 py-4 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-4 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-[1.02]"
              >
                Submit
              </button>
            </form>

            <div className="mt-12 text-center text-gray-400">
              <p className="mb-2">Or reach us directly at:</p>
              <div className="flex flex-wrap justify-center gap-6">
                <a href="mailto:contact@example.com" className="hover:text-cyan-500 transition-colors">
                  📧 contact@example.com
                </a>
                <a href="tel:+1234567890" className="hover:text-cyan-500 transition-colors">
                  📞 +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-lg pr-8">
                    {faq.question}
                  </span>
                  <span className={`text-2xl text-cyan-500 transition-transform flex-shrink-0 ${
                    openFaq === index ? 'rotate-45' : ''
                  }`}>
                    +
                  </span>
                </button>
                
                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Add gradient text styles */}
      <style jsx>{`
        .gradient-text {
          background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </div>
  );
}
