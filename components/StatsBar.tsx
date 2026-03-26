'use client';

import { useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

const stats: StatItem[] = [
  { value: 2018, suffix: '', label: 'Fondé', prefix: '' },
  { value: 3, suffix: '', label: 'Équipes', prefix: '' },
  { value: 60, suffix: '+', label: 'Joueurs', prefix: '' },
  { value: 15, suffix: '+', label: 'Nationalités', prefix: '' },
];

function AnimatedCounter({ value, suffix, prefix = '' }: { value: number; suffix: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration: 2,
        ease: 'easeOut',
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = `${prefix}${Math.round(latest)}${suffix}`;
          }
        },
      });
      return controls.stop;
    }
  }, [isInView, value, suffix, prefix, motionValue]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

export default function StatsBar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={containerRef}
      className="bg-noir py-12 md:py-16 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #C8102E 0, #C8102E 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              className="text-center group"
            >
              {/* Value */}
              <div className="font-display font-black text-4xl md:text-5xl text-white mb-2 leading-none group-hover:text-rouge transition-colors duration-300">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                />
              </div>

              {/* Divider */}
              <div className="w-8 h-0.5 bg-rouge mx-auto mb-2 group-hover:w-12 transition-all duration-300" />

              {/* Label */}
              <p className="text-white/50 text-xs font-body tracking-widest uppercase font-semibold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
