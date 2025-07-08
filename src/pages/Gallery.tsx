import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/sections/Footer';
import { Scene3D } from '@/components/3d/Scene3D';
import { WebGLErrorBoundary } from '@/components/3d/WebGLErrorBoundary';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Camera, Play, Download, Share2 } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Gallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  const galleryItems = [
    {
      type: 'image',
      title: 'Alpine Sunrise',
      description: 'Breathtaking sunrise over the Mont-Fort peaks',
      category: 'Landscape'
    },
    {
      type: 'image',
      title: 'Powder Paradise',
      description: 'Fresh powder snow on pristine slopes',
      category: 'Skiing'
    },
    {
      type: 'video',
      title: 'Resort Tour',
      description: 'Virtual tour of our luxury facilities',
      category: 'Resort'
    },
    {
      type: 'image',
      title: 'Alpine Dining',
      description: 'Exquisite cuisine with mountain views',
      category: 'Dining'
    },
    {
      type: 'image',
      title: 'Spa Retreat',
      description: 'Luxury wellness and relaxation',
      category: 'Wellness'
    },
    {
      type: 'video',
      title: 'Skiing Action',
      description: 'Professional skiing demonstrations',
      category: 'Skiing'
    },
    {
      type: 'image',
      title: 'Winter Lodge',
      description: 'Cozy interiors and Alpine charm',
      category: 'Resort'
    },
    {
      type: 'image',
      title: 'Night Slopes',
      description: 'Illuminated skiing under the stars',
      category: 'Skiing'
    },
    {
      type: 'image',
      title: 'Mountain Wildlife',
      description: 'Native Alpine animals in their habitat',
      category: 'Nature'
    }
  ];

  const categories = ['All', 'Landscape', 'Skiing', 'Resort', 'Dining', 'Wellness', 'Nature'];

  return (
    <div className="min-h-screen" ref={containerRef}>
      <Navigation />
      
      {/* Hero Section with 3D and Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY }}
        >
          <WebGLErrorBoundary>
            <Scene3D className="w-full h-full" />
          </WebGLErrorBoundary>
        </motion.div>
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm mb-6"
          >
            <Camera className="w-10 h-10" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-5xl sm:text-7xl font-display font-bold mb-6"
          >
            Visual Journey
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-xl sm:text-2xl max-w-2xl mx-auto"
          >
            Capture the essence of Alpine luxury through our lens
          </motion.p>
        </div>
      </section>

      <main className="relative z-20 bg-background">
        {/* Gallery Controls */}
        <section className="py-12 bg-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3"
            >
              {categories.map((category, index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Button 
                    variant={index === 0 ? "alpine" : "outline"} 
                    size="sm"
                    className="transition-smooth"
                  >
                    {category}
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Gallery Grid */}
        <motion.section 
          className="py-20"
          style={{ y: parallaxY }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <Card className="overflow-hidden glass-effect hover:shadow-glass transition-smooth">
                    <div className="relative aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                      {item.type === 'video' ? (
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                          <Play className="w-16 h-16 text-white/80 group-hover:scale-110 transition-transform" />
                        </div>
                      ) : (
                        <div className="text-4xl opacity-60 group-hover:scale-110 transition-transform">
                          📸
                        </div>
                      )}
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-end">
                        <div className="p-4 w-full opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="flex justify-between items-center">
                            <div className="text-white text-sm font-medium">
                              {item.category}
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" variant="glass" className="opacity-90">
                                <Share2 className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="glass" className="opacity-90">
                                <Download className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl font-display font-bold mb-6">
                Create Your Own Memories
              </h2>
              <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                Book your stay and become part of our visual story
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="golden" size="lg">
                  Book Now
                </Button>
                <Button variant="glass" size="lg">
                  Download Media Kit
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;