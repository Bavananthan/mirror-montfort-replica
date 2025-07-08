import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/sections/Footer';
import { Scene3D } from '@/components/3d/Scene3D';
import { WebGLErrorBoundary } from '@/components/3d/WebGLErrorBoundary';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const formY = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "-20%"]);

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our team',
      details: ['+41 27 775 2525', 'Available 24/7'],
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us a detailed message',
      details: ['info@mont-fort.com', 'Response within 2 hours'],
      action: 'Send Email'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Instant assistance available',
      details: ['Available 8 AM - 10 PM', 'Multiple languages'],
      action: 'Start Chat'
    },
    {
      icon: Calendar,
      title: 'Schedule Call',
      description: 'Book a consultation',
      details: ['Personal concierge', 'Trip planning'],
      action: 'Book Call'
    }
  ];

  const quickInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['Mont-Fort Resort', 'Verbier, Switzerland', 'CH-1936'],
    },
    {
      icon: Clock,
      title: 'Operating Hours',
      details: ['Resort: 24/7', 'Slopes: 8:30 AM - 4:30 PM', 'Lifts: 9:00 AM - 4:00 PM'],
    }
  ];

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
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl sm:text-7xl font-display font-bold mb-6"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-xl sm:text-2xl max-w-2xl mx-auto"
          >
            We're here to help plan your perfect Alpine escape
          </motion.p>
        </div>
      </section>

      <main className="relative z-20 bg-background">
        {/* Contact Methods */}
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
                Choose Your Preferred Method
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Multiple ways to reach our dedicated team
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full glass-effect hover:shadow-glass transition-smooth group cursor-pointer">
                    <CardHeader className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors mx-auto">
                        <method.icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {method.title}
                      </CardTitle>
                      <CardDescription>
                        {method.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center space-y-3">
                      {method.details.map((detail, i) => (
                        <div key={i} className="text-sm text-muted-foreground">
                          {detail}
                        </div>
                      ))}
                      <Button variant="outline" className="w-full mt-4">
                        {method.action}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <motion.section 
          className="py-20 bg-muted/30"
          style={{ y: formY }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="glass-effect shadow-mountain">
                  <CardHeader>
                    <CardTitle className="text-2xl">Send us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you within 24 hours
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

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Check-in Date</label>
                        <Input type="date" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Check-out Date</label>
                        <Input type="date" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Message</label>
                      <Textarea 
                        placeholder="Tell us about your planned visit, group size, special requirements, or any questions you have..."
                        rows={5}
                      />
                    </div>

                    <Button variant="alpine" size="lg" className="w-full">
                      Send Message
                    </Button>

                    <div className="text-center text-sm text-muted-foreground">
                      Prefer to call? Reach us at{' '}
                      <a href="tel:+41277752525" className="text-primary hover:underline font-semibold">
                        +41 27 775 2525
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-display font-bold mb-6">Visit Mont-Fort</h3>
                  <p className="text-muted-foreground mb-8">
                    Located in the heart of the Swiss Alps, our resort offers easy access 
                    to world-class skiing and luxury amenities. Our concierge team is 
                    available 24/7 to assist with any requests.
                  </p>
                </div>

                {quickInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Card className="glass-effect">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-3">
                          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                            <info.icon className="w-5 h-5 text-primary" />
                          </div>
                          <CardTitle className="text-lg">{info.title}</CardTitle>
                        </div>
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

                {/* Interactive Map Placeholder */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="rounded-2xl overflow-hidden shadow-elevation bg-gradient-to-br from-primary/20 to-accent/20 h-64 flex items-center justify-center"
                >
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="text-lg font-semibold mb-2">Interactive Map</h4>
                    <p className="text-muted-foreground text-sm">
                      Click to view detailed location and directions
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;