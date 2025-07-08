import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Snowflake, Mountain, Activity, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import skiingImage from '@/assets/skiing-equipment.jpg';

export const SlopesSection = () => {
  const slopes = [
    {
      name: 'Beginner Paradise',
      difficulty: 'Green',
      length: '2.5 km',
      elevation: '1,200m',
      description: 'Perfect gentle slopes for learning and family fun.',
      features: ['Ski School', 'Equipment Rental', 'Cafeteria'],
      color: 'bg-green-500',
    },
    {
      name: 'Intermediate Adventure',
      difficulty: 'Blue',
      length: '4.2 km',
      elevation: '1,800m',
      description: 'Challenging trails with stunning panoramic views.',
      features: ['Groomed Daily', 'Snow Making', 'Mountain Huts'],
      color: 'bg-blue-500',
    },
    {
      name: 'Expert Challenge',
      difficulty: 'Black',
      length: '6.8 km',
      elevation: '2,400m',
      description: 'Steep terrain for advanced skiers and snowboarders.',
      features: ['Off-Piste Access', 'Powder Paradise', 'Heli-Skiing'],
      color: 'bg-gray-800',
    },
    {
      name: 'Extreme Summit',
      difficulty: 'Double Black',
      length: '8.5 km',
      elevation: '3,200m',
      description: 'Ultimate challenge for professional level athletes.',
      features: ['Extreme Terrain', 'Weather Station', 'Rescue Service'],
      color: 'bg-red-600',
    },
  ];

  const stats = [
    { icon: Mountain, label: 'Slopes', value: '45+' },
    { icon: Snowflake, label: 'Snow Quality', value: '100%' },
    { icon: Activity, label: 'Elevation', value: '3,200m' },
    { icon: Users, label: 'Daily Capacity', value: '15,000' },
  ];

  return (
    <section id="slopes" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-3d">
            World-Class Slopes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From gentle learning slopes to extreme challenges, Mont-Fort offers 
            terrain for every skill level with pristine Alpine conditions.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold font-display mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Slopes Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {slopes.map((slope, index) => (
            <motion.div
              key={slope.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full glass-effect hover:shadow-mountain transition-smooth group cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={`${slope.color} text-white`}>
                      {slope.difficulty}
                    </Badge>
                    <div className="text-sm text-muted-foreground">
                      {slope.elevation}
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {slope.name}
                  </CardTitle>
                  <CardDescription>{slope.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Length</span>
                      <span className="font-semibold">{slope.length}</span>
                    </div>
                    
                    <div className="space-y-2">
                      <span className="text-sm font-medium">Features:</span>
                      <div className="flex flex-wrap gap-1">
                        {slope.features.map((feature) => (
                          <Badge key={feature} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button variant="outline" className="w-full group-hover:variant-alpine transition-all">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 relative rounded-2xl overflow-hidden shadow-mountain"
        >
          <img
            src={skiingImage}
            alt="Premium skiing equipment"
            className="w-full h-64 sm:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="px-8 sm:px-12 text-white">
              <h3 className="text-2xl sm:text-3xl font-display font-bold mb-4">
                Premium Equipment
              </h3>
              <p className="text-lg mb-6 max-w-md">
                Professional-grade equipment rental and expert fitting services available.
              </p>
              <Button variant="golden" size="lg">
                Rent Equipment
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};