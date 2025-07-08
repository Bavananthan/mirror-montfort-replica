import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/sections/Footer';
import { Scene3D } from '@/components/3d/Scene3D';
import { WebGLErrorBoundary } from '@/components/3d/WebGLErrorBoundary';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Award, Mountain, Calendar } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);

  const stats = [
    { icon: Calendar, label: 'Founded', value: '1984' },
    { icon: Mountain, label: 'Elevation', value: '3,200m' },
    { icon: Users, label: 'Guests Yearly', value: '500K+' },
    { icon: Award, label: 'Awards', value: '15+' },
  ];

  return (
    <div className="min-h-screen" ref={containerRef}>
      <Navigation />
      
      {/* Hero Section with 3D and Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y, opacity }}
        >
          <WebGLErrorBoundary>
            <Scene3D className="w-full h-full" />
          </WebGLErrorBoundary>
        </motion.div>
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl sm:text-7xl font-display font-bold mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-xl sm:text-2xl max-w-2xl mx-auto"
          >
            Four decades of Alpine excellence in the heart of Switzerland
          </motion.p>
        </div>
      </section>

      <main className="relative z-20 bg-background">
        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-display font-bold mb-6">
                  A Legacy of Excellence
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in 1984 by the Dubois family, Mont-Fort Resort began as a vision 
                    to create the ultimate Alpine experience. What started as a modest ski lodge 
                    has evolved into Switzerland's premier luxury mountain destination.
                  </p>
                  <p>
                    Our commitment to preserving the natural beauty of the Swiss Alps while 
                    providing world-class amenities has made us a favorite among discerning 
                    travelers from around the globe.
                  </p>
                  <p>
                    Today, we continue to innovate while honoring our heritage, ensuring that 
                    every guest experiences the perfect blend of Alpine tradition and modern luxury.
                  </p>
                </div>
                <Button variant="alpine" size="lg" className="mt-6">
                  Discover Our Heritage
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-6xl">🏔️</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section with Parallax */}
        <motion.section 
          className="py-20 bg-primary text-white"
          style={{ y: useTransform(scrollYProgress, [0.3, 0.7], ["0%", "-20%"]) }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary-foreground/80" />
                  <div className="text-3xl font-display font-bold mb-2">{stat.value}</div>
                  <div className="text-primary-foreground/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-display font-bold mb-6">
                Meet Our Team
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Passionate professionals dedicated to creating unforgettable Alpine experiences
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {['Resort Director', 'Head Chef', 'Ski Instructor'].map((role, index) => (
                <motion.div
                  key={role}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-effect hover:shadow-glass transition-smooth">
                    <CardHeader>
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-4 flex items-center justify-center">
                        <Users className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-center">{role}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center">
                        Dedicated to providing exceptional service and creating memorable experiences for our guests.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;