import React from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Code, 
  Settings, 
  Hammer, 
  MapPin, 
  Target, 
  Puzzle,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const WhyChoose = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reasons = [
    {
      icon: Code,
      title: 'Software Engineering Background',
      description: 'Founded by a software engineer with 3+ years of production experience at top tech companies. We write clean, scalable, maintainable code — not template hacks.',
      highlight: 'Real engineering expertise'
    },
    {
      icon: Settings,
      title: 'End-to-End Solutions',
      description: 'From requirement analysis and design to development, deployment, and ongoing support — we handle every stage of your digital transformation journey.',
      highlight: 'Full lifecycle support'
    },
    {
      icon: Hammer,
      title: 'Custom-Built, Never templated',
      description: 'Every solution is tailored to your unique business needs. No cookie-cutter approaches — we build exactly what your business requires to thrive.',
      highlight: '100% custom'
    },
    {
      icon: MapPin,
      title: 'Local Support in Assam',
      description: 'Based in Golaghat with deep understanding of the local market. We provide on-site support, understand regional business needs, and offer faster response times.',
      highlight: 'Regional expertise'
    },
    {
      icon: Target,
      title: 'Business-Focused Approach',
      description: 'We don\'t just build technology — we solve business problems. Every solution is designed to deliver measurable ROI and drive real business outcomes.',
      highlight: 'Results-driven'
    },
    {
      icon: Puzzle,
      title: 'Digital + Hardware expertise',
      description: 'Rare combination of software development and enterprise hardware expertise. From custom apps to CCTV infrastructure — one trusted partner.',
      highlight: 'Full-stack IT partner'
    }
  ];

  return (
    <section id="why" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-40" />
      
      <div className="container-wide relative" ref={ref}>
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-semibold mb-6 tracking-wide">
            WHY GENWARE
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
            We Don't Just Build Websites.{' '}
            <span className="text-gradient">We Build Partners.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Here's why growing businesses across Assam choose GENWARE Technologies as their long-term technology partner.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-sm bg-white hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/100 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-8">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary group-hover:to-accent transition-all duration-500">
                        <reason.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-500" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                          {reason.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm mb-4">
                        {reason.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/5 px-3 py-1.5 rounded-full">
                        <CheckCircle2 className="h-3 w-3" />
                        {reason.highlight}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a href="#contact">
            <Button size="lg" variant="outline" className="border-2 border-primary/20 hover:border-primary hover:bg-primary/5 text-primary hover:text-primary px-10 py-5 text-base">
              Let's Discuss Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;
