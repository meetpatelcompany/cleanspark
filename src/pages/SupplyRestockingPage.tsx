import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Package, 
  CheckCircle, 
  RotateCcw,
  Droplets,
  Coffee,
  FileText,
  Clock,
  TrendingUp
} from "lucide-react";

const SupplyRestockingPage = () => {
  const managedSupplies = [
    {
      icon: Droplets,
      title: "Bathroom and kitchen supplies",
      description: "Toilet paper, paper towels, hand soap, and sanitizers"
    },
    {
      icon: Package,
      title: "Soap & sanitizer stations",
      description: "Wall-mounted dispensers and refill cartridges"
    },
    {
      icon: FileText,
      title: "Paper products & dispensers",
      description: "All paper goods and dispenser maintenance"
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
                Automated Supply Management
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Commercial Restocking Services{" "}
                <span className="text-brand-blue">for Your Office</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Never run out of essentials again. Clean Spark makes it easy to keep your office stocked with paper towels, soap, sanitizer, and other hygiene products. We monitor inventory and restock supplies on schedule so you don't have to.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cta" size="lg" asChild>
                  <a href="#quote">Talk to Us About Restocking Solutions</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#quote">Learn More</a>
                </Button>
              </div>
            </div>
            <div>
              <img
                src="/lovable-uploads/d03e186b-0c38-4c57-ad1d-69dd918c4222.png"
                alt="Professional restocking bathroom supplies"
                className="rounded-2xl shadow-soft w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Manage */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              We Manage Your Essential Supplies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete inventory management for all your office hygiene and maintenance needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {managedSupplies.map((item, index) => (
              <Card key={index} className="hover:shadow-clean transition-all duration-300">
                <CardContent className="p-6 text-center">
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

      {/* How It Works */}
      <section className="py-20 bg-professional-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How Our Restocking Service Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Automated inventory management that keeps your office running smoothly
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-brand-blue text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-semibold text-foreground mb-2">Initial Assessment</h3>
                <p className="text-sm text-muted-foreground">We evaluate your current usage and set up optimal inventory levels</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-brand-blue text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-semibold text-foreground mb-2">Regular Monitoring</h3>
                <p className="text-sm text-muted-foreground">Our team tracks usage patterns and monitors supply levels during visits</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-brand-blue text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-semibold text-foreground mb-2">Automatic Restocking</h3>
                <p className="text-sm text-muted-foreground">Supplies are replenished before you run out, based on usage data</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-brand-blue text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="font-semibold text-foreground mb-2">Ongoing Optimization</h3>
                <p className="text-sm text-muted-foreground">We adjust quantities and schedules based on seasonal changes and usage</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-professional-gray rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Benefits of Our Supply Restocking Service
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Clock className="h-6 w-6 text-brand-green mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">Time Savings</h4>
                  <p className="text-muted-foreground">No more shopping trips or emergency runs to restock essential supplies</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <TrendingUp className="h-6 w-6 text-brand-green mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">Cost Efficiency</h4>
                  <p className="text-muted-foreground">Bulk purchasing power and optimized inventory levels reduce overall costs</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-brand-green mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">Never Run Out</h4>
                  <p className="text-muted-foreground">Predictive restocking ensures you never face embarrassing supply shortages</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <RotateCcw className="h-6 w-6 text-brand-green mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">Automated Process</h4>
                  <p className="text-muted-foreground">Set it and forget it - our system handles everything automatically</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supply Categories */}
      <section className="py-20 bg-professional-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Complete Supply Categories
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Restroom Supplies</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Toilet paper</li>
                  <li>• Paper towels</li>
                  <li>• Hand soap</li>
                  <li>• Hand sanitizer</li>
                  <li>• Seat covers</li>
                  <li>• Air fresheners</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Kitchen/Breakroom</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Coffee supplies</li>
                  <li>• Napkins</li>
                  <li>• Dish soap</li>
                  <li>• Paper plates & cups</li>
                  <li>• Utensils</li>
                  <li>• Cleaning supplies</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Office Supplies</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Tissues</li>
                  <li>• Disinfecting wipes</li>
                  <li>• Trash bags</li>
                  <li>• Surface cleaners</li>
                  <li>• First aid supplies</li>
                  <li>• Air fresheners</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <RotateCcw className="h-12 w-12 text-white mr-4" />
            <h2 className="text-3xl lg:text-4xl font-bold">
              Streamline your operations and save time
            </h2>
          </div>
          <p className="text-xl mb-8 opacity-90">
            Let us handle your supply management so you can focus on what matters most - running your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="#quote">Talk to Us About Restocking Solutions</a>
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

export default SupplyRestockingPage;