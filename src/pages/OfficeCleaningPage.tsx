import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  CheckCircle, 
  Calendar,
  Trash2,
  Wind,
  Coffee,
  Droplets,
  Fingerprint
} from "lucide-react";

const OfficeCleaningPage = () => {
  const serviceHighlights = [
    {
      icon: Building2,
      title: "Desk & surface wiping",
      description: "Thorough cleaning of all work surfaces and furniture"
    },
    {
      icon: Trash2,
      title: "Trash removal",
      description: "Complete waste management and recycling services"
    },
    {
      icon: Wind,
      title: "Vacuuming & floor care",
      description: "Professional floor cleaning for all surface types"
    },
    {
      icon: Coffee,
      title: "Breakroom & restroom cleaning",
      description: "Deep sanitization of common areas and facilities"
    },
    {
      icon: Fingerprint,
      title: "High-touch point sanitization",
      description: "Focused disinfection of frequently touched surfaces"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-blue-light to-professional-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Professional Office Cleaning
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Professional Office Cleaning Services in{" "}
                <span className="text-brand-blue">GTA, Hamilton & Oakville</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Clean Spark specializes in keeping your office environment immaculate and professional. We understand the importance of first impressions and employee well-being. That's why our team delivers detailed weekly cleanings, customized to your specific layout and business hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cta" size="lg" asChild>
                  <a href="#quote">Book a Consultation</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#quote">Get Free Quote</a>
                </Button>
              </div>
            </div>
            <div>
              <img
                src="/lovable-uploads/7f5a3cd7-aab4-45e8-bc28-48c25551974c.png"
                alt="Office cleaning professionals at work"
                className="rounded-2xl shadow-soft w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What's Included in Our Office Cleaning
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive cleaning services designed to maintain a professional, healthy work environment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {serviceHighlights.map((item, index) => (
              <Card key={index} className="hover:shadow-clean transition-all duration-300">
                <CardContent className="p-6">
                  <div className="bg-brand-blue-light rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <item.icon className="h-8 w-8 text-brand-blue" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Features */}
          <div className="bg-professional-gray rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Why Choose Our Office Cleaning Service?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-brand-green mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">Flexible Scheduling</h4>
                  <p className="text-muted-foreground">We work around your business hours - before, after, or during off-peak times</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-brand-green mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">Trained Professionals</h4>
                  <p className="text-muted-foreground">Our team is background-checked, insured, and trained in commercial cleaning standards</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-brand-green mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">Consistent Quality</h4>
                  <p className="text-muted-foreground">Regular quality checks and feedback ensure your office always meets our high standards</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-brand-green mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">Eco-Friendly Products</h4>
                  <p className="text-muted-foreground">Safe, green cleaning products that protect your team and the environment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Calendar className="h-12 w-12 text-white mr-4" />
            <h2 className="text-3xl lg:text-4xl font-bold">
              Let us create a custom schedule that suits your needs and budget
            </h2>
          </div>
          <p className="text-xl mb-8 opacity-90">
            Every office is unique. We'll work with you to develop a cleaning plan that fits your space, schedule, and budget perfectly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="#quote">Book a Consultation</a>
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-brand-blue" asChild>
              <a href="tel:(905)213-0405">Call (905) 213-0405</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OfficeCleaningPage;