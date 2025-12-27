'use client';

import { useState } from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

export default function ArtificialIntelligencePage() {
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
    { value: '85%', label: 'Improved Decision Accuracy' },
    { value: '60%', label: 'Cost Reduction Through Automation' },
    { value: '3x', label: 'Faster Data Processing' }
  ];

  const aiTechnologies = [
    { name: 'TensorFlow', icon: '🔷' },
    { name: 'PyTorch', icon: '🔥' },
    { name: 'OpenAI GPT', icon: '🤖' },
    { name: 'LangChain', icon: '⛓️' },
    { name: 'Hugging Face', icon: '🤗' },
    { name: 'Claude AI', icon: '🧠' },
    { name: 'Azure AI', icon: '☁️' },
    { name: 'AWS SageMaker', icon: '📊' },
    { name: 'Google Vertex AI', icon: '🌐' },
    { name: 'Scikit-learn', icon: '📈' },
    { name: 'Keras', icon: '🎯' },
    { name: 'RAG Systems', icon: '🔍' }
  ];

  const caseStudies = [
    {
      title: 'AI-Powered Customer Service Chatbot',
      description: 'Developed an intelligent chatbot using GPT-4 and RAG architecture that handles 10,000+ customer queries daily with natural conversation flow and 95% accuracy.',
      metrics: [
        { label: 'Response Time', value: '-70%' },
        { label: 'Customer Satisfaction', value: '95%' },
        { label: 'Cost Savings', value: '₹4Cr/yr' }
      ],
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop',
      client: 'E-Commerce Giant'
    },
    {
      title: 'Predictive Analytics for Supply Chain',
      description: 'Built ML models that predict demand patterns and optimize inventory management, reducing stockouts by 85% and excess inventory by 60%.',
      metrics: [
        { label: 'Forecast Accuracy', value: '92%' },
        { label: 'Stock Optimization', value: '60%' },
        { label: 'Revenue Impact', value: '+₹16Cr' }
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      client: 'Retail Corporation'
    },
    {
      title: 'Computer Vision Quality Control',
      description: 'Implemented real-time defect detection system using computer vision that processes 1000+ items per minute with 99.5% accuracy, revolutionizing quality assurance.',
      metrics: [
        { label: 'Detection Accuracy', value: '99.5%' },
        { label: 'Processing Speed', value: '1000/min' },
        { label: 'Defect Reduction', value: '88%' }
      ],
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
      client: 'Manufacturing Leader'
    }
  ];

  const services = [
    {
      title: 'Generative AI & Large Language Models',
      description: 'Harness the power of GPT-4, Claude, and custom LLMs to create intelligent solutions that understand, generate, and transform content at scale.',
      features: [
        'Custom ChatGPT integrations and AI assistants',
        'RAG (Retrieval Augmented Generation) systems for enterprise knowledge',
        'Fine-tuned LLMs for industry-specific applications',
        'AI-powered content generation and automation',
        'Prompt engineering and optimization strategies'
      ],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=400&fit=crop',
      pricing: 'Starting from ₹24,00,000'
    },
    {
      title: 'Machine Learning & Predictive Analytics',
      description: 'Transform your data into actionable insights with advanced ML models that predict trends, optimize processes, and drive informed decision-making.',
      features: [
        'Predictive modeling for sales, demand, and risk forecasting',
        'Recommendation engines and personalization systems',
        'Time series analysis and anomaly detection',
        'Customer churn prediction and retention strategies',
        'AutoML solutions for rapid model deployment'
      ],
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=400&fit=crop',
      pricing: 'Starting from ₹28,00,000'
    },
    {
      title: 'Computer Vision & Image Recognition',
      description: 'Enable your systems to see and understand visual data with cutting-edge computer vision technology for automated analysis and decision-making.',
      features: [
        'Object detection and recognition systems',
        'Facial recognition and biometric authentication',
        'Quality control and defect detection automation',
        'Document and OCR processing with AI',
        'Video analytics and real-time monitoring'
      ],
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=400&fit=crop',
      pricing: 'Starting from ₹32,00,000'
    },
    {
      title: 'Natural Language Processing (NLP)',
      description: 'Unlock insights from text data and enable human-like language understanding in your applications with advanced NLP and sentiment analysis.',
      features: [
        'Sentiment analysis and opinion mining',
        'Named entity recognition and text classification',
        'Language translation and multilingual support',
        'Text summarization and information extraction',
        'Voice-to-text and conversational AI'
      ],
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&h=400&fit=crop',
      pricing: 'Starting from ₹22,40,000'
    },
    {
      title: 'AI-Powered Automation & RPA',
      description: 'Combine AI with robotic process automation to eliminate repetitive tasks, reduce errors, and free your team to focus on strategic initiatives.',
      features: [
        'Intelligent document processing and data extraction',
        'Automated workflow orchestration with AI decision-making',
        'Email and communication automation',
        'Business process optimization and automation',
        'Integration with existing enterprise systems'
      ],
      image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=500&h=400&fit=crop',
      pricing: 'Starting from ₹20,00,000'
    },
    {
      title: 'AI Strategy & Consulting',
      description: 'Navigate your AI transformation journey with expert guidance on strategy, implementation roadmap, and best practices for sustainable AI adoption.',
      features: [
        'AI readiness assessment and opportunity analysis',
        'Custom AI strategy and implementation roadmap',
        'Technology stack selection and architecture design',
        'Data strategy and governance framework',
        'Team training and knowledge transfer programs'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=400&fit=crop',
      pricing: 'Starting from ₹16,00,000'
    }
  ];

  const aiCapabilities = [
    {
      icon: '🤖',
      title: 'Intelligent Automation',
      description: 'Automate complex workflows with AI-powered decision-making'
    },
    {
      icon: '📊',
      title: 'Data-Driven Insights',
      description: 'Extract actionable intelligence from your data assets'
    },
    {
      icon: '🎯',
      title: 'Personalization',
      description: 'Deliver hyper-personalized experiences at scale'
    },
    {
      icon: '🔒',
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security with GDPR/HIPAA compliance'
    },
    {
      icon: '⚡',
      title: 'Real-Time Processing',
      description: 'Process and analyze data in milliseconds'
    },
    {
      icon: '🔄',
      title: 'Continuous Learning',
      description: 'Models that improve and adapt over time'
    }
  ];

  const faqs = [
    {
      question: 'What AI technologies and models do you work with?',
      answer: 'We work with cutting-edge AI technologies including GPT-4, Claude, LLaMA, and custom-trained models. Our tech stack includes TensorFlow, PyTorch, LangChain, Hugging Face, and major cloud AI platforms (AWS SageMaker, Azure AI, Google Vertex AI). We specialize in both leveraging pre-trained foundation models and developing custom ML/AI solutions tailored to your specific needs.'
    },
    {
      question: 'How do you ensure AI models are accurate and unbiased?',
      answer: 'We implement rigorous testing protocols including cross-validation, bias detection algorithms, and diverse training datasets. Our process includes regular model audits, performance monitoring, human-in-the-loop validation, and continuous retraining. We follow ethical AI principles and industry best practices to minimize bias and ensure fairness across different user groups.'
    },
    {
      question: 'What is the typical timeline for an AI project?',
      answer: 'Timeline varies by complexity: Simple AI integrations (chatbots, basic ML) take 6-12 weeks. Custom ML models and predictive systems require 3-6 months. Complex enterprise AI solutions (computer vision, NLP systems) can take 6-12 months. We follow an agile approach with regular milestones and can deliver MVP versions early for feedback and iteration.'
    },
    {
      question: 'How much does AI implementation cost?',
      answer: 'Costs depend on project scope, data complexity, and required infrastructure. Basic AI integrations start from ₹16,00,000-₹24,00,000. Custom ML solutions range from ₹28,00,000-₹64,00,000. Enterprise-scale AI systems can exceed ₹80,00,000+. We provide detailed cost estimates after understanding your requirements, data availability, and desired outcomes.'
    },
    {
      question: 'Do I need large amounts of data for AI solutions?',
      answer: 'Not always. Modern techniques like transfer learning, few-shot learning, and pre-trained models allow us to build effective AI solutions with limited data. For custom ML models, quality matters more than quantity. We can leverage synthetic data, data augmentation, and foundation models to work with your existing data assets and gradually scale as more data becomes available.'
    },
    {
      question: 'How do you handle data privacy and security in AI projects?',
      answer: 'We prioritize data security and privacy through encrypted data transmission, secure cloud infrastructure, access controls, and compliance with GDPR, HIPAA, and SOC 2 standards. For sensitive data, we offer on-premise deployment, federated learning, and differential privacy techniques. All our AI solutions include comprehensive security audits and regular vulnerability assessments.'
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -right-40 top-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
          <div className="absolute left-1/2 bottom-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6">
              <span className="text-purple-400">🤖</span>
              <span className="text-sm text-purple-300">Powered by Advanced AI Technologies</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 max-w-6xl mx-auto leading-tight">
              <span className="gradient-text">Artificial Intelligence</span> Solutions
              <br />
              That Transform Businesses &
              <br />
              Drive Innovation
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mt-8">
              Harness the Power of AI, Machine Learning & Generative AI to Automate, Optimize, and Scale Your Business
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="#contact" className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50">
                Get AI Consultation
              </a>
              <a href="#case-studies" className="bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-purple-500">
                View Success Stories
              </a>
            </div>
          </div>

          {/* AI Dashboard Mockup */}
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
                    https://ai-platform.dashboard
                  </div>
                </div>
              </div>

              {/* AI Dashboard Content */}
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {/* AI Metrics Cards */}
                  <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-3xl">🤖</div>
                      <div>
                        <div className="text-2xl font-bold">2.5M</div>
                        <div className="text-sm text-gray-400">AI Queries Processed</div>
                      </div>
                    </div>
                    <div className="text-green-400 text-sm">↑ 145% from last month</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-6 rounded-xl border border-cyan-500/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-3xl">⚡</div>
                      <div>
                        <div className="text-2xl font-bold">95.8%</div>
                        <div className="text-sm text-gray-400">Model Accuracy</div>
                      </div>
                    </div>
                    <div className="text-green-400 text-sm">↑ 8.2% improvement</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-6 rounded-xl border border-green-500/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-3xl">💰</div>
                      <div>
                        <div className="text-2xl font-bold">₹6,77,60,000</div>
                        <div className="text-sm text-gray-400">Cost Savings</div>
                      </div>
                    </div>
                    <div className="text-green-400 text-sm">↑ 62% efficiency gain</div>
                  </div>
                </div>

                {/* AI Model Performance Chart */}
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg">AI Model Performance</h3>
                    <div className="flex gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                        <span className="text-gray-400">Accuracy</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                        <span className="text-gray-400">Speed</span>
                      </div>
                    </div>
                  </div>
                  <div className="h-48 flex items-end justify-between gap-2">
                    {[
                      { accuracy: 75, speed: 60 },
                      { accuracy: 78, speed: 65 },
                      { accuracy: 82, speed: 70 },
                      { accuracy: 85, speed: 75 },
                      { accuracy: 88, speed: 80 },
                      { accuracy: 90, speed: 83 },
                      { accuracy: 92, speed: 85 },
                      { accuracy: 94, speed: 88 },
                      { accuracy: 95, speed: 90 },
                      { accuracy: 96, speed: 92 }
                    ].map((data, i) => (
                      <div key={i} className="flex-1 flex flex-col gap-1">
                        <div className="bg-gradient-to-t from-purple-500 to-purple-400 rounded-t opacity-80" style={{ height: `${data.accuracy}%` }}></div>
                        <div className="bg-gradient-to-t from-cyan-500 to-cyan-400 rounded-t opacity-60" style={{ height: `${data.speed}%` }}></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Capabilities Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['NLP Processing', 'Computer Vision', 'Predictive Analytics', 'Generative AI'].map((capability, index) => (
                    <div key={index} className="bg-gray-800/30 p-4 rounded-lg border border-gray-700 text-center">
                      <div className="text-2xl mb-2">
                        {index === 0 && '💬'}
                        {index === 1 && '👁️'}
                        {index === 2 && '📈'}
                        {index === 3 && '✨'}
                      </div>
                      <div className="text-sm text-gray-300">{capability}</div>
                      <div className="text-xs text-green-400 mt-1">Active</div>
                    </div>
                  ))}
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

      {/* AI Capabilities Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute left-0 top-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute right-0 top-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            Why Choose Our <span className="gradient-text">AI Solutions</span>
          </h2>
          <p className="text-center text-gray-400 text-lg max-w-3xl mx-auto mb-16">
            Enterprise-grade AI capabilities that deliver measurable business outcomes
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {aiCapabilities.map((capability, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <div className="text-4xl mb-4">{capability.icon}</div>
                <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
                <p className="text-gray-400">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
            AI Technologies & Frameworks We <span className="gradient-text">Master</span>
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {aiTechnologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center hover:border-purple-500/50 hover:bg-gray-800/50 transition-all duration-300 group hover:shadow-lg hover:shadow-purple-500/20"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                    {tech.icon}
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
      <section className="py-20 relative overflow-hidden" id="case-studies">
        <div className="absolute inset-0">
          <div className="absolute left-0 top-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute right-0 top-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            Real-World Impact of Our <span className="gradient-text">AI Solutions</span>
          </h2>
          <p className="text-center text-gray-400 text-lg max-w-3xl mx-auto mb-16">
            Discover how we've helped businesses leverage AI to achieve transformative results
          </p>

          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12">
                {/* Case Study Content */}
                <div>
                  <div className="inline-block px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm mb-4">
                    {caseStudies[activeCase].client}
                  </div>
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
                  <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl overflow-hidden border border-purple-500/30">
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
                    activeCase === index ? 'bg-purple-500 w-8' : 'bg-gray-600'
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
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-purple-500/30 rounded-full blur-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
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
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
                    <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                    <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center gradient-text">
            Ready to Transform Your Business with AI?
          </h2>
        </div>
      </section>

      {/* Services Details Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            Comprehensive AI Services for
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-16 gradient-text">
            Every Stage of Your AI Journey
          </h3>

          <div className="max-w-6xl mx-auto space-y-12">
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
                        <span className="text-purple-500 mt-1 text-xl">✓</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 overflow-hidden hover:border-purple-500/50 transition-all duration-300">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-purple-500 font-semibold">{service.pricing}</span>
                    <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300">
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
            Trusted by forward-thinking companies to deliver AI excellence
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'David Chen',
                role: 'Chief Technology Officer',
                company: 'TechVision Inc.',
                avatar: 'https://i.pravatar.cc/150?img=13',
                testimonial: 'Their AI chatbot transformed our customer service. We now handle 10x more queries with 95% satisfaction. The ROI was visible within the first month. Exceptional technical expertise and delivery.'
              },
              {
                name: 'Lisa Anderson',
                role: 'VP of Operations',
                company: 'RetailPro Global',
                avatar: 'https://i.pravatar.cc/150?img=9',
                testimonial: 'The predictive analytics model they built reduced our inventory costs by 60% while improving stock availability. Game-changing impact on our bottom line and customer satisfaction.'
              },
              {
                name: 'Marcus Johnson',
                role: 'Head of Quality',
                company: 'Manufacturing Elite',
                avatar: 'https://i.pravatar.cc/150?img=14',
                testimonial: 'Computer vision solution exceeded expectations. 99.5% defect detection accuracy at incredible speed. Reduced quality issues by 88% and saved us millions in potential recalls.'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-2 border-purple-500"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-sm text-purple-500">{testimonial.company}</div>
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
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Start Your AI Journey</span>
              <br />
              With Expert Guidance
            </h2>
            <p className="text-2xl md:text-3xl text-gray-300">Let's Connect</p>
            <p className="text-gray-400 mt-4">Get a free AI consultation and project estimate within 24 hours</p>
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
                  className="bg-gray-900/50 border border-gray-700 rounded-lg px-6 py-4 focus:outline-none focus:border-purple-500 transition-colors"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-gray-900/50 border border-gray-700 rounded-lg px-6 py-4 focus:outline-none focus:border-purple-500 transition-colors"
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
                  className="bg-gray-900/50 border border-gray-700 rounded-lg px-6 py-4 focus:outline-none focus:border-purple-500 transition-colors"
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="bg-gray-900/50 border border-gray-700 rounded-lg px-6 py-4 focus:outline-none focus:border-purple-500 transition-colors"
                  required
                >
                  <option value="">Select AI Service</option>
                  <option value="generative-ai">Generative AI & LLMs</option>
                  <option value="machine-learning">Machine Learning</option>
                  <option value="computer-vision">Computer Vision</option>
                  <option value="nlp">Natural Language Processing</option>
                  <option value="automation">AI Automation</option>
                  <option value="consulting">AI Strategy & Consulting</option>
                </select>
              </div>

              <textarea
                name="message"
                placeholder="Tell us about your AI needs and business challenges..."
                value={formData.message}
                onChange={handleInputChange}
                rows="6"
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-6 py-4 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold py-4 rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-[1.02]"
              >
                Get Free AI Consultation
              </button>
            </form>

            <div className="mt-12 text-center text-gray-400">
              <p className="mb-2">Or reach us directly at:</p>
              <div className="flex flex-wrap justify-center gap-6">
                <a href="mailto:ai@sdevsolutions.com" className="hover:text-purple-500 transition-colors">
                  📧 ai@sdevsolutions.com
                </a>
                <a href="tel:+1234567890" className="hover:text-purple-500 transition-colors">
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
                  <span className={`text-2xl text-purple-500 transition-transform flex-shrink-0 ${
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
          background: linear-gradient(135deg, #a855f7 0%, #06b6d4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </div>
  );
}
