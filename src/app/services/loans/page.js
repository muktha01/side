'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { 
  Briefcase, Rocket, User, CheckCircle2, ArrowRight, 
  DollarSign, Clock, FileText, TrendingUp, Shield, MessageCircle
} from 'lucide-react';

export default function LoansPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [loanAmount, setLoanAmount] = useState(500000);
  const [tenure, setTenure] = useState(3);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const calculateEMI = () => {
    const principal = loanAmount;
    const rate = 12 / 12 / 100; // Monthly interest rate
    const time = tenure * 12; // Tenure in months
    const emi = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
    return Math.round(emi);
  };

  const loanTypes = [
    {
      id: 'business',
      icon: Briefcase,
      name: 'Business Loans',
      purpose: 'Business expansion, equipment purchase, working capital',
      amount: '₹1 Lakh - ₹50 Lakhs',
      interestRate: 'Starting from 12% p.a.',
      tenure: '1-5 years',
      eligibility: 'Registered business, 2+ years operation',
      documents: ['Business registration proof', 'Bank statements (6 months)', 'ITR (2 years)', 'GST returns'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'startup',
      icon: Rocket,
      name: 'Startup Loans',
      purpose: 'Launch new business, initial capital requirements',
      amount: '₹50,000 - ₹25 Lakhs',
      interestRate: 'Starting from 14% p.a.',
      tenure: '1-3 years',
      eligibility: 'Business plan, minimal experience required',
      documents: ['Detailed business plan', 'KYC documents', 'Bank statements', 'Collateral (if applicable)'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'personal',
      icon: User,
      name: 'Personal Loans',
      purpose: 'Any personal financial need',
      amount: '₹50,000 - ₹10 Lakhs',
      interestRate: 'Starting from 11% p.a.',
      tenure: '1-5 years',
      eligibility: 'Salaried/self-employed individuals',
      documents: ['ID proof', 'Address proof', 'Income proof', 'Bank statements (3 months)'],
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Fill Application Form',
      description: 'Complete our simple online application with your basic details',
      icon: FileText
    },
    {
      step: '02',
      title: 'Submit Documents',
      description: 'Upload required documents securely through our platform',
      icon: FileText
    },
    {
      step: '03',
      title: 'Get Pre-Approval',
      description: 'Receive instant pre-approval within 24-48 hours',
      icon: CheckCircle2
    },
    {
      step: '04',
      title: 'Verification & Processing',
      description: 'Our team verifies your documents and processes your application',
      icon: Shield
    },
    {
      step: '05',
      title: 'Loan Disbursement',
      description: 'Get funds directly to your account within 48-72 hours',
      icon: DollarSign
    }
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: 'Quick Approval',
      description: 'Get loan approval within 24-48 hours with minimal hassle'
    },
    {
      icon: FileText,
      title: 'Minimal Documentation',
      description: 'Simple documentation process with digital submission'
    },
    {
      icon: DollarSign,
      title: 'Competitive Rates',
      description: 'Best-in-market interest rates and flexible repayment options'
    },
    {
      icon: TrendingUp,
      title: 'Flexible Repayment',
      description: 'Choose EMI plans that suit your financial situation'
    },
    {
      icon: Shield,
      title: 'Secure Process',
      description: 'Bank-level security for all your documents and data'
    },
    {
      icon: User,
      title: 'Expert Guidance',
      description: 'Dedicated loan advisors to guide you through the process'
    }
  ];

  const partners = [
    'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Bajaj Finserv', 
    'Tata Capital', 'Fullerton India', 'L&T Finance'
  ];

  const faqs = [
    {
      question: 'What is the typical processing time for a loan?',
      answer: 'Once you submit all required documents, you can expect pre-approval within 24-48 hours. Final disbursement typically happens within 48-72 hours after verification.'
    },
    {
      question: 'What documents are required for a business loan?',
      answer: 'For business loans, you need business registration proof, 6 months bank statements, 2 years ITR, GST returns, and identity documents. Specific requirements may vary based on loan amount.'
    },
    {
      question: 'Can I get a loan without collateral?',
      answer: 'Yes, we offer unsecured loans up to certain amounts. For business loans above ₹10 lakhs and startup loans above ₹15 lakhs, collateral may be required depending on your profile.'
    },
    {
      question: 'What is the minimum credit score required?',
      answer: 'While a credit score of 650+ is preferred, we evaluate applications holistically. Even if your credit score is lower, you may still qualify based on other factors like income, business performance, and collateral.'
    },
    {
      question: 'Are there any hidden charges or prepayment penalties?',
      answer: 'We believe in complete transparency. All charges including processing fees, GST, and any other applicable fees are clearly mentioned upfront. Prepayment options are available with minimal or no penalties.'
    },
    {
      question: 'Can I get a loan if I have an existing loan?',
      answer: 'Yes, you can apply for a new loan even if you have an existing loan, provided your debt-to-income ratio is within acceptable limits and you have a good repayment track record.'
    },
    {
      question: 'How is the EMI calculated?',
      answer: 'EMI is calculated using the formula: EMI = [P x R x (1+R)^N]/[(1+R)^N-1], where P is principal, R is monthly interest rate, and N is tenure in months. Use our EMI calculator above for instant calculations.'
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
              <span className="text-cyan-400 font-semibold">💰 Quick & Easy Loans</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Business Growth Made Easy with
              <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Quick Loan Solutions
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Fast Approvals | Minimal Documentation | Competitive Rates | Trusted Partners
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/919381820806?text=Hi%2C%20I%20want%20to%20apply%20for%20a%20loan"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold text-lg shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/60 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white/5 border-2 border-white/20 text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Check Eligibility
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Loan Types */}
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
              Types of <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Loans Available</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the loan that best fits your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {loanTypes.map((loan, index) => (
              <motion.div
                key={loan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${loan.color} rounded-xl flex items-center justify-center mb-6`}>
                  <loan.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{loan.name}</h3>
                <p className="text-cyan-400 text-sm font-semibold mb-4">{loan.purpose}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-gray-400 text-sm">Amount</span>
                    <span className="text-white font-semibold">{loan.amount}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-gray-400 text-sm">Interest Rate</span>
                    <span className="text-white font-semibold">{loan.interestRate}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-gray-400 text-sm">Tenure</span>
                    <span className="text-white font-semibold">{loan.tenure}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-sm text-gray-400 mb-3">Eligibility:</div>
                  <p className="text-gray-300 text-sm">{loan.eligibility}</p>
                </div>

                <div className="mb-6">
                  <div className="text-sm text-gray-400 mb-3">Required Documents:</div>
                  <ul className="space-y-2">
                    {loan.documents.map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.a
                  href={`https://wa.me/919381820806?text=Hi%2C%20I%20want%20to%20apply%20for%20a%20${loan.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`block w-full text-center px-6 py-3 bg-gradient-to-r ${loan.color} text-white rounded-lg font-semibold transition-all duration-300`}
                >
                  Apply for {loan.name}
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EMI Calculator */}
      <section id="calculator" className="py-20 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              EMI <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Calculator</span>
            </h2>
            <p className="text-xl text-gray-400">
              Calculate your monthly EMI instantly
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl p-8 border border-white/10">
            <div className="space-y-8">
              <div>
                <label className="text-white font-semibold mb-3 block">
                  Loan Amount: ₹{loanAmount.toLocaleString('en-IN')}
                </label>
                <input
                  type="range"
                  min="50000"
                  max="5000000"
                  step="10000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span>₹50K</span>
                  <span>₹50L</span>
                </div>
              </div>

              <div>
                <label className="text-white font-semibold mb-3 block">
                  Tenure: {tenure} years
                </label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span>1 Year</span>
                  <span>5 Years</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl p-6 border border-cyan-500/30">
                <div className="text-center">
                  <div className="text-gray-400 mb-2">Your Monthly EMI</div>
                  <div className="text-4xl font-bold text-white mb-4">
                    ₹{calculateEMI().toLocaleString('en-IN')}
                  </div>
                  <div className="text-sm text-gray-400">
                    Total Amount Payable: ₹{(calculateEMI() * tenure * 12).toLocaleString('en-IN')}
                  </div>
                </div>
              </div>

              <motion.a
                href={`https://wa.me/919381820806?text=Hi%2C%20I%20want%20a%20loan%20of%20₹${loanAmount.toLocaleString('en-IN')}%20for%20${tenure}%20years`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold transition-all duration-300"
              >
                Apply for This Loan
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
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
              Simple <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Application Process</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 mb-12 last:mb-0"
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-cyan-500 to-transparent mt-4" />
                  )}
                </div>
                
                <div className="flex-1 pb-12">
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="flex items-start gap-4 mb-3">
                      <step.icon className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                      <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-gray-400 ml-10">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Our Loan Services?</span>
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

      {/* Partners */}
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
              Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Financial Partners</span>
            </h2>
            <p className="text-xl text-gray-400">
              Trusted by 100+ businesses | Partnered with leading financial institutions
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white/5 rounded-xl px-8 py-4 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <span className="text-white font-semibold">{partner}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
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

      {/* CTA */}
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
              Apply for a Loan Today
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Get quick approval and funds in your account within 48-72 hours
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/919381820806?text=Hi%2C%20I%20want%20to%20apply%20for%20a%20loan"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold text-lg shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/60 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Apply on WhatsApp
              </motion.a>
              <motion.a
                href="tel:+919381820806"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 border-2 border-white/20 text-white rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300"
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
