import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Sparkles className="h-8 w-8 text-brand-blue" />
              <div className="ml-2">
                <div className="font-bold text-lg text-brand-blue">CLEAN SPARK</div>
                <div className="text-xs text-brand-green font-medium">COMMERCIAL CLEANING</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Professional commercial cleaning services across the Greater Toronto Area, Hamilton, and Oakville.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-brand-blue cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-brand-blue cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-brand-blue cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/office-cleaning" className="text-muted-foreground hover:text-brand-blue transition-colors">
                  Office Cleaning
                </Link>
              </li>
              <li>
                <Link to="/electrostatic-disinfection" className="text-muted-foreground hover:text-brand-blue transition-colors">
                  Electrostatic Disinfection
                </Link>
              </li>
              <li>
                <Link to="/janitorial-services" className="text-muted-foreground hover:text-brand-blue transition-colors">
                  Janitorial Services
                </Link>
              </li>
              <li>
                <Link to="/supply-restocking" className="text-muted-foreground hover:text-brand-blue transition-colors">
                  Supply Restocking
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Greater Toronto Area</li>
              <li>Hamilton</li>
              <li>Oakville</li>
              <li>Burlington</li>
              <li>Mississauga</li>
              <li>Brampton</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-brand-blue" />
                <span className="text-muted-foreground">(647) 327-5661</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-brand-blue" />
                <span className="text-muted-foreground">cleansparkcommercial@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-brand-blue mt-0.5" />
                <span className="text-muted-foreground">Serving GTA, Hamilton & Oakville</span>
              </div>
            </div>
            <Button variant="clean" className="mt-4 w-full" asChild>
              <a href="#quote">Quick Quote</a>
            </Button>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2024 Clean Spark Commercial Cleaning. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-brand-blue transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-brand-blue transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;