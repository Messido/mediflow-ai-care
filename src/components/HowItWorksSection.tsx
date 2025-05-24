
import { Card, CardContent } from "@/components/ui/card";
import { Search, Calendar, Plus, ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Search,
      title: "1. Analyze Symptoms",
      description: "Start by describing your symptoms to our AI-powered analysis tool for instant health insights.",
      color: "bg-medical-500"
    },
    {
      icon: Calendar,
      title: "2. Book Appointment",
      description: "Based on AI recommendations, book an appointment with the right specialist for your needs.",
      color: "bg-medical-600"
    },
    {
      icon: Plus,
      title: "3. Get Treatment",
      description: "Receive treatment recommendations and order prescribed medicines directly through our platform.",
      color: "bg-medical-700"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-medical-50 to-medical-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our seamless three-step process ensures you get the right care at the right time, 
            all powered by advanced AI technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection lines for desktop */}
          <div className="hidden md:block absolute top-24 left-1/3 w-1/3 h-0.5 bg-medical-500 transform -translate-y-1/2"></div>
          <div className="hidden md:block absolute top-24 right-1/3 w-1/3 h-0.5 bg-medical-500 transform -translate-y-1/2"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-white">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${step.color} rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>

              {/* Arrow for mobile */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center my-6">
                  <ArrowRight className="h-6 w-6 text-medical-500" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Integrated Healthcare Experience
            </h3>
            <p className="text-gray-600 mb-6">
              All your health data, appointments, and prescriptions are seamlessly connected, 
              ensuring continuity of care and eliminating the need for multiple platforms.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-medical-600">24/7</div>
                <div className="text-sm text-gray-600">AI Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-medical-600">500+</div>
                <div className="text-sm text-gray-600">Specialists</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-medical-600">50K+</div>
                <div className="text-sm text-gray-600">Medicines</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-medical-600">98%</div>
                <div className="text-sm text-gray-600">Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
