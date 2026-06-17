import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(import.meta.env.VITE_CONSULTATION_API_URL || "/api/send-consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Failed to send consultation request");
      }

      toast.success("Thank you! We'll contact you within 24 hours to schedule your free consultation.");
      setFormData({ name: '', email: '', phone: '', company: '', serviceInterest: '', message: '' });
    } catch {
      toast.error("Unable to send right now. Please call or WhatsApp us.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      detail: 'Quick chat for instant replies',
      action: 'Start Chat',
      href: 'https://wa.me/917892649170?text=Hi%20GENWARE%20Team,%20I%20need%20an%20IT%20consultation.',
      color: 'from-green-500 to-emerald-500',
      bg: 'bg-green-50 hover:bg-green-100',
      text: 'text-green-700'
    },
    {
      icon: Phone,
      title: 'Call Us',
      detail: '+91 7892-649170',
      action: 'Call Now',
      href: 'tel:+917892649170',
      color: 'from-emerald-500 to-teal-500',
      bg: 'bg-blue-50 hover:bg-blue-100',
      text: 'text-blue-700'
    },
    {
      icon: Mail,
      title: 'Email Us',
      detail: 'genwaretechnologies@gmail.com',
      action: 'Send Email',
      href: 'mailto:genwaretechnologies@gmail.com',
      color: 'from-teal-500 to-emerald-500',
      bg: 'bg-purple-50 hover:bg-purple-100',
      text: 'text-purple-700'
    }
  ];

  const serviceOptions = [
    'Custom Website Development',
    'Web Application Development',
    'AI Business Automation',
    'IT Infrastructure Setup',
    'Computer & Laptop Supply',
    'Printers & Scanners',
    'Networking Solutions',
    'CCTV Solutions',
    'AMC Support',
    'GeM Procurement',
    'Other'
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50 relative">
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
            GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
            Let's Build Something <span className="text-gradient">Great Together</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Book a free 30-minute consultation with our senior engineers. No obligation, just honest advice on your IT needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-0 shadow-lg bg-white overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-primary to-accent" />
                <CardContent className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center">
                      <Send className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold text-gray-900">Book Free Consultation</h3>
                      <p className="text-sm text-gray-500">Fill in the details and we'll reach out within 24 hours</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-800 mb-2">Full Name *</label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="h-12 bg-gray-50/50 border-gray-200 focus:border-primary/40 focus:ring-primary/10"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-800 mb-2">Email Address *</label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="h-12 bg-gray-50/50 border-gray-200 focus:border-primary/40 focus:ring-primary/10"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-800 mb-2">Phone Number *</label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="h-12 bg-gray-50/50 border-gray-200 focus:border-primary/40 focus:ring-primary/10"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-800 mb-2">Company / Organization</label>
                        <Input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="h-12 bg-gray-50/50 border-gray-200 focus:border-primary/40 focus:ring-primary/10"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">Service You're Interested In</label>
                      <select
                        name="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={handleChange}
                        className="w-full h-12 bg-gray-50/50 border border-gray-200 rounded-lg px-4 text-gray-900 focus:outline-none focus:border-primary/40 focus:ring-primary/10"
                      >
                        <option value="">Select a service...</option>
                        {serviceOptions.map(opt => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">Tell Us About Your Project</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full bg-gray-50/50 border-gray-200 focus:border-primary/40 focus:ring-primary/10 resize-none"
                        placeholder="Describe your requirements, goals, timeline, and budget..."
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                      <Button 
                        type="submit" 
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-10 py-5 text-base shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>Sending...</>
                        ) : (
                          <>Book Free Consultation <ArrowRight className="ml-2 h-4 w-4" /></>
                        )}
                      </Button>
                      <span className="text-xs text-gray-400">No spam • No commitment • 100% confidential</span>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift ${method.bg}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                        <method.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{method.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">{method.detail}</p>
                        <span className={`inline-flex items-center gap-1 text-sm font-semibold ${method.text}`}>
                          {method.action}
                          <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center shadow-md flex-shrink-0">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-sm text-gray-600">Monday – Friday: 9:00 AM – 6:00 PM</p>
                      <p className="text-sm text-gray-600">Saturday: 9:00 AM – 2:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md flex-shrink-0">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Visit Our Office</h3>
                      <p className="text-sm text-gray-600">Mission Road</p>
                      <p className="text-sm text-gray-600">Golaghat, Assam - 785621</p>
                      <a 
                        href="https://maps.google.com/?q=Genware+Technologies,+Mission+Road,+Golaghat,+Assam,+785621" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-primary mt-2 hover:underline"
                      >
                        Get Directions <ArrowRight className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span className="text-sm font-bold text-gray-900">Free Consultation • No Obligation</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                All inquiries are confidential. We'll discuss your requirements, provide honest recommendations, and only propose solutions that make sense for your business.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
