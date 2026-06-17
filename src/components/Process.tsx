import React from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Search, 
  FileText, 
  Palette, 
  Code, 
  Rocket, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Process = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: '01',
      title: 'Discovery',
      subtitle: 'Understanding Your Vision',
      description: 'We schedule in-depth consultations to understand your business goals, challenges, and target audience. We analyze your competition and map out requirements.',
      icon: Search,
      color: 'from-emerald-500 to-teal-500',
      activities: ['Business Analysis', 'Stakeholder Interviews', 'Competition Research', 'Requirement Mapping']
    },
    {
      number: '02',
      title: 'Planning',
      subtitle: 'Strategic Blueprint',
      description: 'We create a detailed technical architecture, project roadmap, and timeline. You\'ll have complete visibility into every phase and milestone.',
      icon: FileText,
      color: 'from-teal-600 to-emerald-600',
      activities: ['Tech Architecture', 'Project Roadmap', 'Timeline Creation', 'Resource Planning']
    },
    {
      number: '03',
      title: 'Design',
      subtitle: 'Crafting the Experience',
      description: 'Our designers create wireframes, UI mockups, and interactive prototypes. We iterate until the design perfectly captures your brand and user needs.',
      icon: Palette,
      color: 'from-green-500 to-emerald-500',
      activities: ['Wireframing', 'UI/UX Design', 'Brand Integration', 'Interactive Prototypes']
    },
    {
      number: '04',
      title: 'Development',
      subtitle: 'Building the Solution',
      description: 'Our engineers build using modern best practices. Regular sprints, code reviews, and QA testing ensure quality at every stage.',
      icon: Code,
      color: 'from-amber-500 to-orange-500',
      activities: ['Frontend & Backend', 'Database Design', 'API Integration', 'Quality Assurance']
    },
    {
      number: '05',
      title: 'Launch & Support',
      subtitle: 'Going Live & Beyond',
      description: 'We handle deployment, training, and documentation. Post-launch support ensures your solution keeps performing at its best.',
      icon: Rocket,
      color: 'from-green-500 to-emerald-500',
      activities: ['Deployment', 'Team Training', 'Documentation', 'Ongoing Support']
    }
  ];

  return (
    <section id="process" className="section-padding bg-white relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />
      <div className="container-wide relative" ref={ref}>
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-semibold mb-6 tracking-wide">
            HOW WE WORK
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
            Proven Process, <span className="text-gradient">Predictable Results</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A refined 5-step approach that takes your project from concept to launch with clarity, transparency, and zero surprises.
          </p>
        </motion.div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex items-start gap-6">
                <div className="hidden sm:flex flex-col items-center pt-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                    <step.icon className="h-7 w-7 text-white" />
                  </div>
                  {index !== steps.length - 1 && (
                    <div className="w-0.5 h-24 bg-gradient-to-b from-primary/20 to-transparent mt-4" />
                  )}
                </div>

                <Card className="flex-1 border-0 shadow-sm bg-white hover:shadow-xl transition-all duration-500 group">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-bold text-primary/50 tracking-wider">STEP {step.number}</span>
                      {index !== steps.length - 1 && (
                        <div className="flex-1 h-px bg-gradient-to-r from-primary/10 to-transparent" />
                      )}
                    </div>

                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-medium mb-3">{step.subtitle}</p>
                    <p className="text-gray-600 leading-relaxed mb-6">{step.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {step.activities.map((activity, aIdx) => (
                        <span key={aIdx} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 text-gray-700 text-xs font-medium border border-gray-100">
                          <CheckCircle2 className="h-3 w-3 text-accent" />
                          {activity}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
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
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-base px-10 py-5 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5">
              Start Your Project Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
