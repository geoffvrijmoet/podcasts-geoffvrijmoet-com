'use client';

import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export function HeroDecorations() {
  const [isScrolling, setIsScrolling] = useState(false);
  const { scrollY } = useScroll();
  
  // Create rings with pre-defined radiuses
  const rings = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    baseRadius: 150 + (i * 180),  // Start at 150px (outside mic) and increment by 180
    delay: i * 0.1
  }));

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const unsubscribe = scrollY.on("change", () => {
      setIsScrolling(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    });

    return () => {
      unsubscribe();
      clearTimeout(timeoutId);
    };
  }, [scrollY]);

  return (
    <div className="absolute left-1/2 -translate-x-1/2 bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 opacity-80">
      <svg width="1800" height="160" viewBox="0 0 1800 160" fill="none">
        <AnimatePresence>
          {isScrolling && (
            <motion.g>
              {rings.map((ring) => (
                <motion.circle
                  key={ring.id}
                  cx="900"
                  cy="50"
                  r={ring.baseRadius}
                  stroke="#60A5FA"
                  strokeWidth={3 - ring.id * 0.4}
                  opacity={0.4 - ring.id * 0.05}
                  style={{ pathLength: 1 }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.4 - ring.id * 0.05 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: ring.delay,
                    ease: "easeOut"
                  }}
                />
              ))}
            </motion.g>
          )}
        </AnimatePresence>

        {/* Static Microphone */}
        <rect 
          x="880" 
          y="10" 
          width="40" 
          height="80" 
          rx="20" 
          stroke="#60A5FA" 
          strokeWidth="4"
        />
        
        <path 
          d="M860 70c0 22.091 17.909 40 40 40s40-17.909 40-40" 
          stroke="#60A5FA" 
          strokeWidth="4" 
          strokeLinecap="round"
        />
        
        <path 
          d="M900 110v30M880 140h40" 
          stroke="#60A5FA" 
          strokeWidth="4" 
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
} 