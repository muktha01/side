'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Badge({ 
  children, 
  variant = 'default',
  size = 'md',
  icon,
  className = '',
  ...props 
}) {
  const variants = {
    default: 'bg-white/5 text-white/60 border-white/10',
    primary: 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30',
    success: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    warning: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    premium: 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0 shadow-lg shadow-cyan-500/30',
  };

  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-5 py-2.5 text-base',
  };

  return (
    <motion.span
      className={`inline-flex items-center gap-2 rounded-full border font-medium ${variants[variant]} ${sizes[size]} ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {icon && (
        <span className="flex-shrink-0">
          {typeof icon === 'function' || (icon && icon.$$typeof) 
            ? React.createElement(icon, { className: "w-4 h-4" })
            : icon
          }
        </span>
      )}
      {children}
    </motion.span>
  );
}
