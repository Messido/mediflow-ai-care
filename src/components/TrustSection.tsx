
import { Card, CardContent } from "@/components/ui/card";

const TrustSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Patient",
      content: "The AI symptom analysis was incredibly accurate and helped me understand my condition before seeing a doctor. The integrated platform made everything so convenient.",
      rating: 5
    },
    {
      name: "Dr. Michael Chen",
      role: "Cardiologist",
      content: "This platform has revolutionized how I connect with patients. The AI pre-assessment helps me prepare better for consultations and provide more focused care.",
      rating: 5
    },
    {
      name: "Emma Davis",
      role: "Patient",
      content: "Ordering medicines after my consultation was seamless. The prescription was automatically processed and delivered the next day. Truly integrated healthcare!",
      rating: 5
    }
  ];

  const certifications = [
    "HIPAA Compliant",
    "ISO 27001 Certified",
    "FDA Approved",
    "Medical Board Certified"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied patients and healthcare providers who trust our platform 
            for their healthcare needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 bg-medical-500 rounded-full mr-1"></div>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-medical-600">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-medical-50 to-medical-100 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Security & Compliance
            </h3>
            <p className="text-gray-600">
              Your health data is protected with the highest standards of security and compliance.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="w-12 h-12 bg-medical-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div className="text-sm font-semibold text-gray-900">{cert}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
