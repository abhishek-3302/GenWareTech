import React from 'react';
import { motion } from 'framer-motion';
import {
  LineChart,
  Palette,
  Sparkles,
  Monitor,
  Printer,
  HardDrive,
  Network,
  ShieldCheck,
  Wrench,
  Building2,
  FileCheck
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Services = () => {
  const serviceCategories = [
    {
      category: 'Digital Solutions',
      description: 'Transform your business with cutting-edge digital products',
      color: 'from-emerald-500 to-teal-500',
      services: [
        {
          title: 'Custom Website Development',
          description: 'High-performance, conversion-focused websites built with modern frameworks and best-in-class UX.',
          icon: Palette,
          features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'CMS Integration']
        },
        {
          title: 'Web Application Development',
          description: 'Scalable, secure web applications tailored to your business processes and workflows.',
          icon: LineChart,
          features: ['Custom Dashboards', 'API Integration', 'Cloud Hosting', 'Real-time Features']
        },
        {
          title: 'AI-Powered Business Solutions',
          description: 'Intelligent automation and AI tools that streamline operations and boost productivity.',
          icon: Sparkles,
          features: ['Workflow Automation', 'Data Analytics', 'Chatbot Integration', 'Process Optimization']
        }
      ]
    },
    {
      category: 'IT & Infrastructure',
      description: 'Reliable hardware and infrastructure solutions for modern enterprises',
      color: 'from-teal-500 to-green-500',
      services: [
        {
          title: 'Computers & Laptops',
          description: 'Wide range of desktops and laptops from top brands for every business need.',
          icon: Monitor,
          features: ['Branded Systems', 'Custom Configurations', 'Volume Discounts', 'After-sales Support']
        },
        {
          title: 'Printers & Scanners',
          description: 'Professional printers, scanners, and multifunction devices for all office requirements.',
          icon: Printer,
          features: ['Laser & Inkjet', 'Large Format', 'Multifunction', 'Consumables Supply']
        },
        {
          title: 'Networking Solutions',
          description: 'Complete network design, setup, and maintenance for seamless connectivity.',
          icon: Network,
          features: ['LAN/WAN Setup', 'Wireless Networks', 'Network Security', 'VPN Solutions']
        },
        {
          title: 'CCTV & Security',
          description: 'Advanced surveillance systems to keep your premises secure and monitored.',
          icon: ShieldCheck,
          features: ['HD Cameras', 'Remote Monitoring', 'Storage Solutions', 'Maintenance Plans']
        },
        {
          title: 'AMC & Support',
          description: 'Annual maintenance contracts ensuring your IT systems run smoothly year-round.',
          icon: Wrench,
          features: ['Preventive Maintenance', 'Priority Support', 'Parts Replacement', 'On-site Service']
        }
      ]
    },
    {
      category: 'Government & Enterprise',
      description: 'Specialized procurement and enterprise technology solutions',
      color: 'from-cyan-500 to-emerald-500',
      services: [
        {
          title: 'GeM Procurement',
          description: 'End-to-end GeM portal services for government and institutional purchases.',
          icon: FileCheck,
          features: ['Seller Registration', 'Bidding Support', 'Order Management', 'Compliance']
        },
        {
          title: 'Enterprise IT Setup',
          description: 'Complete office IT infrastructure from consultation to deployment.',
          icon: Building2,
          features: ['IT Assessment', 'Procurement', 'Setup & Installation', 'Training & Support']
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return (
    <section id="services" className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />
      
      <div className="container-wide relative">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-semibold mb-6 tracking-wide">
            WHAT WE DO
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
            End-to-End <span className="text-gradient">IT Solutions</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From custom software development to enterprise hardware procurement, we deliver solutions that power your business growth.
          </p>
        </motion.div>

        {serviceCategories.map((category, catIdx) => (
          <motion.div 
            key={catIdx}
            className="mb-20 last:mb-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${category.color}`} />
              <div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900">
                  {category.category}
                </h3>
                <p className="text-gray-500 mt-1">{category.description}</p>
              </div>
            </div>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              {category.services.map((service, sIdx) => (
                <motion.div key={sIdx} variants={cardVariants}>
                  <Card className="h-full group hover:shadow-xl transition-all duration-400 border-0 shadow-sm hover-lift bg-white/80 backdrop-blur-sm relative overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                    <CardContent className="p-8">
                      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} mb-6 shadow-lg`}>
                        <service.icon className="h-7 w-7 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, fIdx) => (
                          <Badge key={fIdx} variant="secondary" className="text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 border-0">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
