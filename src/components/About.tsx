
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Award, Clock, Shield } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "Industry Excellence",
      description: "Recognized as a leading IT solutions provider with multiple industry certifications and partnerships."
    },
    {
      icon: Clock,
      title: "Proven Experience",
      description: "Over a decade of experience serving businesses across various sectors with reliable IT solutions."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Strict quality control processes ensure all our products and services meet the highest standards."
    },
    {
      icon: CheckCircle,
      title: "Customer Satisfaction",
      description: "98% customer satisfaction rate with dedicated support and maintenance services."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                About GENWARE TECHNOLOGIES
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Established as a premier IT solutions provider, GENWARE TECHNOLOGIES has been at the 
                forefront of delivering comprehensive technology solutions to businesses, government 
                institutions, and organizations across the region.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment to excellence, combined with our deep understanding of evolving 
                technology needs, has made us a trusted partner for organizations looking to 
                modernize their IT infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-primary/5 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center p-6 bg-primary/5 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">200+</div>
                <div className="text-gray-600">Satisfied Clients</div>
              </div>
              <div className="text-center p-6 bg-primary/5 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-primary/5 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 rounded-lg p-3">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {achievement.title}
                        </h3>
                        <p className="text-gray-600">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
