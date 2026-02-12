'use client';

import { useState } from 'react';
import React from 'react';
import { Cloud, Shield, GitBranch, Settings, Monitor, RefreshCw, Star, Wrench, Globe, Rocket } from 'lucide-react';

export default function CloudDevOpsPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  // Icon wrapper component
  const IconWrapper = ({ icon: Icon, className = "w-10 h-10 mx-auto text-cyan-400" }) => {
    if (typeof Icon === 'string') {
      return <div className="text-4xl">{Icon}</div>;
    }
    return <Icon className={className} strokeWidth={1.5} />;
  };

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
    { value: '60%', label: 'Operation Costs Reduced' },
    { value: '5-Star', label: '5-Star Rated DevOps Services' },
    { value: '75%', label: 'Production Deployment Speed' }
  ];

  const tools = [
    { name: 'Docker', icon: '🐳' },
    { name: 'Kubernetes', icon: '☸️' },
    { name: 'Jenkins', icon: Wrench },
    { name: 'Git/GitHub', icon: '📦' },
    { name: 'Terraform', icon: '🏗️' },
    { name: 'Ansible', icon: Settings },
    { name: 'AWS', icon: '☁️' },
    { name: 'Azure', icon: '🔷' },
    { name: 'Google Cloud', icon: Globe },
    { name: 'GitLab CI/CD', icon: Rocket }
  ];

  const processes = [
    {
      title: 'Seamless Migration and Infrastructure Management',
      description: 'We ensure smooth cloud migration and robust infrastructure management for optimal performance and scalability.',
      features: [
        'Cloud migration strategies and planning',
        'Infrastructure as Code (IaC) with Terraform',
        'Multi-cloud and hybrid cloud solutions',
        'Cost optimization and resource management'
      ],
      icon: Monitor
    },
    {
      title: 'Continuous Integration and Deployment (CI/CD)',
      description: 'Automate your software delivery pipeline for faster, more reliable releases with our CI/CD solutions.',
      features: [
        'Automated build and testing pipelines',
        'Continuous Delivery for Reliable Releases',
        'Version control and collaboration tools',
        'Rollback and deployment strategies'
      ],
      icon: RefreshCw
    },
    {
      title: 'Security, Monitoring, and Governance Management',
      description: 'Protect your infrastructure with comprehensive security measures, real-time monitoring, and compliance management.',
      features: [
        'Security best practices and compliance',
        'Real-time monitoring and alerting',
        'Log management and analysis',
        'Disaster recovery and backup strategies'
      ],
      icon: Shield
    }
  ];

  const faqs = [
    {
      question: 'What cloud platforms do you specialize in?',
      answer: 'We specialize in all major cloud platforms including Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP). Our team has extensive experience in multi-cloud and hybrid cloud architectures, enabling us to recommend and implement the best solution for your specific business needs.'
    },
    {
      question: 'How do DevOps tools help my project?',
      answer: 'DevOps tools automate and streamline your software development lifecycle, from code integration and testing to deployment and monitoring. This results in faster release cycles, improved collaboration between teams, reduced errors, better quality control, and increased operational efficiency. Tools like Docker, Kubernetes, and Jenkins enable continuous integration and delivery, while Terraform and Ansible provide infrastructure automation.'
    },
    {
      question: 'What is the cost of your DevOps services?',
      answer: 'The cost varies based on your infrastructure size, complexity, required services, and project scope. We offer flexible pricing models including fixed-price projects, monthly retainers, and hourly consulting. Typically, initial setup and migration projects range from ₹16,00,000-₹80,00,000+, while ongoing managed services start from ₹4,00,000/month. Contact us for a detailed quote tailored to your needs.'
    },
    {
      question: 'How do you optimize cloud costs?',
      answer: 'We employ multiple strategies for cloud cost optimization including right-sizing resources, implementing auto-scaling, utilizing reserved instances and spot instances, optimizing storage tiers, removing unused resources, implementing efficient caching strategies, and continuous monitoring with cost alerts. Our clients typically see 30-60% reduction in cloud spending after optimization.'
    },
    {
      question: 'Can you handle enterprise-level cloud services?',
      answer: 'Absolutely. We have extensive experience managing enterprise-level cloud infrastructures for Fortune 500 companies. Our team handles complex requirements including multi-region deployments, high-availability architectures, disaster recovery planning, security compliance (SOC 2, HIPAA, GDPR), large-scale migrations, and 24/7 support with guaranteed SLAs.'
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -right-40 top-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 max-w-6xl mx-auto leading-tight">
              Managed <span className="gradient-text">Cloud & DevOps</span>
              <br />
              Consulting Services For Scalable,
              <br />
              Secure Systems
            </h1>
          </div>

          {/* Dashboard Mockup */}
          <div className="max-w-6xl mx-auto">
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
                    https://cloud-monitoring.dashboard
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="flex">
                {/* Sidebar */}
                <div className="w-16 md:w-20 bg-gray-900 border-r border-gray-700 py-6 flex flex-col items-center gap-6">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-500">📊</div>
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">🖥️</div>
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">📈</div>
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">⚙️</div>
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">🔔</div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6 md:p-8">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-4">System Performance Overview</h3>
                    
                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="bg-gray-800/50 p-4 rounded-lg">
                        <div className="text-xs text-gray-400 mb-1">CPU Usage</div>
                        <div className="text-2xl font-bold text-cyan-400">47%</div>
                      </div>
                      <div className="bg-gray-800/50 p-4 rounded-lg">
                        <div className="text-xs text-gray-400 mb-1">Memory</div>
                        <div className="text-2xl font-bold text-green-400">62%</div>
                      </div>
                      <div className="bg-gray-800/50 p-4 rounded-lg">
                        <div className="text-xs text-gray-400 mb-1">Uptime</div>
                        <div className="text-2xl font-bold text-blue-400">99.9%</div>
                      </div>
                      <div className="bg-gray-800/50 p-4 rounded-lg">
                        <div className="text-xs text-gray-400 mb-1">Requests</div>
                        <div className="text-2xl font-bold text-purple-400">12.5K</div>
                      </div>
                    </div>

                    {/* Chart */}
                    <div className="bg-gray-800/30 rounded-lg p-4">
                      <div className="flex items-end h-48 gap-1">
                        {[30, 45, 35, 60, 40, 70, 50, 80, 60, 75, 55, 85, 65, 90, 70, 85, 75, 95, 80, 85].map((height, i) => (
                          <div key={i} className="flex-1 bg-gradient-to-t from-cyan-500 to-blue-500 rounded-t opacity-70 hover:opacity-100 transition-opacity" style={{ height: `${height}%` }}></div>
                        ))}
                      </div>
                      <div className="flex justify-between mt-2 text-xs text-gray-500">
                        <span>00:00</span>
                        <span>06:00</span>
                        <span>12:00</span>
                        <span>18:00</span>
                        <span>24:00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Subheading */}
          <div className="text-center mt-16 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              A DevOps Company Delivering Scalable, Secure, and Reliable Systems
            </h2>
            <p className="text-gray-400 text-lg">
              We streamline your development and operations with cutting-edge DevOps practices, 
              cloud infrastructure optimization, and continuous delivery pipelines that accelerate your business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                {stat.isIcon ? (
                  <div className="text-6xl mb-4">{stat.value}</div>
                ) : (
                  <div className="text-5xl md:text-6xl font-bold gradient-text mb-4">
                    {stat.value}
                  </div>
                )}
                <div className="text-gray-400 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
            Cloud & DevOps Tools We Are <span className="gradient-text">Specialized In</span>
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-4">
              {tools.slice(0, 8).map((tool, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center hover:border-cyan-500/50 hover:bg-gray-800/50 transition-all duration-300 group"
                >
                  <div className="mb-3 group-hover:scale-110 transition-transform">
                    <IconWrapper icon={tool.icon} />
                  </div>
                  <div className="text-sm font-medium text-gray-300">
                    {tool.name}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Row Centered */}
            <div className="flex justify-center gap-4">
              {tools.slice(8).map((tool, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center hover:border-cyan-500/50 hover:bg-gray-800/50 transition-all duration-300 group w-40"
                >
                  <div className="mb-3 group-hover:scale-110 transition-transform">
                    <IconWrapper icon={tool.icon} />
                  </div>
                  <div className="text-sm font-medium text-gray-300">
                    {tool.name}
                  </div>
                </div>
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
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-blue-500/30 rounded-full blur-2xl"></div>
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

      {/* Process Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            Our Proven DevOps Consulting Process
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-16 gradient-text">
            for Seamless Cloud Integration & Scalability
          </h3>

          <div className="max-w-6xl mx-auto space-y-12">
            {processes.map((process, index) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {process.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {process.description}
                  </p>
                  <ul className="space-y-3">
                    {process.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <span className="text-green-500 mt-1">✓</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 p-12 h-80 flex items-center justify-center">
                    <div className="text-center">
                      <div className="mb-4 flex justify-center">
                        <IconWrapper icon={process.icon} className="w-24 h-24 text-cyan-400" />
                      </div>
                      <div className="text-gray-500 text-sm max-w-xs">
                        {process.title.split(' ').slice(0, 3).join(' ')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-black to-gray-900">
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
          </div>

          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  <option value="cloud-migration">Cloud Migration</option>
                  <option value="devops-consulting">DevOps Consulting</option>
                  <option value="ci-cd">CI/CD Implementation</option>
                  <option value="infrastructure">Infrastructure Management</option>
                  <option value="monitoring">Monitoring & Security</option>
                  <option value="cost-optimization">Cost Optimization</option>
                </select>
              </div>

              <textarea
                name="message"
                placeholder="Tell us about your infrastructure needs..."
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
                <a href="mailto:devops@example.com" className="hover:text-cyan-500 transition-colors">
                  📧 devops@example.com
                </a>
                <a href="tel:+919381820806" className="hover:text-cyan-500 transition-colors">
                  📞 +91 93818 20806
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
