'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Button({ 
  children, 
  href, 
  variant = 'primary', 
  size = 'md',
  className = '',
  onClick,
  as,
  ...props 
}) {
  const variants = {
    primary: 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/50 border-0',
    secondary: 'bg-white/5 text-white hover:bg-white/10 border border-white/10',
    ghost: 'bg-transparent text-white/80 hover:text-white hover:bg-white/5 border border-white/20',
    outline: 'bg-transparent text-cyan-500 border-2 border-cyan-500 hover:bg-cyan-500 hover:text-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  };

  const baseClasses = `inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`;

  const Component = as || (href ? Link : 'button');
  const MotionComponent = motion(Component);

  return (
    <MotionComponent
      href={href || undefined}
      onClick={onClick}
      className={baseClasses}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
