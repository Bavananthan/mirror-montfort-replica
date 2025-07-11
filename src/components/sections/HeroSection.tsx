import { Button } from '@/components/ui/button';
import { ParallaxSection } from '@/components/3d/ParallaxSection';
import { Play, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useParallax } from '@/hooks/useParallax';
import alpinePeaks from '@/assets/alpine-peaks.jpg';

export const HeroSection = () => {
  const { ref: floatingRef, y: floatingY } = useParallax({ speed: 0.3 });

  return (
    <ParallaxSection
      backgroundImage={alpinePeaks}
      className="min-h-screen flex items-center justify-center"
      parallaxSpeed={0.5}
      enable3D={true}
      overlayOpacity={0.3}
    >
      <div className="text-center text-white px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold mb-6 text-3d"
          >
            Experience the{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Alps
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-xl sm:text-2xl mb-8 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Discover pristine slopes, breathtaking views, and world-class amenities 
            at Switzerland's premier Alpine destination.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button variant="alpine" size="xl" className="group">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Explore Now
            </Button>
            <Button variant="glass" size="xl">
              Watch Video
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex flex-col items-center cursor-pointer"
              onClick={() => document.getElementById('slopes')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="text-sm mb-2 opacity-80">Discover More</span>
              <ArrowDown className="w-6 h-6 opacity-60" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        ref={floatingRef}
        className="absolute inset-0 z-15 pointer-events-none"
        style={{ y: floatingY }}
      >
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>
    </ParallaxSection>
  );
};