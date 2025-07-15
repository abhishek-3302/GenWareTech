
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Zap, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-[160px] md:pt-32 pb-20 tech-pattern">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Professional
                <span className="text-primary block">IT Solutions</span>
                for Modern Business
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                GENWARE TECHNOLOGIES delivers comprehensive IT infrastructure solutions,
                from hardware supply to advanced printing systems and reliable power backup solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  Contact Us
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-gray-900">200+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="gradient-bg rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-6 space-y-4">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Ready to Transform Your IT Infrastructure?
                  </h3>
                  <p className="text-gray-600">
                    Get a free consultation with our IT experts
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Professional Hardware Solutions
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Enterprise Printing Systems
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Reliable Power Backup
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    24/7 Technical Support
                  </div>
                </div>
                <a href="#contact">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Schedule Free Consultation
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
