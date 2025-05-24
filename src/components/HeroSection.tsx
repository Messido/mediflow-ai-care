
import { Button } from "@/components/ui/button";
import { Calendar, Search, Plus } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-medical-50 via-white to-medical-100 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              AI-Powered 
              <span className="text-medical-600"> Healthcare</span> 
              <br />at Your Fingertips
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Experience seamless healthcare with our integrated platform. Get AI symptom analysis, 
              book doctor appointments, and order medicines - all in one place.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-medical-500 hover:bg-medical-600 text-white px-8 py-4">
                <Search className="mr-2 h-5 w-5" />
                Analyze Symptoms
              </Button>
              <Button size="lg" variant="outline" className="border-medical-500 text-medical-600 hover:bg-medical-50 px-8 py-4">
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-medical-500 rounded-full mr-2"></div>
                24/7 AI Support
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-medical-500 rounded-full mr-2"></div>
                Certified Doctors
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-medical-500 rounded-full mr-2"></div>
                Fast Delivery
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-medical-100">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-medical-50 rounded-2xl p-6 text-center">
                  <Search className="h-8 w-8 text-medical-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">AI Analysis</h3>
                  <p className="text-sm text-gray-600">Instant symptom assessment</p>
                </div>
                <div className="bg-medical-50 rounded-2xl p-6 text-center">
                  <Calendar className="h-8 w-8 text-medical-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Appointments</h3>
                  <p className="text-sm text-gray-600">Book with specialists</p>
                </div>
                <div className="bg-medical-50 rounded-2xl p-6 text-center col-span-2">
                  <Plus className="h-8 w-8 text-medical-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Online Pharmacy</h3>
                  <p className="text-sm text-gray-600">Order medicines with prescription</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
