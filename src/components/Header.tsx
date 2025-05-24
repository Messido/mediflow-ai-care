
import { Button } from "@/components/ui/button";
import { Calendar, Phone, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-medical-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-medical-500 to-medical-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">AI</span>
            </div>
            <span className="text-2xl font-bold text-medical-700">HealthCare</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-medical-600 transition-colors">Services</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-medical-600 transition-colors">How It Works</a>
            <a href="#about" className="text-gray-600 hover:text-medical-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-600 hover:text-medical-600 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" className="border-medical-500 text-medical-600 hover:bg-medical-50">
              Sign In
            </Button>
            <Button className="bg-medical-500 hover:bg-medical-600 text-white">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
