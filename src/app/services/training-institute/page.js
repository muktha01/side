'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { 
  Code, Smartphone, TrendingUp, Brain, CheckCircle2, ArrowRight, 
  Clock, Award, Users, BookOpen, Video, Calendar, MessageCircle,
  Star, Briefcase, GraduationCap
} from 'lucide-react';

export default function TrainingInstitutePage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const courses = [
    {
      id: 'web-development',
      icon: Code,
      name: 'Web Development',
      duration: '3-6 months',
      level: 'Beginner to Advanced',
      description: 'Master modern web development with hands-on training in HTML, CSS, JavaScript, React, and Node.js',
      topics: [
        'HTML5, CSS3 & JavaScript',
        'React.js & Next.js',
        'Node.js & Express',
        'MongoDB & Database Design',
        'RESTful APIs',
        'Git & GitHub',
        'Responsive Design',
        'Deployment & Hosting'
      ],
      price: '₹25,000 - ₹40,000',
      color: 'from-blue-500 to-cyan-600',
      mode: 'Online & Offline'
    },
    {
      id: 'app-development',
      icon: Smartphone,
      name: 'App Development',
      duration: '4-6 months',
      level: 'Beginner to Advanced',
      description: 'Build professional mobile applications for Android and iOS using React Native and Flutter',
      topics: [
        'React Native Fundamentals',
        'Flutter & Dart',
        'Android Development',
        'iOS Development',
        'Firebase Integration',
        'App Store Deployment',
        'Push Notifications',
        'State Management'
      ],
      price: '₹30,000 - ₹50,000',
      color: 'from-purple-500 to-pink-600',
      mode: 'Online & Offline'
    },
    {
      id: 'digital-marketing',
      icon: TrendingUp,
      name: 'Digital Marketing',
      duration: '2-4 months',
      level: 'Beginner to Advanced',
      description: 'Learn SEO, SEM, Social Media Marketing, and become a certified digital marketing professional',
      topics: [
        'SEO & SEM Fundamentals',
        'Google Ads & Analytics',
        'Facebook & Instagram Marketing',
        'Content Marketing',
        'Email Marketing',
        'Social Media Strategy',
        'Lead Generation',
        'Campaign Analytics'
      ],
      price: '₹20,000 - ₹35,000',
      color: 'from-green-500 to-emerald-600',
      mode: 'Online & Offline'
    },
    {
      id: 'ai-automation',
      icon: Brain,
      name: 'AI & Automation',
      duration: '3-5 months',
      level: 'Intermediate to Advanced',
      description: 'Dive into Artificial Intelligence, Machine Learning, and automation tools for modern businesses',
      topics: [
        'Python Programming',
        'Machine Learning Basics',
        'ChatGPT Integration',
        'AI Tools & APIs',
        'Process Automation',
        'Data Analysis with AI',
        'Bot Development',
        'AI for Business'
      ],
      price: '₹35,000 - ₹55,000',
      color: 'from-orange-500 to-red-600',
      mode: 'Online & Offline'
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: 'Industry Expert Trainers',
      description: 'Learn from professionals with 5+ years of real-world experience'
    },
    {
      icon: Briefcase,
      title: 'Hands-on Real Projects',
      description: 'Work on live projects to build your portfolio and gain practical skills'
    },
    {
      icon: GraduationCap,
      title: 'Internship Opportunities',
      description: 'Get internship opportunities at Sdev to kickstart your career'
    },
    {
      icon: Award,
      title: 'Industry-Recognized Certificate',
      description: 'Receive certification that adds value to your resume'
    },
    {
      icon: Clock,
      title: 'Flexible Timings',
      description: 'Weekend and weekday batches to suit your schedule'
    },
    {
      icon: BookOpen,
      title: 'Lifetime Course Access',
      description: 'Access course materials and recordings anytime, anywhere'
    }
  ];

  const trainingModes = [
    {
      title: 'Online Training',
      description: 'Live interactive sessions from anywhere',
      features: ['Live Classes', 'Screen Sharing', 'Recorded Sessions', 'Q&A Support']
    },
    {
      title: 'Offline Training',
      description: 'Face-to-face classroom learning',
      features: ['In-Person Classes', 'Lab Sessions', 'Direct Mentorship', 'Networking']
    },
    {
      title: 'Hybrid Mode',
      description: 'Flexible mix of online and offline',
      features: ['Flexible Schedule', 'Best of Both Worlds', 'Personalized Learning', 'Group Projects']
    }
  ];

  const benefits = [
    'Industry-recognized certificate upon completion',
    'Portfolio building with real projects',
    'Resume preparation assistance',
    'Mock interview sessions',
    'Job placement support and guidance',
    'Internship opportunities at Sdev Digital Agency',
    'Small batch sizes (10-15 students) for personalized attention',
    'Dedicated mentorship and doubt clearing sessions'
  ];

  const testimonials = [
    {
      name: 'Rahul Sharma',
      course: 'Web Development',
      image: 'https://i.pravatar.cc/150?img=12',
      text: 'The training was exceptional! Got placed as a Full Stack Developer within 2 months of completion.',
      rating: 5
    },
    {
      name: 'Priya Patel',
      course: 'Digital Marketing',
      image: 'https://i.pravatar.cc/150?img=45',
      text: 'Learned practical skills that I use every day. The trainers are very knowledgeable and supportive.',
      rating: 5
    },
    {
      name: 'Amit Kumar',
      course: 'App Development',
      image: 'https://i.pravatar.cc/150?img=33',
      text: 'Built 3 apps during the course. Now working as a freelance mobile developer. Highly recommended!',
      rating: 5
    }
  ];

  const faqs = [
    {
      question: 'What are the prerequisites for joining these courses?',
      answer: 'For Web Development and Digital Marketing, no prior experience is needed. For App Development, basic programming knowledge is helpful. For AI & Automation, intermediate Python knowledge is recommended but not mandatory.'
    },
    {
      question: 'Do you provide placement assistance?',
      answer: 'Yes! We provide comprehensive placement support including resume building, mock interviews, and job referrals. We also offer internship opportunities at Sdev Digital Agency for top performers.'
    },
    {
      question: 'What is the batch size?',
      answer: 'We maintain small batch sizes of 10-15 students to ensure personalized attention and effective learning. This allows trainers to focus on each student\'s progress.'
    },
    {
      question: 'Can I access course materials after completion?',
      answer: 'Absolutely! You get lifetime access to all course materials, recorded sessions, and updates. You can revisit the content anytime you need a refresher.'
    },
    {
      question: 'What is the certification process?',
      answer: 'Upon successful completion of the course and final project submission, you will receive an industry-recognized certificate from Sdev Digital Agency that you can add to your resume and LinkedIn profile.'
    },
    {
      question: 'Are there any EMI options available for course fees?',
      answer: 'Yes, we offer flexible payment plans and EMI options to make learning accessible. Contact us to discuss payment options that work for you.'
    },
    {
      question: 'What is the difference between online and offline modes?',
      answer: 'Online mode offers live interactive sessions via video conferencing with recorded sessions. Offline mode provides in-person classroom training. Hybrid mode gives you flexibility to attend both. All modes have the same curriculum and support.'
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30"
            >
              <span className="text-cyan-400 font-semibold">🎓 Industry-Ready Training</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Launch Your Tech Career with
              <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Expert-Led Training
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Learn from Experts | Work on Real Projects | Get Certified | Build Your Career
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/919381820806?text=Hi%2C%20I%20want%20to%20know%20about%20your%20training%20courses"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold text-lg shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/60 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Enroll Now
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('courses').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white/5 border-2 border-white/20 text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                View Courses
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Courses</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose from our industry-focused courses designed to make you job-ready
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${course.color} rounded-xl flex items-center justify-center mb-6`}>
                  <course.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{course.name}</h3>
                <p className="text-gray-400 mb-6">{course.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                    <Clock className="w-5 h-5 text-cyan-400 mb-2" />
                    <div className="text-sm text-gray-400">Duration</div>
                    <div className="text-white font-semibold text-sm">{course.duration}</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                    <Award className="w-5 h-5 text-cyan-400 mb-2" />
                    <div className="text-sm text-gray-400">Level</div>
                    <div className="text-white font-semibold text-sm">{course.level}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-sm text-gray-400 mb-3">What You'll Learn:</div>
                  <ul className="space-y-2">
                    {course.topics.slice(0, 4).map((topic, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
                  <div>
                    <div className="text-sm text-gray-400">Price</div>
                    <div className="text-white font-bold text-xl">{course.price}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">Mode</div>
                    <div className="text-cyan-400 font-semibold text-sm">{course.mode}</div>
                  </div>
                </div>

                <motion.a
                  href={`https://wa.me/919381820806?text=Hi%2C%20I%20want%20to%20enroll%20in%20${course.name}%20course`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`block w-full text-center px-6 py-3 bg-gradient-to-r ${course.color} text-white rounded-lg font-semibold transition-all duration-300`}
                >
                  Enroll Now
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Our Training?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <item.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Modes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Flexible <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Training Modes</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {trainingModes.map((mode, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-3">{mode.title}</h3>
                <p className="text-gray-400 mb-6">{mode.description}</p>
                <ul className="space-y-3">
                  {mode.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Certification & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Placement Support</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-start gap-3 bg-white/5 rounded-lg p-4 border border-white/10"
              >
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Student <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Success Stories</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl p-6 border border-white/10"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-cyan-400">{testimonial.course}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white/5 rounded-xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-all duration-300"
                >
                  <span className="text-white font-semibold pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight className="w-5 h-5 text-cyan-400 transform rotate-90" />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-gray-400">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20" />
        <div className="absolute inset-0 backdrop-blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Your Learning Journey Today
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join hundreds of successful students who have transformed their careers with our training programs
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/919381820806?text=Hi%2C%20I%20want%20to%20enroll%20in%20a%20training%20course"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold text-lg shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/60 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Enroll on WhatsApp
              </motion.a>
              <motion.a
                href="tel:+919381820806"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 border-2 border-white/20 text-white rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Call: +91 9381820806
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
