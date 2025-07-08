import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Utensils, Bed, Wifi, Car, Coffee, Dumbbell } from 'lucide-react';
import { motion } from 'framer-motion';
import resortImage from '@/assets/resort-lodge.jpg';

export const ResortSection = () => {
  const amenities = [
    {
      icon: Utensils,
      title: 'Fine Dining',
      description: 'Award-winning restaurants featuring Alpine cuisine and international dishes.',
    },
    {
      icon: Bed,
      title: 'Luxury Lodging',
      description: 'Premium accommodations with stunning mountain views and spa services.',
    },
    {
      icon: Wifi,
      title: 'Modern Amenities',
      description: 'High-speed internet, conference facilities, and business center.',
    },
    {
      icon: Car,
      title: 'Valet Parking',
      description: 'Complimentary valet parking and shuttle services to the slopes.',
    },
    {
      icon: Coffee,
      title: 'Apres-Ski Lounge',
      description: 'Cozy fireside lounges with premium beverages and live entertainment.',
    },
    {
      icon: Dumbbell,
      title: 'Wellness Center',
      description: 'Full-service spa, fitness center, and heated indoor/outdoor pools.',
    },
  ];

  return (
    <section id="resort" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-3d">
            Luxury Alpine Resort
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience unparalleled comfort and service in our world-class facilities, 
            where Alpine tradition meets modern luxury.
          </p>
        </motion.div>

        {/* Main Resort Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-mountain mb-16"
        >
          <img
            src={resortImage}
            alt="Mont-Fort luxury resort lodge"
            className="w-full h-96 sm:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
            <div className="p-8 sm:p-12 text-white w-full">
              <div className="max-w-2xl">
                <h3 className="text-3xl sm:text-4xl font-display font-bold mb-4">
                  Alpine Elegance Redefined
                </h3>
                <p className="text-lg mb-6 opacity-90">
                  Immerse yourself in the perfect blend of traditional Swiss hospitality 
                  and contemporary luxury at 2,400 meters above sea level.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="golden" size="lg">
                    Book Your Stay
                  </Button>
                  <Button variant="glass" size="lg">
                    Virtual Tour
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Amenities Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full glass-effect hover:shadow-glass transition-smooth group cursor-pointer">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                    <amenity.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {amenity.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {amenity.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-primary rounded-2xl p-8 sm:p-12 text-white shadow-mountain"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-display font-bold mb-2">150+</div>
              <div className="text-primary-foreground/80">Luxury Rooms</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-display font-bold mb-2">5</div>
              <div className="text-primary-foreground/80">Restaurants</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-display font-bold mb-2">24/7</div>
              <div className="text-primary-foreground/80">Concierge</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-display font-bold mb-2">5★</div>
              <div className="text-primary-foreground/80">Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};