import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Linkedin, Instagram, ArrowUp, ExternalLink } from 'lucide-react';
import Logo from "../lovable-uploads/GenFooterLogo.png";

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    { name: 'Custom Websites', href: '#services' },
    { name: 'Web Applications', href: '#services' },
    { name: 'AI Automation', href: '#services' },
    { name: 'IT Infrastructure', href: '#services' },
    { name: 'GeM Procurement', href: '#services' },
    { name: 'Networking & CCTV', href: '#services' },
  ];

  const industries = [
    { name: 'Healthcare & Clinics', href: '#portfolio' },
    { name: 'Schools & Colleges', href: '#portfolio' },
    { name: 'Hotels & Hospitality', href: '#portfolio' },
    { name: 'Government Bodies', href: '#portfolio' },
    { name: 'NGOs', href: '#portfolio' },
    { name: 'SMEs & Retailers', href: '#portfolio' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.03]" />
      
      <div className="container-wide relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 py-16">
          <div className="lg:col-span-2 space-y-6">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
            >
              <img src={Logo} alt="GENWARE Technologies" className="h-16 w-auto" />
            </motion.div>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Transforming businesses across Assam and Northeast India through intelligent digital solutions and enterprise IT infrastructure.
            </p>
            
            <div className="flex items-center gap-3">
              {[
                { Icon: Facebook, href: '#', label: 'Facebook' },
                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                { Icon: Instagram, href: '#', label: 'Instagram' },
              ].map(({ Icon, href, label }, index) => (
                <motion.a 
                  key={index}
                  href={href}
                  className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center hover:bg-primary transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>

            <div className="pt-4">
              <p className="text-sm text-gray-500 mb-2">Trusted across</p>
              <p className="text-xs text-gray-600">Assam • Northeast India • Government & Enterprise</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-primary rounded-full group-hover:w-3 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a href={service.href} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-primary rounded-full group-hover:w-3 transition-all duration-300" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Industries</h4>
            <ul className="space-y-3">
              {industries.map((industry) => (
                <li key={industry.name}>
                  <a href={industry.href} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-primary rounded-full group-hover:w-3 transition-all duration-300" />
                    {industry.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-4 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Mission Road, Golaghat, Assam - 785621</span>
              </div>
              <a href="tel:+917892649170" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm">+91 7892-649170</span>
              </a>
              <a href="mailto:genwaretechnologies@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm">genwaretechnologies@gmail.com</span>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} GENWARE Technologies. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
              <span className="text-gray-700">Designed by GENWARE Technologies</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
