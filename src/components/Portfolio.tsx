import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  LineChart,
  MessageSquare,
  ShoppingCart,
  CalendarCheck,
  HeartHandshake,
  Stethoscope,
  School,
  Hotel,
  Building2,
  FileText,
  Database,
  ArrowRight,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import logunDentalImage from '@/lovable-uploads/logundental.png';
import nehcImage from '@/lovable-uploads/nehc.png';
import sanjibaniImage from '@/lovable-uploads/sanjibani.png';

const Portfolio = () => {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (id: number) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };
  const caseStudies = [
    {
      id: 1,
      client: 'Loguns Dental',
      industry: 'Healthcare',
      icon: Stethoscope,
      color: 'from-teal-500 to-cyan-400',
      challenge: 'Needed a modern, patient-friendly website to showcase services, enable online appointments, and establish trust with new patients in Golaghat.',
      solution: 'Designed and developed a premium clinic website with service showcases, appointment booking integration, and mobile-first responsive design.',
      features: ['Online Appointment System', 'Service Catalog', 'Mobile Optimization', 'SEO Optimization', 'Patient Portal Integration'],
      techStack: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      image: logunDentalImage,
      status: 'Live',
      impact: '40% increase in online appointments within 3 months'
    },
    {
      id: 2,
      client: 'NorthEastern HealthCare Company',
      industry: 'Medical Equipment',
      icon: Database,
      color: 'from-emerald-300 to-teal-400',
      challenge: 'Required a professional B2B company profile website with a product catalog system and inquiry management for hospital equipment suppliers.',
      solution: 'Built a comprehensive B2B web presence with an advanced product catalog, inquiry form system, and company profile showcasing 500+ products.',
      features: ['Product Catalog (500+ items)', 'Bulk Inquiry System', 'Quote Request Flow', 'Admin Dashboard', 'PDF Catalog Downloads'],
      techStack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
      image: nehcImage,
      status: 'Live',
      impact: '3x increase in qualified B2B inquiries'
    },
    {
      id: 3,
      client: 'Sanjibani NGO',
      industry: 'Non-Profit',
      icon: HeartHandshake,
      color: 'from-green-500 to-emerald-500',
      challenge: 'Needed an impactful mission-driven website to tell their story, showcase community projects, and drive donations for rural development initiatives.',
      solution: 'Created an emotionally engaging NGO website with mission storytelling, project gallery, donation integration, and volunteer management system.',
      features: ['Donation Integration', 'Project Showcase', 'Impact Dashboard', 'Volunteer Registration', 'Event Management'],
      techStack: ['React', 'Firebase', 'GSAP Animations', 'Razorpay'],
      image: sanjibaniImage,
      status: 'Live',
      impact: '150% increase in monthly donations'
    }
  ];

  const industries = [
    { name: 'Doctors & Clinics', icon: Stethoscope },
    { name: 'Schools & Colleges', icon: School },
    { name: 'Hotels & Hospitality', icon: Hotel },
    { name: 'Contractors', icon: Building2 },
    { name: 'Medical Equipment', icon: Database },
    { name: 'NGOs & NGOs', icon: HeartHandshake },
    { name: 'SMBs', icon: LineChart },
    { name: 'Government Bodies', icon: FileText },
  ];

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-wide">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-semibold mb-4 tracking-wide">
            PORTFOLIO
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
            Real Results for <span className="text-gradient">Real Businesses</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We don't just build websites — we deliver digital solutions that drive growth. Here are some of our recent success stories.
          </p>
        </motion.div>

        <div className="space-y-24">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
            >
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 text-primary text-sm font-medium mb-4">
                  <study.icon className="h-4 w-4" />
                  {study.industry}
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                  {study.client}
                </h3>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {study.challenge}
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">The Challenge</h4>
                    <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Our Solution</h4>
                    <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Key Features Delivered</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {study.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-700">
                          <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {study.techStack.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-lg bg-gray-100 text-gray-700 text-xs font-mono font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
                    {!imageErrors[study.id] ? (
                      <img
                        src={study.image}
                        alt={`${study.client} portfolio preview`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={() => handleImageError(study.id)}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center p-8 w-full">
                          <svg viewBox="0 0 400 300" className="w-full max-w-md mx-auto rounded-xl" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <linearGradient id={`grad-${study.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor={study.color.includes('teal') ? '#14b8a6' : study.color.includes('emerald') ? '#34d399' : '#4ade80'} />
                                <stop offset="100%" stopColor={study.color.includes('teal') ? '#0d9488' : study.color.includes('emerald') ? '#10b981' : '#16a34a'} />
                              </linearGradient>
                            </defs>
                            <rect width="400" height="300" rx="12" fill={`url(#grad-${study.id})`} />
                            <rect x="24" y="24" width="352" height="48" rx="8" fill="white" fillOpacity="0.2" />
                            <rect x="24" y="88" width="120" height="180" rx="8" fill="white" fillOpacity="0.15" />
                            <rect x="160" y="88" width="216" height="80" rx="8" fill="white" fillOpacity="0.1" />
                            <rect x="160" y="184" width="216" height="84" rx="8" fill="white" fillOpacity="0.1" />
                            <circle cx="84" cy="128" r="20" fill="white" fillOpacity="0.3" />
                            <circle cx="84" cy="178" r="8" fill="white" fillOpacity="0.2" />
                            <circle cx="84" cy="200" r="8" fill="white" fillOpacity="0.2" />
                          </svg>
                          <p className="text-gray-500 text-sm font-medium mt-3">{study.client} Website</p>
                          <p className="text-gray-400 text-xs mt-1">Portfolio preview — {study.status}</p>
                        </div>
                      </div>
                    )}
                    <div className="absolute bottom-4 right-4">
                      <div className="px-3 py-1.5 rounded-lg bg-green-100 text-green-700 text-xs font-semibold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                        Live Project
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-gradient-to-br from-gray-50 to-slate-100 rounded-3xl p-8 md:p-12 border border-gray-100">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
                Industries We Serve
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Trusted by businesses across diverse sectors in Assam and Northeast India
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {industries.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 text-center">{item.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a href="#contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-10 py-6 glow-primary transition-all duration-300">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
