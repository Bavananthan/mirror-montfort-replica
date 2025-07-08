import { Button } from '@/components/ui/button';
import { Mountain, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer = () => {
  const footerLinks = {
    Resort: [
      { label: 'Accommodations', href: '#' },
      { label: 'Dining', href: '#' },
      { label: 'Spa & Wellness', href: '#' },
      { label: 'Conference Center', href: '#' },
    ],
    Activities: [
      { label: 'Skiing & Snowboarding', href: '#slopes' },
      { label: 'Ski School', href: '#' },
      { label: 'Equipment Rental', href: '#' },
      { label: 'Guided Tours', href: '#' },
    ],
    Information: [
      { label: 'Weather Conditions', href: '#' },
      { label: 'Lift Status', href: '#' },
      { label: 'Trail Map', href: '#' },
      { label: 'Safety Guidelines', href: '#' },
    ],
    Support: [
      { label: 'Contact Us', href: '#contact' },
      { label: 'FAQ', href: '#' },
      { label: 'Booking Policy', href: '#' },
      { label: 'Privacy Policy', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gradient-to-b from-primary/5 to-primary/10 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2">
                <Mountain className="w-8 h-8 text-primary" />
                <span className="text-2xl font-display font-bold text-primary">
                  Mont-Fort
                </span>
              </div>
              <p className="text-muted-foreground max-w-md">
                Experience the pinnacle of Alpine luxury at Switzerland's premier 
                ski resort, where adventure meets elegance at 3,200 meters.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-smooth"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="font-display font-semibold text-foreground">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-border pt-8 mb-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-display font-semibold mb-2">
                Stay Updated
              </h3>
              <p className="text-muted-foreground">
                Get the latest news on conditions, events, and special offers.
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:w-64"
              />
              <Button variant="alpine">Subscribe</Button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
        >
          <div>
            © 2024 Mont-Fort Resort. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-smooth">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-smooth">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-smooth">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};