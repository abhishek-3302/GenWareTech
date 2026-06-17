import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  Building2, 
  Award,
  Users, 
  Target, 
  Globe,
  ArrowRight,
  Quote
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: GraduationCap,
      title: 'Engineering Excellence',
      description: 'Founded by software engineers, not salespeople. We code with precision, design with purpose, and deliver with pride.',
      stat: '3+ Years'
    },
    {
      icon: Globe,
      title: 'Local Roots, Global Standards',
      description: 'Based in Golaghat but working at international quality standards. We bring world-class technology to Northeast India.',
      stat: 'Assam-based'
    },
    {
      icon: Building2,
      title: 'Government Expertise',
      description: 'Deep experience in government procurement, institutional IT supply, and regulatory compliance through GeM and beyond.',
      stat: 'Govt. expertise'
    },
    {
      icon: Users,
      title: 'Client-First Philosophy',
      description: 'Long-term partnerships, not one-off projects. We grow with our clients and measure success by their growth.',
      stat: '25+ Clients'
    }
  ];

  const founderHighlights = [
    '3+ years as software engineer in Bangalore metro',
    'Extensive government procurement & e-tendering experience',
    'Delivered real-world custom software for healthcare, retail & institutional clients',
    'Deep expertise in full-stack development, cloud architecture, and business automation',
    'Built GENWARE to bridge the gap between premium tech and affordable solutions for NE India'
  ];

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="container-wide relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-10"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-semibold tracking-wide">
                ABOUT US
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 leading-tight">
                Built by Engineers,<br />
                <span className="text-gradient">Driven by Results</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                GENWARE Technologies was founded with a clear mission: to make premium IT and software solutions accessible to businesses across Assam and Northeast India — without the premium price tag of metro agencies.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our founder brings 3+ years of hands-on software engineering experience from Bangalore's tech ecosystem, combined with deep expertise in government procurement and institutional IT supply. We understand both code and commerce.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Quote className="h-5 w-5 text-primary/40" />
                What We Believe
              </h3>
              <div className="space-y-3">
                {founderHighlights.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              {['Custom Software', 'IT Infrastructure', 'GeM Procurement', 'AI Automation'].map((tag, idx) => (
                <Badge key={idx} variant="secondary" className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors border-0 text-sm font-medium">
                  {tag}
                </Badge>
              ))}
            </div>

            <a href="#contact" className="mt-8">
              <Button className="bg-primary hover:bg-primary/90 text-white py-4 px-8 text-base shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 mt-4">
                Work With Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </motion.div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-[2.5rem] blur-3xl" />
            <div className="relative space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <Card className="border-0 shadow-sm bg-white hover:shadow-lg transition-all duration-400 group">
                    <CardContent className="p-6 flex items-start gap-5">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary group-hover:to-accent transition-all duration-500">
                          <value.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-500" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                            {value.title}
                          </h3>
                          <Badge className="bg-primary/5 text-primary border-0 text-xs font-bold px-2.5 py-1">
                            {value.stat}
                          </Badge>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-sm">
                          {value.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
