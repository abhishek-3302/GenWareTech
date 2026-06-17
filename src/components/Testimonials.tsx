import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      id: 1,
      name: 'Dr. Rituraj Sharma',
      role: 'Owner, SmileCare Dental Clinic',
      industry: 'Healthcare',
      image: null,
      rating: 5,
      quote: 'GENWARE transformed our online presence completely. Our new website has made appointment booking seamless, and patients love how easy it is to find information. We\'ve seen a 40% increase in new patients since launch.',
      highlight: '40% increase in appointments'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      role: 'Managing Director, MedEquip Solutions',
      industry: 'Medical Equipment',
      image: null,
      rating: 5,
      quote: 'The B2B website and product catalog they built for us is outstanding. Our inquiry management has become much more efficient. The team understood our business requirements perfectly.',
      highlight: '3x B2B inquiries'
    },
    {
      id: 3,
      name: 'Priya Das',
      role: 'Program Director, Asom Unnati',
      industry: 'NGO',
      image: null,
      rating: 5,
      quote: 'They built us a beautiful, donation-friendly website that truly represents our mission. The impact dashboard and project showcase have helped us connect better with donors and volunteers.',
      highlight: '150% increase in donations'
    },
    {
      id: 4,
      name: 'Amit Bora',
      role: 'Principal, Little Flower School',
      industry: 'Education',
      image: null,
      rating: 5,
      quote: 'Professional, responsive, and technically excellent. Our school website is now a central hub for students, parents, and staff. The CMS makes content updates incredibly easy.',
      highlight: 'Seamless CMS experience'
    },
    {
      id: 5,
      name: 'Sri. Manoj Saikia',
      role: 'Proprietor, Golaghat Hardware & Electricals',
      industry: 'Retail',
      image: null,
      rating: 5,
      quote: 'GENWARE set up our complete IT infrastructure including networking and CCTV. The after-sales support has been exceptional. They are our go-to IT partner for everything.',
      highlight: 'End-to-end IT partner'
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="container-wide relative">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-semibold mb-6 tracking-wide">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it — hear from the businesses we've helped grow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.15 }}
            >
              <Card className="h-full border-0 shadow-sm bg-white hover:shadow-xl transition-all duration-500 hover-lift relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl -translate-y-8 translate-x-8 opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <div className="relative mb-6">
                    <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-1" />
                    <p className="text-gray-700 leading-relaxed relative z-10 italic">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {testimonial.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                        <p className="text-xs text-gray-500">{testimonial.role}</p>
                        <span className="inline-flex items-center mt-1 px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-[10px] font-semibold">
                          {testimonial.industry}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                Ready to Join Our Happy Clients?
              </h3>
              <p className="text-gray-300 max-w-xl">
                Let's build something amazing together. Book a free consultation and let's discuss your project.
              </p>
            </div>
            <a href="#contact">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-gray-900 px-10 py-5 text-base font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
