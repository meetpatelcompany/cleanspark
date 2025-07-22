import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ServiceAreaMap = () => {
  const serviceAreas = [
    "Toronto", "Mississauga", "Brampton", "Hamilton", 
    "Oakville", "Burlington", "Markham", "Vaughan",
    "Richmond Hill", "Etobicoke", "North York", "Scarborough"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Service Areas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proudly serving businesses across the Greater Toronto Area, Hamilton, and Oakville
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Placeholder */}
          <div className="lg:col-span-2">
            <Card className="h-96 bg-gradient-to-br from-brand-blue-light to-professional-gray">
              <CardContent className="h-full flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-brand-blue mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Interactive Service Map
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    We serve a wide area across the GTA and surrounding regions
                  </p>
                  <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
                    {serviceAreas.map((area, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="text-xs hover:bg-brand-blue hover:text-white transition-colors duration-300 cursor-pointer"
                      >
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="hover:shadow-clean transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-brand-blue" />
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <a 
                    href="tel:(416)555-0123" 
                    className="text-brand-blue hover:underline transition-colors duration-300"
                  >
                    (416) 555-0123
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <a 
                    href="mailto:info@cleansparkcommercial.com" 
                    className="text-brand-blue hover:underline transition-colors duration-300"
                  >
                    info@cleansparkcommercial.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                  <div>
                    <p className="text-sm text-foreground">Serving:</p>
                    <p className="text-sm text-muted-foreground">
                      Greater Toronto Area<br />
                      Hamilton & Oakville
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-clean transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-brand-green" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Monday - Friday</span>
                  <span className="text-sm font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Saturday</span>
                  <span className="text-sm font-medium">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Sunday</span>
                  <span className="text-sm font-medium">Emergency Only</span>
                </div>
                <div className="pt-2 border-t">
                  <p className="text-xs text-brand-blue font-medium">
                    24/7 Emergency Services Available
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaMap;