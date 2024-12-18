'use client';

import { motion } from 'framer-motion';

export function HeroDecorations() {
  // Create more bars for a denser waveform
  const bars = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    initialHeight: Math.random() * 30 + 5, // More varied initial heights
  }));

  return (
    <>
      {/* Audio Waveform Visualizer */}
      <motion.div 
        className="absolute left-1/2 -translate-x-1/2 bottom-20"
        style={{ opacity: 0.4 }}
      >
        <svg width="600" height="120" viewBox="0 0 600 120" fill="none">
          <g transform="translate(0, 60)">
            {bars.map((bar, index) => (
              <motion.path
                key={bar.id}
                d={`M${index * 15} 0 L${index * 15} ${-bar.initialHeight} L${index * 15} ${bar.initialHeight}`}
                stroke="#60A5FA"
                strokeWidth="2"
                strokeLinecap="round"
                animate={{
                  d: [
                    `M${index * 15} 0 L${index * 15} ${-bar.initialHeight} L${index * 15} ${bar.initialHeight}`,
                    `M${index * 15} 0 L${index * 15} ${-bar.initialHeight * 1.5} L${index * 15} ${bar.initialHeight * 1.5}`,
                    `M${index * 15} 0 L${index * 15} ${-bar.initialHeight * 0.5} L${index * 15} ${bar.initialHeight * 0.5}`,
                    `M${index * 15} 0 L${index * 15} ${-bar.initialHeight} L${index * 15} ${bar.initialHeight}`,
                  ]
                }}
                transition={{
                  duration: 0.8 + Math.random() * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.02
                }}
              />
            ))}
          </g>
        </svg>
      </motion.div>

      {/* Volume Bars - Top Left */}
      <div className="absolute left-32 top-20 opacity-20">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <path d="M10 40h10M30 20h10M50 10h10M30 60h10M50 70h10M50 30h10" 
            stroke="#60A5FA" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Headphones - Top Right */}
      <div className="absolute right-32 top-20 opacity-20">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <path d="M20 50V40a30 30 0 0 1 60 0v10" stroke="#60A5FA" strokeWidth="4"/>
          <rect x="10" y="50" width="20" height="30" rx="10" stroke="#60A5FA" strokeWidth="4"/>
          <rect x="70" y="50" width="20" height="30" rx="10" stroke="#60A5FA" strokeWidth="4"/>
        </svg>
      </div>

      {/* Circular Equalizer - Right Side */}
      <div className="absolute right-10 top-1/4 opacity-20">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="45" stroke="#60A5FA" strokeWidth="2"/>
          <circle cx="50" cy="50" r="35" stroke="#60A5FA" strokeWidth="2"/>
          <circle cx="50" cy="50" r="25" stroke="#60A5FA" strokeWidth="2"/>
          <line x1="50" y1="0" x2="50" y2="100" stroke="#60A5FA" strokeWidth="2"/>
          <line x1="0" y1="50" x2="100" y2="50" stroke="#60A5FA" strokeWidth="2"/>
        </svg>
      </div>

      {/* Play Button - Bottom Left */}
      <div className="absolute left-20 bottom-1/4 opacity-20">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="38" stroke="#60A5FA" strokeWidth="4"/>
          <path d="M32 25l25 15-25 15V25z" stroke="#60A5FA" strokeWidth="4"/>
        </svg>
      </div>

      {/* Microphone Icon - Bottom Right */}
      <div className="absolute right-20 bottom-1/4 opacity-20">
        <svg width="80" height="120" viewBox="0 0 80 120" fill="none">
          <rect x="20" y="10" width="40" height="60" rx="20" stroke="#60A5FA" strokeWidth="4"/>
          <path d="M10 50c0 16.569 13.431 30 30 30s30-13.431 30-30" 
            stroke="#60A5FA" strokeWidth="4" strokeLinecap="round"/>
          <line x1="40" y1="80" x2="40" y2="110" stroke="#60A5FA" strokeWidth="4"/>
          <line x1="20" y1="110" x2="60" y2="110" stroke="#60A5FA" strokeWidth="4"/>
        </svg>
      </div>

      {/* Sound Wave - Center Bottom */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20">
        <svg width="200" height="40" viewBox="0 0 200 40" fill="none">
          <path d="M10 20h10M40 10h10M70 5h10M100 20h10M130 30h10M160 15h10M190 25h10" 
            stroke="#60A5FA" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      </div>
    </>
  )
} 