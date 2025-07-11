import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface UseParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down';
  range?: [number, number];
  outputRange?: [string, string];
}

export const useParallax = (options: UseParallaxOptions = {}) => {
  const {
    speed = 0.5,
    direction = 'up',
    range = [0, 1],
    outputRange = ["0%", direction === 'up' ? "-50%" : "50%"]
  } = options;

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, range, outputRange);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.7, 1, 1, 0.7]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return { ref, y, opacity, scale, scrollYProgress };
};

export const useStaggeredParallax = (items: number) => {
  const parallaxItems = Array.from({ length: items }, (_, index) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"]
    });

    const delay = index * 0.1;
    const y = useTransform(
      scrollYProgress, 
      [0, 1], 
      ["0%", `${-20 - (index * 5)}%`]
    );
    const opacity = useTransform(
      scrollYProgress, 
      [0, 0.2 + delay, 0.8 - delay, 1], 
      [0, 1, 1, 0]
    );

    return { ref, y, opacity, scrollYProgress };
  });

  return parallaxItems;
};