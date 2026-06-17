import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Sparkles, Star } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Pricing = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const plans = [
    {
      id: 'starter',
      name: 'Starter Website',
      price: '₹25,000',
      period: 'Starting from',
      description: 'Perfect for clinics, small businesses, and professionals who need a clean, professional online presence.',
      features: [
        '5-page responsive website',
        'Mobile-optimized design',
        'Contact form integration',
        'Basic SEO setup',
        'WhatsApp integration',
        '1 month free support',
        '1 revision included'
      ],
      popular: false,
      cta: 'Get Started'
    },
    {
      id: 'business',
      name: 'Business Website',
      price: '₹50,000+',
      period: 'Most popular',
      description: 'For growing businesses that need a powerful website with advanced features and integrations.',
      features: [
        '10-15 page premium website',
        'Custom UI/UX design',
        'CMS integration (WordPress/Headless)',
        'Advanced SEO & analytics',
        'Appointment/booking system',
        'Payment gateway integration',
        'Blog & portfolio sections',
        '3 months support included',
        '3 revisions included'
      ],
      popular: true,
      cta: 'Get Quote'
    },
    {
      id: 'custom',
      name: 'Custom Web App',
      price: 'Custom',
      period: 'Tailored solutions',
      description: 'For businesses that need a fully custom web application or complex digital product.',
      features: [
        'Custom requirements analysis',
        'Full-stack development',
        'Database design & API',
        'User authentication & roles',
        'Admin dashboard',
        'Third-party integrations',
        'Scalable architecture',
        '6 months support included',
        'Unlimited revisions during development'
      ],
      popular: false,
      cta: 'Discuss Your Project'
    }
  ];

  const addOns = [
    { name: 'Logo Design', price: '₹5,000', description: 'Professional brand identity' },
    { name: 'Google Ads Setup', price: '₹10,000', description: 'Campaign management + ₹5,000/month budget' },
    { name: 'E-commerce', price: '₹15,000+', description: 'WooCommerce / Shopify integration' },
    { name: 'Annual Maintenance', price: '₹8,000/yr', description: 'Updates, backups & priority support' },
  ];

  return (
    <section id="pricing" className="section-padding bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white" />
      <div className="container-wide relative" ref={ref}>
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-semibold mb-6 tracking-wide">
            PRICING
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
            Transparent Pricing, <span className="text-gradient">Real Value</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            No hidden charges, no surprise invoices. Choose the package that fits your needs, or let's build a custom solution together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-primary to-accent text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                    <Star className="h-3 w-3 fill-white" />
                    MOST POPULAR
                  </div>
                </div>
              )}

              <Card className={`h-full border-0 ${plan.popular ? 'shadow-2xl ring-2 ring-primary/20' : 'shadow-lg'} hover-lift bg-white relative overflow-hidden`}>
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent" />
                )}

                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">{plan.description}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-display font-bold text-gray-900">{plan.price}</span>
                      {plan.period && (
                        <span className="text-sm text-gray-400 font-medium ml-1">• {plan.period}</span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a href="#contact">
                    <Button 
                      className={`w-full py-4 text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                        plan.popular 
                          ? 'bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30' 
                          : 'bg-gray-900 hover:bg-gray-800 text-white shadow-lg hover:shadow-xl'
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Card className="border-0 shadow-sm bg-gray-50 max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-display font-bold text-gray-900">
                  Add-on Services
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {addOns.map((addon, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 hover:border-primary/20 transition-colors">
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{addon.name}</p>
                      <p className="text-xs text-gray-500">{addon.description}</p>
                    </div>
                    <span className="text-sm font-bold text-primary">{addon.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
