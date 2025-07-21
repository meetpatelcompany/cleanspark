import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  CheckCircle, 
  Shield,
  Stethoscope,
  Building2,
  GraduationCap,
  Dumbbell
} from "lucide-react";

const ElectrostaticDisinfectionPage = () => {
  const bestForServices = [
    {
      icon: Stethoscope,
      title: "Medical and dental offices",
      description: "Critical infection control for healthcare environments"
    },
    {
      icon: Building2,
      title: "Corporate offices",
      description: "Enhanced protection for employee health and wellness"
    },
    {
      icon: GraduationCap,
      title: "Educational facilities",
      description: "Safe learning environments for students and staff"
    },
    {
      icon: Dumbbell,
      title: "Gyms and retail stores",
      description: "High-traffic areas requiring frequent disinfection"
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
                Advanced Disinfection Technology
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Advanced Electrostatic Disinfection{" "}
                <span className="text-brand-blue">for Businesses</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Protect your staff and clients with Clean Spark's cutting-edge electrostatic disinfection service. Our EPA-approved disinfectants are sprayed using advanced equipment that covers even the most hard-to-reach surfaces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cta" size="lg">
                  Schedule a Disinfection Service
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div>
              <img
                src="/lovable-uploads/81e77aed-da3c-466f-9698-cfd0ecd59635.png"
                alt="Professional using electrostatic disinfection equipment"
                className="rounded-2xl shadow-soft w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Benefits */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Electrostatic Disinfection?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Superior coverage and protection through advanced technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-clean transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-brand-blue-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-brand-blue" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">360° Coverage</h3>
                <p className="text-sm text-muted-foreground">Electrostatically charged particles wrap around surfaces for complete coverage</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-clean transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-brand-green-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-brand-green" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">EPA Approved</h3>
                <p className="text-sm text-muted-foreground">Only EPA-registered disinfectants proven effective against viruses and bacteria</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-clean transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-brand-blue-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-brand-blue" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Time Efficient</h3>
                <p className="text-sm text-muted-foreground">Faster application with better results than traditional spray methods</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Best For Section */}
      <section className="py-20 bg-professional-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Perfect For These Environments
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized disinfection for high-risk and high-traffic areas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestForServices.map((service, index) => (
              <Card key={index} className="hover:shadow-soft transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="bg-brand-green-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                    <service.icon className="h-8 w-8 text-brand-green group-hover:text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-professional-gray rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Our Disinfection Process
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-brand-blue text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h4 className="font-semibold text-foreground mb-2">Assessment</h4>
                <p className="text-muted-foreground">We evaluate your space and identify high-risk areas requiring special attention</p>
              </div>
              <div className="text-center">
                <div className="bg-brand-blue text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h4 className="font-semibold text-foreground mb-2">Application</h4>
                <p className="text-muted-foreground">Electrostatic spraying ensures complete coverage of all surfaces, including hard-to-reach areas</p>
              </div>
              <div className="text-center">
                <div className="bg-brand-blue text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h4 className="font-semibold text-foreground mb-2">Verification</h4>
                <p className="text-muted-foreground">Quality check to ensure all areas have been properly treated and are ready for use</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-12 w-12 text-white mr-4" />
            <h2 className="text-3xl lg:text-4xl font-bold">
              Disinfect your workspace with science-backed technology
            </h2>
          </div>
          <p className="text-xl mb-8 opacity-90">
            Give your employees and customers the confidence that comes with knowing your space is professionally disinfected.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Schedule a Disinfection Service
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

export default ElectrostaticDisinfectionPage;