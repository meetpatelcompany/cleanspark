import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Users, 
  Calendar, 
  Leaf, 
  Star,
  Building2,
  Zap,
  Wrench,
  Package,
  CheckCircle,
  MapPin,
  Phone
} from "lucide-react";

const HomePage = () => {
  const whyChooseUs = [
    {
      icon: MapPin,
      title: "Locally owned & operated",
      description: "Proudly serving the GTA community"
    },
    {
      icon: Shield,
      title: "Fully insured & bonded professionals",
      description: "Complete protection and peace of mind"
    },
    {
      icon: Calendar,
      title: "Custom cleaning schedules",
      description: "Flexible timing to suit your business"
    },
    {
      icon: Leaf,
      title: "Eco-friendly products & safe disinfection",
      description: "Safe for people and environment"
    },
    {
      icon: Star,
      title: "Trusted by offices, clinics, retail spaces",
      description: "Proven track record across industries"
    }
  ];

  const services = [
    {
      icon: Building2,
      title: "Office Cleaning",
      description: "Professional weekly office cleaning with attention to detail and customized schedules.",
      link: "/office-cleaning"
    },
    {
      icon: Zap,
      title: "Electrostatic Disinfection",
      description: "Advanced EPA-approved disinfection technology for maximum protection.",
      link: "/electrostatic-disinfection"
    },
    {
      icon: Wrench,
      title: "Janitorial Services",
      description: "Reliable day porter and nightly cleaning services for consistent maintenance.",
      link: "/janitorial-services"
    },
    {
      icon: Package,
      title: "Supply Restocking",
      description: "Never run out of essentials with our automated inventory management.",
      link: "/supply-restocking"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-blue-light to-professional-gray py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge variant="secondary" className="mb-4">
                Serving GTA, Hamilton & Oakville
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Reliable Commercial Cleaning Services in the{" "}
                <span className="text-brand-blue">GTA, Hamilton, and Oakville</span>
              </h1>
              <h2 className="text-xl lg:text-2xl text-muted-foreground mb-6">
                Customized Office Cleaning, Electrostatic Disinfection, Janitorial Services & More
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                At Clean Spark Commercial Cleaning, we go beyond surface-level cleaning. We offer tailored cleaning solutions designed to meet the unique needs of businesses across the Greater Toronto Area, Hamilton, and Oakville. Whether you need weekly office cleanings, deep electrostatic disinfection, or dependable janitorial support, we deliver spotless results that make your workplace shine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cta" size="lg" asChild>
                  <a href="#quote">Request a Free Quote Today</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:(416)555-0123" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    (416) 555-0123
                  </a>
                </Button>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img
                src="/lovable-uploads/7f5a3cd7-aab4-45e8-bc28-48c25551974c.png"
                alt="Professional cleaning team at work"
                className="rounded-2xl shadow-soft w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose Clean Spark?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're more than just a cleaning service – we're your trusted partner in maintaining a professional, healthy workspace.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-clean transition-all duration-300">
                <CardContent className="p-6">
                  <div className="bg-brand-blue-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
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

      {/* Services Section */}
      <section className="py-20 bg-professional-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive cleaning solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-soft transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="bg-brand-green-light rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                    <service.icon className="h-8 w-8 text-brand-green group-hover:text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <Button variant="link" className="p-0 h-auto text-brand-blue" asChild>
                    <a href={service.link}>Learn More →</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="quote" className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <CheckCircle className="h-12 w-12 text-white mr-4" />
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready for a cleaner, healthier workspace?
            </h2>
          </div>
          <p className="text-xl mb-8 opacity-90">
            Get your free, no-obligation quote today and discover how Clean Spark can transform your workplace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Request a Free Quote Today
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-brand-blue">
              Call (416) 555-0123
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;