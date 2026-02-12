'use client';

import { motion } from 'framer-motion';

export default function ComparisonTable({ services, features }) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text-premium">
            Compare Our Services
          </h2>
          <p className="text-white/60 text-lg">
            Find the perfect solution for your needs
          </p>
        </motion.div>

        {/* Desktop Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="hidden lg:block overflow-x-auto"
        >
          <div className="glass-card p-1">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-6 px-6 text-white/80 font-semibold">
                    Features
                  </th>
                  {services.map((service, index) => (
                    <th
                      key={index}
                      className={`py-6 px-6 text-center ${
                        service.popular
                          ? 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-l-2 border-r-2 border-t-2 border-cyan-500/50'
                          : ''
                      }`}
                    >
                      <div className="space-y-2">
                        {service.popular && (
                          <span className="inline-block px-3 py-1 text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full mb-2">
                            MOST POPULAR
                          </span>
                        )}
                        <div className="text-lg font-bold text-white">
                          {service.name}
                        </div>
                        <div className="text-2xl font-bold gradient-text-premium">
                          {service.price}
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, featureIndex) => (
                  <motion.tr
                    key={featureIndex}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: featureIndex * 0.05 }}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="py-4 px-6 text-white/80">
                      <div className="flex items-center gap-2">
                        {feature.name}
                        {feature.tooltip && (
                          <div className="group relative">
                            <svg
                              className="w-4 h-4 text-white/40 cursor-help"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-black border border-white/10 rounded-lg text-sm text-white/80 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                              {feature.tooltip}
                            </div>
                          </div>
                        )}
                      </div>
                    </td>
                    {services.map((service, serviceIndex) => (
                      <td
                        key={serviceIndex}
                        className={`py-4 px-6 text-center ${
                          service.popular ? 'bg-cyan-500/5' : ''
                        }`}
                      >
                        {feature.values && feature.values[serviceIndex] === true ? (
                          <svg
                            className="w-6 h-6 text-emerald-500 mx-auto"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        ) : feature.values && feature.values[serviceIndex] === false ? (
                          <svg
                            className="w-6 h-6 text-white/20 mx-auto"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        ) : (
                          <span className="text-white/80 text-sm">
                            {feature.values && feature.values[serviceIndex] ? feature.values[serviceIndex] : '-'}
                          </span>
                        )}
                      </td>
                    ))}
                  </motion.tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td className="py-6 px-6"></td>
                  {services.map((service, index) => (
                    <td
                      key={index}
                      className={`py-6 px-6 text-center ${
                        service.popular
                          ? 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-l-2 border-r-2 border-b-2 border-cyan-500/50'
                          : ''
                      }`}
                    >
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-3 px-6 rounded-xl font-semibold transition-all ${
                          service.popular
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/50'
                            : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                        }`}
                      >
                        {service.cta || 'Get Started'}
                      </motion.button>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
        </motion.div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6">
          {services.map((service, serviceIndex) => (
            <motion.div
              key={serviceIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: serviceIndex * 0.1 }}
              className={`glass-card p-6 ${
                service.popular ? 'border-2 border-cyan-500' : ''
              }`}
            >
              {service.popular && (
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full mb-4">
                  MOST POPULAR
                </span>
              )}
              <h3 className="text-xl font-bold text-white mb-2">
                {service.name}
              </h3>
              <div className="text-2xl font-bold gradient-text-premium mb-6">
                {service.price}
              </div>
              <div className="space-y-3 mb-6">
                {features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center justify-between py-2 border-b border-white/5"
                  >
                    <span className="text-white/70 text-sm">
                      {feature.name}
                    </span>
                    <span>
                      {feature.values && feature.values[serviceIndex] === true ? (
                        <svg
                          className="w-5 h-5 text-emerald-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : feature.values && feature.values[serviceIndex] === false ? (
                        <svg
                          className="w-5 h-5 text-white/20"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      ) : (
                        <span className="text-white/80 text-sm">
                          {feature.values && feature.values[serviceIndex] ? feature.values[serviceIndex] : '-'}
                        </span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all ${
                  service.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/50'
                    : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                }`}
              >
                {service.cta || 'Get Started'}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
