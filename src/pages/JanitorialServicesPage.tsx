import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Wrench, 
  CheckCircle, 
  Calendar,
  Droplets,
  Trash2,
  Package,
  Sparkles,
  Clock
} from "lucide-react";

const JanitorialServicesPage = () => {
  const servicesIncluded = [
    {
      icon: Droplets,
      title: "Restroom maintenance",
      description: "Complete sanitization and supply management"
    },
    {
      icon: Trash2,
      title: "Garbage removal",
      description: "Regular waste collection and disposal services"
    },
    {
      icon: Package,
      title: "Supply restocking",
      description: "Maintaining inventory of essential supplies"
    },
    {
      icon: Sparkles,
      title: "Floor care",
      description: "Professional floor cleaning and maintenance"
    },
    {
      icon: CheckCircle,
      title: "General upkeep",
      description: "Overall facility maintenance and organization"
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
                Professional Janitorial Services
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Reliable Janitorial Services{" "}
                <span className="text-brand-blue">for Commercial Spaces</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From day porter services to nightly clean-ups, Clean Spark offers reliable janitorial solutions that keep your space consistently clean. Our trained staff is punctual, discreet, and always professional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cta" size="lg" asChild>
                  <a href="#quote">Get a Janitorial Quote</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#quote">View Services</a>
                </Button>
              </div>
            </div>
            <div>
              <img
                src="/lovable-uploads/cad55e4b-4447-494b-9f5a-9c16ed318e0a.png"
                alt="Professional janitor using commercial cleaning equipment"
                className="rounded-2xl shadow-soft w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Janitorial Services Include
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive facility maintenance to keep your business running smoothly
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {servicesIncluded.map((item, index) => (
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
        </div>
      </section>

      {/* Service Options */}
      <section className="py-20 bg-professional-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Flexible Service Options
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the schedule that works best for your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-brand-green-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-brand-green" />
                </div>
                <h3 className="font-semibold text-foreground mb-4">Day Porter Services</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  On-site maintenance during business hours for immediate attention to cleaning needs
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Restroom checks and restocking</li>
                  <li>• Spill cleanup and maintenance</li>
                  <li>• Trash removal throughout the day</li>
                  <li>• Common area upkeep</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-soft transition-all duration-300 border-brand-blue border-2">
              <CardContent className="p-6 text-center">
                <Badge variant="secondary" className="mb-4">Most Popular</Badge>
                <div className="bg-brand-blue-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-brand-blue" />
                </div>
                <h3 className="font-semibold text-foreground mb-4">Weekly Services</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Regular weekly maintenance to keep your facility consistently clean and professional
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Comprehensive cleaning</li>
                  <li>• Supply restocking</li>
                  <li>• Floor care and maintenance</li>
                  <li>• Quality assurance checks</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-brand-green-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-8 w-8 text-brand-green" />
                </div>
                <h3 className="font-semibold text-foreground mb-4">As-Needed Services</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Flexible cleaning services for special events, emergencies, or one-time deep cleaning
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Event preparation and cleanup</li>
                  <li>• Emergency response cleaning</li>
                  <li>• Seasonal deep cleaning</li>
                  <li>• Move-in/move-out services</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-professional-gray rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Why Businesses Trust Our Janitorial Services
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-brand-green mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">Reliable & Punctual</h4>
                  <p className="text-muted-foreground">Our team arrives on time, every time, ensuring your business operations aren't disrupted</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-brand-green mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">Trained Professionals</h4>
                  <p className="text-muted-foreground">Background-checked staff trained in commercial cleaning protocols and customer service</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-brand-green mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">Discreet Service</h4>
                  <p className="text-muted-foreground">Professional, unobtrusive cleaning that doesn't interfere with your business activities</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-brand-green mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">Quality Assurance</h4>
                  <p className="text-muted-foreground">Regular inspections and feedback ensure consistent, high-quality results</p>
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
              Flexible plans available daily, weekly, or as needed
            </h2>
          </div>
          <p className="text-xl mb-8 opacity-90">
            Let us handle the cleaning so you can focus on running your business. Get a custom janitorial quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="#quote">Get a Janitorial Quote</a>
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

export default JanitorialServicesPage;