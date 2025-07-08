import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['Mont-Fort Resort', 'Verbier, Switzerland', 'CH-1936'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+41 27 775 2525', '+41 27 775 2526 (Ski School)'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@mont-fort.com', 'reservations@mont-fort.com'],
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Resort: 24/7', 'Slopes: 8:30 AM - 4:30 PM', 'Lifts: 9:00 AM - 4:00 PM'],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/20">
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
            Plan Your Visit
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to experience the magic of Mont-Fort? Get in touch with our team 
            to plan your perfect Alpine adventure.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-display font-bold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8">
                Our concierge team is available 24/7 to assist with reservations, 
                ski lessons, equipment rental, and any special requests.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full glass-effect hover:shadow-glass transition-smooth">
                    <CardHeader className="pb-3">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mb-3">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{info.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-1">
                        {info.details.map((detail, i) => (
                          <div key={i} className="text-sm text-muted-foreground">
                            {detail}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-elevation bg-gradient-to-br from-primary/20 to-accent/20 h-64 flex items-center justify-center"
            >
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Interactive Map</h4>
                <p className="text-muted-foreground">
                  Explore our location in the heart of the Swiss Alps
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass-effect shadow-mountain">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>
                  We'll get back to you within 24 hours to help plan your visit.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="Enter your email" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone</label>
                  <Input type="tel" placeholder="Enter your phone number" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Visit Dates</label>
                  <Input type="date" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    placeholder="Tell us about your planned visit, group size, and any special requirements..."
                    rows={4}
                  />
                </div>

                <Button variant="alpine" size="lg" className="w-full">
                  Send Message
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  Or call us directly at{' '}
                  <a href="tel:+41277752525" className="text-primary hover:underline font-semibold">
                    +41 27 775 2525
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};