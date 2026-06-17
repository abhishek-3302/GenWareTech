import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Zap, Users, CheckCircle2, ChevronDown, Award } from 'lucide-react';

const Hero = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: 50, suffix: '+', label: 'Projects Delivered', icon: Award },
    { value: 25, suffix: '+', label: 'Happy Clients', icon: Users },
    { value: 100, suffix: '%', label: 'Client Satisfaction', icon: CheckCircle2 },
  ];

  const trustLogos = ['Tally', 'QuickBooks', 'AWS', 'Google', 'Microsoft', 'HP', 'Dell', 'Canon'];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-accent/5 to-purple-500/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
        <div className="absolute inset-0 bg-grid opacity-[0.4]" />
      </div>

      <div className="container-wide pt-32 pb-20" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-primary tracking-wide">
                Trusted by 25+ businesses across Northeast India
              </span>
            </motion.div>

            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight">
                Transforming Businesses Through{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-gradient">Intelligent</span>
                  <motion.svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 300 12"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  >
                    <path d="M2 10C50 2 150 2 298 10" stroke="url(#underline-gradient)" strokeWidth="3" strokeLinecap="round" />
                    <defs>
                      <linearGradient id="underline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(222 91% 56%)" />
                        <stop offset="100%" stopColor="hsl(171 91% 35%)" />
                      </linearGradient>
                    </defs>
                  </motion.svg>
                </span>
                <br />
                <span className="text-gray-900">Digital & IT Solutions</span>
              </h1>
              <motion.p 
                className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                GENWARE Technologies partners with healthcare, education, government, and growing businesses to build custom software, automate operations, and deliver enterprise-grade IT infrastructure.
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <a href="#contact">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white text-base px-8 py-5 shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Book Free Consultation
                </Button>
              </a>
              <a href="#portfolio">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-base px-8 py-5 border-2 border-gray-200 hover:border-primary/30 hover:bg-primary/5 hover:-translate-y-0.5 transition-all duration-300"
                >
                  View Our Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </motion.div>

            <motion.div 
              className="grid grid-cols-3 gap-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="relative">
                  <div className="text-center p-4">
                    <div className="text-3xl md:text-4xl font-display font-bold text-gray-900">
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="text-sm text-gray-500 mt-1 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div 
              className="pt-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1 }}
            >
              <p className="text-xs text-gray-400 mb-3 font-medium uppercase tracking-wider">Trusted ecosystem</p>
              <div className="flex items-center gap-6 opacity-50 flex-wrap">
                {trustLogos.map((logo) => (
                  <span key={logo} className="text-sm font-semibold text-gray-400 tracking-tight">{logo}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-[3rem] blur-3xl animate-pulse" />

              <div className="relative glass-card rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-3 h-3 bg-red-400 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                  <div className="w-3 h-3 bg-green-400 rounded-full" />
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                      Ready to Transform Your Business?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Get a free 30-minute consultation with our senior engineers and strategists.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {[
                      'Custom Software Development',
                      'AI & Automation Solutions',
                      'Enterprise IT Infrastructure',
                      'Government Procurement (GeM)'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-gray-700 text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                      <div className="flex -space-x-3">
                        {['JD', 'RK', 'AM'].map((initials, i) => (
                          <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs font-bold ring-2 ring-white">
                            {initials}
                          </div>
                        ))}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Join 25+ happy clients</p>
                        <p className="text-xs text-gray-500">From startups to government bodies</p>
                      </div>
                    </div>
                  </div>

                  <a href="#contact">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white py-4 text-base shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5">
                      Schedule Your Free Consultation
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="flex justify-center mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <a href="#portfolio" className="text-gray-400 hover:text-primary transition-colors" aria-label="Scroll down">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            >
              <ChevronDown className="h-6 w-6" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
