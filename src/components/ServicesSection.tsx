
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Plus, Search, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Search,
      title: "AI Symptom Analysis",
      description: "Get instant, accurate symptom assessment powered by advanced AI algorithms. Receive personalized health insights and recommendations.",
      features: ["24/7 availability", "Instant results", "Personalized insights", "Medical accuracy"],
      color: "from-medical-500 to-medical-600"
    },
    {
      icon: Calendar,
      title: "Doctor Appointments",
      description: "Book appointments with certified specialists. Video consultations, in-person visits, and follow-up care all in one platform.",
      features: ["Certified doctors", "Video consultations", "Flexible scheduling", "Follow-up care"],
      color: "from-medical-600 to-medical-700"
    },
    {
      icon: Plus,
      title: "Online Pharmacy",
      description: "Order prescription and over-the-counter medicines with fast, secure delivery. Digital prescriptions integrated seamlessly.",
      features: ["Prescription integration", "Fast delivery", "Secure ordering", "Medicine reminders"],
      color: "from-medical-500 to-medical-700"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Healthcare Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our integrated platform brings together AI-powered analysis, professional medical care, 
            and convenient pharmacy services for a seamless healthcare experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
              <CardHeader className="text-center pb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-medical-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-medical-500 hover:bg-medical-600 text-white group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
