import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  QrCode, 
  Clock, 
  MessageSquare, 
  BarChart3, 
  Shield, 
  Users,
  CheckCircle,
  Smartphone,
  ClipboardCheck,
  TrendingUp
} from "lucide-react";

const HowWeWorkPage = () => {
  const processSteps = [
    {
      icon: QrCode,
      title: "Personalized QR Code",
      description: "Each organization receives a unique QR code for secure access tracking",
      details: "Your organization gets a custom QR code placed at your facility for easy worker check-in/check-out"
    },
    {
      icon: Smartphone,
      title: "Worker Check-In",
      description: "Our professional staff scan the QR code upon arrival",
      details: "Workers use their mobile devices to scan your QR code, instantly logging their arrival time"
    },
    {
      icon: ClipboardCheck,
      title: "Service Execution",
      description: "Complete cleaning services according to your customized plan",
      details: "Our team follows your specific cleaning checklist and quality standards throughout the service"
    },
    {
      icon: Clock,
      title: "Time Tracking",
      description: "Automatic time logging for complete transparency",
      details: "Every minute is tracked from check-in to check-out, providing accurate service duration records"
    },
    {
      icon: MessageSquare,
      title: "Real-Time Feedback",
      description: "Provide instant feedback on service quality",
      details: "Rate our service, leave comments, and report any issues directly through our system"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Access detailed reports on service quality and timing",
      details: "View comprehensive reports on service history, timing patterns, and quality metrics"
    }
  ];

  const systemFeatures = [
    {
      icon: Shield,
      title: "Secure Access Control",
      description: "QR codes ensure only authorized personnel access your facility"
    },
    {
      icon: Clock,
      title: "Accurate Time Tracking",
      description: "Precise logging of arrival and departure times for transparent billing"
    },
    {
      icon: TrendingUp,
      title: "Performance Monitoring",
      description: "Real-time tracking of cleaning quality and efficiency metrics"
    },
    {
      icon: MessageSquare,
      title: "Instant Communication",
      description: "Direct feedback channel between you and our cleaning teams"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-blue-light to-professional-gray py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              Professional Process
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              How We <span className="text-brand-blue">Work</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Experience our professional cleaning service with cutting-edge QR code technology, 
              real-time tracking, and complete transparency in every aspect of our work.
            </p>
            <div className="flex items-center justify-center gap-4 text-brand-green">
              <QrCode className="h-8 w-8" />
              <Clock className="h-8 w-8" />
              <BarChart3 className="h-8 w-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Professional Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From arrival to completion, every step is tracked and optimized for quality and efficiency
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="hover:shadow-clean transition-all duration-300 transform hover:-translate-y-2 group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-brand-blue-light rounded-full w-12 h-12 flex items-center justify-center mr-4 group-hover:bg-brand-blue transition-all duration-300">
                      <step.icon className="h-6 w-6 text-brand-blue group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="bg-brand-green text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-brand-blue transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                  <p className="text-xs text-muted-foreground">{step.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* System Features Section */}
      <section className="py-20 bg-professional-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              End-to-End System Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive system ensures complete transparency and accountability
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {systemFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-soft transition-all duration-300 transform hover:-translate-y-2 group">
                <CardContent className="p-6 text-center">
                  <div className="bg-brand-green-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-green transition-all duration-300">
                    <feature.icon className="h-8 w-8 text-brand-green group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-brand-green transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Why Our System Works
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-brand-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Complete Transparency</h3>
                    <p className="text-muted-foreground">Know exactly when we arrive, how long we work, and what we accomplish</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-brand-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Accountability</h3>
                    <p className="text-muted-foreground">Every worker is tracked and accountable for their performance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-brand-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Quality Assurance</h3>
                    <p className="text-muted-foreground">Real-time feedback system ensures consistent quality standards</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-brand-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Performance Analytics</h3>
                    <p className="text-muted-foreground">Detailed reports help optimize cleaning schedules and improve service</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:text-center">
              <div className="bg-gradient-to-br from-brand-blue-light to-brand-green-light rounded-2xl p-8">
                <QrCode className="h-24 w-24 text-brand-blue mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Experience Professional Cleaning?</h3>
                <p className="text-muted-foreground mb-6">
                  Get your personalized QR code and start experiencing the future of commercial cleaning services
                </p>
                <Button variant="cta" size="lg" className="transform transition-all duration-300 hover:scale-105" asChild>
                  <a href="#quote">Get Your QR Code Today</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Users className="h-12 w-12 text-white mr-4" />
            <h2 className="text-3xl lg:text-4xl font-bold">
              Experience Professional Cleaning with Technology
            </h2>
          </div>
          <p className="text-xl mb-8 opacity-90">
            Join organizations across the GTA who trust our QR code tracking system for transparent, accountable cleaning services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="transform transition-all duration-300 hover:scale-105" asChild>
              <a href="#quote">Request Free Quote</a>
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-brand-blue transform transition-all duration-300 hover:scale-105" asChild>
              <a href="tel:(905)213-0405">Call (905) 213-0405</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWeWorkPage;
