import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import { Scene3D } from './Scene3D';
import { WebGLErrorBoundary } from './WebGLErrorBoundary';

interface ParallaxSectionProps {
  children: ReactNode;
  backgroundImage?: string;
  className?: string;
  parallaxSpeed?: number;
  enable3D?: boolean;
  overlayOpacity?: number;
}

export const ParallaxSection = ({ 
  children, 
  backgroundImage, 
  className = '', 
  parallaxSpeed = 0.5,
  enable3D = false,
  overlayOpacity = 0.4
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${parallaxSpeed * 100}%`]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Background Image with Parallax */}
      {backgroundImage && (
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y, scale }}
        >
          <div
            className="w-full h-[120%] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          />
          <div 
            className="absolute inset-0 bg-black"
            style={{ opacity: overlayOpacity }}
          />
        </motion.div>
      )}

      {/* 3D Scene Layer */}
      {enable3D && (
        <motion.div 
          className="absolute inset-0 z-10"
          style={{ opacity }}
        >
          <WebGLErrorBoundary
            fallback={
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl mb-4">🏔️</div>
                </div>
              </div>
            }
          >
            <Scene3D className="w-full h-full" />
          </WebGLErrorBoundary>
        </motion.div>
      )}

      {/* Content */}
      <motion.div 
        className="relative z-20"
        style={{ opacity }}
      >
        {children}
      </motion.div>
    </div>
  );
};