import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/sections/Footer';
import { ParallaxSection } from '@/components/3d/ParallaxSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, Camera, Utensils, Dumbbell, TreePine, Star } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useParallax, useStaggeredParallax } from '@/hooks/useParallax';
import skierAction from '@/assets/skier-action.jpg';
import alpineSpa from '@/assets/alpine-spa.jpg';
import winterLandscape from '@/assets/winter-landscape.jpg';

const Activities = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const { ref: activitiesRef, y: activitiesY } = useParallax({ speed: 0.3 });
  const { ref: seasonalRef, y: seasonalY } = useParallax({ speed: 0.4 });
  const activitiesParallax = useStaggeredParallax(6);

  const activities = [
    {
      icon: Activity,
      title: 'Skiing & Snowboarding',
      description: 'World-class slopes for all skill levels with professional instruction.',
      features: ['25+ Slopes', 'Ski School', 'Equipment Rental', 'Night Skiing']
    },
    {
      icon: TreePine,
      title: 'Winter Hiking',
      description: 'Explore pristine Alpine trails with breathtaking mountain views.',
      features: ['Guided Tours', 'Snowshoe Rental', 'Wildlife Spotting', 'Photo Opportunities']
    },
    {
      icon: Dumbbell,
      title: 'Wellness & Spa',
      description: 'Rejuvenate body and mind with luxury spa treatments.',
      features: ['Alpine Spa', 'Heated Pools', 'Massage Therapy', 'Yoga Classes']
    },
    {
      icon: Camera,
      title: 'Photography Tours',
      description: 'Capture the beauty of the Alps with professional guidance.',
      features: ['Professional Guide', 'Equipment Provided', 'Sunset Tours', 'Wildlife Photography']
    },
    {
      icon: Utensils,
      title: 'Culinary Experiences',
      description: 'Savor authentic Alpine cuisine and fine dining.',
      features: ['Wine Tasting', 'Cooking Classes', 'Local Specialties', 'Chef\'s Table']
    },
    {
      icon: Star,
      title: 'Adventure Sports',
      description: 'Thrilling activities for the adventurous spirit.',
      features: ['Ice Climbing', 'Paragliding', 'Dog Sledding', 'Snowmobiling']
    }
  ];

  return (
    <div className="min-h-screen" ref={containerRef}>
      <Navigation />
      
      {/* Hero Section with 3D and Parallax */}
      <ParallaxSection
        backgroundImage={skierAction}
        className="h-screen flex items-center justify-center"
        parallaxSpeed={0.7}
        enable3D={true}
        overlayOpacity={0.3}
      >
        <div className="text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl sm:text-7xl font-display font-bold mb-6"
          >
            Alpine Adventures
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-xl sm:text-2xl max-w-2xl mx-auto"
          >
            Discover endless possibilities in the Swiss Alps
          </motion.p>
        </div>
      </ParallaxSection>

      <main className="relative z-20 bg-background">
        {/* Activities Grid */}
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
                Unforgettable Experiences
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                From adrenaline-pumping adventures to peaceful wellness retreats
              </p>
            </motion.div>

            <motion.div 
              ref={activitiesRef}
              className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
              style={{ y: activitiesY }}
            >
              {activities.map((activity, index) => (
                <motion.div
                  key={activity.title}
                  ref={activitiesParallax[index].ref}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{ y: activitiesParallax[index].y }}
                >
                  <Card className="h-full glass-effect hover:shadow-glass transition-smooth group cursor-pointer">
                    <CardHeader>
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                        <activity.icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {activity.title}
                      </CardTitle>
                      <CardDescription>
                        {activity.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {activity.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" className="w-full mt-6">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Seasonal Activities */}
        <ParallaxSection
          backgroundImage={alpineSpa}
          className="py-20"
          parallaxSpeed={0.4}
          overlayOpacity={0.8}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-display font-bold mb-6">
                Year-Round Adventures
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Experience the magic of Mont-Fort in every season
              </p>
            </motion.div>

            <motion.div 
              ref={seasonalRef}
              className="grid lg:grid-cols-2 gap-16"
              style={{ y: seasonalY }}
            >
              {['Winter Wonderland', 'Summer Alpine'].map((season, index) => (
                <motion.div
                  key={season}
                  initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <div 
                    className="aspect-video rounded-2xl bg-cover bg-center"
                    style={{ 
                      backgroundImage: index === 0 
                        ? `url(${winterLandscape})` 
                        : `url(${alpineSpa})` 
                    }}
                  >
                    <div className="w-full h-full bg-black/40 rounded-2xl flex items-center justify-center">
                      <div className="text-6xl">{index === 0 ? '❄️' : '🌸'}</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-4">{season}</h3>
                    <p className="text-muted-foreground mb-6">
                      {index === 0 
                        ? 'Experience world-class skiing, cozy evenings by the fire, and the pristine beauty of fresh Alpine snow.'
                        : 'Discover hiking trails, mountain biking, alpine flowers, and the refreshing mountain air of summer.'
                      }
                    </p>
                    <Button variant="alpine">
                      Explore {season}
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </ParallaxSection>
      </main>

      <Footer />
    </div>
  );
};

export default Activities;