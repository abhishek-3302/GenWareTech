import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Phone, Mail, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from "@/lovable-uploads/GenLog2.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const headerBg = useTransform(scrollY, [0, 100], ['rgba(255,255,255,0)', 'rgba(255,255,255,0.95)']);
  const headerShadow = useTransform(scrollY, [0, 100], ['0 0 0 rgba(0,0,0,0)', '0 4px 30px rgba(0,0,0,0.08)']);

  useEffect(() => {
    const updateScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', isMenuOpen);
    return () => document.body.classList.remove('no-scroll');
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{ backgroundColor: headerBg, boxShadow: headerShadow }}
    >
      <div className="container-wide">
        <div className="flex justify-between items-center h-20">
          <motion.a 
            href="#home"
            className="flex items-center"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <img src={Logo} alt="GENWARE Technologies" className="h-10 md:h-12 w-auto" />
          </motion.a>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200 rounded-full hover:bg-primary/5"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+917892649170" className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              <span className="font-medium">+91 7892-649170</span>
            </a>
            <a href="#contact">
              <Button size="default" className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
                Get Quote
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </a>
          </div>

          <button
            className="lg:hidden p-2.5 rounded-xl hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.div
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.div>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div 
          className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="container-narrow py-6 space-y-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="flex items-center justify-between px-4 py-3.5 text-gray-700 hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <span className="font-medium">{item.name}</span>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </motion.a>
            ))}
            <div className="pt-4 px-4 space-y-3">
              <a href="tel:+917892649170" className="flex items-center gap-3 text-gray-600">
                <Phone className="h-4 w-4" />
                <span className="text-sm font-medium">+91 7892-649170</span>
              </a>
              <a href="mailto:genwaretechnologies@gmail.com" className="flex items-center gap-3 text-gray-600">
                <Mail className="h-4 w-4" />
                <span className="text-sm font-medium">genwaretechnologies@gmail.com</span>
              </a>
              <Button className="w-full mt-2 bg-primary hover:bg-primary/90">
                Get a Free Quote
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
