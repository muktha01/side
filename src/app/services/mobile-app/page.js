'use client';
import { useState } from 'react';

export default function MobileAppDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -right-40 top-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10 text-center pt-32 pb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 max-w-5xl mx-auto leading-tight">
            Custom <span className="gradient-text">Mobile App Development</span>
            <br />
            Company for Cross-Platform &
            <br />
            Native Solutions
          </h1>

          {/* Phone Mockups */}
          <div className="relative mt-16 mb-8 flex justify-center items-end gap-4 px-4">
            {/* Left Phone */}
            <div className="relative transform -rotate-6 hover:rotate-0 transition-transform duration-500">
              <div className="w-64 md:w-72 bg-gray-900 rounded-3xl p-3 shadow-2xl border border-gray-800">
                <div className="bg-white rounded-2xl overflow-hidden">
                  <div className="h-6 bg-black rounded-t-2xl"></div>
                  <div className="aspect-[9/16] relative">
                    <img
                      src="https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?w=400&q=80"
                      alt="Mobile App Interface"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Phone */}
            <div className="relative transform rotate-6 hover:rotate-0 transition-transform duration-500">
              <div className="w-64 md:w-72 bg-gray-900 rounded-3xl p-3 shadow-2xl border border-gray-800">
                <div className="bg-white rounded-2xl overflow-hidden">
                  <div className="h-6 bg-black rounded-t-2xl"></div>
                  <div className="aspect-[9/16] relative">
                    <img
                      src="https://images.unsplash.com/photo-1613575998061-0f59337425f2?w=400&q=80"
                      alt="Mobile App Dashboard"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-primary mb-6">Pre Eminent Solutions</p>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-300">
            Mobile App Development Services That Drive
            <br />
            Growth Across Platforms
          </h2>

          <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-glow hover:shadow-glow-strong">
            Get Started
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Stat 1 */}
            <div className="glass rounded-2xl p-8 text-center hover:bg-white/10 transition-all">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-5xl font-bold mb-2 gradient-text">4+</h3>
              <p className="text-gray-400">Live Android Apps on Play Store</p>
            </div>

            {/* Stat 2 */}
            <div className="glass rounded-2xl p-8 text-center hover:bg-white/10 transition-all">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-5xl font-bold mb-2 gradient-text">₹50K</h3>
              <p className="text-gray-400">Starting Price — Standard App</p>
            </div>

            {/* Stat 3 */}
            <div className="glass rounded-2xl p-8 text-center hover:bg-white/10 transition-all">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-5xl font-bold mb-2 gradient-text">100%</h3>
              <p className="text-gray-400">Lifetime Support Included</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
            Mobile App Development Tech We Are <span className="gradient-text">Specialized</span> In
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Flutter */}
            <div className="group glass rounded-2xl p-8 text-center hover:bg-white/10 transition-all cursor-pointer">
              <div className="w-20 h-20 mx-auto mb-4 bg-primary/20 rounded-2xl flex items-center justify-center group-hover:shadow-glow transition-all">
                <svg className="w-12 h-12 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.314 0L2.3 12l3.2 3.2 8.811-8.81L21.684 0h-7.37zm.001 11.869L9.8 16.382l4.515 4.515H21.7l-4.515-4.515 4.515-4.513h-7.385z"/>
                </svg>
              </div>
              <p className="text-lg font-semibold">Flutter</p>
            </div>

            {/* React Native */}
            <div className="group glass rounded-2xl p-8 text-center hover:bg-white/10 transition-all cursor-pointer">
              <div className="w-20 h-20 mx-auto mb-4 bg-primary/20 rounded-2xl flex items-center justify-center group-hover:shadow-glow transition-all">
                <svg className="w-12 h-12 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 012.4-.36c.48-.67.99-1.31 1.51-1.9z"/>
                </svg>
              </div>
              <p className="text-lg font-semibold">React Native</p>
            </div>

            {/* Swift */}
            <div className="group glass rounded-2xl p-8 text-center hover:bg-white/10 transition-all cursor-pointer">
              <div className="w-20 h-20 mx-auto mb-4 bg-primary/20 rounded-2xl flex items-center justify-center group-hover:shadow-glow transition-all">
                <svg className="w-12 h-12 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 004.348.15 5.492 5.492 0 002.85.645 5.04 5.04 0 001.645 1.65 5.492 5.492 0 00.15 3.148c-.073.324-.12.656-.142.99-.007.132-.013.263-.015.395C.001 4.774 0 5.015 0 5.257V18.743c0 .241.001.483.003.724.002.132.008.263.015.395.022.334.069.666.142.99.204.59.504 1.134 1.005 1.496.362.324.799.577 1.246.77.324.073.656.12.99.142.132.007.263.013.395.015.241.002.483.003.724.003H16.492c.241 0 .483-.001.724-.003.132-.002.263-.008.395-.015.334-.022.666-.069.99-.142a5.492 5.492 0 001.496-1.005 5.04 5.04 0 00.77-1.246c.073-.324.12-.656.142-.99.007-.132.013-.263.015-.395.002-.241.003-.483.003-.724V5.257c0-.241-.001-.483-.003-.724a6.668 6.668 0 00-.015-.395 5.154 5.154 0 00-.142-.99 5.492 5.492 0 00-1.005-1.496A5.04 5.04 0 0019.852.645 5.492 5.492 0 0018.356.15a9.154 9.154 0 00-.99-.142 6.668 6.668 0 00-.395-.015C16.73.001 16.489 0 16.247 0H7.508zm11.847 9.602c-.002-2.926-2.396-4.34-2.512-4.41 1.37-1.99 3.726-2.26 4.537-2.29-1.934-2.822-4.947-3.201-6.018-3.249-2.563-.26-5.001 1.51-6.3 1.51-1.3 0-3.313-1.472-5.443-1.433-2.8.04-5.38 1.627-6.82 4.134-2.904 5.053-.744 12.545 2.084 16.646 1.381 2.008 3.03 4.265 5.197 4.185 2.13-.085 2.934-1.378 5.506-1.378 2.572 0 3.338 1.378 5.484 1.334 2.263-.04 3.697-2.008 5.078-4.018 1.595-2.324 2.252-4.572 2.29-4.687-.049-.022-4.406-1.693-4.411-6.704z"/>
                </svg>
              </div>
              <p className="text-lg font-semibold">Swift</p>
            </div>

            {/* Kotlin */}
            <div className="group glass rounded-2xl p-8 text-center hover:bg-white/10 transition-all cursor-pointer">
              <div className="w-20 h-20 mx-auto mb-4 bg-primary/20 rounded-2xl flex items-center justify-center group-hover:shadow-glow transition-all">
                <svg className="w-12 h-12 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 24l12-12L24 24H0zM0 0h24L12 12 0 0z"/>
                </svg>
              </div>
              <p className="text-lg font-semibold">Kotlin</p>
            </div>

            {/* Node.js */}
            <div className="group glass rounded-2xl p-8 text-center hover:bg-white/10 transition-all cursor-pointer">
              <div className="w-20 h-20 mx-auto mb-4 bg-primary/20 rounded-2xl flex items-center justify-center group-hover:shadow-glow transition-all">
                <svg className="w-12 h-12 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.998 0c-.32 0-.64.084-.92.251L2.325 5.658a1.84 1.84 0 00-.922 1.595v10.495c0 .657.35 1.265.922 1.594l8.753 5.408c.28.167.6.251.92.251.32 0 .64-.084.92-.251l8.753-5.408a1.84 1.84 0 00.922-1.594V7.253a1.84 1.84 0 00-.922-1.595L12.918.25A1.834 1.834 0 0011.998 0z"/>
                </svg>
              </div>
              <p className="text-lg font-semibold">Node.js</p>
            </div>

            {/* Firebase */}
            <div className="group glass rounded-2xl p-8 text-center hover:bg-white/10 transition-all cursor-pointer">
              <div className="w-20 h-20 mx-auto mb-4 bg-primary/20 rounded-2xl flex items-center justify-center group-hover:shadow-glow transition-all">
                <svg className="w-12 h-12 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z"/>
                </svg>
              </div>
              <p className="text-lg font-semibold">Firebase</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
            Success Stories — Real Impact of Our <span className="gradient-text">Mobile Developers</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Education Management Platform */}
            <div className="glass rounded-2xl p-8 hover:bg-white/10 transition-all border-t-2 border-t-green-500">
              <h3 className="text-2xl font-bold mb-6">Education Management Platform</h3>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div>
                  <p className="text-3xl font-bold text-green-500">-72%</p>
                  <p className="text-sm text-gray-400">costs</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-500">+20%</p>
                  <p className="text-sm text-gray-400">user engagement</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-500">100%</p>
                  <p className="text-sm text-gray-400">data accuracy</p>
                </div>
              </div>

              <div className="relative mb-6">
                <div className="w-48 mx-auto bg-gray-900 rounded-3xl p-3 shadow-2xl border border-gray-800">
                  <div className="bg-gradient-to-br from-blue-50 to-gray-100 rounded-2xl overflow-hidden">
                    <div className="h-4 bg-black rounded-t-2xl"></div>
                    <div className="aspect-[9/16] p-3">
                      <div className="space-y-2">
                        <div className="h-6 bg-gray-300 rounded"></div>
                        <div className="h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-lg"></div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-16 bg-gray-200 rounded"></div>
                          <div className="h-16 bg-gray-200 rounded"></div>
                        </div>
                        <div className="h-8 bg-gray-300 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a href="/contact" className="text-primary hover:text-primary-light flex items-center gap-2 group">
                Learn More 
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Fertility Monitoring App */}
            <div className="glass rounded-2xl p-8 hover:bg-white/10 transition-all border-t-2 border-t-pink-500">
              <h3 className="text-2xl font-bold mb-6">Fertility Monitoring App</h3>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div>
                  <p className="text-3xl font-bold text-pink-500">+85%</p>
                  <p className="text-sm text-gray-400">user adoption</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-pink-500">4.8★</p>
                  <p className="text-sm text-gray-400">app rating</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-pink-500">50K+</p>
                  <p className="text-sm text-gray-400">active users</p>
                </div>
              </div>

              <div className="relative mb-6">
                <div className="w-48 mx-auto bg-gray-900 rounded-3xl p-3 shadow-2xl border border-gray-800">
                  <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl overflow-hidden">
                    <div className="h-4 bg-black rounded-t-2xl"></div>
                    <div className="aspect-[9/16] p-3">
                      <div className="space-y-2">
                        <div className="h-8 bg-pink-200 rounded-full"></div>
                        <div className="h-28 bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg"></div>
                        <div className="space-y-2">
                          <div className="h-6 bg-gray-200 rounded"></div>
                          <div className="h-6 bg-gray-200 rounded"></div>
                          <div className="h-6 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a href="/contact" className="text-primary hover:text-primary-light flex items-center gap-2 group">
                Learn More 
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Wave Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-r from-primary via-cyan-500 to-primary opacity-30 blur-3xl transform -skew-y-3"></div>
          <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-r from-cyan-500 via-primary to-cyan-500 opacity-20 blur-3xl transform skew-y-3"></div>
        </div>
        
        <div className="container-custom text-center relative z-10">
          <p className="text-primary text-lg mb-4">Get Started</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Innovate Together</h2>
          <button className="bg-white text-black hover:bg-gray-100 px-10 py-4 rounded-lg font-semibold transition-all shadow-xl hover:shadow-2xl">
            Get Started
          </button>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            Our Mobile App Development Process:
          </h2>
          <p className="text-xl text-center text-gray-400 mb-16">From Idea to Scalable App</p>

          <div className="max-w-5xl mx-auto space-y-8">
            {/* Process Card 1 */}
            <div className="glass rounded-2xl p-8 hover:bg-white/10 transition-all">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">Cutting-Edge App Development</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">Complete requirement analysis of client technology</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">Create information architecture</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">Prepare UX sketches and UX wireframe mockups</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">A rapid, user-centered design</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">Easy-to-prototype using drag-and-drop</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Process Card 2 */}
            <div className="glass rounded-2xl p-8 hover:bg-white/10 transition-all">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">Innovative Cross-Platform App Development</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">Single codebase for multiple platforms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">Native performance and user experience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">Faster time-to-market and reduced costs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">Seamless integration with device features</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Process Card 3 */}
            <div className="glass rounded-2xl p-8 hover:bg-white/10 transition-all">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">No-Code/Low-Code Mobile App Development</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">Rapid application development and deployment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">Visual development with pre-built components</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">Cost-effective solution for MVPs and prototypes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">Easy maintenance and scalability</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Start Your Journey To</span>
              <br />
              <span className="gradient-text">Better Business</span>
            </h2>
            <p className="text-2xl text-gray-700 mb-8">Let's Connect</p>

            <form className="space-y-4 text-left">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900"
                />
              </div>
              <div>
                <textarea
                  placeholder="Tell us about your project"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none text-gray-900"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "What do your mobile app services include?",
                answer: "Our mobile app development services include native iOS and Android development, cross-platform solutions using React Native and Flutter, UI/UX design, backend development, API integration, quality assurance, and ongoing maintenance and support."
              },
              {
                question: "How long does it take to develop a mobile app?",
                answer: "The timeline varies based on complexity, features, and platform. A simple app typically takes 2-3 months, while complex enterprise applications can take 6-9 months or more. We provide detailed timeline estimates after understanding your requirements."
              },
              {
                question: "What is the typical cost of developing a mobile app?",
                answer: "Our mobile app development starts from ₹50,000 for a standard Android / cross-platform app. Final cost depends on features, complexity, and integrations. We provide transparent custom quotes — no hidden charges."
              },
              {
                question: "Do you provide post-launch support?",
                answer: "Yes, we offer comprehensive post-launch support including bug fixes, performance optimization, feature updates, security patches, and technical support to ensure your app continues to perform optimally."
              },
              {
                question: "Can you help with app store optimization and deployment?",
                answer: "Absolutely! We handle the entire deployment process including app store optimization, submission to Apple App Store and Google Play Store, compliance with guidelines, and ongoing optimization for better visibility and downloads."
              }
            ].map((faq, index) => (
              <div key={index} className="glass rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-all"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 text-primary transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
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

        {/* Chat Icon */}
        <div className="fixed bottom-8 right-8 z-50">
          <button className="bg-primary hover:bg-primary-dark text-white w-14 h-14 rounded-full shadow-glow-strong hover:shadow-glow flex items-center justify-center transition-all">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}
