'use client';

import { motion } from 'framer-motion';

export default function Card({ 
  children, 
  className = '', 
  hover = true,
  glow = false,
  ...props 
}) {
  const hoverEffects = hover ? {
    y: -12,
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeOut" }
  } : {};

  const glowClass = glow ? 'hover:shadow-2xl hover:shadow-cyan-500/20' : '';

  return (
    <motion.div
      className={`glass-card card-lift ${glowClass} ${className}`}
      whileHover={hoverEffects}
      {...props}
    >
      {children}
    </motion.div>
  );
}
