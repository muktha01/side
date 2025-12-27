'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const blogs = [
  {
    title: 'Top Skills to Look for When Hiring AI Engineers | Unico Connect',
    category: 'AI Development',
    date: 'December 6, 2024',
    readTime: '5 mins',
    image: '/images/blog-1.jpg',
  },
  {
    title: 'Integrating Gemini AI Features into Android Apps: Opportunities and Implementation Guide',
    category: 'AI Development',
    date: 'December 5, 2024',
    readTime: '8 mins',
    image: '/images/blog-2.jpg',
  },
  {
    title: 'Headless On-Demand: A Guide to Seamless Development to Deliver Smarter User Experiences',
    category: 'AI Development',
    date: 'December 4, 2024',
    readTime: '6 mins',
    image: '/images/blog-3.jpg',
  },
];

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-black relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Latest <span className="gradient-text">Blogs & Articles</span>
          </h2>
          <p className="text-gray-light text-lg max-w-2xl mx-auto">
            Stay updated with the latest trends and insights in software development
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogs.map((blog, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-dark-800 rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 bg-dark-700 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-cyan-500/20 group-hover:scale-110 transition-transform duration-500" />
                {/* Placeholder for blog image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-dark">
                  <svg
                    className="w-16 h-16"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category & Date */}
                <div className="flex items-center justify-between mb-3 text-sm">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                    {blog.category}
                  </span>
                  <span className="text-gray-dark">{blog.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-3 line-clamp-3 group-hover:text-primary transition-colors duration-300">
                  {blog.title}
                </h3>

                {/* Date */}
                <p className="text-sm text-gray-dark">{blog.date}</p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Read More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-dark-800 text-white rounded-lg font-medium hover:bg-primary hover:text-white transition-all duration-200 border border-white/10 hover:border-primary"
          >
            Read More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
