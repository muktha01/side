'use client';
import { useState } from 'react';

export default function DataAnalyticsPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    {
      title: "Business Intelligence & Reporting",
      description: "Custom dashboards, KPI tracking, executive reporting, and real-time business insights.",
      icon: "📊",
      features: ["Interactive Dashboards", "KPI Tracking", "Executive Reports", "Real-time Analytics"]
    },
    {
      title: "Data Warehousing",
      description: "ETL pipelines, data lake architecture, cloud data warehouses, and data integration.",
      icon: "🏗️",
      features: ["ETL Development", "Data Lakes", "Cloud Warehouses", "Data Integration"]
    },
    {
      title: "Advanced Analytics",
      description: "Statistical analysis, predictive modeling, forecasting, and trend analysis.",
      icon: "🔬",
      features: ["Statistical Analysis", "Predictive Modeling", "Forecasting", "Trend Analysis"]
    },
    {
      title: "Big Data Solutions",
      description: "Hadoop, Spark, real-time processing, streaming analytics, and scalable data platforms.",
      icon: "💾",
      features: ["Hadoop & Spark", "Real-time Processing", "Stream Analytics", "Scalable Platforms"]
    },
    {
      title: "Data Visualization",
      description: "Interactive dashboards, custom reports, data storytelling, and visual analytics.",
      icon: "📈",
      features: ["Interactive Dashboards", "Custom Reports", "Data Storytelling", "Visual Analytics"]
    },
    {
      title: "Data Engineering",
      description: "Pipeline development, data integration, automation, and infrastructure management.",
      icon: "⚙️",
      features: ["Pipeline Development", "Data Integration", "Automation", "Infrastructure"]
    },
    {
      title: "Data Strategy & Consulting",
      description: "Data governance, roadmap planning, architecture design, and best practices.",
      icon: "🎯",
      features: ["Data Governance", "Roadmap Planning", "Architecture Design", "Best Practices"]
    },
    {
      title: "Self-Service Analytics",
      description: "Empowering business users with tools, training, and self-service capabilities.",
      icon: "👥",
      features: ["User Training", "Tool Setup", "Documentation", "Support"]
    }
  ];

  const technologies = [
    { name: "Tableau", icon: "📊" },
    { name: "Power BI", icon: "📈" },
    { name: "Looker", icon: "👁️" },
    { name: "Apache Spark", icon: "⚡" },
    { name: "Hadoop", icon: "🐘" },
    { name: "Snowflake", icon: "❄️" },
    { name: "BigQuery", icon: "🔍" },
    { name: "Redshift", icon: "📦" },
    { name: "Python", icon: "🐍" },
    { name: "SQL", icon: "🗃️" },
    { name: "Kafka", icon: "📨" },
    { name: "Airflow", icon: "🌊" }
  ];

  const businessFunctions = [
    {
      title: "Sales Analytics",
      description: "Pipeline analysis, sales forecasting, customer acquisition costs, and revenue optimization.",
      icon: "💰",
      metrics: ["Pipeline Velocity", "Win Rate Analysis", "CAC Tracking", "Revenue Forecasting"]
    },
    {
      title: "Marketing Analytics",
      description: "Campaign performance, attribution modeling, customer journey, and ROI analysis.",
      icon: "📣",
      metrics: ["Campaign ROI", "Attribution Models", "Customer Journey", "Channel Performance"]
    },
    {
      title: "Financial Analytics",
      description: "Revenue analysis, budget forecasting, profitability tracking, and financial reporting.",
      icon: "💵",
      metrics: ["Revenue Analysis", "Budget Forecasting", "Profitability", "Financial Reports"]
    },
    {
      title: "Operations Analytics",
      description: "Process optimization, supply chain analytics, resource utilization, and efficiency metrics.",
      icon: "⚙️",
      metrics: ["Process Efficiency", "Supply Chain", "Resource Utilization", "Operational KPIs"]
    },
    {
      title: "Customer Analytics",
      description: "Behavior analysis, churn prediction, lifetime value, and segmentation.",
      icon: "👥",
      metrics: ["Behavior Analysis", "Churn Prediction", "CLV Calculation", "Segmentation"]
    },
    {
      title: "Product Analytics",
      description: "Usage metrics, feature adoption, A/B testing, and product performance.",
      icon: "📱",
      metrics: ["Usage Metrics", "Feature Adoption", "A/B Testing", "Performance Tracking"]
    }
  ];

  const industries = [
    {
      title: "E-commerce & Retail",
      description: "Customer behavior analysis, conversion optimization, inventory analytics, and sales forecasting.",
      icon: "🛒",
      solutions: ["Conversion Optimization", "Inventory Analytics", "Customer Insights", "Sales Forecasting"]
    },
    {
      title: "Healthcare",
      description: "Patient outcomes analysis, operational efficiency, resource planning, and quality metrics.",
      icon: "🏥",
      solutions: ["Patient Outcomes", "Operational Efficiency", "Resource Planning", "Quality Metrics"]
    },
    {
      title: "Finance & Banking",
      description: "Risk analytics, compliance reporting, fraud detection, and performance analysis.",
      icon: "🏦",
      solutions: ["Risk Analytics", "Compliance Reporting", "Fraud Detection", "Performance Analysis"]
    },
    {
      title: "Manufacturing",
      description: "Production efficiency, quality metrics, predictive maintenance, and supply chain optimization.",
      icon: "🏭",
      solutions: ["Production Efficiency", "Quality Control", "Predictive Maintenance", "Supply Chain"]
    },
    {
      title: "SaaS & Technology",
      description: "User engagement, churn analysis, product metrics, and growth analytics.",
      icon: "💻",
      solutions: ["User Engagement", "Churn Analysis", "Product Metrics", "Growth Analytics"]
    },
    {
      title: "Telecommunications",
      description: "Network performance, customer analytics, revenue assurance, and service quality.",
      icon: "📡",
      solutions: ["Network Analytics", "Customer Analytics", "Revenue Assurance", "Service Quality"]
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Data Discovery",
      description: "Understanding data sources, quality assessment, and defining business requirements.",
      details: ["Source Identification", "Quality Assessment", "Requirements Gathering", "Feasibility Analysis"]
    },
    {
      number: "02",
      title: "Data Integration",
      description: "ETL development, data cleansing, warehouse setup, and pipeline creation.",
      details: ["ETL Development", "Data Cleansing", "Warehouse Setup", "Pipeline Creation"]
    },
    {
      number: "03",
      title: "Analytics Development",
      description: "Metric definition, dashboard creation, report building, and model development.",
      details: ["Metric Definition", "Dashboard Creation", "Report Building", "Model Development"]
    },
    {
      number: "04",
      title: "Visualization & Reporting",
      description: "Interactive dashboards, automated reports, alerts, and storytelling.",
      details: ["Interactive Dashboards", "Automated Reports", "Alert Setup", "Data Storytelling"]
    },
    {
      number: "05",
      title: "Training & Enablement",
      description: "User training, documentation, best practices, and knowledge transfer.",
      details: ["User Training", "Documentation", "Best Practices", "Knowledge Transfer"]
    },
    {
      number: "06",
      title: "Ongoing Support",
      description: "Maintenance, optimization, monitoring, and continuous improvement.",
      details: ["System Maintenance", "Performance Optimization", "Monitoring", "Feature Enhancements"]
    }
  ];

  const results = [
    {
      metric: "80%",
      description: "Reduction in Reporting Time",
      icon: "⚡"
    },
    {
      metric: "₹16Cr",
      description: "Cost Savings Identified",
      icon: "💰"
    },
    {
      metric: "92%",
      description: "Forecast Accuracy Achieved",
      icon: "🎯"
    },
    {
      metric: "Real-time",
      description: "Decision Making Enabled",
      icon: "⏱️"
    }
  ];

  const faqs = [
    {
      question: "What data analytics services do you provide?",
      answer: "We provide comprehensive data analytics services including Business Intelligence & Reporting, Data Warehousing, Advanced Analytics, Big Data Solutions, Data Visualization, Data Engineering, Data Strategy & Consulting, and Self-Service Analytics. Our services cover the entire data lifecycle from collection and integration to analysis and visualization."
    },
    {
      question: "How long does it take to implement analytics solutions?",
      answer: "Implementation timelines vary based on complexity and scope. Simple dashboard implementations can take 2-4 weeks, while comprehensive data warehouse projects typically require 3-6 months. We work in agile sprints to deliver incremental value throughout the project. After the initial assessment, we provide a detailed timeline with milestones."
    },
    {
      question: "Can you work with our existing data sources?",
      answer: "Absolutely! We can integrate with virtually any data source including databases (SQL, NoSQL), cloud platforms (AWS, Azure, GCP), SaaS applications, APIs, spreadsheets, and legacy systems. Our data engineers are experienced in connecting disparate data sources and creating unified data platforms."
    },
    {
      question: "What's the cost of data analytics services?",
      answer: "Costs vary based on project scope, data volume, complexity, and required tools. Basic dashboard projects start from ₹12,00,000-₹24,00,000, data warehouse implementations range from ₹40,00,000-₹1,20,00,000, and enterprise-scale solutions can exceed ₹1,60,00,000+. We offer flexible pricing models including fixed-price, time & materials, and monthly retainers. Contact us for a customized quote."
    },
    {
      question: "Do you provide training for our team?",
      answer: "Yes! We believe in empowering your team with analytics capabilities. We provide comprehensive training on the tools and dashboards we implement, create detailed documentation, conduct workshops, and offer ongoing support. Our goal is to enable self-service analytics within your organization."
    },
    {
      question: "Can you handle large-scale data (big data)?",
      answer: "Definitely. We specialize in big data solutions using technologies like Apache Spark, Hadoop, Kafka, and cloud-based platforms (Snowflake, BigQuery, Redshift). We've processed terabytes to petabytes of data for our clients, implementing scalable architectures that handle high-volume, high-velocity data streams."
    },
    {
      question: "What analytics tools do you recommend?",
      answer: "The best tool depends on your specific needs, existing infrastructure, budget, and user technical level. We work with leading platforms including Tableau, Power BI, Looker, Metabase, and custom solutions. During the discovery phase, we assess your requirements and recommend the most suitable tools for your organization."
    },
    {
      question: "How do you ensure data security and compliance?",
      answer: "Data security is paramount. We implement industry best practices including encryption (at rest and in transit), access controls, audit logging, and compliance with regulations (GDPR, HIPAA, SOC 2). We follow security frameworks, conduct regular audits, and ensure your data governance policies are enforced throughout the analytics infrastructure."
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -right-40 top-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute left-1/2 bottom-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Data Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-gray-600"></div>
            ))}
          </div>
        </div>

        <div className="container-custom relative z-10 text-center pt-32 pb-20">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-sm font-semibold">
              📊 Data-Driven Solutions
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 max-w-6xl mx-auto leading-tight">
            Data Analytics & <span className="bg-gradient-to-r from-green-500 via-teal-400 to-blue-500 bg-clip-text text-transparent">Data Science Solutions</span>
            <br />
            That Drive Business Intelligence
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto">
            Transform Raw Data into Actionable Insights with Advanced Analytics Services
          </p>

          {/* Data Visualization Preview */}
          <div className="relative max-w-5xl mx-auto mb-12">
            <div className="glass rounded-3xl p-8 backdrop-blur-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Chart 1 */}
                <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-2xl p-6 border border-green-500/20">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-400">Revenue Growth</span>
                    <span className="text-green-400 text-xs">+24%</span>
                  </div>
                  <div className="flex items-end gap-2 h-24">
                    {[40, 55, 45, 70, 60, 85, 75].map((height, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-green-500 to-teal-400 rounded-t" style={{ height: `${height}%` }}></div>
                    ))}
                  </div>
                </div>

                {/* Chart 2 */}
                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-6 border border-blue-500/20">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-400">Customer Retention</span>
                    <span className="text-blue-400 text-xs">92%</span>
                  </div>
                  <div className="relative h-24">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full border-8 border-blue-500/30 border-t-blue-500"></div>
                    </div>
                  </div>
                </div>

                {/* Chart 3 */}
                <div className="bg-gradient-to-br from-teal-500/10 to-green-500/10 rounded-2xl p-6 border border-teal-500/20">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-400">Conversion Rate</span>
                    <span className="text-teal-400 text-xs">+18%</span>
                  </div>
                  <div className="flex items-end gap-1 h-24">
                    {[60, 70, 55, 80, 65, 75, 90, 85].map((height, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-teal-500 to-green-400 rounded" style={{ height: `${height}%` }}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className="bg-gradient-to-r from-green-600 to-teal-500 hover:from-green-700 hover:to-teal-600 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-glow hover:shadow-glow-strong text-lg">
            Unlock Your Data's Potential
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-900/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="glass rounded-2xl p-8 text-center hover:bg-white/10 transition-all">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-5xl font-bold mb-2 bg-gradient-to-r from-green-500 to-teal-400 bg-clip-text text-transparent">100+</h3>
              <p className="text-gray-400">Analytics Projects Completed</p>
            </div>

            <div className="glass rounded-2xl p-8 text-center hover:bg-white/10 transition-all">
              <div className="text-6xl mb-4">💾</div>
              <h3 className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">500TB+</h3>
              <p className="text-gray-400">Data Processed</p>
            </div>

            <div className="glass rounded-2xl p-8 text-center hover:bg-white/10 transition-all">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-5xl font-bold mb-2 bg-gradient-to-r from-teal-500 to-green-400 bg-clip-text text-transparent">3x</h3>
              <p className="text-gray-400">Faster Decision Making</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-green-500 to-teal-400 bg-clip-text text-transparent">Analytics Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              End-to-end data analytics solutions to transform your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="group glass rounded-2xl p-6 hover:bg-white/10 transition-all cursor-pointer border border-transparent hover:border-teal-500/30">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-teal-400 transition-colors">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-gray-500 flex items-center gap-2">
                      <span className="w-1 h-1 bg-teal-500 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section-padding bg-gray-900/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Analytics Technology <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">Stack</span>
            </h2>
            <p className="text-xl text-gray-400">
              Industry-leading tools and platforms for data excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {technologies.map((tech, index) => (
              <div key={index} className="glass rounded-xl p-6 text-center hover:bg-white/10 transition-all cursor-pointer group">
                <div className="text-4xl mb-3">{tech.icon}</div>
                <p className="text-sm font-semibold group-hover:text-teal-400 transition-colors">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Functions */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Analytics by <span className="bg-gradient-to-r from-teal-500 to-green-500 bg-clip-text text-transparent">Business Function</span>
            </h2>
            <p className="text-xl text-gray-400">
              Specialized solutions for every department
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessFunctions.map((func, index) => (
              <div key={index} className="glass rounded-2xl p-8 hover:bg-white/10 transition-all group">
                <div className="text-5xl mb-4">{func.icon}</div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-teal-400 transition-colors">{func.title}</h3>
                <p className="text-gray-400 mb-6">{func.description}</p>
                <div className="space-y-2">
                  {func.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                      <span className="text-sm text-gray-300">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="section-padding bg-gray-900/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Industry <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-gray-400">
              Tailored analytics for your industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="glass rounded-2xl p-8 hover:bg-white/10 transition-all group">
                <div className="text-5xl mb-4">{industry.icon}</div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-green-400 transition-colors">{industry.title}</h3>
                <p className="text-gray-400 mb-6">{industry.description}</p>
                <div className="space-y-2">
                  {industry.solutions.map((solution, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-300">{solution}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Analytics <span className="bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-400">
              Systematic approach to delivering data insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="glass rounded-2xl p-8 h-full hover:bg-white/10 transition-all">
                  <div className="text-5xl font-bold bg-gradient-to-r from-green-500 to-teal-400 bg-clip-text text-transparent mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="w-1 h-1 bg-teal-500 rounded-full"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-teal-500 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding bg-gray-900/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Proven <span className="bg-gradient-to-r from-green-500 to-teal-400 bg-clip-text text-transparent">Results</span>
            </h2>
            <p className="text-xl text-gray-400">
              Real impact for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {results.map((result, index) => (
              <div key={index} className="glass rounded-2xl p-8 text-center hover:bg-white/10 transition-all">
                <div className="text-5xl mb-4">{result.icon}</div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-500 to-teal-400 bg-clip-text text-transparent">
                  {result.metric}
                </div>
                <p className="text-gray-400 text-sm">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-green-500 to-teal-400 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to know about data analytics
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="glass rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-white/5 transition-all"
                >
                  <span className="font-semibold text-lg pr-8">{faq.question}</span>
                  <span className={`text-2xl text-teal-400 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>
                    ↓
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-green-600/20 to-teal-600/20">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Make <span className="bg-gradient-to-r from-green-400 to-teal-300 bg-clip-text text-transparent">Data-Driven Decisions?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Transform your data into actionable insights that drive business growth
          </p>
          <button className="bg-gradient-to-r from-green-600 to-teal-500 hover:from-green-700 hover:to-teal-600 text-white px-10 py-4 rounded-lg font-semibold transition-all shadow-glow hover:shadow-glow-strong text-lg">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}
