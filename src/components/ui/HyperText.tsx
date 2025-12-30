'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const ALPHABETS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export default function HyperText({
  text,
  className = '',
}: {
  text: string;
  className?: string;
}) {
  const [displayText, setDisplayText] = useState(text.split('').map(() => ' '));
  const [isScrambling, setIsScrambling] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !isScrambling) {
      setIsScrambling(true);
      let iteration = 0;
      const interval = setInterval(() => {
        setDisplayText(() =>
          text.split('').map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            return ALPHABETS[Math.floor(Math.random() * ALPHABETS.length)];
          })
        );

        if (iteration >= text.length) {
          clearInterval(interval);
          setIsScrambling(false);
        }

        iteration += 1 / 3; // Controls speed: lower denominator = faster
      }, 30);
      
      return () => clearInterval(interval);
    }
  }, [isInView, text, isScrambling]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {displayText.join('')}
    </motion.span>
  );
}
