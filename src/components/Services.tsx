
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  HardDrive, 
  Printer, 
  Battery, 
  Network, 
  Wrench, 
  Building,
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: HardDrive,
      title: "Computer Hardware & Peripherals Supply",
      description: "Complete range of computer hardware, peripherals, and accessories from leading brands. Quality guaranteed with competitive pricing.",
      features: ["Desktop & Laptop Systems", "Monitors & Displays", "Input Devices", "Storage Solutions"]
    },
    {
      icon: Printer,
      title: "Advanced Printing Solutions",
      description: "Professional printing systems for offices, enterprises, and specialized applications with ongoing maintenance support.",
      features: ["Laser & Inkjet Printers", "Large Format Printing", "Multifunction Devices", "Printing Supplies"]
    },
    {
      icon: Battery,
      title: "Reliable Power Backup Solutions",
      description: "Uninterrupted power supply systems to protect your critical IT infrastructure from power outages and fluctuations.",
      features: ["UPS Systems", "Power Stabilizers", "Backup Generators", "Power Management"]
    },
    {
      icon: Network,
      title: "IT Infrastructure Consulting & Integration",
      description: "Complete IT infrastructure planning, design, and implementation services tailored to your business requirements.",
      features: ["Network Design", "Server Solutions", "Cloud Integration", "Security Implementation"]
    },
    {
      icon: Wrench,
      title: "Dedicated Post-Sales Support & Maintenance",
      description: "Comprehensive after-sales support with preventive maintenance to ensure optimal performance of your IT systems.",
      features: ["24/7 Technical Support", "Preventive Maintenance", "Hardware Repairs", "Software Troubleshooting"]
    },
    {
      icon: Building,
      title: "Government & Institutional Procurement",
      description: "Specialized procurement services for government bodies and institutions with compliance to all regulatory requirements.",
      features: ["Tender Management", "Compliance Documentation", "Bulk Procurement", "Installation Services"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to empower your business with cutting-edge technology 
            and reliable support services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="bg-primary/10 rounded-lg p-4 w-16 h-16 mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
