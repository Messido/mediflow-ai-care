
import { Calendar, Plus, Search, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-medical-700 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-medical-500 to-medical-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <span className="text-2xl font-bold">HealthCare</span>
            </div>
            <p className="text-medical-100 leading-relaxed">
              Revolutionizing healthcare with AI-powered solutions that bring together 
              symptom analysis, doctor consultations, and pharmacy services.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-medical-100 hover:text-white transition-colors cursor-pointer">
                <Search className="h-4 w-4 mr-2" />
                AI Symptom Analysis
              </li>
              <li className="flex items-center text-medical-100 hover:text-white transition-colors cursor-pointer">
                <Calendar className="h-4 w-4 mr-2" />
                Doctor Appointments
              </li>
              <li className="flex items-center text-medical-100 hover:text-white transition-colors cursor-pointer">
                <Plus className="h-4 w-4 mr-2" />
                Online Pharmacy
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3 text-medical-100">
              <li className="hover:text-white transition-colors cursor-pointer">Help Center</li>
              <li className="hover:text-white transition-colors cursor-pointer">Contact Us</li>
              <li className="hover:text-white transition-colors cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white transition-colors cursor-pointer">Terms of Service</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4 text-medical-100">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                24/7 Helpline: 1-800-HEALTH
              </div>
              <div>
                <div className="font-semibold text-white mb-2">Emergency Support</div>
                <div className="text-sm">Available round the clock for urgent medical consultations</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-medical-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-medical-100 mb-4 md:mb-0">
              © 2024 AI HealthCare Platform. All rights reserved.
            </div>
            <div className="flex space-x-6 text-medical-100">
              <span className="hover:text-white transition-colors cursor-pointer">Privacy</span>
              <span className="hover:text-white transition-colors cursor-pointer">Terms</span>
              <span className="hover:text-white transition-colors cursor-pointer">Security</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
