import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/sections/Footer';
import { ParallaxSection } from '@/components/3d/ParallaxSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Award, Mountain, Calendar } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useParallax, useStaggeredParallax } from '@/hooks/useParallax';
import luxuryLodge from '@/assets/luxury-lodge.jpg';
import alpineDining from '@/assets/alpine-dining.jpg';

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const { ref: storyRef, y: storyY } = useParallax({ speed: 0.3 });
  const { ref: teamRef, y: teamY } = useParallax({ speed: 0.4 });
  const statsParallax = useStaggeredParallax(4);

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
      <ParallaxSection
        backgroundImage={luxuryLodge}
        className="h-screen flex items-center justify-center"
        parallaxSpeed={0.6}
        enable3D={true}
        overlayOpacity={0.4}
      >
        <div className="text-center text-white px-4">
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
      </ParallaxSection>

      <main className="relative z-20 bg-background">
        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                ref={storyRef}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                style={{ y: storyY }}
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
                <div 
                  className="aspect-square rounded-2xl bg-cover bg-center"
                  style={{ backgroundImage: `url(${alpineDining})` }}
                >
                  <div className="absolute inset-0 bg-black/30 rounded-2xl" />
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
                  ref={statsParallax[index].ref}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{ y: statsParallax[index].y }}
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

            <motion.div 
              ref={teamRef}
              className="grid md:grid-cols-3 gap-8"
              style={{ y: teamY }}
            >
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
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;